"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[7951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Kubernetes Configuration Options",description:"There are a lot of different Kubernetes Configuration options you can choose from when setting up your cluster.yml for RKE",weight:200},i=void 0,s={unversionedId:"config-options/config-options",id:"config-options/config-options",title:"Kubernetes Configuration Options",description:"There are a lot of different Kubernetes Configuration options you can choose from when setting up your cluster.yml for RKE",source:"@site/docs/config-options/config-options.md",sourceDirName:"config-options",slug:"/config-options/",permalink:"/rke1-docs/config-options/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/config-options.md",tags:[],version:"current",lastUpdatedAt:1673993046,formattedLastUpdatedAt:"1/17/2023",frontMatter:{title:"Kubernetes Configuration Options",description:"There are a lot of different Kubernetes Configuration options you can choose from when setting up your cluster.yml for RKE",weight:200},sidebar:"mySidebar",previous:{title:"Adding and Removing Nodes",permalink:"/rke1-docs/managing-clusters/"},next:{title:"Nodes",permalink:"/rke1-docs/config-options/nodes/"}},l={},p=[{value:"Configuring Nodes",id:"configuring-nodes",level:3},{value:"Configuring Kubernetes Cluster",id:"configuring-kubernetes-cluster",level:3},{value:"Cluster Level Options",id:"cluster-level-options",level:2},{value:"Cluster Name",id:"cluster-name",level:3},{value:"Supported Docker Versions",id:"supported-docker-versions",level:3},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Prefix Path",id:"prefix-path",level:3},{value:"Cluster Level SSH Key Path",id:"cluster-level-ssh-key-path",level:3},{value:"SSH Agent",id:"ssh-agent",level:3},{value:"Add-ons Job Timeout",id:"add-ons-job-timeout",level:3},{value:"cri-dockerd",id:"cri-dockerd",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When setting up your ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," for RKE, there are a lot of different options that can be configured to control the behavior of how RKE launches Kubernetes."),(0,o.kt)("p",null,"There are several options that can be configured in cluster configuration option. There are several ",(0,o.kt)("a",{parentName:"p",href:"example-yamls/"},"example yamls")," that contain all the options."),(0,o.kt)("h3",{id:"configuring-nodes"},"Configuring Nodes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/nodes/"},"Nodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#supported-docker-versions"},"Ignoring unsupported Docker versions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/private-registries/"},"Private Registries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cluster-level-ssh-key-path"},"Cluster Level SSH Key Path")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ssh-agent"},"SSH Agent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/bastion-host/"},"Bastion Host"))),(0,o.kt)("h3",{id:"configuring-kubernetes-cluster"},"Configuring Kubernetes Cluster"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cluster-name"},"Cluster Name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#kubernetes-version"},"Kubernetes Version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#prefix-path"},"Prefix Path")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/system-images/"},"System Images")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/services/"},"Services")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/services/services-extras/"},"Extra Args and Binds and Environment Variables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/services/external-etcd/"},"External Etcd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/authentication/"},"Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/authorization/"},"Authorization")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/rate-limiting/"},"Rate Limiting")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/cloud-providers/"},"Cloud Providers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/audit-log"},"Audit Log")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/add-ons/"},"Add-ons"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/add-ons/network-plugins/"},"Network Plug-ins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/add-ons/dns/"},"DNS providers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/add-ons/ingress-controllers/"},"Ingress Controllers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/add-ons/metrics-server/"},"Metrics Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config-options/add-ons/user-defined-add-ons/"},"User-Defined Add-ons")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#add-ons-job-timeout"},"Add-ons Job Timeout"))))),(0,o.kt)("h2",{id:"cluster-level-options"},"Cluster Level Options"),(0,o.kt)("h3",{id:"cluster-name"},"Cluster Name"),(0,o.kt)("p",null,"By default, the name of your cluster will be ",(0,o.kt)("inlineCode",{parentName:"p"},"local"),". If you want a different name, you would use the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster_name")," directive to change the name of your cluster. The name will be set in your cluster's generated kubeconfig file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"cluster_name: mycluster\n")),(0,o.kt)("h3",{id:"supported-docker-versions"},"Supported Docker Versions"),(0,o.kt)("p",null,"By default, RKE will check the installed Docker version on all hosts and fail with an error if the version is not supported by Kubernetes. The list of supported Docker versions is set specifically for each Kubernetes version in kontainer-driver-metadata depending on the RKE version used, as shown below. To override this behavior, set this option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". Refer to the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For RKE v1.3.x, see this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/kontainer-driver-metadata/blob/release-v2.6/rke/k8s_docker_info.go"},"link"),"."),(0,o.kt)("li",{parentName:"ul"},"For RKE v1.2.x, see this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/kontainer-driver-metadata/blob/release-v2.5/rke/k8s_docker_info.go"},"link"),".")),(0,o.kt)("p",null,"The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ignore_docker_version: true\n")),(0,o.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,o.kt)("p",null,"For information on upgrading Kubernetes, refer to the ",(0,o.kt)("a",{parentName:"p",href:"upgrades/"},"upgrade section.")),(0,o.kt)("p",null,"Rolling back to previous Kubernetes versions is not supported."),(0,o.kt)("h3",{id:"prefix-path"},"Prefix Path"),(0,o.kt)("p",null,"For some operating systems including ROS, and CoreOS, RKE stores its resources to a different prefix path, this prefix path is by default for these operating systems is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/opt/rke\n")),(0,o.kt)("p",null,"So ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes")," will be stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etc/kubernetes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/etcd")," will be stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/var/lib/etcd")," etc."),(0,o.kt)("p",null,"To change the default prefix path for any cluster, you can use the following option in the cluster configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"prefix_path: /opt/custom_path\n")),(0,o.kt)("h3",{id:"cluster-level-ssh-key-path"},"Cluster Level SSH Key Path"),(0,o.kt)("p",null,"RKE connects to host(s) using ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),". Typically, each node will have an independent path for each ssh key, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh_key_path"),", in the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodes")," section, but if you have a SSH key that is able to access ",(0,o.kt)("strong",{parentName:"p"},"all")," hosts in your cluster configuration file, you can set the path to that ssh key at the top level. Otherwise, you would set the ssh key path in the ",(0,o.kt)("a",{parentName:"p",href:"config-options/nodes/"},"nodes"),"."),(0,o.kt)("p",null,"If ssh key paths are defined at the cluster level and at the node level, the node-level key will take precedence."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ssh_key_path: ~/.ssh/test\n")),(0,o.kt)("h3",{id:"ssh-agent"},"SSH Agent"),(0,o.kt)("p",null,"RKE supports using ssh connection configuration from a local ssh agent. The default value for this option is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". If you want to set using a local ssh agent, you would set this to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ssh_agent_auth: true\n")),(0,o.kt)("p",null,"If you want to use an SSH private key with a passphrase, you will need to add your key to ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-agent")," and have the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"SSH_AUTH_SOCK")," configured."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ eval "$(ssh-agent -s)"\nAgent pid 3975\n$ ssh-add /home/user/.ssh/id_rsa\nEnter passphrase for /home/user/.ssh/id_rsa:\nIdentity added: /home/user/.ssh/id_rsa (/home/user/.ssh/id_rsa)\n$ echo $SSH_AUTH_SOCK\n/tmp/ssh-118TMqxrXsEx/agent.3974\n')),(0,o.kt)("h3",{id:"add-ons-job-timeout"},"Add-ons Job Timeout"),(0,o.kt)("p",null,"You can define ",(0,o.kt)("a",{parentName:"p",href:"config-options/add-ons/"},"add-ons")," to be deployed after the Kubernetes cluster comes up, which uses Kubernetes ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"jobs"),". RKE will stop attempting to retrieve the job status after the timeout, which is in seconds. The default timeout value is ",(0,o.kt)("inlineCode",{parentName:"p"},"30")," seconds."),(0,o.kt)("h3",{id:"cri-dockerd"},"cri-dockerd"),(0,o.kt)("p",null,"Kubernetes will remove code in the kubelet that interacts with Docker (dockershim) in a future Kubernetes release. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed"},"Dockershim Deprecation FAQ: When will dockershim be removed?"),". The component that replaces this code is called ",(0,o.kt)("inlineCode",{parentName:"p"},"cri-dockerd")," and can be enabled using the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"enable_cri_dockerd: true\n")))}c.isMDXComponent=!0}}]);