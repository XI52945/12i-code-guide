export const dockerIntro = {
  title: 'Docker 容器化',
  desc: 'Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，然后发布到任何流行的 Linux或Windows 机器上。',
  keyFeatures: ['轻量级虚拟化', '一致的运行环境', '快速部署', '弹性伸缩', '微服务架构基石']
};

export const docker = [
  // 镜像 Image
  { command: 'docker pull', description: '从仓库拉取镜像。', example: 'docker pull node:18-alpine' },
  { command: 'docker build', description: '从 Dockerfile 构建镜像。', example: 'docker build -t my-app .' },
  { command: 'docker images', description: '列出本地镜像。', example: 'docker images -a' },
  { command: 'docker rmi', description: '删除镜像。', example: 'docker rmi <image-id>' },
  { command: 'docker tag', description: '给镜像打标签。', example: 'docker tag my-app user/repo:v1' },
  { command: 'docker push', description: '推送镜像到仓库。', example: 'docker push user/repo:v1' },
  { command: 'docker search', description: '在 Docker Hub 搜索镜像。', example: 'docker search nginx' },
  { command: 'docker history', description: '查看镜像历史。', example: 'docker history <image-id>' },
  { command: 'docker save', description: '将镜像保存为 tar 归档文件。', example: 'docker save -o my-image.tar my-image:latest' },
  { command: 'docker load', description: '从 tar 归档文件加载镜像。', example: 'docker load -i my-image.tar' },

  // 容器 Container
  { command: 'docker run', description: '创建并启动容器。', example: 'docker run -d -p 8080:80 --name web -v ./html:/usr/share/nginx/html nginx' },
  { command: 'docker ps', description: '列出运行中的容器。', example: 'docker ps -a (列出所有容器，包括已停止的)' },
  { command: 'docker stop', description: '停止运行中的容器。', example: 'docker stop <container-id>' },
  { command: 'docker start', description: '启动已停止的容器。', example: 'docker start <container-id>' },
  { command: 'docker restart', description: '重启容器。', example: 'docker restart <container-id>' },
  { command: 'docker rm', description: '删除容器。', example: 'docker rm -f <container-id> (强制删除)' },
  { command: 'docker logs', description: '查看容器日志。', example: 'docker logs -f --tail 100 <container-id> (实时查看最后100行)' },
  { command: 'docker exec', description: '在运行的容器中执行命令。', example: 'docker exec -it <container-id> /bin/bash (进入容器 shell)' },
  { command: 'docker cp', description: '在容器和主机之间复制文件。', example: 'docker cp file.txt <container-id>:/app/' },
  { command: 'docker inspect', description: '查看容器或镜像的详细信息。', example: 'docker inspect <container-id>' },
  { command: 'docker stats', description: '实时显示容器资源使用情况。', example: '查看 CPU、内存使用率。' },
  { command: 'docker port', description: '列出容器的端口映射。', example: 'docker port <container-id>' },
  { command: 'docker export', description: '将容器的文件系统导出为 tar 归档。', example: 'docker export <container-id> > container.tar' },
  { command: 'docker import', description: '从 tar 归档导入内容创建文件系统镜像。', example: 'cat container.tar | docker import - my-image:new' },

  // 网络 Network
  { command: 'docker network create', description: '创建网络。', example: 'docker network create my-net' },
  { command: 'docker network ls', description: '列出网络。', example: '' },
  { command: 'docker network connect', description: '将容器连接到网络。', example: 'docker network connect my-net <container-id>' },
  { command: 'docker network inspect', description: '查看网络详细信息。', example: 'docker network inspect my-net' },

  // 卷 Volume
  { command: 'docker volume create', description: '创建卷。', example: 'docker volume create my-data' },
  { command: 'docker volume ls', description: '列出卷。', example: '' },
  { command: 'docker volume rm', description: '删除卷。', example: 'docker volume rm my-data' },
  { command: 'docker volume inspect', description: '查看卷详细信息。', example: 'docker volume inspect my-data' },

  // 系统 System
  { command: 'docker login', description: '登录 Docker 仓库。', example: 'docker login' },
  { command: 'docker logout', description: '登出 Docker 仓库。', example: 'docker logout' },
  { command: 'docker system prune', description: '删除未使用的数据。', example: 'docker system prune -a (删除所有未使用的镜像、容器、网络)' },
  { command: 'docker system df', description: '显示 Docker 磁盘使用情况。', example: '' },

  // Docker Compose
  { command: 'docker-compose up', description: '构建、创建并启动服务。', example: 'docker-compose up -d --build (重新构建并后台运行)' },
  { command: 'docker-compose down', description: '停止并删除容器、网络、镜像和卷。', example: 'docker-compose down -v (同时删除卷)' },
  { command: 'docker-compose ps', description: '列出容器。', example: '' },
  { command: 'docker-compose logs', description: '查看服务日志。', example: 'docker-compose logs -f web' },
  { command: 'docker-compose exec', description: '在服务容器中执行命令。', example: 'docker-compose exec web bash' },
  { command: 'docker-compose build', description: '构建或重新构建服务。', example: 'docker-compose build' },
  { command: 'docker-compose restart', description: '重启服务。', example: 'docker-compose restart web' },
  { command: 'docker-compose config', description: '验证并查看 Compose 文件。', example: '检查语法错误。' }
];
