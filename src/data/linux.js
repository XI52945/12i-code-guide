export const linuxIntro = {
  title: 'Linux 操作系统',
  desc: 'Linux 是一种自由和开放源码的类 UNIX 操作系统。它是目前世界上最流行的服务器操作系统，也是 Android 的基础。',
  keyFeatures: ['开源免费', '多用户多任务', '稳定高效', '强大的网络功能', '安全性高']
};

export const linux = [
  // 文件与目录 Files & Directories
  { command: 'ls', description: '列出目录内容。', example: 'ls -la (显示所有文件，包括隐藏文件，长格式)' },
  { command: 'cd', description: '切换当前工作目录。', example: 'cd /var/www (进入 /var/www)' },
  { command: 'pwd', description: '显示当前工作目录的绝对路径。', example: 'Print Working Directory' },
  { command: 'mkdir', description: '创建新目录。', example: 'mkdir -p project/src (递归创建)' },
  { command: 'rm', description: '删除文件或目录。', example: 'rm -rf node_modules (强制递归删除，慎用！)' },
  { command: 'cp', description: '复制文件或目录。', example: 'cp -r src dest (递归复制)' },
  { command: 'mv', description: '移动或重命名文件。', example: 'mv old.txt new.txt' },
  { command: 'touch', description: '创建空文件或更新时间戳。', example: 'touch index.js' },
  { command: 'cat', description: '连接文件并打印到标准输出。', example: 'cat config.json' },
  { command: 'head', description: '显示文件开头部分。', example: 'head -n 10 file.txt' },
  { command: 'tail', description: '显示文件末尾部分。', example: 'tail -f app.log (实时跟踪日志)' },
  { command: 'find', description: '在目录层次结构中搜索文件。', example: 'find . -name "*.js" (查找当前目录下所有 js 文件)' },
  { command: 'grep', description: '打印匹配模式的行。', example: 'grep -r "TODO" . (递归搜索 TODO)' },
  { command: 'chmod', description: '修改文件权限。', example: 'chmod +x script.sh (添加执行权限), chmod 777 (全开)' },
  { command: 'chown', description: '修改文件所有者。', example: 'chown user:group file' },
  { command: 'ln', description: '创建链接。', example: 'ln -s /path/to/file linkname (创建软链接)' },
  { command: 'file', description: '确定文件类型。', example: 'file archive.tar.gz' },
  { command: 'tree', description: '以树状格式列出目录内容。', example: 'tree -L 2 (只显示两层)' },

  // 系统信息 System Info
  { command: 'top', description: '实时显示进程信息。', example: '类似任务管理器。' },
  { command: 'htop', description: '交互式进程查看器（比 top 更友好）。', example: '需安装。' },
  { command: 'ps', description: '报告当前进程快照。', example: 'ps aux | grep node (查找 node 进程)' },
  { command: 'df', description: '报告文件系统磁盘空间使用情况。', example: 'df -h (人类可读格式)' },
  { command: 'du', description: '估算文件空间使用量。', example: 'du -sh node_modules (查看目录总大小)' },
  { command: 'free', description: '显示内存使用情况。', example: 'free -m (以 MB 为单位)' },
  { command: 'uname', description: '打印系统信息。', example: 'uname -a (显示内核版本等所有信息)' },
  { command: 'whoami', description: '显示当前登录用户名。', example: '' },
  { command: 'uptime', description: '显示系统运行时间。', example: '' },
  { command: 'lscpu', description: '显示 CPU 架构信息。', example: '' },
  { command: 'lsblk', description: '列出块设备信息。', example: '查看磁盘分区挂载点' },
  { command: 'dmesg', description: '打印或控制内核环形缓冲区。', example: '查看硬件启动日志' },

  // 网络 Network
  { command: 'ping', description: '向网络主机发送 ICMP ECHO_REQUEST。', example: 'ping google.com (测试连通性)' },
  { command: 'curl', description: '传输数据的工具。', example: 'curl -I https://example.com (只看响应头)' },
  { command: 'wget', description: '非交互式网络下载器。', example: 'wget https://example.com/file.zip' },
  { command: 'netstat', description: '打印网络连接、路由表等。', example: 'netstat -tulpn (查看监听端口)' },
  { command: 'ss', description: '转储套接字统计信息（netstat 的替代品）。', example: 'ss -ltn' },
  { command: 'ssh', description: 'OpenSSH 远程登录客户端。', example: 'ssh user@host' },
  { command: 'scp', description: '安全复制（基于 SSH）。', example: 'scp local_file user@host:/remote/path' },
  { command: 'rsync', description: '快速、多功能的文件复制工具。', example: 'rsync -avz source/ dest/ (增量同步)' },
  { command: 'ifconfig', description: '配置网络接口（旧）。', example: '查看 IP 地址。' },
  { command: 'ip', description: '显示/操作路由、设备等（新）。', example: 'ip addr show' },
  { command: 'dig', description: 'DNS 查找工具。', example: 'dig google.com' },
  { command: 'nslookup', description: '查询互联网名称服务器。', example: 'nslookup google.com' },
  { command: 'nc', description: 'Netcat，网络工具中的瑞士军刀。', example: 'nc -zv localhost 80 (扫描端口)' },
  { command: 'lsof', description: '列出打开的文件（List Open Files）。', example: 'lsof -i :8080 (查看谁占用了端口)' },

  // 服务管理 Service Management (Systemd)
  { command: 'systemctl', description: '控制 systemd 系统和服务管理器。', example: 'systemctl start nginx' },
  { command: 'journalctl', description: '查询 systemd 日志。', example: 'journalctl -u nginx -f (实时查看 nginx 日志)' },
  { command: 'service', description: '运行 System V 初始化脚本（旧）。', example: 'service nginx restart' },

  // 压缩与解压 Archive
  { command: 'tar', description: '归档工具。', example: 'tar -czvf archive.tar.gz folder (压缩), tar -xzvf archive.tar.gz (解压)' },
  { command: 'zip', description: '打包和压缩文件。', example: 'zip -r archive.zip folder' },
  { command: 'unzip', description: '列出、测试和提取 ZIP 归档文件。', example: 'unzip archive.zip' },
  { command: 'gzip', description: '压缩文件。', example: 'gzip file.txt' },
  { command: 'gunzip', description: '解压文件。', example: 'gunzip file.txt.gz' },

  // 文本处理 Text Processing
  { command: 'sed', description: '流编辑器。', example: 'sed "s/old/new/g" file (替换文本)' },
  { command: 'awk', description: '模式扫描和处理语言。', example: 'awk \'{print $1}\' file (打印第一列)' },
  { command: 'sort', description: '对文本行进行排序。', example: 'sort file.txt' },
  { command: 'uniq', description: '报告或省略重复行。', example: 'sort file.txt | uniq' },
  { command: 'wc', description: '打印换行符、单词和字节计数。', example: 'wc -l file.txt (统计行数)' },
  { command: 'diff', description: '比较文件内容。', example: 'diff file1.txt file2.txt' },
  { command: 'less', description: '分页查看文件内容。', example: 'less large_file.log' },
  { command: 'more', description: '分页查看文件内容（旧）。', example: 'more file.txt' },
  { command: 'tee', description: '从标准输入读取并写入标准输出和文件。', example: 'echo "hello" | tee log.txt' },

  // 用户与权限 Users & Permissions
  { command: 'useradd', description: '创建新用户。', example: 'useradd -m newuser' },
  { command: 'usermod', description: '修改用户账号。', example: 'usermod -aG sudo newuser' },
  { command: 'passwd', description: '更改用户密码。', example: 'passwd newuser' },
  { command: 'su', description: '切换用户 ID 或成为超级用户。', example: 'su -' },

  // 其他 Misc
  { command: 'history', description: '显示命令历史。', example: '!100 (执行第 100 条命令)' },
  { command: 'echo', description: '显示一行文本。', example: 'echo "Hello" > file.txt (写入文件)' },
  { command: 'man', description: '系统参考手册的接口。', example: 'man ls (查看 ls 的帮助文档)' },
  { command: 'sudo', description: '以其他用户身份执行命令（通常是 root）。', example: 'sudo apt update' },
  { command: 'kill', description: '向进程发送信号。', example: 'kill -9 <PID> (强制杀死进程)' },
  { command: 'killall', description: '按名称杀死进程。', example: 'killall node' },
  { command: 'which', description: '定位命令的执行文件路径。', example: 'which node' },
  { command: 'whereis', description: '定位二进制文件、源文件和手册页。', example: 'whereis nginx' },
  { command: 'watch', description: '定期执行程序，全屏显示输出。', example: 'watch -n 1 "cat file.txt"' },
  { command: 'alias', description: '定义或显示别名。', example: 'alias ll="ls -la"' },
  { command: 'env', description: '运行程序或打印当前环境变量。', example: 'env | grep PATH' },
  { command: 'export', description: '设置环境变量。', example: 'export NODE_ENV=production' }
];
