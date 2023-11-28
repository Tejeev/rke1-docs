"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[9806],{578:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(5893),s=r(1151);const o={title:"AWS Cloud Provider"},a=void 0,l={id:"config-options/cloud-providers/aws/aws",title:"AWS Cloud Provider",description:"In Kubernetes 1.27 and later, you must use an out-of-tree AWS cloud provider. In-tree cloud providers have been deprecated, and the Amazon cloud provider has been removed completely, and won't work after an upgrade to Kubernetes 1.27. The steps listed below are still required to set up an Amazon cloud provider. You can set up an out-of-tree cloud provider for RKE after creating an appropriate IAM role and configuring the ClusterID.",source:"@site/docs/config-options/cloud-providers/aws/aws.md",sourceDirName:"config-options/cloud-providers/aws",slug:"/config-options/cloud-providers/aws/",permalink:"/config-options/cloud-providers/aws/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/cloud-providers/aws/aws.md",tags:[],version:"current",lastUpdatedAt:1701206403,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{title:"AWS Cloud Provider"},sidebar:"mySidebar",previous:{title:"Cloud Providers",permalink:"/config-options/cloud-providers/"},next:{title:"Azure Cloud Provider",permalink:"/config-options/cloud-providers/azure/"}},i={},c=[{value:"IAM Requirements",id:"iam-requirements",level:2},{value:"Tagging AWS Resources",id:"tagging-aws-resources",level:2},{value:"Tagging for Load Balancers",id:"tagging-for-load-balancers",level:2},{value:"Using the Out-of-Tree AWS Cloud Provider for RKE",id:"using-the-out-of-tree-aws-cloud-provider-for-rke",level:3},{value:"Helm Chart Installation from CLI",id:"helm-chart-installation-from-cli",level:3},{value:"Migrating to the Out-of-Tree AWS Cloud Provider for RKE",id:"migrating-to-the-out-of-tree-aws-cloud-provider-for-rke",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"Important:",type:"note",children:[(0,t.jsxs)(n.p,{children:["In Kubernetes 1.27 and later, you must use an out-of-tree AWS cloud provider. In-tree cloud providers have been deprecated, and the Amazon cloud provider has been removed completely, and won't work after an upgrade to Kubernetes 1.27. The steps listed below are still required to set up an Amazon cloud provider. You can ",(0,t.jsx)(n.a,{href:"#using-the-out-of-tree-aws-cloud-provider-for-rke",children:"set up an out-of-tree cloud provider for RKE"})," after creating an ",(0,t.jsx)(n.a,{href:"#iam-requirements",children:"appropriate IAM role"})," and ",(0,t.jsx)(n.a,{href:"#tagging-aws-resources",children:"configuring the ClusterID"}),"."]}),(0,t.jsxs)(n.p,{children:["You can also ",(0,t.jsx)(n.a,{href:"#migrating-to-the-out-of-tree-aws-cloud-provider-for-rke",children:"migrate from an in-tree to an out-of-tree AWS cloud provider"})," on Kubernetes 1.26 and earlier. All existing clusters must migrate prior to upgrading to v1.27 in order to stay functional."]}),(0,t.jsxs)(n.p,{children:["To enable the AWS cloud provider, there are no RKE configuration options. You only need to set the name as ",(0,t.jsx)(n.code,{children:"aws"}),". In order to use the AWS cloud provider, all cluster nodes must have already been configured with an ",(0,t.jsx)(n.a,{href:"#iam-requirements",children:"appropriate IAM role"})," and your AWS resources must be ",(0,t.jsx)(n.a,{href:"#tagging-aws-resources",children:"tagged with a cluster ID"}),"."]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"cloud_provider:\n    name: aws\n"})}),"\n",(0,t.jsx)(n.h2,{id:"iam-requirements",children:"IAM Requirements"}),"\n",(0,t.jsxs)(n.p,{children:["In a cluster with the AWS cloud provider enabled, nodes must have at least the ",(0,t.jsx)(n.code,{children:"ec2:Describe*"})," action."]}),"\n",(0,t.jsx)(n.p,{children:"In order to use Elastic Load Balancers (ELBs) and EBS volumes with Kubernetes, the node(s) will need to have the an IAM role with appropriate permissions."}),"\n",(0,t.jsxs)(n.p,{children:["IAM policy for nodes with the ",(0,t.jsx)(n.code,{children:"controlplane"})," role:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "autoscaling:DescribeAutoScalingGroups",\n        "autoscaling:DescribeLaunchConfigurations",\n        "autoscaling:DescribeTags",\n        "ec2:DescribeInstances",\n        "ec2:DescribeRegions",\n        "ec2:DescribeRouteTables",\n        "ec2:DescribeSecurityGroups",\n        "ec2:DescribeSubnets",\n        "ec2:DescribeVolumes",\n        "ec2:CreateSecurityGroup",\n        "ec2:CreateTags",\n        "ec2:CreateVolume",\n        "ec2:ModifyInstanceAttribute",\n        "ec2:ModifyVolume",\n        "ec2:AttachVolume",\n        "ec2:AuthorizeSecurityGroupIngress",\n        "ec2:CreateRoute",\n        "ec2:DeleteRoute",\n        "ec2:DeleteSecurityGroup",\n        "ec2:DeleteVolume",\n        "ec2:DetachVolume",\n        "ec2:RevokeSecurityGroupIngress",\n        "ec2:DescribeVpcs",\n        "elasticloadbalancing:AddTags",\n        "elasticloadbalancing:AttachLoadBalancerToSubnets",\n        "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",\n        "elasticloadbalancing:CreateLoadBalancer",\n        "elasticloadbalancing:CreateLoadBalancerPolicy",\n        "elasticloadbalancing:CreateLoadBalancerListeners",\n        "elasticloadbalancing:ConfigureHealthCheck",\n        "elasticloadbalancing:DeleteLoadBalancer",\n        "elasticloadbalancing:DeleteLoadBalancerListeners",\n        "elasticloadbalancing:DescribeLoadBalancers",\n        "elasticloadbalancing:DescribeLoadBalancerAttributes",\n        "elasticloadbalancing:DetachLoadBalancerFromSubnets",\n        "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",\n        "elasticloadbalancing:ModifyLoadBalancerAttributes",\n        "elasticloadbalancing:RegisterInstancesWithLoadBalancer",\n        "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",\n        "elasticloadbalancing:AddTags",\n        "elasticloadbalancing:CreateListener",\n        "elasticloadbalancing:CreateTargetGroup",\n        "elasticloadbalancing:DeleteListener",\n        "elasticloadbalancing:DeleteTargetGroup",\n        "elasticloadbalancing:DescribeListeners",\n        "elasticloadbalancing:DescribeLoadBalancerPolicies",\n        "elasticloadbalancing:DescribeTargetGroups",\n        "elasticloadbalancing:DescribeTargetHealth",\n        "elasticloadbalancing:ModifyListener",\n        "elasticloadbalancing:ModifyTargetGroup",\n        "elasticloadbalancing:RegisterTargets",\n        "elasticloadbalancing:SetLoadBalancerPoliciesOfListener",\n        "iam:CreateServiceLinkedRole",\n        "kms:DescribeKey"\n      ],\n      "Resource": [\n        "*"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["IAM policy for nodes with the ",(0,t.jsx)(n.code,{children:"etcd"})," or ",(0,t.jsx)(n.code,{children:"worker"})," role:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "ec2:DescribeInstances",\n        "ec2:DescribeRegions",\n        "ecr:GetAuthorizationToken",\n        "ecr:BatchCheckLayerAvailability",\n        "ecr:GetDownloadUrlForLayer",\n        "ecr:GetRepositoryPolicy",\n        "ecr:DescribeRepositories",\n        "ecr:ListImages",\n        "ecr:BatchGetImage"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"tagging-aws-resources",children:"Tagging AWS Resources"}),"\n",(0,t.jsx)(n.p,{children:"The AWS cloud provider uses tagging to discover and manage resources, the following resources are not automatically tagged by Kubernetes or RKE:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VPC"}),": The VPC used by the cluster"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Subnet"}),": The subnets used by the cluster"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"EC2 instances"}),": All nodes launched for the cluster"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Security Groups"}),": The security group(s) used by nodes in the cluster"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If creating a ",(0,t.jsx)(n.code,{children:"LoadBalancer"})," service and there is more than one security group attached to nodes, you must tag only one of the security groups as ",(0,t.jsx)(n.code,{children:"owned"})," so that Kubernetes knows which group to add and remove rules. A single untagged security group is allowed, however, sharing this between clusters is not recommended."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html",children:"AWS Documentation: Tagging Your Amazon EC2 Resources"})}),"\n",(0,t.jsx)(n.p,{children:"You must tag with one of the following:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["kubernetes.io/cluster/",(0,t.jsx)(n.code,{children:"<CLUSTERID>"})]}),(0,t.jsx)(n.td,{children:"shared"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<CLUSTERID>"})," can be any string you choose. However, the same string must be used on every resource you tag. Setting the tag value to ",(0,t.jsx)(n.code,{children:"owned"})," informs the cluster that all resources tagged with the ",(0,t.jsx)(n.code,{children:"<CLUSTERID>"})," are owned and managed by this cluster only."]}),"\n",(0,t.jsx)(n.p,{children:"If you do not share resources between clusters, you can change the tag to:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["kubernetes.io/cluster/",(0,t.jsx)(n.code,{children:"<CLUSTERID>"})]}),(0,t.jsx)(n.td,{children:"owned"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"tagging-for-load-balancers",children:"Tagging for Load Balancers"}),"\n",(0,t.jsxs)(n.p,{children:["When provisioning a ",(0,t.jsx)(n.code,{children:"LoadBalancer"})," service Kubernetes will attempt to discover the correct subnets, this is also achieved by tags and requires adding additional subnet tags to ensure internet-facing and internal ELBs are created in the correct subnets."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/load-balancing.html#subnet-tagging-for-load-balancers",children:"AWS Documentation: Subnet tagging for load balancers"})}),"\n",(0,t.jsx)(n.h3,{id:"using-the-out-of-tree-aws-cloud-provider-for-rke",children:"Using the Out-of-Tree AWS Cloud Provider for RKE"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://cloud-provider-aws.sigs.k8s.io/prerequisites/",children:"Node name conventions and other prerequisites "})," must be followed so that the cloud provider can find the instance. RKE provisioned clusters don't support configuring ",(0,t.jsx)(n.code,{children:"providerID"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you use IP-based naming, the nodes must be named after the instance followed by the regional domain name (",(0,t.jsx)(n.code,{children:"ip-xxx-xxx-xxx-xxx.ec2.<region>.internal"}),"). If you have a custom domain name set in the DHCP options, you must set ",(0,t.jsx)(n.code,{children:"--hostname-override"})," on ",(0,t.jsx)(n.code,{children:"kube-proxy"})," and ",(0,t.jsx)(n.code,{children:"kubelet"})," to match this naming convention."]})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Select the cloud provider."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Selecting ",(0,t.jsx)(n.code,{children:"external-aws"})," sets ",(0,t.jsx)(n.code,{children:"--cloud-provider=external"})," and allows setting ",(0,t.jsx)(n.code,{children:"useInstanceMetadataHostname"}),". Enabling ",(0,t.jsx)(n.code,{children:"useInstanceMetadataHostname"})," will query the EC2 metadata service and set ",(0,t.jsx)(n.code,{children:"http://169.254.169.254/latest/meta-data/hostname"})," as ",(0,t.jsx)(n.code,{children:"hostname-override"})," for ",(0,t.jsx)(n.code,{children:"kubelet"})," and ",(0,t.jsx)(n.code,{children:"kube-proxy"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Enabling ",(0,t.jsx)(n.code,{children:"useInstanceMetadataHostname"})," is required if ",(0,t.jsx)(n.code,{children:"hostname-override"})," is empty or if ",(0,t.jsx)(n.code,{children:"hostname-override"})," doesn't meet the node naming conventions mentioned above in step 1."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"rancher_kubernetes_engine_config:\n  cloud_provider:\n    name: external-aws\n    useInstanceMetadataHostname: true/false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Existing clusters that use ",(0,t.jsx)(n.code,{children:"external"})," cloud provider will set ",(0,t.jsx)(n.code,{children:"--cloud-provider=external"})," for Kubernetes components but won't set the ",(0,t.jsx)(n.code,{children:"hostname-override"})," by querying the EC2 metadata service."]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Install the AWS cloud controller manager after the cluster finishes provisioning. Note that the cluster isn't successfully provisioned and nodes are still in an ",(0,t.jsx)(n.code,{children:"uninitialized"})," state until you deploy the cloud controller manager."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"helm-chart-installation-from-cli",children:"Helm Chart Installation from CLI"}),"\n",(0,t.jsxs)(n.p,{children:["Official upstream docs for ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/cloud-provider-aws/tree/master/charts/aws-cloud-controller-manager",children:"Helm chart installation"})," can be found on GitHub."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Add the Helm repository:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm repo add aws-cloud-controller-manager https://kubernetes.github.io/cloud-provider-aws\nhelm repo update\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.code,{children:"values.yaml"})," file with the following contents, to override the default ",(0,t.jsx)(n.code,{children:"values.yaml"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# values.yaml\nhostNetworking: true\ntolerations:\n  - effect: NoSchedule\n    key: node.cloudprovider.kubernetes.io/uninitialized\n    value: \'true\'\n  - effect: NoSchedule\n    value: \'true\'\n    key: node-role.kubernetes.io/controlplane\nnodeSelector:\n  node-role.kubernetes.io/controlplane: \'true\'\nargs:\n  - --configure-cloud-routes=false\n  - --use-service-account-credentials=true\n  - --v=2\n  - --cloud-provider=aws\nclusterRoleRules:\n  - apiGroups:\n      - ""\n    resources:\n      - events\n    verbs:\n      - create\n      - patch\n      - update\n  - apiGroups:\n      - ""\n    resources:\n      - nodes\n    verbs:\n      - \'*\'\n  - apiGroups:\n      - ""\n    resources:\n      - nodes/status\n    verbs:\n      - patch\n  - apiGroups:\n      - ""\n    resources:\n      - services\n    verbs:\n      - list\n      - patch\n      - update\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - services/status\n    verbs:\n      - list\n      - patch\n      - update\n      - watch\n  - apiGroups:\n     - \'\'\n    resources:\n      - serviceaccounts\n    verbs:\n    - create\n    - get\n  - apiGroups:\n      - ""\n    resources:\n      - persistentvolumes\n    verbs:\n      - get\n      - list\n      - update\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - endpoints\n    verbs:\n      - create\n      - get\n      - list\n      - watch\n      - update\n  - apiGroups:\n      - coordination.k8s.io\n    resources:\n      - leases\n    verbs:\n      - create\n      - get\n      - list\n      - watch\n      - update\n  - apiGroups:\n      - ""\n    resources:\n      - serviceaccounts/token\n    verbs:\n      - create\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Install the Helm chart:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm upgrade --install aws-cloud-controller-manager -n kube-system aws-cloud-controller-manager/aws-cloud-controller-manager --values values.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify that the Helm chart installed successfully:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm status -n kube-system aws-cloud-controller-manager\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["If present, edit the DaemonSet to remove the default node selector ",(0,t.jsx)(n.code,{children:'node-role.kubernetes.io/control-plane: ""'}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl edit daemonset aws-cloud-controller-manager -n kube-system\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"(Optional) Verify that the cloud controller manager update succeeded:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager\n"})}),"\n",(0,t.jsx)(n.h3,{id:"migrating-to-the-out-of-tree-aws-cloud-provider-for-rke",children:"Migrating to the Out-of-Tree AWS Cloud Provider for RKE"}),"\n",(0,t.jsxs)(n.p,{children:["To migrate from an in-tree cloud provider to the out-of-tree AWS cloud provider, you must stop the existing cluster's kube controller manager and install the AWS cloud controller manager. There are many ways to do this. Refer to the official AWS documentation on the ",(0,t.jsx)(n.a,{href:"https://cloud-provider-aws.sigs.k8s.io/getting_started/",children:"external cloud controller manager"})," for details."]}),"\n",(0,t.jsxs)(n.p,{children:["If it's acceptable to have some downtime, you can ",(0,t.jsx)(n.a,{href:"#using-the-out-of-tree-aws-cloud-provider-for-rke",children:"switch to an external cloud provider"}),", which removes in-tree components and then deploy charts to install the AWS cloud controller manager."]}),"\n",(0,t.jsxs)(n.p,{children:["If your setup can't tolerate any control plane downtime, you must enable leader migration. This facilitates a smooth transition from the controllers in the kube controller manager to their counterparts in the cloud controller manager. Refer to the official AWS documentation on ",(0,t.jsx)(n.a,{href:"https://cloud-provider-aws.sigs.k8s.io/getting_started/#using-leader-migration",children:"Using Leader Migration"})," for more details."]}),"\n",(0,t.jsxs)(n.admonition,{title:"Important",type:"note",children:[(0,t.jsxs)(n.p,{children:["The Kubernetes ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#before-you-begin",children:"cloud controller migration documentation"})," mentions that it is possible to migrate with the same Kubernetes version, but assumes that migration is part of a Kubernetes upgrade."]}),(0,t.jsxs)(n.p,{children:["Refer to the Kubernetes documentation on ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/",children:"migrating to use the cloud controller manager"})," to see if you need to customize your setup before migrating. Confirm your ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#default-configuration",children:"migration configuration values"}),". If your cloud provider provides an implementation of the Node IPAM controller, you also need to ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/controller-manager-leader-migration/#node-ipam-controller-migration",children:"migrate the IPAM controller"}),"."]})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Update the cluster config to enable leader migration in ",(0,t.jsx)(n.code,{children:"cluster.yml"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'services:\n  kube-controller:\n    extra_args:\n      enable-leader-migration: "true"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the cloud provider is still ",(0,t.jsx)(n.code,{children:"aws"})," at this step:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"cloud_provider:\n  name: aws\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Cordon the control plane nodes, so that the AWS cloud controller pods run on nodes only after upgrading to the external cloud provider."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl cordon -l "node-role.kubernetes.io/controlplane=true"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["To install the AWS cloud controller manager, you must enable leader migration in values.yaml and follow the same steps as when ",(0,t.jsx)(n.a,{href:"#helm-chart-installation-from-cli",children:"installing chart on a new cluster"}),". To enable leader migration, add the following to the container arguments in values.yaml:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- '--enable-leader-migration=true' \n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Confirm that the chart is installed but the new pods aren't running yet due to cordoned controlplane nodes. After updating the cluster in the next step, RKE will uncordon each node after upgrading and ",(0,t.jsx)(n.code,{children:"aws-controller-manager"})," pods will be scheduled."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Update ",(0,t.jsx)(n.code,{children:"cluster.yml"})," to change the cloud provider and remove the leader migration arguments from the kube-controller."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Selecting ",(0,t.jsx)(n.code,{children:"external-aws"})," sets ",(0,t.jsx)(n.code,{children:"--cloud-provider=external"})," and allows setting ",(0,t.jsx)(n.code,{children:"useInstanceMetadataHostname"}),". Enabling ",(0,t.jsx)(n.code,{children:"useInstanceMetadataHostname"})," will query the EC2 metadata service and set ",(0,t.jsx)(n.code,{children:"http://169.254.169.254/latest/meta-data/hostname"})," as ",(0,t.jsx)(n.code,{children:"hostname-override"})," for ",(0,t.jsx)(n.code,{children:"kubelet"})," and ",(0,t.jsx)(n.code,{children:"kube-proxy"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Enabling ",(0,t.jsx)(n.code,{children:"useInstanceMetadataHostname"})," is required if ",(0,t.jsx)(n.code,{children:"hostname-override"})," is empty or if ",(0,t.jsx)(n.code,{children:"hostname-override"})," doesn't meet the ",(0,t.jsx)(n.a,{href:"https://cloud-provider-aws.sigs.k8s.io/prerequisites/",children:"node naming conventions"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"rancher_kubernetes_engine_config:\n  cloud_provider:\n    name: external-aws\n    useInstanceMetadataHostname: true/false\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Remove"})," ",(0,t.jsx)(n.code,{children:"enable-leader-migration"})," from:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'services:\n  kube-controller:\n    extra_args:\n      enable-leader-migration: "true"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you're upgrading the cluster's Kubernetes version, set the Kubernetes version as well."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Update the cluster. The ",(0,t.jsx)(n.code,{children:"aws-cloud-controller-manager"})," pods should now be running."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) After the upgrade, leader migration is no longer required due to only one cloud-controller-manager and can be removed. Upgrade the chart and remove the following section from the container arguments:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"- --enable-leader-migration=true \n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify the cloud controller manager update was successfully rolled out with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl rollout status daemonset -n kube-system aws-cloud-controller-manager\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var t=r(7294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);