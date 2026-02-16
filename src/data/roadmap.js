export const roadmap = {
  id: 'root',
  title: '全栈开发导图 (Roadmap)',
  description: '从入门到全栈工程师的终极学习路径',
  offlineData: {
    text: '全栈工程师（Full-stack Engineer）是指具备多种软件开发技能，能够独立完成从前端用户界面到后端服务器逻辑、数据库设计以及部署运维等全流程工作的开发者。全栈工程师并不意味着必须在所有领域都达到顶尖专家的水平，而是指其拥有的知识广度和深度足以构建一个完整的应用程序。\n\n全栈开发的核心优势在于全局视野。他们理解各个组件之间是如何交互的，能够快速定位跨层级的问题，并在设计阶段就考虑到前后端的协作与性能优化。随着技术栈的不断演进，现代全栈工程师通常需要掌握至少一门前端框架（如 React, Vue）、一门后端语言（如 Node.js, Python, Go）、数据库管理（SQL/NoSQL）以及基础的 DevOps 技能（Git, Docker, CI/CD）。'
  },
  children: [
    // --- 前端 Frontend ---
    {
      id: 'frontend',
      title: '前端 (Frontend)',
      description: '用户能看到和交互的部分',
      offlineData: {
        text: '前端开发（Front-end Web Development）致力于构建用户在浏览器或移动设备中直接交互的界面。它不仅关乎视觉美感，更涉及用户体验（UX）、交互逻辑、性能优化和跨平台兼容性。\n\n现代前端开发已经从简单的静态页面制作演变为复杂的单页应用（SPA）构建。开发者需要处理路由管理、状态管理、组件化开发、服务端渲染（SSR）以及与后端 API 的高效通信。'
      },
      children: [
        {
          id: 'frontend-basics',
          title: '基础三剑客',
          description: 'HTML, CSS, JavaScript',
          children: [
            {
              id: 'html',
              title: 'HTML5',
              description: '网页结构',
              details: '语义化标签, SEO优化, Accessibility (无障碍), Canvas/SVG, LocalStorage, Web Workers。',
              offlineData: { text: 'HTML5 是构建 Web 页面的基石，定义了内容的结构和语义。' }
            },
            {
              id: 'css',
              title: 'CSS3',
              description: '网页样式',
              details: 'Flexbox, Grid布局, 响应式设计 (Media Queries), 动画 (Keyframes), CSS变量, 伪类与伪元素。',
              offlineData: { text: 'CSS3 负责页面的视觉表现，Flexbox 和 Grid 彻底改变了布局方式。' }
            },
            {
              id: 'js',
              title: 'JavaScript (ES6+)',
              description: '网页逻辑',
              details: 'DOM操作, 闭包, 原型链, 异步编程 (Promise/Async/Await), ES6模块化, 箭头函数, Proxy/Reflect。',
              offlineData: { text: 'JavaScript 是 Web 的编程语言，负责处理用户交互和动态内容。' }
            }
          ]
        },
        {
          id: 'frontend-frameworks',
          title: '现代框架',
          description: '组件化开发',
          children: [
            { 
              id: 'react-eco', 
              title: 'React 生态', 
              description: '全球最流行的库', 
              children: [
                { id: 'react-core', title: 'React 核心', details: 'JSX, Hooks (useState, useEffect, useContext), Virtual DOM, Portals, Suspense。' },
                { id: 'nextjs', title: 'Next.js', details: '服务端渲染 (SSR), 静态生成 (SSG), ISR, App Router, API Routes。' },
                { id: 'redux', title: '状态管理', details: 'Redux Toolkit, Zustand, Recoil, Jotai, TanStack Query (React Query)。' },
                { id: 'react-router', title: '路由', details: 'React Router v6, 动态路由, 嵌套路由, Loader/Action。' }
              ]
            },
            { 
              id: 'vue-eco', 
              title: 'Vue 生态', 
              description: '渐进式框架', 
              children: [
                { id: 'vue-core', title: 'Vue 3', details: 'Options API vs Composition API, 响应式原理 (Proxy), 指令, Teleport。' },
                { id: 'nuxt', title: 'Nuxt.js', details: 'Vue 的 SSR 框架，自动路由，模块化，Nitro 引擎。' },
                { id: 'pinia', title: 'Pinia', details: 'Vue 官方推荐的状态管理库，替代 Vuex。' }
              ]
            },
            {
              id: 'angular',
              title: 'Angular',
              description: '企业级框架',
              details: 'TypeScript, Dependency Injection, RxJS, NgModules, Zone.js。'
            },
            {
              id: 'svelte',
              title: 'Svelte',
              description: '无虚拟DOM',
              details: '编译时优化, SvelteKit, 极简语法, 真正响应式。'
            }
          ]
        },
        {
          id: 'frontend-engineering',
          title: '前端工程化',
          description: '构建与工具',
          children: [
            { id: 'bundlers', title: '构建工具', details: 'Webpack (Loader/Plugin), Vite (ESBuild/Rollup), Turbopack, Parcel。' },
            { id: 'typescript', title: 'TypeScript', details: '静态类型检查，接口 (Interface)，泛型 (Generics)，装饰器, Utility Types。' },
            { id: 'package-manager', title: '包管理', details: 'npm, yarn, pnpm (硬链接/符号链接), monorepo (Turborepo/Nx)。' },
            { id: 'linting', title: '代码规范', details: 'ESLint, Prettier, Husky (Git Hooks), Commitlint。' }
          ]
        },
        {
          id: 'frontend-advanced',
          title: '进阶话题',
          description: '性能与质量',
          children: [
            { id: 'testing', title: '测试', details: 'Jest (单元测试), React Testing Library, Cypress/Playwright (E2E), Vitest。' },
            { id: 'performance', title: '性能优化', details: 'Lighthouse, Web Vitals (LCP/FID/CLS), 懒加载, 代码分割, 浏览器缓存, CDN。' },
            { id: 'accessibility', title: '无障碍 (a11y)', details: 'ARIA 属性, 键盘导航, 屏幕阅读器支持, 对比度。' },
            { id: 'wasm', title: 'WebAssembly', details: 'Rust/C++ 编译到 Wasm, 高性能计算, ffmpeg.wasm。' }
          ]
        }
      ]
    },

    // --- 后端 Backend ---
    {
      id: 'backend',
      title: '后端 (Backend)',
      description: '服务器、数据库与API',
      offlineData: {
        text: '后端开发负责应用程序的“大脑”和“记忆”。它处理业务逻辑、数据库交互、用户认证、API 接口设计以及服务器性能优化。'
      },
      children: [
        {
          id: 'backend-lang',
          title: '后端语言',
          description: '服务端逻辑',
          children: [
            { id: 'nodejs', title: 'Node.js', details: 'Event Loop, Express, NestJS (IoC/DI), Koa, Fastify, PM2, Microservices。全栈首选。' },
            { id: 'python-backend', title: 'Python', details: 'Django (ORM/Admin/DRF), FastAPI (Pydantic/Async), Flask, Celery (异步任务)。AI/数据科学首选。' },
            { id: 'java-backend', title: 'Java', details: 'Spring Boot (AutoConfig), Spring Cloud (Netflix/Alibaba), MyBatis/JPA, JVM (GC/Memory), Maven/Gradle。大型企业首选。' },
            { id: 'go-backend', title: 'Go (Golang)', details: 'Gin, Echo, GORM, Goroutines, Channels, gRPC, Protobuf, Wire (DI)。高并发微服务首选。' },
            { id: 'rust-backend', title: 'Rust', details: 'Actix-web, Axum, Tokio (Async Runtime), Diesel/SeaORM, 内存安全, 零成本抽象。高性能系统首选。' },
            { id: 'csharp-backend', title: 'C# / .NET', details: 'ASP.NET Core, Entity Framework Core, LINQ, Blazor, NuGet。微软生态首选。' }
          ]
        },
        {
          id: 'databases',
          title: '数据库',
          description: '数据存储',
          children: [
            { id: 'sql', title: '关系型 (SQL)', details: 'MySQL (InnoDB/MyISAM), PostgreSQL (MVCC/JSONB), SQLite, SQL Server, Oracle。事务 (ACID), 索引 (B+Tree/Hash), JOIN, 存储过程, 视图。' },
            { id: 'nosql', title: '非关系型 (NoSQL)', details: 'MongoDB (Document/BSON), Redis (Cache/PubSub/Stream), Cassandra (Column), Neo4j (Graph), Elasticsearch (Search/Log)。' },
            { id: 'db-design', title: '数据库设计', details: '范式理论 (1NF-3NF), 反范式, 分库分表 (Sharding/Partitioning), 读写分离, CAP 定理, BASE 理论。' },
            { id: 'newsql', title: 'NewSQL', details: 'TiDB, CockroachDB, Spanner。兼具 SQL 的 ACID 和 NoSQL 的扩展性。' }
          ]
        },
        {
          id: 'backend-arch',
          title: '后端架构',
          description: '系统设计',
          children: [
            { id: 'api-style', title: 'API 风格', details: 'RESTful (Resource/Status Code), GraphQL (Query/Mutation/Schema), gRPC (Protobuf/HTTP2), WebSockets (Real-time), Webhooks。' },
            { id: 'microservices', title: '微服务', details: '服务拆分 (DDD), 服务发现 (Consul/Nacos), API Gateway (Kong/Zuul), 熔断降级 (Sentinel/Hystrix), 链路追踪 (SkyWalking/Zipkin), 配置中心 (Apollo)。' },
            { id: 'mq', title: '消息队列', details: 'RabbitMQ (Exchange/Queue), Kafka (Topic/Partition/Broker), RocketMQ, ActiveMQ。解耦, 削峰填谷, 异步处理。' },
            { id: 'auth', title: '认证与授权', details: 'JWT (Stateless), OAuth2.0 (Authorization Code/Implicit), OIDC, SSO (CAS/SAML), RBAC/ABAC, Session/Cookie。' },
            { id: 'distributed', title: '分布式系统', details: '分布式锁 (Redis/Zookeeper), 分布式事务 (TCC/Saga/Seata), 一致性算法 (Raft/Paxos), Id 生成 (Snowflake)。' }
          ]
        }
      ]
    },

    // --- 计算机基础 CS Fundamentals ---
    {
      id: 'cs-basics',
      title: '计算机基础 (CS)',
      description: '内功心法',
      children: [
        {
          id: 'algo',
          title: '数据结构与算法',
          description: '编程的核心',
          children: [
            { id: 'ds', title: '数据结构', details: '数组, 链表, 栈, 队列, 哈希表, 二叉树 (BST/AVL/Red-Black), 堆 (Binary Heap), 图 (Adj List/Matrix), 并查集, 字典树, 跳表, 布隆过滤器。' },
            { id: 'algos', title: '算法', details: '排序 (快排/归并/堆/计数), 搜索 (二分/DFS/BFS/A*), 动态规划 (DP/Knapsack), 贪心, 回溯, 分治, 双指针, 滑动窗口, 位运算。' },
            { id: 'complexity', title: '复杂度分析', details: '时间复杂度 (Big O), 空间复杂度, 最好/最坏/平均情况, 递归树分析, 主定理。' }
          ]
        },
        {
          id: 'network',
          title: '计算机网络',
          description: '网络通信原理',
          details: 'HTTP/1.1 (Keep-Alive) vs HTTP/2 (Multiplexing) vs HTTP/3 (QUIC), HTTPS (TLS/SSL Handshake), TCP (三次握手/四次挥手/拥塞控制), UDP, DNS (A/CNAME/MX), WebSocket, CDN, OSI七层模型, ARP, ICMP (Ping)。'
        },
        {
          id: 'os',
          title: '操作系统',
          description: '底层原理',
          details: '进程 vs 线程 vs 协程, 进程通信 (IPC: Pipe/Socket/Signal), 内存管理 (虚拟内存/Page Fault/Segmentation), 调度算法 (Round Robin/Priority), 死锁 (Conditions/Prevention), I/O 模型 (BIO/NIO/AIO/Epoll/Select), 文件系统。'
        },
        {
          id: 'design-patterns',
          title: '设计模式',
          description: '代码组织之道',
          children: [
             { id: 'creational', title: '创建型', details: '单例 (Singleton), 工厂 (Factory), 建造者 (Builder), 原型 (Prototype)。' },
             { id: 'structural', title: '结构型', details: '适配器 (Adapter), 装饰器 (Decorator), 代理 (Proxy), 外观 (Facade), 桥接 (Bridge), 组合 (Composite)。' },
             { id: 'behavioral', title: '行为型', details: '观察者 (Observer), 策略 (Strategy), 责任链 (Chain), 命令 (Command), 迭代器 (Iterator), 状态 (State), 模板方法 (Template)。' },
             { id: 'principles', title: '设计原则', details: 'SOLID (SRP, OCP, LSP, ISP, DIP), DRY (Don\'t Repeat Yourself), KISS (Keep It Simple), YAGNI。' }
          ]
        },
        {
           id: 'compilation',
           title: '编译原理',
           description: '代码如何运行',
           details: '词法分析 (Lexer), 语法分析 (Parser/AST), 语义分析, 中间代码生成 (IR), 代码优化, 目标代码生成, 链接 (Static/Dynamic Linking), JIT (Just-In-Time)。'
        }
      ]
    },

    // --- 运维与云原生 DevOps ---
    {
      id: 'devops',
      title: '运维 (DevOps)',
      description: '部署、监控与自动化',
      children: [
        {
          id: 'linux-ops',
          title: 'Linux 基础',
          description: '服务器操作',
          details: 'Shell 脚本 (Bash/Zsh), 文件权限 (chmod/chown/umask), 进程管理 (ps/top/htop/kill/systemd), 网络工具 (curl/netstat/ss/tcpdump), SSH (Key Auth), 文本处理 (awk/sed/grep), 磁盘管理 (df/du/mount)。'
        },
        {
          id: 'container',
          title: '容器化',
          description: 'Docker & K8s',
          children: [
            { id: 'docker', title: 'Docker', details: 'Dockerfile (Multi-stage build), Image Layers, Docker Compose, Volume, Network (Bridge/Host), Registry (Harbor)。' },
            { id: 'k8s', title: 'Kubernetes', details: 'Pod, Service (ClusterIP/NodePort/LB), Deployment, StatefulSet, DaemonSet, Ingress, ConfigMap, Secret, Helm Charts, Operator, PV/PVC。' },
            { id: 'servicemesh', title: 'Service Mesh', details: 'Istio (Sidecar/Envoy), Linkerd。流量控制, 安全, 可观测性。' }
          ]
        },
        {
          id: 'cicd-pipeline',
          title: 'CI/CD',
          description: '流水线',
          details: 'GitHub Actions, GitLab CI (.gitlab-ci.yml), Jenkins (Pipeline), ArgoCD (GitOps)。自动化测试, 自动化构建, 自动化部署, 蓝绿部署, 金丝雀发布, 滚动更新。'
        },
        {
          id: 'cloud-services',
          title: '云厂商',
          description: 'IaaS/PaaS/SaaS',
          details: 'AWS (EC2, S3, Lambda, RDS, VPC, CloudFront), Azure, Google Cloud (GCP), 阿里云, 腾讯云。Serverless 架构 (FaaS/BaaS)。'
        },
        {
          id: 'iac',
          title: '基础设施即代码',
          description: 'IaC',
          details: 'Terraform (HCL/State), Ansible (Playbook), Pulumi, CloudFormation。可重复性, 版本控制, 不可变基础设施。'
        },
        {
          id: 'monitoring',
          title: '监控与日志',
          description: '可观测性',
          details: 'Prometheus (Metrics/AlertManager), Grafana (Visualization/Dashboards), ELK Stack (Logstash/Elasticsearch/Kibana), Loki, Sentry (Error Tracking), OpenTelemetry (Tracing)。'
        }
      ]
    },

    // --- 移动端 Mobile ---
    {
      id: 'mobile',
      title: '移动开发 (Mobile)',
      description: 'iOS & Android',
      children: [
        { 
          id: 'react-native', 
          title: 'React Native', 
          description: '跨平台首选',
          details: '基于 React, 跨平台, 原生性能, Expo 生态 (EAS), Reanimated, Gesture Handler。',
          children: [
            { id: 'rn-core', title: '核心组件', details: 'View, Text, Image, ScrollView, FlatList, SectionList, TextInput, TouchableOpacity。' },
            { id: 'rn-nav', title: '导航', details: 'React Navigation (Stack, Tab, Drawer), Expo Router (File-based routing)。' },
            { id: 'rn-native', title: '原生模块', details: 'Native Modules, TurboModules, JSI (JavaScript Interface), Fabric (New Architecture)。' },
            { id: 'rn-eco', title: '生态', details: 'Reanimated (动画), Gesture Handler (手势), MMKV (存储), Tamagui/NativeBase (UI库)。' }
          ]
        },
        { 
          id: 'flutter', 
          title: 'Flutter', 
          description: 'Google 出品',
          details: 'Dart 语言, Skia 自绘引擎, Widget 体系, BLoC/Provider 状态管理。',
          children: [
            { id: 'dart', title: 'Dart 语言', details: 'JIT/AOT 编译, 异步 (Future/Stream), 空安全 (Null Safety)。' },
            { id: 'flutter-widgets', title: 'Widget 体系', details: 'StatelessWidget, StatefulWidget, Material/Cupertino Design, Layout (Row/Column/Stack)。' },
            { id: 'flutter-state', title: '状态管理', details: 'Provider, Riverpod, BLoC, GetX, Redux。' }
          ]
        },
        { 
          id: 'native-dev', 
          title: '原生开发', 
          description: '极致性能',
          children: [
            { id: 'ios', title: 'iOS', details: 'Swift (语言), SwiftUI (声明式UI), UIKit (经典UI), Xcode, CocoaPods, Core Data。' },
            { id: 'android', title: 'Android', details: 'Kotlin (语言), Jetpack Compose (声明式UI), Android Studio, Gradle, Retrofit, Room。' }
          ]
        }
      ]
    },

    // --- 人工智能 AI & Data ---
    {
      id: 'ai-data',
      title: 'AI 与大数据',
      description: '未来的趋势',
      children: [
        {
          id: 'python-ai',
          title: 'Python 生态',
          description: 'AI 基石',
          children: [
            { id: 'numpy', title: 'NumPy', details: '多维数组, 矩阵运算, 线性代数, 傅里叶变换。' },
            { id: 'pandas', title: 'Pandas', details: 'DataFrame, Series, 数据清洗, 数据分析, CSV/Excel 处理。' },
            { id: 'matplotlib', title: '可视化', details: 'Matplotlib, Seaborn, Plotly, 数据图表绘制。' }
          ]
        },
        {
          id: 'ml',
          title: '机器学习 (ML)',
          description: 'Scikit-learn',
          children: [
            { id: 'supervised', title: '监督学习', details: '线性回归, 逻辑回归, 支持向量机 (SVM), 决策树, 随机森林, K-近邻 (KNN)。' },
            { id: 'unsupervised', title: '无监督学习', details: 'K-Means 聚类, PCA 降维, 关联规则。' },
            { id: 'model-eval', title: '模型评估', details: '准确率, 召回率, F1 Score, ROC/AUC, 交叉验证。' }
          ]
        },
        {
          id: 'dl',
          title: '深度学习 (DL)',
          description: '神经网络',
          children: [
            { id: 'frameworks', title: '框架', details: 'PyTorch (动态图), TensorFlow (静态图), Keras (高层API)。' },
            { id: 'cnn', title: 'CNN', details: '卷积神经网络, 图像识别, 目标检测 (YOLO), 图像分割。' },
            { id: 'rnn', title: 'RNN', details: '循环神经网络, LSTM, GRU, 自然语言处理, 时间序列预测。' },
            { id: 'transformer', title: 'Transformer', details: 'Attention 机制, BERT, GPT, Vision Transformer (ViT)。' }
          ]
        },
        {
          id: 'llm',
          title: '大模型 (LLM)',
          description: 'AIGC',
          children: [
            { id: 'prompt', title: 'Prompt Engineering', details: '提示词工程, CoT (思维链), Few-shot Learning。' },
            { id: 'rag', title: 'RAG', details: '检索增强生成, 向量数据库 (Pinecone/Milvus), LangChain, LlamaIndex。' },
            { id: 'fine-tuning', title: '微调', details: 'LoRA, QLoRA, PEFT, 指令微调, RLHF (人类反馈强化学习)。' }
          ]
        }
      ]
    },

    // --- 安全 Security ---
    {
      id: 'security',
      title: '网络安全',
      description: '黑客与防御',
      children: [
        { 
          id: 'web-sec', 
          title: 'Web 安全', 
          children: [
            { id: 'owasp', title: 'OWASP Top 10', details: '注入, 失效身份验证, 敏感信息泄露, XXE, 访问控制失效。' },
            { id: 'xss', title: 'XSS', details: '反射型, 存储型, DOM 型。防御: CSP, 转义, HttpOnly Cookie。' },
            { id: 'csrf', title: 'CSRF', details: '跨站请求伪造。防御: CSRF Token, SameSite Cookie。' },
            { id: 'sql-inject', title: 'SQL 注入', details: '防御: 预编译语句 (Prepared Statements), ORM。' }
          ]
        },
        { 
          id: 'net-sec', 
          title: '网络安全', 
          details: '防火墙, VPN, DDoS 防御, Wireshark 抓包, 端口扫描 (Nmap)。' 
        },
        { 
          id: 'crypto', 
          title: '密码学', 
          details: '对称加密 (AES), 非对称加密 (RSA/ECC), 哈希 (SHA-256), 数字签名, PKI 体系。' 
        }
      ]
    },

    // --- 游戏开发 Game Dev ---
    {
      id: 'game-dev',
      title: '游戏开发',
      description: '创造虚拟世界',
      children: [
        { id: 'unity', title: 'Unity', details: 'C# 脚本, ECS 架构, URP/HDRP 渲染管线, Physics 物理引擎。' },
        { id: 'unreal', title: 'Unreal Engine', details: 'C++, Blueprints (蓝图), Nanite, Lumen, 虚幻引擎的高画质表现。' },
        { id: 'graphics', title: '图形学基础', details: 'OpenGL, Vulkan, DirectX, WebGL, Shader (着色器), 线性代数 (向量/矩阵)。' },
        { id: 'game-design', title: '游戏设计', details: '关卡设计, 游戏机制, 玩家心理, 游戏平衡性。' }
      ]
    },

    // --- 新兴技术 Emerging Tech ---
    {
      id: 'emerging-tech',
      title: '新兴技术',
      description: '探索未来',
      children: [
        { id: 'blockchain', title: '区块链 / Web3', details: '比特币 (PoW), 以太坊 (Smart Contracts/Solidity), DeFi, NFT, DAO, 共识算法 (PoS/DPoS)。' },
        { id: 'iot', title: '物联网 (IoT)', details: '嵌入式开发 (C/C++), MQTT/CoAP 协议, 边缘计算 (Edge Computing), Arduino/Raspberry Pi, 传感器数据采集。' },
        { id: 'quantum', title: '量子计算', details: 'Qubit, 量子叠加, 量子纠缠, Shor 算法, Grover 算法, Qiskit。' },
        { id: 'ar-vr', title: 'AR / VR / XR', details: 'Unity XR, WebXR, Vision Pro 开发 (SwiftUI/RealityKit), 空间计算。' }
      ]
    },

    // --- 软技能 Soft Skills ---
    {
      id: 'soft-skills',
      title: '软技能',
      description: '职场生存法则',
      children: [
        { id: 'communication', title: '沟通协作', details: '技术文档写作, Code Review 礼仪, 跨部门沟通, 向上管理, 冲突解决, 公众演讲。' },
        { id: 'methodology', title: '开发方法论', details: 'Agile (敏捷开发), Scrum, Kanban, TDD (测试驱动开发), Domain Driven Design (DDD), XP (极限编程)。' },
        { id: 'career', title: '职业发展', details: '简历优化, 面试技巧, 薪资谈判, 技术影响力建设, 英语能力, 终身学习, 个人品牌。' },
        { id: 'leadership', title: '领导力', details: '团队管理, 导师制度 (Mentorship), 技术决策, 项目管理 (PMP), 招聘与解聘。' },
        { id: 'product-thinking', title: '产品思维', details: '用户同理心, 需求分析, MVP (最小可行性产品), 数据驱动决策, 商业模式画布。' }
      ]
    }
  ]
};
