# Fork Sync Guide

## Overview

This guide explains how to keep your forked repository (`lochan144/KairosCV`) in sync with the original repository (`8harath/KairosCV`).

## Repository Setup

- **Original Repository (Upstream):** https://github.com/8harath/KairosCV
- **Forked Repository (Origin):** https://github.com/lochan144/KairosCV

## Initial Setup (Already Completed)

The upstream remote has been configured to point to the original repository:

```bash
git remote add upstream https://github.com/8harath/KairosCV.git
```

Verify remotes:
```bash
git remote -v
```

Expected output:
```
origin    https://github.com/lochan144/KairosCV (fetch)
origin    https://github.com/lochan144/KairosCV (push)
upstream  https://github.com/8harath/KairosCV.git (fetch)
upstream  https://github.com/8harath/KairosCV.git (push)
```

## How to Sync Your Fork

### Method 1: Sync Specific Branch

To sync your current branch with the latest changes from upstream:

```bash
# 1. Fetch latest changes from upstream
git fetch upstream

# 2. Check what branch you're on
git branch --show-current

# 3. Merge upstream changes into your current branch
# Replace 'main' with the upstream branch you want to sync from
git merge upstream/main

# 4. Push the updated branch to your fork
git push origin <your-branch-name>
```

### Method 2: Sync Main Branch (If You Have One)

If you have a main branch in your fork:

```bash
# 1. Fetch latest changes from upstream
git fetch upstream

# 2. Switch to your main branch
git checkout main

# 3. Merge upstream/main into your main
git merge upstream/main

# 4. Push to your fork
git push origin main
```

### Method 3: Sync via GitHub Web Interface

1. Go to your fork on GitHub: https://github.com/lochan144/KairosCV
2. Click the "Sync fork" button (if available)
3. Click "Update branch" to sync with the upstream repository

## Current State

As of this setup:
- Upstream remote is configured ✅
- Latest changes from upstream have been fetched ✅
- Your fork is currently up-to-date with upstream/main ✅

## Regular Sync Workflow

We recommend syncing your fork regularly (e.g., weekly or before starting new work):

```bash
# Quick sync command (run from any branch)
git fetch upstream && git merge upstream/main
```

Or create an alias for convenience:
```bash
# Add to ~/.gitconfig or run:
git config --global alias.sync-fork '!git fetch upstream && git merge upstream/main'

# Then simply run:
git sync-fork
```

## Handling Merge Conflicts

If you encounter merge conflicts during sync:

```bash
# 1. Git will notify you of conflicts
# 2. Open the conflicted files and resolve conflicts manually
# 3. Mark conflicts as resolved
git add <conflicted-file>

# 4. Complete the merge
git commit

# 5. Push to your fork
git push origin <your-branch-name>
```

## Viewing Available Upstream Branches

To see all branches available in the upstream repository:

```bash
git branch -r | grep upstream
```

Current upstream branches:
- `upstream/main` - Main production branch
- `upstream/bharath-013` - Latest development branch
- `upstream/phase-1` - Phase 1 features
- And many more feature branches

## Syncing Specific Upstream Branches

To sync with a specific upstream branch (e.g., bharath-013):

```bash
# Fetch updates
git fetch upstream

# Create a new local branch tracking upstream branch
git checkout -b bharath-013 upstream/bharath-013

# Or merge into existing branch
git merge upstream/bharath-013

# Push to your fork
git push origin bharath-013
```

## Best Practices

1. **Always fetch before starting new work:**
   ```bash
   git fetch upstream
   ```

2. **Keep your fork's main branch clean:**
   - Don't commit directly to main
   - Use feature branches for development
   - Sync main regularly with upstream

3. **Before creating a pull request:**
   ```bash
   # Ensure your branch is up-to-date
   git fetch upstream
   git merge upstream/main
   # Resolve any conflicts
   # Then push to your fork
   ```

4. **Check for updates weekly:**
   ```bash
   git fetch upstream
   git log HEAD..upstream/main --oneline
   ```
   This shows commits in upstream that you don't have yet.

## Troubleshooting

### Problem: "Refusing to merge unrelated histories"

**Solution:**
```bash
git merge upstream/main --allow-unrelated-histories
```

### Problem: "Your branch is behind upstream/main"

**Solution:**
```bash
git fetch upstream
git merge upstream/main
git push origin <your-branch>
```

### Problem: "Upstream remote not found"

**Solution:**
```bash
# Re-add the upstream remote
git remote add upstream https://github.com/8harath/KairosCV.git
```

### Problem: Force-push needed (use with caution!)

**Only do this if you're sure no one else is using your branch:**
```bash
git fetch upstream
git reset --hard upstream/main
git push origin <branch-name> --force
```

⚠️ **Warning:** Force-pushing will overwrite your branch's history. Only use when necessary and you understand the implications.

## Automated Sync Script

Create a shell script for easy syncing:

```bash
#!/bin/bash
# save as sync-fork.sh

echo "🔄 Syncing fork with upstream..."

# Fetch from upstream
echo "📥 Fetching from upstream..."
git fetch upstream

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📌 Current branch: $CURRENT_BRANCH"

# Merge upstream/main
echo "🔀 Merging upstream/main into $CURRENT_BRANCH..."
git merge upstream/main

# Check if merge was successful
if [ $? -eq 0 ]; then
    echo "✅ Merge successful!"
    
    # Ask user if they want to push
    read -p "📤 Push to origin? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git push origin $CURRENT_BRANCH
        echo "✅ Pushed to origin/$CURRENT_BRANCH"
    fi
else
    echo "❌ Merge conflicts detected. Please resolve manually."
    exit 1
fi

echo "🎉 Sync complete!"
```

Make it executable:
```bash
chmod +x sync-fork.sh
./sync-fork.sh
```

## Quick Reference

| Command | Description |
|---------|-------------|
| `git remote -v` | List all remotes |
| `git fetch upstream` | Download upstream changes |
| `git merge upstream/main` | Merge upstream into current branch |
| `git push origin <branch>` | Push to your fork |
| `git log HEAD..upstream/main` | See what's new in upstream |
| `git branch -r \| grep upstream` | List upstream branches |

## Support

For issues or questions:
- Check the main repository: https://github.com/8harath/KairosCV
- Review this guide
- Contact the repository maintainers

---

**Last Updated:** November 24, 2025
**Status:** Active - Upstream remote configured and synced ✅
