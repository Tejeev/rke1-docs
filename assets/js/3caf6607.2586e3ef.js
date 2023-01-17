"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Recurring Snapshots",weight:2},i=void 0,s={unversionedId:"etcd-snapshots/recurring-snapshots/recurring-snapshots",id:"etcd-snapshots/recurring-snapshots/recurring-snapshots",title:"Recurring Snapshots",description:"Recurring snapshots are handled differently based on your version of RKE.",source:"@site/docs/etcd-snapshots/recurring-snapshots/recurring-snapshots.md",sourceDirName:"etcd-snapshots/recurring-snapshots",slug:"/etcd-snapshots/recurring-snapshots/",permalink:"/rke1-docs/etcd-snapshots/recurring-snapshots/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/recurring-snapshots/recurring-snapshots.md",tags:[],version:"current",lastUpdatedAt:1673993046,formattedLastUpdatedAt:"1/17/2023",frontMatter:{title:"Recurring Snapshots",weight:2},sidebar:"mySidebar",previous:{title:"One-time Snapshots",permalink:"/rke1-docs/etcd-snapshots/one-time-snapshots/"},next:{title:"Restoring from Backup",permalink:"/rke1-docs/etcd-snapshots/restoring-from-backup/"}},l={},p=[{value:"Snapshot Service Logging",id:"snapshot-service-logging",level:3},{value:"Options for the <code>Etcd-Snapshot</code> Service",id:"options-for-the-etcd-snapshot-service",level:3},{value:"Using a custom CA certificate for S3",id:"using-a-custom-ca-certificate-for-s3",level:5},{value:"IAM Support for Storing Snapshots in S3",id:"iam-support-for-storing-snapshots-in-s3",level:3},{value:"Configuring the Snapshot Service in YAML",id:"configuring-the-snapshot-service-in-yaml",level:3},{value:"Snapshot Service Logging",id:"snapshot-service-logging-1",level:3},{value:"Options for the Local <code>Etcd-Snapshot</code> Service",id:"options-for-the-local-etcd-snapshot-service",level:3},{value:"Configuring the Snapshot Service in YAML",id:"configuring-the-snapshot-service-in-yaml-1",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Recurring snapshots are handled differently based on your version of RKE."),(0,r.kt)("p",null,'{{% tabs %}}\n{{% tab "RKE v0.2.0+"%}}'),(0,r.kt)("p",null,"To schedule automatic recurring etcd snapshots, you can enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service with ",(0,r.kt)("a",{parentName:"p",href:"#options-for-the-etcd-snapshot-service"},"extra configuration options"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," runs in a service container alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," container. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service takes a snapshot for every node that has the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," role and stores them to local disk in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,r.kt)("p",null,"If you set up the ",(0,r.kt)("a",{parentName:"p",href:"#options-for-the-etcd-snapshot-service"},"options for S3"),", the snapshot will also be uploaded to the S3 backend."),(0,r.kt)("h3",{id:"snapshot-service-logging"},"Snapshot Service Logging"),(0,r.kt)("p",null,"When a cluster is launched with the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service enabled, you can view the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-rolling-snapshots")," logs to confirm backups are being created automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ docker logs etcd-rolling-snapshots\n\ntime="2018-05-04T18:39:16Z" level=info msg="Initializing Rolling Backups" creation=1m0s retention=24h0m0s\ntime="2018-05-04T18:40:16Z" level=info msg="Created backup" name="2018-05-04T18:40:16Z_etcd" runtime=108.332814ms\ntime="2018-05-04T18:41:16Z" level=info msg="Created backup" name="2018-05-04T18:41:16Z_etcd" runtime=92.880112ms\ntime="2018-05-04T18:42:16Z" level=info msg="Created backup" name="2018-05-04T18:42:16Z_etcd" runtime=83.67642ms\ntime="2018-05-04T18:43:16Z" level=info msg="Created backup" name="2018-05-04T18:43:16Z_etcd" runtime=86.298499ms\n')),(0,r.kt)("h3",{id:"options-for-the-etcd-snapshot-service"},"Options for the ",(0,r.kt)("inlineCode",{parentName:"h3"},"Etcd-Snapshot")," Service"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"S3 Specific"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"interval_hours")),(0,r.kt)("td",{parentName:"tr",align:null},"The duration in hours between recurring backups. This supercedes the ",(0,r.kt)("inlineCode",{parentName:"td"},"creation")," option (which was used in RKE before v0.2.0) and will override it if both are specified. (Default: 12)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"retention")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of snapshots to retain before rotation. If the retention is configured in both ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd.retention")," (time period to keep snapshots in hours), which was required in RKE before v0.2.0, and at ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd.backup_config.retention")," (number of snapshots), the latter will be used. (Default: 6)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"bucket_name")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 bucket name where backups will be stored"),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"folder")),(0,r.kt)("td",{parentName:"tr",align:null},"Folder inside S3 bucket where backups will be stored. This is optional. ",(0,r.kt)("em",{parentName:"td"},"Available as of v0.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"access_key")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 access key with permission to access the backup bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"secret_key")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 secret key with permission to access the backup bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"region")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 region for the backup bucket. This is optional."),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 regions endpoint for the backup bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"custom_ca")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom certificate authority to use when connecting to the endpoint. Only required for private S3 compatible storage solutions. Available for RKE v0.2.5+."),(0,r.kt)("td",{parentName:"tr",align:null},"*")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--access-key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--secret-key")," options are not required if the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," nodes are AWS EC2 instances that have been configured with a suitable IAM instance profile."),(0,r.kt)("h5",{id:"using-a-custom-ca-certificate-for-s3"},"Using a custom CA certificate for S3"),(0,r.kt)("p",null,"The backup snapshot can be stored on a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"S3")," backup like ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"minio"),". If the S3 backend uses a self-signed or custom certificate, provide a custom certificate using the option ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_ca")," to connect to the S3 backend."),(0,r.kt)("h3",{id:"iam-support-for-storing-snapshots-in-s3"},"IAM Support for Storing Snapshots in S3"),(0,r.kt)("p",null,"In addition to API access keys, RKE supports using IAM roles for S3 authentication. The cluster etcd nodes must be assigned an IAM role that has read/write access to the designated backup bucket on S3. Also, the nodes must have network access to the S3 endpoint specified."),(0,r.kt)("p",null,"Below is an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html"},"example IAM policy")," that would allow nodes to store and retrieve backups from S3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "ListObjectsInBucket",\n            "Effect": "Allow",\n            "Action": ["s3:ListBucket"],\n            "Resource": ["arn:aws:s3:::bucket-name"]\n        },\n        {\n            "Sid": "AllObjectActions",\n            "Effect": "Allow",\n            "Action": "s3:*Object",\n            "Resource": ["arn:aws:s3:::bucket-name/*"]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"For details on giving an application access to S3, refer to the AWS documentation on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html"},"Using an IAM Role to Grant Permissions to Applications Running on Amazon EC2 Instances.")),(0,r.kt)("h3",{id:"configuring-the-snapshot-service-in-yaml"},"Configuring the Snapshot Service in YAML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  etcd:\n    backup_config:\n      interval_hours: 12\n      retention: 6\n      s3backupconfig:\n        access_key: S3_ACCESS_KEY\n        secret_key: S3_SECRET_KEY\n        bucket_name: s3-bucket-name\n        region: ""\n        folder: "" # Optional - Available as of v0.3.0\n        endpoint: s3.amazonaws.com\n        custom_ca: |-\n          -----BEGIN CERTIFICATE-----\n          $CERTIFICATE\n          -----END CERTIFICATE-----\n')),(0,r.kt)("p",null,'{{% /tab %}}\n{{% tab "RKE before v0.2.0"%}}'),(0,r.kt)("p",null,"To schedule automatic recurring etcd snapshots, you can enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service with ",(0,r.kt)("a",{parentName:"p",href:"#options-for-the-local-etcd-snapshot-service"},"extra configuration options"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," runs in a service container alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," container. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service takes a snapshot for every node that has the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," role and stores them to local disk in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,r.kt)("p",null,"RKE saves a backup of the certificates, i.e. a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz"),", in the same location. The snapshot and pki bundle file are required for the restore process in versions before v0.2.0."),(0,r.kt)("h3",{id:"snapshot-service-logging-1"},"Snapshot Service Logging"),(0,r.kt)("p",null,"When a cluster is launched with the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service enabled, you can view the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-rolling-snapshots")," logs to confirm backups are being created automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ docker logs etcd-rolling-snapshots\n\ntime="2018-05-04T18:39:16Z" level=info msg="Initializing Rolling Backups" creation=1m0s retention=24h0m0s\ntime="2018-05-04T18:40:16Z" level=info msg="Created backup" name="2018-05-04T18:40:16Z_etcd" runtime=108.332814ms\ntime="2018-05-04T18:41:16Z" level=info msg="Created backup" name="2018-05-04T18:41:16Z_etcd" runtime=92.880112ms\ntime="2018-05-04T18:42:16Z" level=info msg="Created backup" name="2018-05-04T18:42:16Z_etcd" runtime=83.67642ms\ntime="2018-05-04T18:43:16Z" level=info msg="Created backup" name="2018-05-04T18:43:16Z_etcd" runtime=86.298499ms\n')),(0,r.kt)("h3",{id:"options-for-the-local-etcd-snapshot-service"},"Options for the Local ",(0,r.kt)("inlineCode",{parentName:"h3"},"Etcd-Snapshot")," Service"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Snapshot")),(0,r.kt)("td",{parentName:"tr",align:null},"By default, the recurring snapshot service is disabled. To enable the service, you need to define it as part of ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd")," and set it to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Creation")),(0,r.kt)("td",{parentName:"tr",align:null},"By default, the snapshot service will take snapshots every 5 minutes (",(0,r.kt)("inlineCode",{parentName:"td"},"5m0s"),"). You can change the time between snapshots as part of the ",(0,r.kt)("inlineCode",{parentName:"td"},"creation")," directive for the ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd")," service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Retention")),(0,r.kt)("td",{parentName:"tr",align:null},"By default, all snapshots are saved for 24 hours (",(0,r.kt)("inlineCode",{parentName:"td"},"24h"),") before being deleted and purged. You can change how long to store a snapshot as part of the ",(0,r.kt)("inlineCode",{parentName:"td"},"retention")," directive for the ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd")," service.")))),(0,r.kt)("h3",{id:"configuring-the-snapshot-service-in-yaml-1"},"Configuring the Snapshot Service in YAML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n    etcd:\n      snapshot: true\n      creation: 5m0s\n      retention: 24h\n")),(0,r.kt)("p",null,"{{% /tab %}}\n{{% /tabs %}}"))}d.isMDXComponent=!0}}]);