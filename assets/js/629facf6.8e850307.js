"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,k=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return n?o.createElement(k,s(s({ref:t},p),{},{components:n})):o.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(3117),r=(n(7294),n(3905));const a={title:"Nodes"},s=void 0,i={unversionedId:"config-options/nodes/nodes",id:"config-options/nodes/nodes",title:"Nodes",description:"The nodes directive is the only required section in the cluster.yml file. It's used by RKE to specify cluster node(s), ssh credentials used to access the node(s) and which roles these nodes will be in the Kubernetes cluster.",source:"@site/docs/config-options/nodes/nodes.md",sourceDirName:"config-options/nodes",slug:"/config-options/nodes/",permalink:"/config-options/nodes/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/nodes/nodes.md",tags:[],version:"current",lastUpdatedAt:1683149908,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"Nodes"},sidebar:"mySidebar",previous:{title:"Kubernetes Configuration Options",permalink:"/config-options/"},next:{title:"Private Registries",permalink:"/config-options/private-registries/"}},l={},d=[{value:"Node Configuration Example",id:"node-configuration-example",level:2},{value:"Kubernetes Roles",id:"kubernetes-roles",level:2},{value:"etcd",id:"etcd",level:3},{value:"Controlplane",id:"controlplane",level:3},{value:"Worker",id:"worker",level:3},{value:"Node Options",id:"node-options",level:2},{value:"Address",id:"address",level:3},{value:"Internal Address",id:"internal-address",level:3},{value:"Overriding the Hostname",id:"overriding-the-hostname",level:3},{value:"SSH Port",id:"ssh-port",level:3},{value:"SSH Users",id:"ssh-users",level:3},{value:"SSH Key Path",id:"ssh-key-path",level:3},{value:"SSH Key",id:"ssh-key",level:3},{value:"SSH Certificate Path",id:"ssh-certificate-path",level:3},{value:"SSH Certificate",id:"ssh-certificate",level:3},{value:"Docker Socket",id:"docker-socket",level:3},{value:"Labels",id:"labels",level:3},{value:"Taints",id:"taints",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nodes")," directive is the only required section in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," file. It's used by RKE to specify cluster node(s), ssh credentials used to access the node(s) and which roles these nodes will be in the Kubernetes cluster."),(0,r.kt)("h2",{id:"node-configuration-example"},"Node Configuration Example"),(0,r.kt)("p",null,"The following example shows node configuration in an example ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n    - address: 1.1.1.1\n      user: ubuntu\n      role:\n      - controlplane\n      - etcd\n      ssh_key_path: /home/user/.ssh/id_rsa\n      port: 2222\n    - address: 2.2.2.2\n      user: ubuntu\n      role:\n      - worker\n      ssh_key: |-\n        -----BEGIN RSA PRIVATE KEY-----\n\n        -----END RSA PRIVATE KEY-----\n    - address: 3.3.3.3\n      user: ubuntu\n      role:\n      - worker\n      ssh_key_path: /home/user/.ssh/id_rsa\n      ssh_cert_path: /home/user/.ssh/id_rsa-cert.pub\n    - address: 4.4.4.4\n      user: ubuntu\n      role:\n      - worker\n      ssh_key_path: /home/user/.ssh/id_rsa\n      ssh_cert: |-\n        ssh-rsa-cert-v01@openssh.com AAAAHHNza...\n      taints: # Available as of v0.3.0\n        - key: test-key\n          value: test-value\n          effect: NoSchedule\n    - address: example.com\n      user: ubuntu\n      role:\n      - worker\n      hostname_override: node3\n      internal_address: 192.168.1.6\n      labels:\n        app: ingress\n")),(0,r.kt)("h2",{id:"kubernetes-roles"},"Kubernetes Roles"),(0,r.kt)("p",null,"You can specify the list of roles that you want the node to be as part of the Kubernetes cluster. Three roles are supported: ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"worker"),". Node roles are not mutually exclusive. It's possible to assign any combination of roles to any node. It's also possible to change a node's role using the upgrade process."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before v0.1.8, workloads/pods might have run on any nodes with ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane")," roles, but as of v0.1.8, they will only be deployed to any ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," nodes.")),(0,r.kt)("h3",{id:"etcd"},"etcd"),(0,r.kt)("p",null,"With this role, the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," container will be run on these nodes.  Etcd keeps the state of your cluster and is the most important component in your cluster, single source of truth of your cluster. Although you can run etcd on just one node, it typically takes 3, 5 or more nodes to create an HA configuration. Etcd is a distributed reliable key-value store which stores all Kubernetes state. ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"Taint set on nodes")," with the ",(0,r.kt)("strong",{parentName:"p"},"etcd")," role is shown below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taint Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Taint Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Taint Effect"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"node-role.kubernetes.io/etcd")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NoExecute"))))),(0,r.kt)("h3",{id:"controlplane"},"Controlplane"),(0,r.kt)("p",null,"With this role, the stateless components that are used to deploy Kubernetes will run on these nodes. These components are used to run the API server, scheduler, and controllers. ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"Taint set on nodes")," with the ",(0,r.kt)("strong",{parentName:"p"},"controlplane")," role is shown below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Taint Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Taint Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Taint Effect"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"node-role.kubernetes.io/controlplane")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NoSchedule"))))),(0,r.kt)("h3",{id:"worker"},"Worker"),(0,r.kt)("p",null,"With this role, any workloads or pods that are deployed will land on these nodes."),(0,r.kt)("h2",{id:"node-options"},"Node Options"),(0,r.kt)("p",null,"Within each node, there are multiple directives that can be used."),(0,r.kt)("h3",{id:"address"},"Address"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," directive will be used to set the hostname or IP address of the node. RKE must be able to connect to this address."),(0,r.kt)("h3",{id:"internal-address"},"Internal Address"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_address")," provides the ability to have nodes with multiple addresses set a specific address to use for inter-host communication on a private network. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_address")," is not set, the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," is used for inter-host communication. The ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_address")," directive will set the address used for inter-host communication of the Kubernetes components, e.g. kube-apiserver and etcd. To change the interface used for the vxlan traffic of the Canal or Flannel network plug-ins please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/config-options/add-ons/network-plugins/"},"Network Plug-ins Documentation"),"."),(0,r.kt)("h3",{id:"overriding-the-hostname"},"Overriding the Hostname"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname_override")," is used to be able to provide a friendly name for RKE to use when registering the node in Kubernetes. This hostname doesn't need to be a routable address, but it must be a valid ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"},"Kubernetes resource name"),". If the ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname_override")," isn't set, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," directive is used when registering the node in Kubernetes."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When ",(0,r.kt)("a",{parentName:"p",href:"/config-options/cloud-providers/"},"cloud providers")," are configured, you may need to override the hostname in order to use the cloud provider correctly. There is an exception for the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#aws"},"AWS cloud provider"),", where the ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname_override")," field will be explicitly ignored.")),(0,r.kt)("h3",{id:"ssh-port"},"SSH Port"),(0,r.kt)("p",null,"In each node, you specify which ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," to be used when connecting to this node. The default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"22"),"."),(0,r.kt)("h3",{id:"ssh-users"},"SSH Users"),(0,r.kt)("p",null,"For each node, you specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," to be used when connecting to this node. This user must be a member of the Docker group or allowed to write to the node's Docker socket."),(0,r.kt)("h3",{id:"ssh-key-path"},"SSH Key Path"),(0,r.kt)("p",null,"For each node, you specify the path, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh_key_path"),", for the SSH private key to be used when connecting to this node. The default key path for each node is ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you have a private key that can be used across all nodes, you can set the ",(0,r.kt)("a",{parentName:"p",href:"/config-options/#cluster-level-ssh-key-path"},"SSH key path at the cluster level"),". The SSH key path set in each node will always take precedence.")),(0,r.kt)("h3",{id:"ssh-key"},"SSH Key"),(0,r.kt)("p",null,"Instead of setting the path to the SSH key, you can alternatively specify the actual key, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh_key"),", to be used to connect to the node."),(0,r.kt)("h3",{id:"ssh-certificate-path"},"SSH Certificate Path"),(0,r.kt)("p",null,"For each node, you can specify the path, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh_cert_path"),", for the signed SSH certificate to be used when connecting to this node."),(0,r.kt)("h3",{id:"ssh-certificate"},"SSH Certificate"),(0,r.kt)("p",null,"Instead of setting the path to the signed SSH certificate, you can alternatively specify the actual certificate, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh_cert"),", to be used to connect to the node."),(0,r.kt)("h3",{id:"docker-socket"},"Docker Socket"),(0,r.kt)("p",null,"If the Docker socket is different than the default, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_socket"),". The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/run/docker.sock")),(0,r.kt)("h3",{id:"labels"},"Labels"),(0,r.kt)("p",null,"You have the ability to add an arbitrary map of labels for each node. It can be used when using the ",(0,r.kt)("a",{parentName:"p",href:"/config-options/add-ons/ingress-controllers/"},"ingress controller's")," ",(0,r.kt)("inlineCode",{parentName:"p"},"node_selector")," option."),(0,r.kt)("h3",{id:"taints"},"Taints"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,r.kt)("p",null,"You have the ability to add ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," for each node."))}u.isMDXComponent=!0}}]);