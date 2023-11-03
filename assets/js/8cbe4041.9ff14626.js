"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[1779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),l=p(n),d=s,f=l["".concat(c,".").concat(d)]||l[d]||u[d]||r;return n?o.createElement(f,i(i({ref:t},h),{},{components:n})):o.createElement(f,i({ref:t},h))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:s,i[1]=a;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=n(3117),s=(n(7294),n(3905));const r={title:"Bastion/Jump Host Configuration"},i=void 0,a={unversionedId:"config-options/bastion-host/bastion-host",id:"config-options/bastion-host/bastion-host",title:"Bastion/Jump Host Configuration",description:"Since RKE uses ssh to connect to nodes, you can configure the cluster.yml so RKE will use a bastion host. Keep in mind that the port requirements for the RKE node move to the configured bastion host. Our private SSH key(s) only needs to reside on the host running RKE. You do not need to copy your private SSH key(s) to the bastion host.",source:"@site/docs/config-options/bastion-host/bastion-host.md",sourceDirName:"config-options/bastion-host",slug:"/config-options/bastion-host/",permalink:"/config-options/bastion-host/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/bastion-host/bastion-host.md",tags:[],version:"current",lastUpdatedAt:1690506652,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{title:"Bastion/Jump Host Configuration"},sidebar:"mySidebar",previous:{title:"Private Registries",permalink:"/config-options/private-registries/"},next:{title:"System Images",permalink:"/config-options/system-images/"}},c={},p=[{value:"Bastion Host Options",id:"bastion-host-options",level:2},{value:"Address",id:"address",level:3},{value:"SSH Port",id:"ssh-port",level:3},{value:"SSH Users",id:"ssh-users",level:3},{value:"SSH Key Path",id:"ssh-key-path",level:3},{value:"SSH Key",id:"ssh-key",level:3},{value:"SSH Certificate Path",id:"ssh-certificate-path",level:3},{value:"SSH Certificate",id:"ssh-certificate",level:3}],h={toc:p},l="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(l,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Since RKE uses ",(0,s.kt)("inlineCode",{parentName:"p"},"ssh")," to connect to ",(0,s.kt)("a",{parentName:"p",href:"/config-options/nodes/"},"nodes"),", you can configure the ",(0,s.kt)("inlineCode",{parentName:"p"},"cluster.yml")," so RKE will use a bastion host. Keep in mind that the ",(0,s.kt)("a",{parentName:"p",href:"/os/#ports"},"port requirements")," for the RKE node move to the configured bastion host. Our private SSH key(s) only needs to reside on the host running RKE. You do not need to copy your private SSH key(s) to the bastion host."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"bastion_host:\n    address: x.x.x.x\n    user: ubuntu\n    port: 22\n    ssh_key_path: /home/user/.ssh/bastion_rsa\n    # or\n    # ssh_key: |-\n    #   -----BEGIN RSA PRIVATE KEY-----\n    #\n    #   -----END RSA PRIVATE KEY-----\n    # Optionally using SSH certificates\n    # ssh_cert_path: /home/user/.ssh/id_rsa-cert.pub\n    # or\n    # ssh_cert: |-\n    #   ssh-rsa-cert-v01@openssh.com AAAAHHNza...\n")),(0,s.kt)("h2",{id:"bastion-host-options"},"Bastion Host Options"),(0,s.kt)("h3",{id:"address"},"Address"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"address")," directive will be used to set the hostname or IP address of the bastion host. RKE must be able to connect to this address."),(0,s.kt)("h3",{id:"ssh-port"},"SSH Port"),(0,s.kt)("p",null,"You specify which ",(0,s.kt)("inlineCode",{parentName:"p"},"port")," to be used when connecting to the bastion host. The default port is ",(0,s.kt)("inlineCode",{parentName:"p"},"22"),"."),(0,s.kt)("h3",{id:"ssh-users"},"SSH Users"),(0,s.kt)("p",null,"You specify the ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," to be used when connecting to this node."),(0,s.kt)("h3",{id:"ssh-key-path"},"SSH Key Path"),(0,s.kt)("p",null,"You specify the path, i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"ssh_key_path"),", for the SSH private key to be used when connecting to the bastion host."),(0,s.kt)("h3",{id:"ssh-key"},"SSH Key"),(0,s.kt)("p",null,"Instead of setting the path to the SSH key, you can specify the actual key, i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"ssh_key"),", to be used to connect to the bastion host."),(0,s.kt)("h3",{id:"ssh-certificate-path"},"SSH Certificate Path"),(0,s.kt)("p",null,"You specify the path, i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"ssh_cert_path"),", for the signed SSH certificate to be used when connecting to the bastion host."),(0,s.kt)("h3",{id:"ssh-certificate"},"SSH Certificate"),(0,s.kt)("p",null,"Instead of setting the path to the signed SSH certificate, you can specify the actual certificate, i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"ssh_cert"),", to be used to connect to the bastion host."))}u.isMDXComponent=!0}}]);