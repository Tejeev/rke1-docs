"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[9381],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return a?t.createElement(m,l(l({ref:n},p),{},{components:a})):t.createElement(m,l({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3883:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=a(3117),r=(a(7294),a(3905));const o={title:"Configuring the Upgrade Strategy"},l=void 0,i={unversionedId:"upgrades/configuring-strategy/configuring-strategy",id:"upgrades/configuring-strategy/configuring-strategy",title:"Configuring the Upgrade Strategy",description:"In this section, you'll learn how to configure the maximum number of unavailable controlplane and worker nodes, how to drain nodes before upgrading them, and how to configure the replicas for addons such as Ingress.",source:"@site/docs/upgrades/configuring-strategy/configuring-strategy.md",sourceDirName:"upgrades/configuring-strategy",slug:"/upgrades/configuring-strategy/",permalink:"/upgrades/configuring-strategy/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/upgrades/configuring-strategy/configuring-strategy.md",tags:[],version:"current",lastUpdatedAt:1678917042,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{title:"Configuring the Upgrade Strategy"},sidebar:"mySidebar",previous:{title:"Maintaining Availability for Applications During Upgrades",permalink:"/upgrades/maintaining-availability/"},next:{title:"Kubeconfig File",permalink:"/kubeconfig/"}},s={},d=[{value:"Maximum Unavailable Nodes",id:"maximum-unavailable-nodes",level:3},{value:"Draining Nodes",id:"draining-nodes",level:3},{value:"Replicas for Ingress and Networking Addons",id:"replicas-for-ingress-and-networking-addons",level:3},{value:"Replicas for DNS and Monitoring Addons",id:"replicas-for-dns-and-monitoring-addons",level:3},{value:"Example cluster.yml",id:"example-clusteryml",level:3}],p={toc:d},u="wrapper";function c(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, you'll learn how to configure the maximum number of unavailable controlplane and worker nodes, how to drain nodes before upgrading them, and how to configure the replicas for addons such as Ingress."),(0,r.kt)("h3",{id:"maximum-unavailable-nodes"},"Maximum Unavailable Nodes"),(0,r.kt)("p",null,"The maximum number of unavailable controlplane and worker nodes can be configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," before upgrading the cluster:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"max_unavailable_controlplane:")," The maximum number of controlplane nodes that can fail without causing the cluster upgrade to fail. By default, ",(0,r.kt)("inlineCode",{parentName:"li"},"max_unavailable_controlplane")," is defined as one node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"max_unavailable_worker:")," The maximum number of worker nodes that can fail without causing the cluster upgrade to fail. By default, ",(0,r.kt)("inlineCode",{parentName:"li"},"max_unavailable_worker")," is defined as 10 percent of all worker nodes.*")),(0,r.kt)("p",null,"/*  This number can be configured as a percentage or as an integer. When defined as a percentage, the batch size is rounded down to the nearest node, with a minimum of one node per batch."),(0,r.kt)("p",null,"An example configuration of the cluster upgrade strategy is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"upgrade_strategy:\n  max_unavailable_worker: 10%\n  max_unavailable_controlplane: 1\n")),(0,r.kt)("h3",{id:"draining-nodes"},"Draining Nodes"),(0,r.kt)("p",null,"By default, nodes are cordoned first before upgrading. Each node should always be cordoned before starting its upgrade so that new pods will not be scheduled to it, and traffic will not reach the node. In addition to cordoning each node, RKE can also be configured to drain each node before starting its upgrade. Draining a node will evict all the pods running on the computing resource."),(0,r.kt)("p",null,"For information on draining and how to safely drain a node, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"},"Kubernetes documentation.")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"drain")," directive is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", worker nodes will be drained before they are upgraded. The default value is false:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"upgrade_strategy:\n  max_unavailable_worker: 10%\n  max_unavailable_controlplane: 1\n  drain: false\n  node_drain_input:\n    force: false\n    ignore_daemonsets: true\n    delete_local_data: false\n    grace_period: -1 // grace period specified for each pod spec will be used\n    timeout: 60\n")),(0,r.kt)("h3",{id:"replicas-for-ingress-and-networking-addons"},"Replicas for Ingress and Networking Addons"),(0,r.kt)("p",null,"The Ingress and network addons are launched as Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"daemonsets.")," If no value is given for the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy"},"update strategy,")," Kubernetes sets the update strategy to ",(0,r.kt)("inlineCode",{parentName:"p"},"rollingUpdate")," by default, with ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," set to 1."),(0,r.kt)("p",null,"An example configuration of the Ingress and network addons is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"ingress:\n  provider: nginx\n  update_strategy:\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 5\nnetwork:\n  plugin: canal\n  update_strategy:\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 6\n")),(0,r.kt)("h3",{id:"replicas-for-dns-and-monitoring-addons"},"Replicas for DNS and Monitoring Addons"),(0,r.kt)("p",null,"The DNS and monitoring addons are launched as Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"deployments.")," These addons include ",(0,r.kt)("inlineCode",{parentName:"p"},"coredns"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kubedns"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics-server"),", the monitoring deployment."),(0,r.kt)("p",null,"If no value is configured for their ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy"},"update strategy")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", Kubernetes sets the update strategy to ",(0,r.kt)("inlineCode",{parentName:"p"},"rollingUpdate")," by default, with ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," set to 25% and ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSurge")," set to 25%."),(0,r.kt)("p",null,"The DNS addons use ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-proportional-autoscaler"),", which is an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/cluster-proportional-autoscaler"},"open-source container image")," that watches over the number of schedulable nodes and cores of the cluster and resizes the number of replicas for the required resource. This functionality is useful for applications that need to be autoscaled with the number of nodes in the cluster. For the DNS addon, the fields needed for the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-proportional-autoscaler")," are made configurable."),(0,r.kt)("p",null,"The following table shows the default values for these fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coresPerReplica"),(0,r.kt)("td",{parentName:"tr",align:null},"128")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodesPerReplica"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"preventSinglePointFailure"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-proportional-autoscaler")," uses this formula to calculate the number of replicas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"replicas = max( ceil( cores * 1/coresPerReplica ) , ceil( nodes * 1/nodesPerReplica ) )\nreplicas = min(replicas, max)\nreplicas = max(replicas, min)\n")),(0,r.kt)("p",null,"An example configuration of the DNS and monitoring addons is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dns:\n  provider: coredns\n  update_strategy:\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 20%\n      maxSurge: 15%\n  linear_autoscaler_params:\n    cores_per_replica: 0.34\n    nodes_per_replica: 4\n    prevent_single_point_failure: true\n    min: 2\n    max: 3\nmonitoring:\n  provider: metrics-server\n  update_strategy:\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 8\n")),(0,r.kt)("h3",{id:"example-clusteryml"},"Example cluster.yml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# If you intened to deploy Kubernetes in an air-gapped environment,\n# please consult the documentation on how to configure custom RKE images.\nnodes:\n# At least three etcd nodes, two controlplane nodes, and two worker nodes,\n# nodes skipped for brevity\nupgrade_strategy:\n  max_unavailable_worker: 10%\n  max_unavailable_controlplane: 1\n  drain: false\n  node_drain_input:\n    force: false\n    ignore_daemonsets: true\n    delete_local_data: false\n    grace_period: -1 // grace period specified for each pod spec will be used\n    timeout: 60\ningress:\n  provider: nginx\n  update_strategy: # Available in v2.4\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 5\nnetwork:\n  plugin: canal\n  update_strategy: # Available in v2.4\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 6\ndns:\n  provider: coredns\n  update_strategy: # Available in v2.4\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 20%\n      maxSurge: 15%\n  linear_autoscaler_params:\n    cores_per_replica: 0.34\n    nodes_per_replica: 4\n    prevent_single_point_failure: true\n    min: 2\n    max: 3\nmonitoring:\n  provider: metrics-server\n  update_strategy: # Available in v2.4\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 8\n")))}c.isMDXComponent=!0}}]);