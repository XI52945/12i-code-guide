export const gitIntro = {
  title: 'Git 版本控制',
  desc: 'Git 是一个免费开源的分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有内容。',
  keyFeatures: ['分布式开发', '非线性开发模式', '高效的数据处理', '数据完整性保护', '强大的分支管理']
};

export const git = [
  // 初始化与配置 Setup & Config
  { command: 'git init', description: '初始化仓库。', example: '在当前目录创建一个 .git 子目录。' },
  { command: 'git config', description: '配置 Git。', example: 'git config --global user.name "John Doe" (设置用户名)' },
  { command: 'git clone', description: '克隆仓库。', example: 'git clone https://github.com/user/repo.git (下载代码)' },
  { command: 'git config --global alias', description: '设置别名。', example: 'git config --global alias.co checkout (用 git co 代替 checkout)' },

  // 基本操作 Basic Snapshotting
  { command: 'git status', description: '查看状态。', example: '显示哪些文件已修改、暂存。' },
  { command: 'git add', description: '添加到暂存区。', example: 'git add . (添加所有更改)' },
  { command: 'git commit', description: '提交更改。', example: 'git commit -m "feat: add login" (带消息提交)' },
  { command: 'git commit --amend', description: '修改最近一次提交。', example: '修改提交信息或追加文件到上一次提交。' },
  { command: 'git reset', description: '重置当前 HEAD 到指定状态。', example: 'git reset --soft HEAD~1 (撤销提交但保留更改)' },
  { command: 'git reset --hard', description: '强制重置工作区和索引。', example: 'git reset --hard HEAD (丢弃所有未提交更改)' },
  { command: 'git rm', description: '从工作区和索引中删除文件。', example: 'git rm file.txt' },
  { command: 'git rm --cached', description: '仅从索引中删除文件（保留工作区文件）。', example: '不再跟踪 file.txt，但保留在硬盘上。' },
  { command: 'git mv', description: '移动或重命名文件。', example: 'git mv old.txt new.txt' },
  { command: 'git diff', description: '查看工作区与暂存区的差异。', example: 'git diff' },
  { command: 'git diff --staged', description: '查看暂存区与最新提交的差异。', example: 'git diff --cached (同义词)' },
  { command: 'git clean', description: '删除未跟踪的文件。', example: 'git clean -fd (强制删除未跟踪的文件和目录)' },
  { command: 'git restore', description: '恢复工作区文件（新命令）。', example: 'git restore file.txt (丢弃工作区更改)' },

  // 分支与合并 Branching & Merging
  { command: 'git branch', description: '列出、创建或删除分支。', example: 'git branch -a (列出所有分支), git branch -d dev (删除分支)' },
  { command: 'git checkout', description: '切换分支或恢复工作树文件。', example: 'git checkout dev (切换到 dev 分支), git checkout -b new (创建并切换)' },
  { command: 'git switch', description: '切换分支（新命令）。', example: 'git switch -c new-feature (创建并切换)' },
  { command: 'git merge', description: '合并分支。', example: 'git merge feature (将 feature 合并到当前分支)' },
  { command: 'git merge --abort', description: '中止合并。', example: '当遇到冲突不想解决时，回到合并前状态。' },
  { command: 'git rebase', description: '变基操作。', example: 'git rebase main (将当前分支变基到 main 分支，线性历史)' },
  { command: 'git rebase -i', description: '交互式变基。', example: 'git rebase -i HEAD~3 (合并、修改最近3个提交)' },
  { command: 'git tag', description: '创建、列出、删除或验证标签对象。', example: 'git tag v1.0.0 (打标签)' },

  // 远程操作 Sharing & Updating
  { command: 'git remote', description: '管理跟踪的远程仓库。', example: 'git remote -v (查看远程地址), git remote add origin <url>' },
  { command: 'git fetch', description: '从另一个仓库下载对象和引用。', example: 'git fetch origin (获取远程更新但不合并)' },
  { command: 'git fetch --prune', description: '获取更新并清理远程已删除的分支。', example: '保持本地远程分支列表整洁。' },
  { command: 'git pull', description: '获取并整合另一个仓库或本地分支。', example: 'git pull origin main (拉取并合并)' },
  { command: 'git pull --rebase', description: '拉取并变基。', example: '避免产生不必要的合并提交。' },
  { command: 'git push', description: '更新远程引用及相关对象。', example: 'git push -u origin feature (推送到远程并跟踪)' },
  { command: 'git push --force', description: '强制推送。', example: 'git push -f (覆盖远程历史，慎用！)' },
  { command: 'git push --delete', description: '删除远程分支。', example: 'git push origin --delete feature' },

  // 检查与比较 Inspection & Comparison
  { command: 'git log', description: '显示提交日志。', example: 'git log --oneline --graph --all (图形化显示所有分支)' },
  { command: 'git show', description: '显示各种类型的对象。', example: 'git show HEAD (查看最新提交详情)' },
  { command: 'git blame', description: '显示每一行最后修改的提交信息。', example: 'git blame file.js (谁写了这行代码？)' },
  { command: 'git grep', description: '在跟踪的文件中搜索文本。', example: 'git grep "TODO" (比 grep 更快)' },
  { command: 'git stash', description: '暂存当前更改。', example: 'git stash push -m "wip" (保存现场), git stash pop (恢复现场)' },
  { command: 'git stash list', description: '列出所有暂存的更改。', example: '' },
  { command: 'git ls-files', description: '显示索引和工作树中的文件信息。', example: '查看 Git 跟踪了哪些文件。' },

  // 进阶 Advanced
  { command: 'git cherry-pick', description: '应用现有提交引入的更改。', example: 'git cherry-pick <commit-hash> (只取某个提交)' },
  { command: 'git bisect', description: '通过二分查找定位引入 bug 的提交。', example: 'git bisect start, git bisect bad, git bisect good' },
  { command: 'git reflog', description: '引用日志，记录 HEAD 的移动轨迹。', example: '找回误删的分支或重置的提交（救命稻草）。' },
  { command: 'git revert', description: '撤销某个提交。', example: 'git revert <commit-hash> (生成一个新的提交来抵消旧提交)' },
  { command: 'git submodule', description: '子模块管理。', example: 'git submodule add <url> (添加子仓库)' },
  { command: 'git worktree', description: '管理多个工作树。', example: 'git worktree add ../new-feature (在另一个目录检出分支，无需切换)' },
  { command: 'git archive', description: '从命名树创建文件归档。', example: 'git archive -o latest.zip HEAD (打包当前代码)' }
];
