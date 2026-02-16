// Vibe Coding 知识库 (原 Ai Agent)
export const vibeCoding = [
  {
    id: 'intro',
    title: '什么是 Vibe Coding?',
    description: 'Vibe Coding (氛围编码) 是一种全新的编程范式，核心理念是“通过自然语言与 AI 协作，以流畅的心流状态构建软件”。\n\n在这个模式下，开发者不再是单纯的“代码录入员”，而是“产品经理 + 架构师 + 验收员”。你负责提供 Vibe (氛围/意图/审美)，AI 负责 Implementation (实现/细节/调试)。',
    category: '核心理念',
    tags: ['理念', '心流']
  },
  {
    id: 'manifesto',
    title: 'Vibe Coding 宣言',
    description: '1. Code is Cheap, Vibe is Expensive: 代码实现越来越廉价，但独特的创意、审美和用户体验设计越来越珍贵。\n2. AI is the Junior, You are the Senior: 把 AI 当作一个不知疲倦、精通所有语言但偶尔会犯傻的初级程序员。你要做的是 Review 和 Guide。\n3. Iterate Fast, Fail Faster: 快速生成原型，快速验证想法，快速抛弃不好的设计。\n4. Human in the Loop: AI 负责繁琐，人类负责灵魂。',
    category: '核心理念',
    tags: ['原则']
  },
  {
    id: 'tool-comparison-header',
    title: 'AI 编辑器深度对比',
    description: '当前市面上主流的 AI 编程工具对比。选择适合你的“副驾驶”。',
    category: '工具生态',
    isHeader: true
  },
  {
    id: 'cursor',
    title: 'Cursor',
    description: '目前体验最好的 AI 原生编辑器 (VS Code Fork)。\n\n核心功能：\n- Composer: 多文件同时编辑，能够理解整个项目上下文。\n- Tab: 极其强大的代码预测和补全。\n- Codebase Indexing: 本地索引代码库，回答问题非常准确。\n\n优点：体验最流畅，模型支持全 (Claude 3.5, GPT-4o)，社区活跃。\n缺点：收费 ($20/mo)，重度依赖网络。',
    category: '工具生态',
    tags: ['编辑器', '强推', '收费']
  },
  {
    id: 'trae',
    title: 'Trae',
    description: '字节跳动推出的 AI IDE，目前的一匹黑马。\n\n核心功能：\n- Native Design: 界面设计简洁现代。\n- 免费使用: 目前提供免费的 Claude 3.5 Sonnet 和 GPT-4o 访问权限。\n- Context Awareness: 优秀的上下文理解能力。\n\n优点：完全免费 (目前)，中文支持好，速度快。\n缺点：插件生态稍弱于 VS Code 原生，功能还在快速迭代中。',
    category: '工具生态',
    tags: ['编辑器', '免费', '黑马']
  },
  {
    id: 'windsurf',
    title: 'Windsurf',
    description: 'Codeium 团队推出的 AI 编辑器，主打“Flow”体验。\n\n核心功能：\n- Flows: 能够感知你的下一步操作并主动提供帮助。\n- Cascade: 深度集成的 AI 助手，不仅读代码，还能理解终端输出和工具链。\n\n优点：对上下文的理解非常深，特别是对运行时错误和终端日志的分析。\n缺点：UI 交互逻辑与传统 VS Code 有些许差异，需要适应。',
    category: '工具生态',
    tags: ['编辑器', '深度集成']
  },
  {
    id: 'cline',
    title: 'Cline (原 Claude Dev) / Roo Code',
    description: 'VS Code 开源插件，允许你 "Bring Your Own Key" (BYOK)。\n\n核心功能：\n- MCP Support: 支持 Model Context Protocol，可以连接本地工具和数据库。\n- Terminal Access: 可以直接执行终端命令 (需授权)。\n- Open Source: 代码完全开源，安全可控。\n\n优点：按量付费 (使用 API Key)，成本可控；支持多种模型 (DeepSeek, Claude, OpenAI)。\n缺点：交互体验不如原生 AI 编辑器丝滑。',
    category: '工具生态',
    tags: ['VSCode插件', '开源', 'BYOK']
  },
  {
    id: 'web-generators',
    title: 'Web 生成类工具',
    description: '适合快速生成 UI 原型和前端组件。\n\n1. v0.dev (Vercel): 生成 React + Tailwind 组件的神器，支持迭代修改。\n2. Bolt.new: 可以在浏览器中运行的全栈开发环境，一句话生成整个 Web App。\n3. Lovable: 类似 v0，但在视觉设计上更有“氛围感”。',
    category: '工具生态',
    tags: ['UI生成', '原型']
  },
  {
    id: 'skills',
    title: 'Vibe Coder 技能树迁移',
    description: '在 AI 时代，程序员的核心竞争力正在发生转移：\n\n⬇️ 降权 (Let AI do it)：\n- 记忆 API 参数和语法细节\n- 手写样板代码 (Boilerplate)\n- 配置 Webpack/TSConfig\n\n⬆️ 增权 (You must master)：\n- Prompt Engineering: 清晰、结构化地描述需求。\n- System Design: 定义模块边界和数据流向。\n- Code Review: 快速识别 AI 生成代码中的逻辑漏洞。\n- Debugging: 当 AI 搞不定时，你需要有能力接手排查。',
    category: '技能树',
    tags: ['成长']
  },
  {
    id: 'workflow',
    title: '最佳实践工作流',
    description: '1. Context First: 在提问前，先通过 `@Files` 或 `@Symbols` 把相关代码喂给 AI。\n2. Small Batches: 不要让 AI 一次写完整个功能。拆分成 "Define Interface" -> "Implement Logic" -> "Add Tests" 三步走。\n3. Rule Based: 配置 `.cursorrules` 或 `.traerules`，告诉 AI 你的编码偏好 (如 "Use Arrow Functions", "No Any Type")。\n4. Commit Often: AI 生成的代码可能含有隐蔽 Bug，小步提交方便回滚。',
    category: '实战指南',
    tags: ['方法论']
  }
];
