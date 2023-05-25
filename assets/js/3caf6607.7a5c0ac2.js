"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(4334);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(3117),r=n(7294),o=n(4334),i=n(2466),s=n(6775),l=n(1980),c=n(7392),p=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=l??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==s&&(u(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},1086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(3117),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const s={title:"Recurring Snapshots"},l=void 0,c={unversionedId:"etcd-snapshots/recurring-snapshots/recurring-snapshots",id:"etcd-snapshots/recurring-snapshots/recurring-snapshots",title:"Recurring Snapshots",description:"Recurring snapshots are handled differently based on your version of RKE.",source:"@site/docs/etcd-snapshots/recurring-snapshots/recurring-snapshots.md",sourceDirName:"etcd-snapshots/recurring-snapshots",slug:"/etcd-snapshots/recurring-snapshots/",permalink:"/etcd-snapshots/recurring-snapshots/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/recurring-snapshots/recurring-snapshots.md",tags:[],version:"current",lastUpdatedAt:1685049943,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{title:"Recurring Snapshots"},sidebar:"mySidebar",previous:{title:"One-time Snapshots",permalink:"/etcd-snapshots/one-time-snapshots/"},next:{title:"Restoring from Backup",permalink:"/etcd-snapshots/restoring-from-backup/"}},p={},u=[{value:"Snapshot Service Logging",id:"snapshot-service-logging",level:3},{value:"Options for the <code>Etcd-Snapshot</code> Service",id:"options-for-the-etcd-snapshot-service",level:3},{value:"Using a custom CA certificate for S3",id:"using-a-custom-ca-certificate-for-s3",level:5},{value:"IAM Support for Storing Snapshots in S3",id:"iam-support-for-storing-snapshots-in-s3",level:3},{value:"Configuring the Snapshot Service in YAML",id:"configuring-the-snapshot-service-in-yaml",level:3},{value:"Snapshot Service Logging",id:"snapshot-service-logging-1",level:3},{value:"Options for the Local <code>Etcd-Snapshot</code> Service",id:"options-for-the-local-etcd-snapshot-service",level:3},{value:"Configuring the Snapshot Service in YAML",id:"configuring-the-snapshot-service-in-yaml-1",level:3}],d={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Recurring snapshots are handled differently based on your version of RKE."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"RKE v0.2.0+",mdxType:"TabItem"},(0,r.kt)("p",null,"To schedule automatic recurring etcd snapshots, you can enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service with ",(0,r.kt)("a",{parentName:"p",href:"#options-for-the-etcd-snapshot-service"},"extra configuration options"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," runs in a service container alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," container. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service takes a snapshot for every node that has the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," role and stores them to local disk in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,r.kt)("p",null,"If you set up the ",(0,r.kt)("a",{parentName:"p",href:"#options-for-the-etcd-snapshot-service"},"options for S3"),", the snapshot will also be uploaded to the S3 backend."),(0,r.kt)("h3",{id:"snapshot-service-logging"},"Snapshot Service Logging"),(0,r.kt)("p",null,"When a cluster is launched with the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service enabled, you can view the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-rolling-snapshots")," logs to confirm backups are being created automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ docker logs etcd-rolling-snapshots\n\ntime="2018-05-04T18:39:16Z" level=info msg="Initializing Rolling Backups" creation=1m0s retention=24h0m0s\ntime="2018-05-04T18:40:16Z" level=info msg="Created backup" name="2018-05-04T18:40:16Z_etcd" runtime=108.332814ms\ntime="2018-05-04T18:41:16Z" level=info msg="Created backup" name="2018-05-04T18:41:16Z_etcd" runtime=92.880112ms\ntime="2018-05-04T18:42:16Z" level=info msg="Created backup" name="2018-05-04T18:42:16Z_etcd" runtime=83.67642ms\ntime="2018-05-04T18:43:16Z" level=info msg="Created backup" name="2018-05-04T18:43:16Z_etcd" runtime=86.298499ms\n')),(0,r.kt)("h3",{id:"options-for-the-etcd-snapshot-service"},"Options for the ",(0,r.kt)("inlineCode",{parentName:"h3"},"Etcd-Snapshot")," Service"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"S3 Specific"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"interval_hours")),(0,r.kt)("td",{parentName:"tr",align:null},"The duration in hours between recurring backups. This supercedes the ",(0,r.kt)("inlineCode",{parentName:"td"},"creation")," option (which was used in RKE before v0.2.0) and will override it if both are specified. (Default: 12)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"retention")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of snapshots to retain before rotation. If the retention is configured in both ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd.retention")," (time period to keep snapshots in hours), which was required in RKE before v0.2.0, and at ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd.backup_config.retention")," (number of snapshots), the latter will be used. (Default: 6)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"bucket_name")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 bucket name where backups will be stored"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"folder")),(0,r.kt)("td",{parentName:"tr",align:null},"Folder inside S3 bucket where backups will be stored. This is optional. ",(0,r.kt)("em",{parentName:"td"},"Available as of v0.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"access_key")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 access key with permission to access the backup bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"secret_key")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 secret key with permission to access the backup bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"region")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 region for the backup bucket. This is optional."),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 regions endpoint for the backup bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"custom_ca")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom certificate authority to use when connecting to the endpoint. Only required for private S3 compatible storage solutions. Available for RKE v0.2.5+."),(0,r.kt)("td",{parentName:"tr",align:null},"*")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--access-key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--secret-key")," options are not required if the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," nodes are AWS EC2 instances that have been configured with a suitable IAM instance profile."),(0,r.kt)("h5",{id:"using-a-custom-ca-certificate-for-s3"},"Using a custom CA certificate for S3"),(0,r.kt)("p",null,"The backup snapshot can be stored on a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"S3")," backup like ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"minio"),". If the S3 backend uses a self-signed or custom certificate, provide a custom certificate using the option ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_ca")," to connect to the S3 backend."),(0,r.kt)("h3",{id:"iam-support-for-storing-snapshots-in-s3"},"IAM Support for Storing Snapshots in S3"),(0,r.kt)("p",null,"In addition to API access keys, RKE supports using IAM roles for S3 authentication. The cluster etcd nodes must be assigned an IAM role that has read/write access to the designated backup bucket on S3. Also, the nodes must have network access to the S3 endpoint specified."),(0,r.kt)("p",null,"Below is an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html"},"example IAM policy")," that would allow nodes to store and retrieve backups from S3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "ListObjectsInBucket",\n            "Effect": "Allow",\n            "Action": ["s3:ListBucket"],\n            "Resource": ["arn:aws:s3:::bucket-name"]\n        },\n        {\n            "Sid": "AllObjectActions",\n            "Effect": "Allow",\n            "Action": "s3:*Object",\n            "Resource": ["arn:aws:s3:::bucket-name/*"]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"For details on giving an application access to S3, refer to the AWS documentation on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html"},"Using an IAM Role to Grant Permissions to Applications Running on Amazon EC2 Instances.")),(0,r.kt)("h3",{id:"configuring-the-snapshot-service-in-yaml"},"Configuring the Snapshot Service in YAML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  etcd:\n    backup_config:\n      interval_hours: 12\n      retention: 6\n      s3backupconfig:\n        access_key: S3_ACCESS_KEY\n        secret_key: S3_SECRET_KEY\n        bucket_name: s3-bucket-name\n        region: ""\n        folder: "" # Optional - Available as of v0.3.0\n        endpoint: s3.amazonaws.com\n        custom_ca: |-\n          -----BEGIN CERTIFICATE-----\n          $CERTIFICATE\n          -----END CERTIFICATE-----\n'))),(0,r.kt)(i.Z,{value:"RKE before v0.2.0",mdxType:"TabItem"},(0,r.kt)("p",null,"To schedule automatic recurring etcd snapshots, you can enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service with ",(0,r.kt)("a",{parentName:"p",href:"#options-for-the-local-etcd-snapshot-service"},"extra configuration options"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," runs in a service container alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," container. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service takes a snapshot for every node that has the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," role and stores them to local disk in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,r.kt)("p",null,"RKE saves a backup of the certificates, i.e. a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz"),", in the same location. The snapshot and pki bundle file are required for the restore process in versions before v0.2.0."),(0,r.kt)("h3",{id:"snapshot-service-logging-1"},"Snapshot Service Logging"),(0,r.kt)("p",null,"When a cluster is launched with the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service enabled, you can view the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-rolling-snapshots")," logs to confirm backups are being created automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ docker logs etcd-rolling-snapshots\n\ntime="2018-05-04T18:39:16Z" level=info msg="Initializing Rolling Backups" creation=1m0s retention=24h0m0s\ntime="2018-05-04T18:40:16Z" level=info msg="Created backup" name="2018-05-04T18:40:16Z_etcd" runtime=108.332814ms\ntime="2018-05-04T18:41:16Z" level=info msg="Created backup" name="2018-05-04T18:41:16Z_etcd" runtime=92.880112ms\ntime="2018-05-04T18:42:16Z" level=info msg="Created backup" name="2018-05-04T18:42:16Z_etcd" runtime=83.67642ms\ntime="2018-05-04T18:43:16Z" level=info msg="Created backup" name="2018-05-04T18:43:16Z_etcd" runtime=86.298499ms\n')),(0,r.kt)("h3",{id:"options-for-the-local-etcd-snapshot-service"},"Options for the Local ",(0,r.kt)("inlineCode",{parentName:"h3"},"Etcd-Snapshot")," Service"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Snapshot")),(0,r.kt)("td",{parentName:"tr",align:null},"By default, the recurring snapshot service is disabled. To enable the service, you need to define it as part of ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd")," and set it to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Creation")),(0,r.kt)("td",{parentName:"tr",align:null},"By default, the snapshot service will take snapshots every 5 minutes (",(0,r.kt)("inlineCode",{parentName:"td"},"5m0s"),"). You can change the time between snapshots as part of the ",(0,r.kt)("inlineCode",{parentName:"td"},"creation")," directive for the ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd")," service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Retention")),(0,r.kt)("td",{parentName:"tr",align:null},"By default, all snapshots are saved for 24 hours (",(0,r.kt)("inlineCode",{parentName:"td"},"24h"),") before being deleted and purged. You can change how long to store a snapshot as part of the ",(0,r.kt)("inlineCode",{parentName:"td"},"retention")," directive for the ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd")," service.")))),(0,r.kt)("h3",{id:"configuring-the-snapshot-service-in-yaml-1"},"Configuring the Snapshot Service in YAML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n    etcd:\n      snapshot: true\n      creation: 5m0s\n      retention: 24h\n")))))}h.isMDXComponent=!0}}]);