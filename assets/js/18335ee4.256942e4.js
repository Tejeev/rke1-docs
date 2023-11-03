"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[9375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=r(3117),a=(r(7294),r(3905));const i={title:"Custom Certificates"},l=void 0,c={unversionedId:"installation/certs/certs",id:"installation/certs/certs",title:"Custom Certificates",description:"Available as of v0.2.0",source:"@site/docs/installation/certs/certs.md",sourceDirName:"installation/certs",slug:"/installation/certs/",permalink:"/installation/certs/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/installation/certs/certs.md",tags:[],version:"current",lastUpdatedAt:1679505326,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{title:"Custom Certificates"},sidebar:"mySidebar",previous:{title:"RKE Kubernetes Installation",permalink:"/installation/"},next:{title:"Upgrades",permalink:"/upgrades/"}},s={},o=[{value:"Using Custom Certificates",id:"using-custom-certificates",level:2},{value:"Certificates",id:"certificates",level:2},{value:"Generating Certificate Signing Requests (CSRs) and Keys",id:"generating-certificate-signing-requests-csrs-and-keys",level:2}],p={toc:o},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,a.kt)("p",null,"By default, Kubernetes clusters require certificates and RKE auto-generates the certificates for all the Kubernetes services. RKE can also use custom certificates for these Kubernetes services."),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/installation/#deploying-kubernetes-with-rke"},"deploying Kubernetes with RKE"),", there are two additional options that can be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up")," so that RKE uses custom certificates."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--custom-certs")),(0,a.kt)("td",{parentName:"tr",align:null},"Use custom certificates from a cert dir. The default directory is ",(0,a.kt)("inlineCode",{parentName:"td"},"/cluster_certs"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--cert-dir")," value"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify a certificate dir path")))),(0,a.kt)("h2",{id:"using-custom-certificates"},"Using Custom Certificates"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Use certificates located in the default directory `/cluster_certs`\n$ rke up --custom-certs\n\n# Use certificates located in your own directory\n$ rke up --custom-certs --cert-dir ~/my/own/certs\n")),(0,a.kt)("h2",{id:"certificates"},"Certificates"),(0,a.kt)("p",null,"The following certificates must exist in the certificate directory."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Certificate"),(0,a.kt)("th",{parentName:"tr",align:null},"Key"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Master CA"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-ca.pem"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kube API"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-apiserver.pem"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-apiserver-key.pem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kube Controller Manager"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-controller-manager.pem"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-controller-manager-key.pem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kube Scheduler"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-scheduler.pem"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-scheduler-key.pem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kube Proxy"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-proxy.pem"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-proxy-key.pem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kube Admin"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-admin.pem"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-admin-key.pem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kube Node"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-node.pem"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-node-key.pem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Apiserver Proxy Client"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-apiserver-proxy-client.pem"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-apiserver-proxy-client-key.pem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Etcd Nodes"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-etcd-x-x-x-x.pem"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-etcd-x-x-x-x-key.pem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kube Api Request Header CA"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-apiserver-requestheader-ca.pem*"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-apiserver-requestheader-ca-key.pem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Service Account Token"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-service-account-token-key.pem")))),(0,a.kt)("p",null,"*"," Is the same as kube-ca.pem"),(0,a.kt)("h2",{id:"generating-certificate-signing-requests-csrs-and-keys"},"Generating Certificate Signing Requests (CSRs) and Keys"),(0,a.kt)("p",null,"If you want to create and sign the certificates by a real Certificate Authority (CA), you can use RKE to generate a set of Certificate Signing Requests (CSRs) and keys. Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke cert generate-csr")," command, you can generate the CSRs and keys."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up your ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml")," with the ",(0,a.kt)("a",{parentName:"p",href:"/config-options/nodes/"},"node information"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"rke cert generate-csr")," to generate certificates for the node(s) in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". By default, the CSRs and keys will be saved in ",(0,a.kt)("inlineCode",{parentName:"p"},"./cluster_certs"),". To have them saved in a different directory, use ",(0,a.kt)("inlineCode",{parentName:"p"},"--cert-dir")," to define what directory to have them saved in."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ rke cert generate-csr\nINFO[0000] Generating Kubernetes cluster CSR certificates\nINFO[0000] [certificates] Generating Kubernetes API server csr\nINFO[0000] [certificates] Generating Kube Controller csr\nINFO[0000] [certificates] Generating Kube Scheduler csr\nINFO[0000] [certificates] Generating Kube Proxy csr\nINFO[0001] [certificates] Generating Node csr and key\nINFO[0001] [certificates] Generating admin csr and kubeconfig\nINFO[0001] [certificates] Generating Kubernetes API server proxy client csr\nINFO[0001] [certificates] Generating etcd-x.x.x.x csr and key\nINFO[0001] Successfully Deployed certificates at [./cluster_certs]\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In addition to the CSRs, you also need to generate the kube-service-account-token-key.pem key. To do this, run the following:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./cluster_certs/kube-service-account-token-key.pem -out ./cluster_certs/kube-service-account-token.pem\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The CSRs and keys will be deployed in ",(0,a.kt)("inlineCode",{parentName:"p"},"./cluster_certs")," directory, assuming you didn't specify a ",(0,a.kt)("inlineCode",{parentName:"p"},"--cert-dir"),". The CSR files will contain the right Alternative DNS and IP Names for the certificates. You can use them to sign the certificates by a real CA. After the certificates are signed, those certificates can be used by RKE as custom certificates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ tree cluster_certs\n\ncluster_certs\n\u251c\u2500\u2500 kube-admin-csr.pem\n\u251c\u2500\u2500 kube-admin-key.pem\n\u251c\u2500\u2500 kube-apiserver-csr.pem\n\u251c\u2500\u2500 kube-apiserver-key.pem\n\u251c\u2500\u2500 kube-apiserver-proxy-client-csr.pem\n\u251c\u2500\u2500 kube-apiserver-proxy-client-key.pem\n\u251c\u2500\u2500 kube-controller-manager-csr.pem\n\u251c\u2500\u2500 kube-controller-manager-key.pem\n\u251c\u2500\u2500 kube-etcd-x-x-x-x-csr.pem\n\u251c\u2500\u2500 kube-etcd-x-x-x-x-key.pem\n\u251c\u2500\u2500 kube-node-csr.pem\n\u251c\u2500\u2500 kube-node-key.pem\n\u251c\u2500\u2500 kube-proxy-csr.pem\n\u251c\u2500\u2500 kube-proxy-key.pem\n\u251c\u2500\u2500 kube-scheduler-csr.pem\n\u251c\u2500\u2500 kube-service-account-token-key.pem\n\u251c\u2500\u2500 kube-service-account-token.pem\n\u2514\u2500\u2500 kube-scheduler-key.pem\n\n0 directories, 18 files\n\n")))}d.isMDXComponent=!0}}]);