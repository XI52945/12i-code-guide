export const k8sIntro = {
  title: 'Kubernetes (K8s)',
  desc: 'Kubernetes 是一个开源的容器编排引擎，用于自动部署、扩展和管理容器化应用程序。',
  keyFeatures: ['自动化上线和回滚', '服务发现与负载均衡', '存储编排', '自动装箱', '自我修复']
};

export const k8s = [
  // 基础 Basic
  { command: 'kubectl get', description: '获取资源信息。', example: 'kubectl get pods,svc,deploy -n default -o wide (显示更多信息)' },
  { command: 'kubectl describe', description: '显示资源详细信息。', example: 'kubectl describe pod my-pod (调试利器)' },
  { command: 'kubectl create', description: '创建资源。', example: 'kubectl create deployment nginx --image=nginx' },
  { command: 'kubectl delete', description: '删除资源。', example: 'kubectl delete pod my-pod (或 delete -f file.yaml)' },
  { command: 'kubectl apply', description: '通过文件管理资源。', example: 'kubectl apply -f deployment.yaml (声明式 API)' },
  { command: 'kubectl edit', description: '在编辑器中修改资源。', example: 'kubectl edit svc my-service (实时修改配置)' },
  { command: 'kubectl diff', description: '查看文件与集群状态的差异。', example: 'kubectl diff -f deployment.yaml' },
  { command: 'kubectl explain', description: '查看资源的文档。', example: 'kubectl explain pod.spec.containers (查看字段定义)' },

  // Pods & Troubleshooting
  { command: 'kubectl logs', description: '打印 Pod 中容器的日志。', example: 'kubectl logs -f my-pod -c my-container --previous (查看崩溃前的日志)' },
  { command: 'kubectl exec', description: '在容器中执行命令。', example: 'kubectl exec -it my-pod -- /bin/bash (进入容器)' },
  { command: 'kubectl port-forward', description: '将本地端口转发到 Pod。', example: 'kubectl port-forward my-pod 8080:80 (本地访问)' },
  { command: 'kubectl run', description: '在集群中运行特定镜像。', example: 'kubectl run -i --tty busybox --image=busybox --restart=Never -- sh (临时排查网络)' },
  { command: 'kubectl get events', description: '查看集群事件。', example: 'kubectl get events --sort-by=.metadata.creationTimestamp' },
  { command: 'kubectl cp', description: '复制文件。', example: 'kubectl cp local-file pod:/remote-path' },
  { command: 'kubectl wait', description: '等待资源达到特定状态。', example: 'kubectl wait --for=condition=Ready pod/my-pod' },

  // Cluster Info & Node Management
  { command: 'kubectl cluster-info', description: '显示集群信息。', example: 'Master 和 DNS 地址。' },
  { command: 'kubectl version', description: '显示客户端和服务器版本。', example: '' },
  { command: 'kubectl api-resources', description: '列出支持的 API 资源。', example: '查看集群有哪些 CRD。' },
  { command: 'kubectl top nodes', description: '查看节点资源使用情况。', example: '需安装 Metrics Server。' },
  { command: 'kubectl top pods', description: '查看 Pod 资源使用情况。', example: '查看 CPU 和内存。' },
  { command: 'kubectl cordon', description: '标记节点为不可调度。', example: 'kubectl cordon node-1 (维护前使用)' },
  { command: 'kubectl uncordon', description: '标记节点为可调度。', example: 'kubectl uncordon node-1' },
  { command: 'kubectl drain', description: '排空节点上的 Pod。', example: 'kubectl drain node-1 --ignore-daemonsets (安全驱逐)' },
  { command: 'kubectl taint', description: '给节点添加污点。', example: 'kubectl taint nodes node1 key=value:NoSchedule' },

  // Config Context
  { command: 'kubectl config view', description: '查看 kubeconfig 配置。', example: '' },
  { command: 'kubectl config get-contexts', description: '列出所有上下文。', example: '' },
  { command: 'kubectl config current-context', description: '显示当前上下文。', example: '' },
  { command: 'kubectl config use-context', description: '切换上下文。', example: 'kubectl config use-context minikube' },

  // Deployment & Scaling
  { command: 'kubectl scale', description: '扩缩容。', example: 'kubectl scale --replicas=3 deployment/nginx' },
  { command: 'kubectl rollout status', description: '查看部署状态。', example: 'kubectl rollout status deployment/nginx' },
  { command: 'kubectl rollout history', description: '查看部署历史。', example: 'kubectl rollout history deployment/nginx' },
  { command: 'kubectl rollout undo', description: '回滚到上一个版本。', example: 'kubectl rollout undo deployment/nginx --to-revision=2' },
  { command: 'kubectl rollout restart', description: '重启部署。', example: 'kubectl rollout restart deployment/nginx' },
  { command: 'kubectl set image', description: '更新镜像版本。', example: 'kubectl set image deployment/nginx nginx=nginx:1.16.1' },
  { command: 'kubectl expose', description: '暴露服务。', example: 'kubectl expose deployment nginx --port=80 --target-port=80 --type=NodePort' },

  // Auth
  { command: 'kubectl auth can-i', description: '检查权限。', example: 'kubectl auth can-i create pods (我能创建 Pod 吗？)' },

  // Label & Annotation
  { command: 'kubectl label', description: '添加或更新标签。', example: 'kubectl label pods my-pod app=backend' },
  { command: 'kubectl annotate', description: '添加或更新注解。', example: 'kubectl annotate pods my-pod description="my backend"' }
];
