"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[3595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(4334);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(3117),a=r(7294),i=r(4334),o=r(2466),s=r(6775),l=r(1980),u=r(7392),p=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=c(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,u]=f({queryString:r,groupId:n}),[d,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),g=(()=>{const e=l??d;return h({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var g=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==s&&(d(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:c},o,{className:(0,i.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=m(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},1332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(3117),a=(r(7294),r(3905)),i=r(4866),o=r(5162);const s={title:"Upgrades"},l=void 0,u={unversionedId:"upgrades/upgrades",id:"upgrades/upgrades",title:"Upgrades",description:"After RKE has deployed Kubernetes, you can upgrade the versions of the components in your Kubernetes cluster, the definition of the Kubernetes services or the add-ons.",source:"@site/docs/upgrades/upgrades.md",sourceDirName:"upgrades",slug:"/upgrades/",permalink:"/upgrades/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/upgrades/upgrades.md",tags:[],version:"current",lastUpdatedAt:1690506652,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{title:"Upgrades"},sidebar:"mySidebar",previous:{title:"Custom Certificates",permalink:"/installation/certs/"},next:{title:"How Upgrades Work",permalink:"/upgrades/how-upgrades-work/"}},p={},d=[{value:"How Upgrades Work",id:"how-upgrades-work",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Upgrading Kubernetes",id:"upgrading-kubernetes",level:3},{value:"Configuring the Upgrade Strategy",id:"configuring-the-upgrade-strategy",level:3},{value:"Maintaining Availability for Applications During Upgrades",id:"maintaining-availability-for-applications-during-upgrades",level:3},{value:"Listing Supported Kubernetes Versions",id:"listing-supported-kubernetes-versions",level:3},{value:"Kubernetes Version Precedence",id:"kubernetes-version-precedence",level:3},{value:"Using an Unsupported Kubernetes Version",id:"using-an-unsupported-kubernetes-version",level:3},{value:"Mapping the Kubernetes Version to Services",id:"mapping-the-kubernetes-version-to-services",level:3},{value:"Service Upgrades",id:"service-upgrades",level:3},{value:"Upgrading Nodes Manually",id:"upgrading-nodes-manually",level:3},{value:"Rolling Back the Kubernetes Version",id:"rolling-back-the-kubernetes-version",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],c={toc:d},h="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After RKE has deployed Kubernetes, you can upgrade the versions of the components in your Kubernetes cluster, the ",(0,a.kt)("a",{parentName:"p",href:"/config-options/services/"},"definition of the Kubernetes services")," or the ",(0,a.kt)("a",{parentName:"p",href:"/config-options/add-ons/"},"add-ons"),"."),(0,a.kt)("p",null,"The default Kubernetes version for each RKE version can be found in the release notes accompanying ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke/releases/"},"the RKE download"),". RKE v1.x should be used."),(0,a.kt)("p",null,"You can also select a newer version of Kubernetes to install for your cluster."),(0,a.kt)("p",null,"Each version of RKE has a specific ",(0,a.kt)("a",{parentName:"p",href:"#listing-supported-kubernetes-versions"},"list of supported Kubernetes versions.")),(0,a.kt)("p",null,"In case the Kubernetes version is defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes_version")," directive and under the ",(0,a.kt)("inlineCode",{parentName:"p"},"system-images")," directive, the ",(0,a.kt)("inlineCode",{parentName:"p"},"system-images")," configuration will take precedence over the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes_version"),"."),(0,a.kt)("h3",{id:"how-upgrades-work"},"How Upgrades Work"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/upgrades/how-upgrades-work/"},"this section,")," you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure that any ",(0,a.kt)("inlineCode",{parentName:"li"},"system_images")," configuration is absent from the ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster.yml"),". The Kubernetes version should only be listed under the ",(0,a.kt)("inlineCode",{parentName:"li"},"system_images")," directive if an ",(0,a.kt)("a",{parentName:"li",href:"#using-an-unsupported-kubernetes-version"},"unsupported version")," is being used. Refer to ",(0,a.kt)("a",{parentName:"li",href:"#kubernetes-version-precedence"},"Kubernetes version precedence")," for more information."),(0,a.kt)("li",{parentName:"ul"},"Ensure that the correct files to manage ",(0,a.kt)("a",{parentName:"li",href:"/installation/#kubernetes-cluster-state"},"Kubernetes cluster state")," are present in the working directory. Refer to the tabs below for the required files, which differ based on the RKE version.")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"RKE v0.2.0+",mdxType:"TabItem"},"The `cluster.rkestate` file contains the current state of the cluster including the RKE configuration and the certificates.",(0,a.kt)("p",null,"This file is created in the same directory that has the cluster configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,a.kt)("p",null,"It is required to keep the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.rkestate")," file to perform any operation on the cluster through RKE, or when upgrading a cluster last managed via RKE v0.2.0 or later.")),(0,a.kt)(o.Z,{value:"RKE before v0.2.0",mdxType:"TabItem"},"Ensure that the `kube_config_cluster.yml` file is present in the working directory.",(0,a.kt)("p",null,"RKE saves the Kubernetes cluster state as a secret. When updating the state, RKE pulls the secret, updates or changes the state, and saves a new secret. The ",(0,a.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml")," file is required for upgrading a cluster last managed via RKE v0.1.x."))),(0,a.kt)("h3",{id:"upgrading-kubernetes"},"Upgrading Kubernetes"),(0,a.kt)("p",null,"To upgrade the Kubernetes version of an RKE-provisioned cluster, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes_version")," string in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml")," to the desired version from the ",(0,a.kt)("a",{parentName:"p",href:"#listing-supported-kubernetes-versions"},"list of supported Kubernetes versions")," for the specific version of RKE:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'kubernetes_version: "v1.15.5-rancher1-1"\n')),(0,a.kt)("p",null,"Then invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke up --config cluster.yml\n")),(0,a.kt)("h3",{id:"configuring-the-upgrade-strategy"},"Configuring the Upgrade Strategy"),(0,a.kt)("p",null,"As of v0.1.8, upgrades to add-ons are supported. ",(0,a.kt)("a",{parentName:"p",href:"/config-options/add-ons/"},"Add-ons")," can also be upgraded by changing any of the add-ons and running ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up")," again with the updated configuration file."),(0,a.kt)("p",null,"As of v1.1.0, additional upgrade options became available to give you more granular control over the upgrade process. These options can be used to maintain availability of your applications during a cluster upgrade."),(0,a.kt)("p",null,"For details on upgrade configuration options, refer to ",(0,a.kt)("a",{parentName:"p",href:"/upgrades/configuring-strategy/"},"Configuring the Upgrade Strategy.")),(0,a.kt)("h3",{id:"maintaining-availability-for-applications-during-upgrades"},"Maintaining Availability for Applications During Upgrades"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/upgrades/maintaining-availability/"},"this section,")," you'll learn the requirements to prevent downtime for your applications when you upgrade the cluster using ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up"),"."),(0,a.kt)("h3",{id:"listing-supported-kubernetes-versions"},"Listing Supported Kubernetes Versions"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke/releases"},"release notes")," of the RKE version that you are running, to find the list of supported Kubernetes versions as well as the default Kubernetes version. Note: RKE v1.x should be used."),(0,a.kt)("p",null,"You can also list the supported versions and system images of specific version of RKE release with a quick command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke config --list-version --all\nv1.15.3-rancher2-1\nv1.13.10-rancher1-2\nv1.14.6-rancher2-1\nv1.16.0-beta.1-rancher1-1\n")),(0,a.kt)("h3",{id:"kubernetes-version-precedence"},"Kubernetes Version Precedence"),(0,a.kt)("p",null,"In case both ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes_version")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"system_images")," are defined, the ",(0,a.kt)("inlineCode",{parentName:"p"},"system_images")," configuration will take precedence over ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes_version"),"."),(0,a.kt)("p",null,"In addition, if neither ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes_version")," nor ",(0,a.kt)("inlineCode",{parentName:"p"},"system_images")," are configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", RKE will apply the default Kubernetes version for the specific version of RKE used to invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up"),"."),(0,a.kt)("h3",{id:"using-an-unsupported-kubernetes-version"},"Using an Unsupported Kubernetes Version"),(0,a.kt)("p",null,"As of v0.2.0, if a version is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes_version")," and is not found in the specific list of supported Kubernetes versions, then RKE will error out."),(0,a.kt)("p",null,"Before v0.2.0, if a version is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes_version")," and is not found in the specific list of supported Kubernetes versions,  the default version from the supported list is used."),(0,a.kt)("p",null,"If you want to use a different version from the supported list, please use the ",(0,a.kt)("a",{parentName:"p",href:"/config-options/system-images/"},"system images")," option."),(0,a.kt)("h3",{id:"mapping-the-kubernetes-version-to-services"},"Mapping the Kubernetes Version to Services"),(0,a.kt)("p",null,"In RKE, ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes_version")," is used to map the version of Kubernetes to the default services, parameters, and options."),(0,a.kt)("p",null,"For RKE v0.3.0+, the service defaults are located ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/kontainer-driver-metadata/blob/master/rke/k8s_service_options.go"},"here"),"."),(0,a.kt)("p",null,"For RKE before v0.3.0, the service defaults are located ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/types/blob/release/v2.2/apis/management.cattle.io/v3/k8s_defaults.go"},"here"),". Note: The version in the path of the service defaults file corresponds to a Rancher version. Therefore, for Rancher v2.1.x, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/types/blob/release/v2.1/apis/management.cattle.io/v3/k8s_defaults.go"},"this file")," should be used."),(0,a.kt)("h3",{id:"service-upgrades"},"Service Upgrades"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/config-options/services/"},"Services")," can be upgraded by changing any of the services arguments or ",(0,a.kt)("inlineCode",{parentName:"p"},"extra_args")," and running ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up")," again with the updated configuration file."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The following arguments, ",(0,a.kt)("inlineCode",{parentName:"p"},"service_cluster_ip_range")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster_cidr"),", cannot be changed as any changes to these arguments will result in a broken cluster. Currently, network pods are not automatically upgraded.")),(0,a.kt)("h3",{id:"upgrading-nodes-manually"},"Upgrading Nodes Manually"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,a.kt)("p",null,"You can manually update each type of node separately. As a best practice, upgrade the etcd nodes first, followed by controlplane and then worker nodes."),(0,a.kt)("h3",{id:"rolling-back-the-kubernetes-version"},"Rolling Back the Kubernetes Version"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,a.kt)("p",null,"A cluster can be restored back to a snapshot that uses a previous Kubernetes version."),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Applies to v1.1.0+")),(0,a.kt)("p",null,"If a node doesn't come up after an upgrade, the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up")," command errors out."),(0,a.kt)("p",null,"No upgrade will proceed if the number of unavailable nodes exceeds the configured maximum."),(0,a.kt)("p",null,"If an upgrade stops, you may need to fix an unavailable node or remove it from the cluster before the upgrade can continue."),(0,a.kt)("p",null,"A failed node could be in many different states:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Powered off"),(0,a.kt)("li",{parentName:"ul"},"Unavailable"),(0,a.kt)("li",{parentName:"ul"},"User drains a node while upgrade is in process, so there are no kubelets on the node"),(0,a.kt)("li",{parentName:"ul"},"The upgrade itself failed")),(0,a.kt)("p",null,"Some expected failure scenarios include the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the maximum unavailable number of nodes is reached during an upgrade, the RKE CLI will error out and exit the CLI with a failure code."),(0,a.kt)("li",{parentName:"ul"},"If some nodes fail to upgrade, but the number of failed nodes doesn't reach the maximum unavailable number of nodes, the RKE CLI logs the nodes that were unable to upgrade and continues to upgrade the add-ons. After the add-ons are upgraded, RKE will error out and exit the CLI with a failure code regardless of add-on upgrade status.")))}f.isMDXComponent=!0}}]);