# Fork Sync - Practical Example

This document shows a practical example of how the fork synchronization works.

## Current Setup

```
Forked Repository (Origin):  lochan144/KairosCV
Original Repository (Upstream): 8harath/KairosCV

Current Branch: copilot/update-from-original-repo
```

## Example: Daily Workflow

### Morning: Start Your Work Day

```bash
# 1. Check your current status
git status

# 2. Fetch latest updates from upstream
git fetch upstream

# 3. Check if there are new commits
git log HEAD..upstream/main --oneline

# Output (if updates exist):
# 3bd3320 feat: enhance desktop UI with improved header layout
# 2a1b4c5 fix: resolve PDF parsing issue
# 7e9f2a3 docs: update installation guide
```

### If Updates Exist: Sync Your Fork

```bash
# Option A: Use the automated script
./sync-fork.sh
# Select: 1 (main branch)
# Review the changes
# Confirm: y
# Push: y

# Option B: Manual sync
git fetch upstream
git merge upstream/main
# Review and resolve any conflicts if they appear
git push origin copilot/update-from-original-repo
```

### After Syncing: Continue Your Work

```bash
# Now your branch is up-to-date
# Continue developing your feature
git status
# Output: "Your branch is up to date with 'origin/copilot/update-from-original-repo'"
```

## Example: Before Creating a Pull Request

Always sync before submitting a PR to ensure compatibility:

```bash
# 1. Switch to your feature branch (if not already there)
git checkout feature/my-new-feature

# 2. Sync with upstream
./sync-fork.sh

# 3. Run tests to ensure nothing broke
pnpm test

# 4. Push to your fork
git push origin feature/my-new-feature

# 5. Now create your Pull Request on GitHub
```

## Example: Weekly Maintenance

```bash
# Every Monday morning (or your preferred schedule):

# 1. Fetch all updates
git fetch upstream

# 2. Check all branches for updates
for branch in main bharath-013 phase-1; do
  echo "Checking upstream/$branch..."
  git log HEAD..upstream/$branch --oneline | head -5
done

# 3. Sync your main development branch
git checkout copilot/update-from-original-repo
./sync-fork.sh
```

## Example: Handling Merge Conflicts

```bash
# Scenario: You've made changes to the same file as upstream

$ git merge upstream/main
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.

# Step 1: See which files have conflicts
$ git status
On branch copilot/update-from-original-repo
You have unmerged paths.

Unmerged paths:
  both modified:   README.md

# Step 2: Open README.md and look for:
<<<<<<< HEAD
Your changes here
=======
Upstream changes here
>>>>>>> upstream/main

# Step 3: Edit the file to resolve conflicts
# Keep both changes, or choose one, or merge them manually

# Step 4: Mark as resolved
$ git add README.md

# Step 5: Complete the merge
$ git commit -m "Merge upstream/main and resolve conflicts"

# Step 6: Push to your fork
$ git push origin copilot/update-from-original-repo
```

## Example: Syncing a Specific Upstream Branch

```bash
# Scenario: You want to work with upstream's bharath-013 branch

# 1. Fetch updates
git fetch upstream

# 2. Create a new local branch from upstream branch
git checkout -b local-bharath-013 upstream/bharath-013

# 3. Or merge into existing branch
git checkout your-branch
git merge upstream/bharath-013

# 4. Push to your fork (creates new branch if needed)
git push origin local-bharath-013
```

## Example: Quick Health Check

Use this command to quickly check your sync status:

```bash
# One-liner status check
git fetch upstream && \
echo "=== Your Branch ===" && \
git log --oneline -5 && \
echo -e "\n=== Upstream/main ===" && \
git log upstream/main --oneline -5 && \
echo -e "\n=== Behind by ===" && \
git log HEAD..upstream/main --oneline | wc -l && \
echo "commits"
```

## Example Script Output

When you run `./sync-fork.sh`, here's what you'll see:

```
🔄 KairosCV Fork Sync Utility
================================

📥 Fetching from upstream repository...
📌 Current branch: copilot/update-from-original-repo

Which upstream branch would you like to sync from?
  1) main (default - recommended)
  2) bharath-013 (latest development)
  3) Other (specify)
Enter choice [1-3] (default: 1): 1

🔀 Syncing with upstream/main...

📊 New commits in upstream/main:
3bd3320 feat: enhance desktop UI with improved header layout

Proceed with merge? (y/n): y

🔀 Merging upstream/main into copilot/update-from-original-repo...
Updating ae58d59..3bd3320
Fast-forward
 README.md | 5 +++++
 1 file changed, 5 insertions(+)
✅ Merge successful!

📤 Push changes to origin/copilot/update-from-original-repo? (y/n): y

📤 Pushing to origin/copilot/update-from-original-repo...
✅ Pushed to origin/copilot/update-from-original-repo

🎉 Sync complete!

Summary:
  - Synced from: upstream/main
  - Current branch: copilot/update-from-original-repo
  - Status: Up to date with upstream
```

## Troubleshooting Examples

### "Already up to date"

```bash
$ ./sync-fork.sh
...
📊 New commits in upstream/main:

Proceed with merge? (y/n): y
🔀 Merging upstream/main into copilot/update-from-original-repo...
Already up to date.
✅ Merge successful!
```

**This is good!** It means your fork is current. No action needed.

### "Permission denied"

```bash
$ ./sync-fork.sh
bash: ./sync-fork.sh: Permission denied
```

**Fix:**
```bash
chmod +x sync-fork.sh
./sync-fork.sh
```

### "Upstream not found"

```bash
$ git fetch upstream
fatal: 'upstream' does not appear to be a git repository
```

**Fix:**
```bash
git remote add upstream https://github.com/8harath/KairosCV.git
```

## Tips for Success

1. **Sync before you start working** each day
2. **Sync before creating a pull request**
3. **Run tests after syncing** to catch any issues early
4. **Commit your work** before syncing to avoid losing changes
5. **Use branches** for features, keep main clean

## More Information

- Full Guide: [FORK_SYNC_GUIDE.md](FORK_SYNC_GUIDE.md)
- Quick Reference: [FORK_SYNC_QUICKREF.md](FORK_SYNC_QUICKREF.md)
- Contributing: [README.md](README.md#contributing)

---

**Remember:** Regular syncing keeps your fork healthy and makes collaboration easier! 🚀
