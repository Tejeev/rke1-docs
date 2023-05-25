"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,b=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(3117),o=(n(7294),n(3905));const i={title:"Kubeconfig File"},a=void 0,c={unversionedId:"kubeconfig/kubeconfig",id:"kubeconfig/kubeconfig",title:"Kubeconfig File",description:"In order to start interacting with your Kubernetes cluster, you will use a different binary called kubectl. You will need to install kubectl on your local machine.",source:"@site/docs/kubeconfig/kubeconfig.md",sourceDirName:"kubeconfig",slug:"/kubeconfig/",permalink:"/kubeconfig/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/kubeconfig/kubeconfig.md",tags:[],version:"current",lastUpdatedAt:1685049943,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{title:"Kubeconfig File"},sidebar:"mySidebar",previous:{title:"Configuring the Upgrade Strategy",permalink:"/upgrades/configuring-strategy/"},next:{title:"Backups and Disaster Recovery",permalink:"/etcd-snapshots/"}},l={},u=[],s={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to start interacting with your Kubernetes cluster, you will use a different binary called ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),". You will need to ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"install kubectl")," on your local machine."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"kubeconfig file")," is a file used to configure access to Kubernetes when used in conjunction with the kubectl commandline tool (or other clients)."),(0,o.kt)("p",null,"For more details on how kubeconfig and kubectl work together, see the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"},"Kubernetes documentation"),"."),(0,o.kt)("p",null,"When you deployed Kubernetes, a kubeconfig is automatically generated for your RKE cluster. This file is created and saved as ",(0,o.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"By default, kubectl checks ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," for a kubeconfig file, but you can use any directory you want using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," flag. For example:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /custom/path/kube.config get pods\n"))),(0,o.kt)("p",null,"Confirm that kubectl is working by checking the version of your Kubernetes cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl --kubeconfig kube_config_cluster.yml version\n\nClient Version: version.Info{Major:"1", Minor:"10", GitVersion:"v1.10.0", GitCommit:"fc32d2f3698e36b93322a3465f63a14e9f0eaead", GitTreeState:"clean", BuildDate:"2018-03-27T00:13:02Z", GoVersion:"go1.9.4", Compiler:"gc", Platform:"darwin/amd64"}\nServer Version: version.Info{Major:"1", Minor:"8+", GitVersion:"v1.8.9-rancher1", GitCommit:"68595e18f25e24125244e9966b1e5468a98c1cd4", GitTreeState:"clean", BuildDate:"2018-03-13T04:37:53Z", GoVersion:"go1.8.3", Compiler:"gc", Platform:"linux/amd64"}\n')),(0,o.kt)("p",null,"The client and server version are reported, indicating that you have a local ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," client and are able to request the server version from the newly built cluster. Now, you can issue ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/kubectl/"},"any kubectl command")," to your cluster, like requesting the nodes that are in the cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_cluster.yml get nodes\nNAME            STATUS    ROLES                      AGE       VERSION\n10.0.0.1         Ready     controlplane,etcd,worker   35m       v1.10.3-rancher1\n")))}f.isMDXComponent=!0}}]);