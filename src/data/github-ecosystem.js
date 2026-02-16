export const githubEcosystem = [
  {
    id: 'intro',
    title: 'GitHub 是什么?',
    description: 'GitHub 是全球最大的开源代码托管平台，被戏称为“程序员的 Facebook”或“最大的同性交友网站”。\n\n对于小白来说，它有三个核心作用：\n1. 代码网盘：免费存储你的代码，支持版本控制。\n2. 开源宝库：全世界最优秀的代码（Linux, React, VS Code）都在这。\n3. 程序员简历：一个绿点丰富（提交记录多）的 GitHub 主页是求职的硬通货。\n\n如果你是学生，搜索“GitHub Student Pack”申请学生包，可免费获得 Copilot、JetBrains 全家桶等价值数千美元的工具。',
    category: '新手入门',
    tags: ['基础', '必读', '学生福利']
  },
  {
    id: 'basic-terms',
    title: '核心术语速解',
    description: '逛 GitHub 必须懂的“黑话”：\n\n- Repository (仓库)：你的项目文件夹。\n- Star (标星)：类似于“点赞”或“收藏”，表示认可。\n- Fork (分叉)：把别人的仓库复制一份到你的账号下，你可以随意修改。\n- Pull Request (PR)：你修改了 Fork 的代码，想合并回原作者的仓库，就发起一个 PR（请求合并）。\n- Issue (议题)：用来提 Bug、建议新功能或讨论问题的地方。\n- Watch (关注)：关注仓库动态，有更新会发邮件通知。',
    category: '新手入门',
    tags: ['术语', '基础']
  },
  {
    id: 'workflow',
    title: '标准开源工作流',
    description: '如何参与开源项目？\n\n1. Fork: 将目标仓库 Fork 到自己账号。\n2. Clone: 将代码下载到本地电脑。\n3. Code: 修改代码，修复 Bug 或添加功能。\n4. Push: 将修改提交到自己的远程仓库。\n5. Pull Request: 向原作者发起合并请求。\n\n🎉 如果作者接受了你的 PR，你就成为了一名 Contributor (贡献者)！',
    category: '进阶指南',
    tags: ['流程', '开源']
  },
  {
    id: 'vercel-integration',
    title: '神器：Vercel + GitHub',
    description: '前端开发者的最强搭档。Vercel 是一个云端部署平台。\n\n核心魔法：\n1. 自动化部署：只要你把代码 Push 到 GitHub，Vercel 会自动检测并开始构建部署。\n2. Preview Deployments (预览部署)：每当你发起一个 PR，Vercel 会自动生成一个独立的预览链接。你可以直接把链接发给同事或老板查看效果，而不需要合并代码。\n3. 免费：对个人开发者非常慷慨，包含 HTTPS、CDN 等功能。',
    category: '生态协同',
    tags: ['部署', 'Vercel', '预览']
  },
  {
    id: 'github-actions',
    title: '自动化：GitHub Actions',
    description: 'GitHub 内置的 CI/CD（持续集成/持续部署）工具。\n\n它能做什么？\n- 自动测试：每次提交代码，自动运行测试脚本，防止 Bug。\n- 自动发布：打 Tag 后自动打包发布 Release。\n- 定时任务：比如每天早上 8 点自动爬取天气并推送到微信。\n\n配置简单，只需要在 .github/workflows 目录下写一个 YAML 文件即可。',
    category: '生态协同',
    tags: ['自动化', 'CI/CD']
  },
  {
    id: 'github-pages',
    title: '免费建站：GitHub Pages',
    description: 'GitHub 提供的免费静态网站托管服务。\n\n适用场景：\n- 个人博客 (配合 Hexo, Hugo, Jekyll)。\n- 项目文档网站。\n- 简单的个人简历页面。\n\n只需要在仓库设置里开启 Pages 功能，你的 HTML/Markdown 文件就会变成一个全球可访问的网站 (username.github.io)。',
    category: '生态协同',
    tags: ['建站', '免费']
  },
  {
    id: 'browser-extensions',
    title: '必备浏览器插件',
    description: '安装这些插件，让 GitHub 体验提升 10 倍：\n\n1. Octotree (强烈推荐)：在浏览器左侧显示代码树状结构，像在 IDE 里一样浏览文件，不用点进点出。\n2. Refined GitHub：GitHub 员工都在用的插件。修复了 GitHub 的很多小痛点，增加了几百个实用小功能（如一键复制代码、显示空格差异等）。\n3. Sourcegraph：提供强大的跨仓库代码搜索和定义跳转功能。',
    category: '效率工具',
    tags: ['插件', 'Chrome', '效率']
  },
  {
    id: 'markdown-magic',
    title: 'README 的艺术',
    description: '项目的门面。一个好的 README.md 能让 Star 数翻倍。\n\n高分要素：\n- Badges (徽章)：使用 Shields.io 生成构建状态、版本号、下载量等徽章。\n- Logo & Demo：放一张高清 Logo 和动态 GIF 演示图。\n- Quick Start：最简单的运行命令 (npm install && npm start)。\n- Profile README：创建一个与你用户名同名的仓库，它的 README 会展示在你的个人主页顶部，可以用来展示自我介绍、技能栈或动态。',
    category: '进阶指南',
    tags: ['文档', '美化']
  },
  {
    id: 'codespaces',
    title: '云端 IDE：Codespaces',
    description: 'GitHub 官方提供的云端开发环境。\n\n特点：\n- 点击仓库页面的 <> Code -> Codespaces，直接在浏览器里打开一个 VS Code。\n- 环境都配好了，不需要在本地装 Node/Python/Docker。\n- 适合临时修 Bug 或在 iPad 上写代码。',
    category: '核心功能',
    tags: ['IDE', '云开发']
  }
];
