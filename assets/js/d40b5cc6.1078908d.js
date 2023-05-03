"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[3545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=s,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:s,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(3117),s=(n(7294),n(3905));const o={title:"Backups and Disaster Recovery"},r=void 0,l={unversionedId:"etcd-snapshots/etcd-snapshots",id:"etcd-snapshots/etcd-snapshots",title:"Backups and Disaster Recovery",description:"Available as of v0.1.7",source:"@site/docs/etcd-snapshots/etcd-snapshots.md",sourceDirName:"etcd-snapshots",slug:"/etcd-snapshots/",permalink:"/etcd-snapshots/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/etcd-snapshots.md",tags:[],version:"current",lastUpdatedAt:1683149908,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"Backups and Disaster Recovery"},sidebar:"mySidebar",previous:{title:"Kubeconfig File",permalink:"/kubeconfig/"},next:{title:"One-time Snapshots",permalink:"/etcd-snapshots/one-time-snapshots/"}},i={},p=[{value:"Backing Up a Cluster",id:"backing-up-a-cluster",level:2},{value:"Restoring a Cluster from Backup",id:"restoring-a-cluster-from-backup",level:2},{value:"Example Scenarios",id:"example-scenarios",level:2},{value:"How Snapshots Work",id:"how-snapshots-work",level:2},{value:"Snapshot Naming",id:"snapshot-naming",level:3},{value:"How Restoring from a Snapshot Works",id:"how-restoring-from-a-snapshot-works",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v0.1.7")),(0,s.kt)("p",null,"RKE clusters can be configured to automatically take snapshots of etcd. In a disaster scenario, you can restore these snapshots, which are stored on other nodes in the cluster. Snapshots are always saved locally in ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,s.kt)("p",null,"RKE can upload your snapshots to a S3 compatible backend."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," As of RKE v0.2.0, the ",(0,s.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz")," file is no longer required because of a change in how the ",(0,s.kt)("a",{parentName:"p",href:"installation/#kubernetes-cluster-state"},"Kubernetes cluster state is stored"),"."),(0,s.kt)("h2",{id:"backing-up-a-cluster"},"Backing Up a Cluster"),(0,s.kt)("p",null,"You can create ",(0,s.kt)("a",{parentName:"p",href:"etcd-snapshots/one-time-snapshots"},"one-time snapshots")," to back up your cluster, and you can also configure ",(0,s.kt)("a",{parentName:"p",href:"etcd-snapshots/recurring-snapshots"},"recurring snapshots"),"."),(0,s.kt)("h2",{id:"restoring-a-cluster-from-backup"},"Restoring a Cluster from Backup"),(0,s.kt)("p",null,"You can use RKE to ",(0,s.kt)("a",{parentName:"p",href:"etcd-snapshots/restoring-from-backup"},"restore your cluster from backup"),"."),(0,s.kt)("h2",{id:"example-scenarios"},"Example Scenarios"),(0,s.kt)("p",null,"These ",(0,s.kt)("a",{parentName:"p",href:"etcd-snapshots/example-scenarios"},"example scenarios")," for backup and restore are different based on your version of RKE."),(0,s.kt)("h2",{id:"how-snapshots-work"},"How Snapshots Work"),(0,s.kt)("p",null,"For each etcd node in the cluster, the etcd cluster health is checked. If the node reports that the etcd cluster is healthy, a snapshot is created from it and optionally uploaded to S3."),(0,s.kt)("p",null,"The snapshot is stored in ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),". If the directory is configured on the nodes as a shared mount, it will be overwritten. On S3, the snapshot will always be from the last node that uploads it, as all etcd nodes upload it and the last will remain."),(0,s.kt)("p",null,"In the case when multiple etcd nodes exist, any created snapshot is created after the cluster has been health checked, so it can be considered a valid snapshot of the data in the etcd cluster."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v1.1.4")),(0,s.kt)("p",null,"Each snapshot will include the cluster state file in addition to the etcd snapshot file."),(0,s.kt)("h3",{id:"snapshot-naming"},"Snapshot Naming"),(0,s.kt)("p",null,"The name of the snapshot is auto-generated. The ",(0,s.kt)("inlineCode",{parentName:"p"},"--name")," option can be used to override the name of the snapshot when creating one-time snapshots with the RKE CLI."),(0,s.kt)("p",null,"An example one-time snapshot name is ",(0,s.kt)("inlineCode",{parentName:"p"},"rke_etcd_snapshot_2020-10-15T16:47:24+02:00"),". An example recurring snapshot name is ",(0,s.kt)("inlineCode",{parentName:"p"},"2020-10-15T14:53:26Z_etcd"),"."),(0,s.kt)("h3",{id:"how-restoring-from-a-snapshot-works"},"How Restoring from a Snapshot Works"),(0,s.kt)("p",null,"On restore, the following process is used:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The snapshot is retrieved from S3, if S3 is configured."),(0,s.kt)("li",{parentName:"ol"},"The snapshot is unzipped (if zipped)."),(0,s.kt)("li",{parentName:"ol"},"It is checked if the cluster state file is included in the snapshot, if it is included, it will be used instead of the local cluster state file (",(0,s.kt)("em",{parentName:"li"},"Available as of v1.1.4"),")"),(0,s.kt)("li",{parentName:"ol"},"One of the etcd nodes in the cluster serves that snapshot file to the other nodes."),(0,s.kt)("li",{parentName:"ol"},"The other etcd nodes download the snapshot and validate the checksum so that they all use the same snapshot for the restore."),(0,s.kt)("li",{parentName:"ol"},"The cluster is restored and post-restore actions will be done in the cluster.")),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("p",null,"If you have trouble restoring your cluster, you can refer to the ",(0,s.kt)("a",{parentName:"p",href:"etcd-snapshots/troubleshooting"},"troubleshooting")," page."))}u.isMDXComponent=!0}}]);