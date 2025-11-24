#!/bin/bash

# KairosCV Fork Sync Script
# Syncs your fork with the upstream repository

set -e  # Exit on error

echo "🔄 KairosCV Fork Sync Utility"
echo "================================"
echo ""

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if upstream remote exists
if ! git remote | grep -q "^upstream$"; then
    echo "⚠️  Upstream remote not found. Adding it now..."
    git remote add upstream https://github.com/8harath/KairosCV.git
    echo "✅ Upstream remote added"
fi

# Fetch from upstream
echo "📥 Fetching from upstream repository..."
git fetch upstream

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📌 Current branch: $CURRENT_BRANCH"
echo ""

# Ask which upstream branch to sync from
echo "Which upstream branch would you like to sync from?"
echo "  1) main (default - recommended)"
echo "  2) bharath-013 (latest development)"
echo "  3) Other (specify)"
read -p "Enter choice [1-3] (default: 1): " choice

case $choice in
    2)
        UPSTREAM_BRANCH="bharath-013"
        ;;
    3)
        read -p "Enter upstream branch name: " UPSTREAM_BRANCH
        ;;
    *)
        UPSTREAM_BRANCH="main"
        ;;
esac

echo ""
echo "🔀 Syncing with upstream/$UPSTREAM_BRANCH..."

# Check if upstream branch exists
if ! git rev-parse --verify upstream/$UPSTREAM_BRANCH > /dev/null 2>&1; then
    echo "❌ Error: upstream/$UPSTREAM_BRANCH does not exist"
    echo "Available upstream branches:"
    git branch -r | grep upstream
    exit 1
fi

# Show what commits will be merged
echo ""
echo "📊 New commits in upstream/$UPSTREAM_BRANCH:"
git log HEAD..upstream/$UPSTREAM_BRANCH --oneline | head -10
echo ""

# Ask for confirmation
read -p "Proceed with merge? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Sync cancelled"
    exit 0
fi

# Perform the merge
echo "🔀 Merging upstream/$UPSTREAM_BRANCH into $CURRENT_BRANCH..."
if git merge upstream/$UPSTREAM_BRANCH; then
    echo "✅ Merge successful!"
    echo ""
    
    # Ask if user wants to push
    read -p "📤 Push changes to origin/$CURRENT_BRANCH? (y/n): " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📤 Pushing to origin/$CURRENT_BRANCH..."
        git push origin $CURRENT_BRANCH
        echo "✅ Pushed to origin/$CURRENT_BRANCH"
    else
        echo "⏭️  Skipped push. Run 'git push origin $CURRENT_BRANCH' when ready."
    fi
else
    echo "❌ Merge conflicts detected!"
    echo ""
    echo "Please resolve conflicts manually:"
    echo "  1. Edit conflicted files"
    echo "  2. git add <resolved-files>"
    echo "  3. git commit"
    echo "  4. git push origin $CURRENT_BRANCH"
    exit 1
fi

echo ""
echo "🎉 Sync complete!"
echo ""
echo "Summary:"
echo "  - Synced from: upstream/$UPSTREAM_BRANCH"
echo "  - Current branch: $CURRENT_BRANCH"
echo "  - Status: Up to date with upstream"
