# Fork Sync Quick Reference

## ⚡ Quick Commands

### One-Line Sync
```bash
./sync-fork.sh
```

### Manual Sync
```bash
git fetch upstream && git merge upstream/main && git push origin $(git branch --show-current)
```

### Check for Updates
```bash
git fetch upstream && git log HEAD..upstream/main --oneline
```

### View Configuration
```bash
git remote -v
```

## 📋 What Was Configured

- **Upstream Remote Added:** ✅
  - URL: https://github.com/8harath/KairosCV.git
  - Configured to fetch all branches automatically

- **Files Created:**
  - `FORK_SYNC_GUIDE.md` - Comprehensive sync documentation
  - `sync-fork.sh` - Automated sync script (executable)

- **README Updated:** ✅
  - Added fork sync section
  - Added link to sync guide

## 🎯 Usage Scenarios

### Scenario 1: Regular Sync (Weekly)
```bash
./sync-fork.sh
# Select option 1 (main branch)
# Review changes
# Confirm merge
# Push to your fork
```

### Scenario 2: Sync Before New Feature
```bash
# Ensure you're on your feature branch
git checkout feature/my-feature

# Sync with upstream
git fetch upstream
git merge upstream/main

# Resolve conflicts if any, then push
git push origin feature/my-feature
```

### Scenario 3: Check What's New
```bash
# Fetch updates without merging
git fetch upstream

# See what commits are new
git log HEAD..upstream/main --oneline

# See file changes
git diff HEAD upstream/main --stat
```

### Scenario 4: Sync Different Branch
```bash
# Sync with bharath-013 branch
git fetch upstream
git merge upstream/bharath-013
```

## 🔧 Troubleshooting

### "Already up to date"
✅ Good! Your fork is current. No action needed.

### "Merge conflicts"
1. Open conflicted files
2. Edit to resolve conflicts (look for `<<<<<<<`, `=======`, `>>>>>>>`)
3. `git add <resolved-files>`
4. `git commit`
5. `git push origin <your-branch>`

### "Upstream not found"
```bash
git remote add upstream https://github.com/8harath/KairosCV.git
```

## 📊 Current Status

| Item | Status |
|------|--------|
| Upstream Remote | ✅ Configured |
| Latest Fetch | ✅ Complete |
| Sync Status | ✅ Up to date |
| Documentation | ✅ Complete |
| Automation Script | ✅ Ready |

## 🔗 More Information

- Full Guide: [FORK_SYNC_GUIDE.md](FORK_SYNC_GUIDE.md)
- Contributing: [README.md](README.md#contributing)
- Original Repo: https://github.com/8harath/KairosCV
- Your Fork: https://github.com/lochan144/KairosCV

---

**Last Updated:** November 24, 2025
**Upstream:** 8harath/KairosCV
**Fork:** lochan144/KairosCV
