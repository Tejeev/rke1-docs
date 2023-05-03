"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=o,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(3117),o=(n(7294),n(3905));const r={title:"Audit Log"},i=void 0,l={unversionedId:"config-options/audit-log/audit-log",id:"config-options/audit-log/audit-log",title:"Audit Log",description:"Kubernetes auditing provides a security-relevant chronological set of records about a cluster. Kube-apiserver performs auditing. Each request on each stage of its execution generates an event, which is then pre-processed according to a certain policy and written to a backend. The policy determines what\u2019s recorded and the backends persist the records.",source:"@site/docs/config-options/audit-log/audit-log.md",sourceDirName:"config-options/audit-log",slug:"/config-options/audit-log/",permalink:"/config-options/audit-log/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/audit-log/audit-log.md",tags:[],version:"current",lastUpdatedAt:1683149908,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{title:"Audit Log"},sidebar:"mySidebar",previous:{title:"Custom Cloud Provider",permalink:"/config-options/cloud-providers/custom/"},next:{title:"Dual-stack",permalink:"/config-options/dual-stack/"}},s={},u=[{value:"Enabled by default",id:"enabled-by-default",level:3},{value:"Example Configurations",id:"example-configurations",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes auditing provides a security-relevant chronological set of records about a cluster. Kube-apiserver performs auditing. Each request on each stage of its execution generates an event, which is then pre-processed according to a certain policy and written to a backend. The policy determines what\u2019s recorded and the backends persist the records."),(0,o.kt)("p",null,"You might want to configure the audit log as part of compliance with the CIS (Center for Internet Security) Kubernetes Benchmark controls."),(0,o.kt)("p",null,"For configuration details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/debug-application-cluster/audit/"},"official Kubernetes documentation.")),(0,o.kt)("h3",{id:"enabled-by-default"},"Enabled by default"),(0,o.kt)("p",null,"In RKE v1.1.0 and higher and when using specific Kubernetes versions, audit log is enabled by default. See the table below to check when audit log is enabled by default."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"RKE version"),(0,o.kt)("th",{parentName:"tr",align:null},"Kubernetes version"),(0,o.kt)("th",{parentName:"tr",align:null},"audit log Enabled"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v1.1.0 and higher"),(0,o.kt)("td",{parentName:"tr",align:null},"v1.17.4 and higher (v1.17.x)"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v1.1.0 and higher"),(0,o.kt)("td",{parentName:"tr",align:null},"v1.16.8 and higher (v1.16.x)"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v1.1.0 and higher"),(0,o.kt)("td",{parentName:"tr",align:null},"v1.15.11 and higher (v1.15.x)"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,o.kt)("h3",{id:"example-configurations"},"Example Configurations"),(0,o.kt)("p",null,"The audit log can be enabled by default using the following configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kube-api:\n    audit_log:\n      enabled: true\n")),(0,o.kt)("p",null,"When the audit log is enabled, you should be able to see the default values at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/audit-policy.yaml")," (This is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/audit.yaml")," before RKE v1.1.0):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Minimum Configuration: Capture event metadata.\n...\nrules:\n- level: Metadata\n...\n")),(0,o.kt)("p",null,"When the audit log is enabled, default values are also set for the audit log path, maximum age, maximum number of backups, maximum size in megabytes, and format. To see the default values, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ps -ef | grep kube-apiserver\n")),(0,o.kt)("p",null,"The default values for audit log were changed in RKE v1.1.0 to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"--audit-log-maxage=30 # The maximum number of days to retain old audit log files\n--audit-log-maxbackup=10 # The maximum number of audit log files to retain\n--audit-log-path=/var/log/kube-audit/audit-log.json # The log file path that log backend uses to write audit events\n--audit-log-maxsize=100 # The maximum size in megabytes of the audit log file before it gets rotated\n--audit-policy-file=/etc/kubernetes/audit-policy.yaml # The file containing your audit log rules\n--audit-log-format=json # The log file format\n\n")),(0,o.kt)("p",null,"The default values for the audit log before RKE v1.1.0 are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"--audit-log-maxage=5 # The maximum number of days to retain old audit log files\n--audit-log-maxbackup=5 # The maximum number of audit log files to retain\n--audit-log-path=/var/log/kube-audit/audit-log.json # The log file path that log backend uses to write audit events\n--audit-log-maxsize=100 # The maximum size in megabytes of the audit log file before it gets rotated\n--audit-policy-file=/etc/kubernetes/audit.yaml # The file containing your audit log rules\n--audit-log-format=json # The log file format\n\n")),(0,o.kt)("p",null,"To customize the audit log, the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," directive is used."),(0,o.kt)("p",null,"A rules policy is passed to kube-apiserver using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--audit-policy-file")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"policy")," directive in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". Below is an example ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," with custom values and an audit log policy nested under the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," directive. This example audit log policy is taken from the official ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/debug-application-cluster/audit/#audit-policy"},"Kubernetes documentation:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'services:\n  kube-api:\n    audit_log:\n      enabled: true\n      configuration:\n        max_age: 6\n        max_backup: 6\n        max_size: 110\n        path: /var/log/kube-audit/audit-log.json\n        format: json\n        policy:\n          apiVersion: audit.k8s.io/v1 # This is required.\n          kind: Policy\n          omitStages:\n            - "RequestReceived"\n          rules:\n            # Log pod changes at RequestResponse level\n            - level: RequestResponse\n              resources:\n              - group: ""\n                # Resource "pods" doesn\'t match requests to any subresource of pods,\n                # which is consistent with the RBAC policy.\n                resources: ["pods"]\n            # Log "pods/log", "pods/status" at Metadata level\n            - level: Metadata\n              resources:\n              - group: ""\n                resources: ["pods/log", "pods/status"]\n\n            # Don\'t log requests to a configmap called "controller-leader"\n            - level: None\n              resources:\n              - group: ""\n                resources: ["configmaps"]\n                resourceNames: ["controller-leader"]\n\n            # Don\'t log watch requests by the "system:kube-proxy" on endpoints or services\n            - level: None\n              users: ["system:kube-proxy"]\n              verbs: ["watch"]\n              resources:\n              - group: "" # core API group\n                resources: ["endpoints", "services"]\n\n            # Don\'t log authenticated requests to certain non-resource URL paths.\n            - level: None\n              userGroups: ["system:authenticated"]\n              nonResourceURLs:\n              - "/api*" # Wildcard matching.\n              - "/version"\n\n            # Log the request body of configmap changes in kube-system.\n            - level: Request\n              resources:\n              - group: "" # core API group\n                resources: ["configmaps"]\n              # This rule only applies to resources in the "kube-system" namespace.\n              # The empty string "" can be used to select non-namespaced resources.\n              namespaces: ["kube-system"]\n\n            # Log configmap and secret changes in all other namespaces at the Metadata level.\n            - level: Metadata\n              resources:\n              - group: "" # core API group\n                resources: ["secrets", "configmaps"]\n\n            # Log all other resources in core and extensions at the Request level.\n            - level: Request\n              resources:\n              - group: "" # core API group\n              - group: "extensions" # Version of group should NOT be included.\n\n            # A catch-all rule to log all other requests at the Metadata level.\n            - level: Metadata\n              # Long-running requests like watches that fall under this rule will not\n              # generate an audit event in RequestReceived.\n              omitStages:\n                - "RequestReceived"\n')))}p.isMDXComponent=!0}}]);