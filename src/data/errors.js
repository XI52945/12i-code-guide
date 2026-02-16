export const errors = [
  // JavaScript / Node.js
  { code: 'ReferenceError: x is not defined', meaning: '使用了未声明的变量 x。', fix: '检查拼写，或使用 let/const/var 声明变量。' },
  { code: 'TypeError: undefined is not a function', meaning: '试图调用一个不是函数的变量。', fix: '检查该变量是否被赋值为函数，或者对象属性是否存在。' },
  { code: 'SyntaxError: Unexpected token', meaning: '代码语法错误，解析器无法理解。', fix: '检查是否漏了括号、分号、引号，或使用了非法字符。' },
  { code: 'RangeError: Maximum call stack size exceeded', meaning: '堆栈溢出，通常是无限递归导致的。', fix: '检查递归函数的终止条件。' },
  { code: 'UnhandlePromiseRejectionWarning', meaning: 'Promise 被 reject 但没有 catch。', fix: '使用 .catch() 或 try/catch 块处理错误。' },
  { code: 'Error: EMFILE, too many open files', meaning: '打开的文件句柄过多，超过系统限制。', fix: '检查是否忘记关闭文件，或使用 gracefull-fs。' },
  { code: 'Error: EADDRINUSE', meaning: '端口已被占用。', fix: '修改监听端口，或杀掉占用该端口的进程。' },
  { code: 'CORS policy: No \'Access-Control-Allow-Origin\'', meaning: '跨域请求被浏览器拦截。', fix: '后端配置 CORS 头，或使用代理服务器。' },
  { code: 'Heap out of memory', meaning: 'Node.js 内存不足。', fix: '检查内存泄漏，或使用 --max-old-space-size 增加堆内存。' },

  // Python
  { code: 'IndentationError: unexpected indent', meaning: '缩进错误。', fix: 'Python 对缩进敏感，确保使用统一的空格或 Tab。' },
  { code: 'NameError: name \'x\' is not defined', meaning: '使用了未定义的变量。', fix: '确保变量在使用前已赋值。' },
  { code: 'TypeError: object of type \'int\' has no len()', meaning: '对不支持 len() 的类型（如整数）调用了 len()。', fix: '检查变量类型。' },
  { code: 'IndexError: list index out of range', meaning: '尝试访问列表中不存在的索引。', fix: '检查列表长度和索引值。' },
  { code: 'KeyError: \'x\'', meaning: '字典中不存在键 \'x\'。', fix: '使用 dict.get(\'x\') 或检查键是否存在。' },
  { code: 'ModuleNotFoundError: No module named \'x\'', meaning: '找不到模块 x。', fix: '使用 pip install x 安装模块。' },
  { code: 'AttributeError: \'NoneType\' object has no attribute \'x\'', meaning: '尝试访问 None 对象的属性。', fix: '检查之前的函数调用是否返回了 None。' },
  { code: 'ValueError: invalid literal for int()', meaning: '无法将字符串转换为整数。', fix: '确保字符串内容是数字。' },
  { code: 'ImportError: circular import', meaning: '循环导入。', fix: '重构代码，避免 A 导入 B，B 又导入 A。' },

  // Java
  { code: 'NullPointerException (NPE)', meaning: '空指针异常，尝试访问 null 对象的成员。', fix: '在使用对象前检查是否为 null。' },
  { code: 'ArrayIndexOutOfBoundsException', meaning: '数组越界。', fix: '检查循环边界条件。' },
  { code: 'ClassCastException', meaning: '类型转换错误。', fix: '确保对象是目标类的实例 (instanceof)。' },
  { code: 'OutOfMemoryError: Java heap space', meaning: '堆内存不足。', fix: '检查内存泄漏，或调整 JVM 参数 (-Xmx)。' },
  { code: 'StackOverflowError', meaning: '栈溢出，通常是无限递归。', fix: '检查递归终止条件。' },
  { code: 'ClassNotFoundException', meaning: '找不到类。', fix: '检查类路径 (classpath) 和依赖包。' },
  { code: 'NoClassDefFoundError', meaning: '编译时有类，运行时找不到。', fix: '通常是 jar 包版本冲突或缺失。' },
  { code: 'ConcurrentModificationException', meaning: '遍历集合时修改了集合。', fix: '使用迭代器的 remove 方法，或使用并发集合。' },

  // C++ / C
  { code: 'Segmentation fault (core dumped)', meaning: '段错误，非法内存访问。', fix: '检查指针是否为空，数组是否越界，指针是否已释放。' },
  { code: 'undefined reference to function', meaning: '链接错误，找不到函数定义。', fix: '检查是否链接了对应的库文件。' },
  { code: 'memory leak', meaning: '内存泄漏。', fix: '确保 malloc/new 后有对应的 free/delete。' },
  { code: 'double free', meaning: '重复释放同一块内存。', fix: '检查释放逻辑，释放后将指针置为 nullptr。' },
  { code: 'stack smashing detected', meaning: '栈溢出，通常是缓冲区溢出。', fix: '检查数组写入是否越界。' },

  // Git
  { code: 'fatal: not a git repository', meaning: '当前目录不是 git 仓库。', fix: '运行 git init。' },
  { code: 'conflict (content): Merge conflict', meaning: '合并冲突。', fix: '手动解决文件中的冲突标记 (<<<<<<<)。' },
  { code: 'Permission denied (publickey)', meaning: 'SSH 密钥认证失败。', fix: '生成 SSH 密钥并添加到 GitHub/GitLab。' },
  { code: 'detached HEAD state', meaning: '游离 HEAD 状态，不在任何分支上。', fix: 'git checkout <branch> 回到分支，或创建新分支保存修改。' },

  // HTTP / Web
  { code: '400 Bad Request', meaning: '客户端请求错误。', fix: '检查请求参数格式。' },
  { code: '401 Unauthorized', meaning: '未授权。', fix: '检查 Token 或 Cookie 是否有效。' },
  { code: '403 Forbidden', meaning: '禁止访问。', fix: '服务器理解请求但拒绝执行，权限不足。' },
  { code: '404 Not Found', meaning: '未找到资源。', fix: '检查 URL 是否正确。' },
  { code: '500 Internal Server Error', meaning: '服务器内部错误。', fix: '查看服务器日志寻找具体报错。' },
  { code: '502 Bad Gateway', meaning: '网关错误。', fix: '上游服务器挂了，或 Nginx 配置错误。' },
  { code: '503 Service Unavailable', meaning: '服务不可用。', fix: '服务器过载或维护中。' },
  { code: '504 Gateway Timeout', meaning: '网关超时。', fix: '上游服务器处理时间过长。' },

  // Go
  { code: 'panic: runtime error: index out of range', meaning: '数组或切片索引越界。', fix: '检查切片长度和索引值。' },
  { code: 'panic: runtime error: invalid memory address or nil pointer dereference', meaning: '空指针解引用。', fix: '检查指针是否为 nil。' },
  { code: 'cannot use x (type int) as type string in assignment', meaning: '类型不匹配。', fix: 'Go 是强类型语言，需要显式转换类型，如 string(x)。' },
  { code: 'syntax error: unexpected newline, expecting comma or }', meaning: '语法错误，通常是括号或逗号位置不对。', fix: 'Go 的 { 不能单独成行，必须跟在函数名或 if 后。' },
  { code: 'undefined: x', meaning: '使用了未定义的变量。', fix: '检查变量是否声明或导入。' },
  { code: 'imported and not used: "fmt"', meaning: '导入了包但没有使用。', fix: 'Go 编译器强制要求，移除未使用的包或使用 _ 忽略。' },
  { code: 'method x has pointer receiver', meaning: '方法定义在指针上，但调用时使用了值（虽然 Go 通常会自动处理，但在接口实现时要注意）。', fix: '确保接口实现匹配接收者类型。' },
  { code: 'concurrent map writes', meaning: '并发写入 map。', fix: 'Go 的 map 不是并发安全的，使用 sync.Map 或加锁 (sync.Mutex)。' },

  // Rust
  { code: 'borrow of moved value: `x`', meaning: '借用了已移动的值。', fix: 'Rust 所有权规则，值被移动后不能再使用。使用 .clone() 或引用 &x。' },
  { code: 'cannot borrow `x` as mutable because it is also borrowed as immutable', meaning: '同时存在可变和不可变引用。', fix: 'Rust 禁止同时存在可变和不可变引用，缩小引用的作用域。' },
  { code: '`x` does not live long enough', meaning: '生命周期错误，引用活得比数据久。', fix: '检查生命周期标注，或使用 Box/Rc/Arc 延长生命周期。' },
  { code: 'mismatched types: expected `i32`, found `u32`', meaning: '类型不匹配。', fix: 'Rust 强类型，需显式转换 x as i32。' },
  { code: 'use of possibly-uninitialized variable: `x`', meaning: '使用了未初始化的变量。', fix: '确保变量在使用前被赋值。' },
  { code: 'cannot assign to immutable variable `x`', meaning: '尝试修改不可变变量。', fix: '使用 let mut x 声明变量。' },

  // Docker
  { code: 'Cannot connect to the Docker daemon', meaning: '无法连接 Docker 守护进程。', fix: '检查 Docker 是否启动 (systemctl start docker 或打开 Docker Desktop)。' },
  { code: 'manifest for x not found', meaning: '找不到镜像。', fix: '检查镜像名称和标签是否正确，或架构是否匹配 (arm64/amd64)。' },
  { code: 'Bind for 0.0.0.0:80 failed: port is already allocated', meaning: '端口已被占用。', fix: '修改容器映射端口 (-p 8080:80) 或杀掉占用进程。' },
  { code: 'exec user process caused: exec format error', meaning: '架构不匹配 (如在 x86 上运行 arm 镜像)。', fix: '构建多架构镜像 (docker buildx) 或使用匹配架构的基础镜像。' },
  { code: 'no space left on device', meaning: '磁盘空间不足。', fix: '运行 docker system prune清理无用镜像和容器。' },

  // Kubernetes (K8s)
  { code: 'ImagePullBackOff / ErrImagePull', meaning: '镜像拉取失败。', fix: '检查镜像名、Tag、Secret (私有仓库凭证) 或网络连接。' },
  { code: 'CrashLoopBackOff', meaning: 'Pod 启动后立即退出。', fix: '查看 logs (kubectl logs)，检查应用配置、环境变量或启动命令。' },
  { code: 'Pending', meaning: 'Pod 无法调度。', fix: '检查资源不足 (CPU/Memory Request)、节点污点 (Taints) 或 PVC 未绑定。' },
  { code: 'Evicted', meaning: 'Pod 被驱逐。', fix: '节点资源紧缺 (Disk Pressure/Memory Pressure)，清理节点或调整资源限制。' },
  { code: 'OOMKilled', meaning: '内存溢出被杀。', fix: 'Pod 使用内存超过 Limit，检查内存泄漏或调大 limits.memory。' },
  { code: 'CreateContainerConfigError', meaning: '容器配置错误。', fix: '通常是 ConfigMap 或 Secret 缺失/Key 错误。' },

  // SQL (General)
  { code: 'Syntax error in SQL statement', meaning: 'SQL 语法错误。', fix: '检查关键字拼写、引号闭合、逗号分隔。' },
  { code: 'Table \'x\' doesn\'t exist', meaning: '表不存在。', fix: '检查表名拼写或数据库上下文 (USE db)。' },
  { code: 'Column \'x\' in field list is ambiguous', meaning: '列名歧义，多表连接时存在同名列。', fix: '使用表别名明确列名 (t1.id)。' },
  { code: 'Duplicate entry \'x\' for key \'PRIMARY\'', meaning: '主键冲突。', fix: '插入了已存在的 ID，检查数据源或自增逻辑。' },
  { code: 'Deadlock found when trying to get lock', meaning: '死锁。', fix: '优化事务逻辑，保证加锁顺序一致，或减小事务粒度。' },
  { code: 'Connection refused / Access denied', meaning: '连接被拒绝。', fix: '检查用户名密码、主机权限 (GRANT)、防火墙端口 (3306)。' },

  // React Native
  { code: 'Invariant Violation: Element type is invalid', meaning: '组件导入错误。', fix: '检查 import 路径，是否忘记 export default，或循环引用。' },
  { code: 'Metro Bundler process exited', meaning: '打包器崩溃。', fix: '重启 Metro (r)，检查 Node 版本或依赖冲突。' },
  { code: 'Network request failed', meaning: '网络请求失败。', fix: '检查手机/模拟器网络，Android 需配置 cleartextTraffic (http)，iOS 需配置 Info.plist。' },
  { code: 'Xcode build failed', meaning: 'iOS 构建失败。', fix: 'cd ios && pod install，检查 Signing 配置，清理 DerivedData。' },
  { code: 'Gradle build failed', meaning: 'Android 构建失败。', fix: '检查 JDK 版本 (推荐 11/17)，local.properties SDK 路径，./gradlew clean。' },
  { code: 'View config not found for name x', meaning: '原生组件未链接。', fix: '重新构建基座 (npx expo run:android/ios) 或检查原生模块安装。' }
];
