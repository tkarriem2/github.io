// JSON Resume Data
var resData = {
    "name": "M. Todd Karriem",
    "subname": "MCSE+I, MCSA, MCP & DCSE",
    "title": "Resume 2018 Winter (Beta)",
    "contact": "510.736.2150",
    "email": "mtkarriem@outlook.com",
    "website": "mtkarriem.com",
    "caboose": "Extended Employment & Consultant History Furnished Upon Request",
    "denote": "Includes all 'Employment Status' types - Contract/W2, Consultant/1099, Full-Time, etc.",
    "copyright": "Copyright © 2018 - <a class='blue-text' href='' target='_blank'>MTKarriem.com</a> All rights reserved",
    "lastver": "10314, 20314, 42017,92017",
    "currver": "22018",
    "nextver": "TBD",
    "lastupdate": "Tue Feb 27 2018 16:16:40 UTC-0700 (PDT)",
    "dbname": "mtkarriem-webres",
    "localpath": "/mtk/"
};

// Article Date
var hdrsJSN = {
    "Qualifications": "Skills & Achievements, Overall Management & Service",
    "Software/Hardware Knowledge": "Platform & Applications, Infrastructure Management, Security & Hardware",
    "Accreditations": "",
    "Latest Employment History": ""
};

var qualJSN = [
    [
        "8 years experience installing, configuring, troubleshooting and managing Linux OSes including RHEL 5x/6x & Ubuntu Server LTS",
        "14 years working with Windows client/server products including Server 2016/2012/2008, Windows 10, 8x, Windows 7 & XP",
        "6 years scripting, task automation and building automated solutions within Windows/Linux, CI/CD, development, software-defined and/or virtualized environments using various automation and distributed services",
        "6 years managing Cloud SaaS infrastructure assets, resources & security for enterprise environments over 50k assets",
        "3 years experience with service rollouts incorporating Configuration Management tools/services including AWS, Chef, Puppet, Docker, Vagrant, Jenkins, PowerShell DSC with exposure to resilience tools/practices like SimianArmy, Havoc and Mizaru",
        "4 years practical experience with primary AWS services including EC2, Beanstalk, ELB, Route53, S3, Cloudfront, SNS, SWF, SQS, RDS, DynamoDB, ElastiCache, IAM, CloudFormation and GovCloud/FedRAMP compliance",
        "11 years developing multi-platform scripts/tools using various languages including Powershell, Python, AutoIT, VBScript & Shell/Bash",
        "6 years building and developing web sites, applications and services using HTML, CSS/SASS, Javascript, mainstream JS Frameworks, XML, JSON and more recently Node.js, AngularJS, etc.",
        "13 years providing daily maintenance, systems/security monitoring and supporting production & development infrastructures",
        "8 years design, configuration and management of virtual platforms using VMware, Hyper-V, Citrix XenServer & FOSS tools",
        "10 years within LAN/WAN infrastructures managing and configuring TCP/IP based networks including routing, RAS & VPN solutions",
        "9 years designing and planning Active Directory migrations using various tools, such as ADMT, USMT & Quest Migration Manager",
        "8 years providing operational solutions and administration for Microsoft SQL, SharePoint, Exchange & IIS Servers",
        "7 years design and configuration of enterprise level SCCM/SCOM (SMS/MOM), MDT & BDT management infrastructures",
        "8 years config and manage SIEM, Network IDS, IPD, UTM and other security vulnerability, assessment and management tools/practices",
        "7 years Project Management/Lead successfully managing team members, admin tasks, budget, vendors & resources",
        "5 years managing and supporting Enterprise level Mobile/Handheld devices defining corporate BYOD/IoT protocols and practices"
    ],
    [
        "Ability to manage all project aspects including resources, priorities, budget and deliverables providing technical value",
        "Directed numerous initiatives incorporating SDM, SOP and SDLC methodologies including Agile, Kaizen and Scrum",
        "Seasoned scripting skills in Windows/Linux configuration environments with ability to produce out-of-the-box integration solutions",
        "Experience designing general solutions for access control, user authentication, and service security",
        "Analysis, recommendation, certification of HW/SW additions & modifications for improved performance & productivity",
        "Advanced infrastructure and architectural design for complex & challenging computing models including SOA/microservices, component-based, multi-point grid initiatives",
        "Development of procedural standards, support track and change control documentation using best practices",
        "Up-to-date with governance strategies to comply with regulatory initiatives such as ITIL, Sarbanes-Oxley and HIPAA",
        "Self-motivated team player who demonstrates initiative and flexibility interfacing with multiple groups, players & management levels",
        "Ability to perform and prioritize multiple tasks concurrently under pressure in fast paced, highly visible, interrupt-driven environments",
        "Excellent verbal and written communication skills with experience providing instruction in training environments"
    ]
];
var softJSN = [
    [{
            "hdr": "Cloud, Container & Virtualization",
            "items": [
                "VMWare vCloud, ESX/ESXi 4/5x, vCenter & Hypervisor",
                "Amazon Web Services (AWS) EC2, VPC, Container & CloudFront",
                "MS Azure, Windows Azure Pack, Hyper-V & Office 365 for Business",
                "Google Cloud Connect Platform & G Suite/Google Apps for Work",
                "Red Hat Cloud, RHV/RHVH 4 & Red Hat Openstack",
                "Docker Toolbox - Machine, Engine, Compose & Kitematic",
                "Oracle VM Server/VirtualBox 4/5x and Vagrant",
                "Citrix XenApp/Server/Cloud Access Gateway & Presentation 4.5"
            ]
        },
        {
            "hdr": "Core/Kernel Operating Systems",
            "items": [
                "Red Hat Enterprise (RHEL) 5/6/7x & Ubuntu Server LTS 14/16.04",
                "Microsoft Windows Server 2k16 TP5, 2012/2008 R2, SBS & Essentials",
                "Microsoft Windows 10, 8x, 7, XP & Embedded",
                "Fedora, CentOS, OpenSUSE & Debian, RPM & Gentoo based distros",
                "Android 5/6/7x, iOS 10x & macOS Server 5"
            ]
        },
        {
            "hdr": "Development, Scripting & Tools",
            "items": [
                "Powershell, Python, C#/C++, VBScript, AutoIT & Batch/Shell Scripts",
                "AWS Services, APIs and SDKs",
                "NodeJS, React, Ember, Git, NPM, Gulp & Browserify",
                "Angular 1/2x, Typescript, JavaScript, XML/JSON, Ajax & ASP.net",
                "Visual Studio/Code, Atom, Brackets, Sublime Text & Github",
                "Microsoft Visio, Sparx Enterprise Architect (EA) & Gliffy"
            ]
        }
    ],
    [{
            "hdr": "Automation & Distribution",
            "items": [
                "Microsoft Deployment Toolkit (MDT), DISM, USMT & WIM",
                "MS Desktop Optimization Pack (MDOP) Tools",
                "MS DaRT, MBAM, APGM, App-V & UE/MED-V",
                "Chef DK/Automate, Habitat & Test Kitchen",
                "Windows, RHEL, UBUNTU Cookbooks & Recipes",
                "Red Hat Satellite 5/6x, KickStart & Access Labs",
                "Nagios, Zabbix and Zenoss Core"
            ]
        },
        {
            "hdr": "Operations & System/Web Integration",
            "items": [
                "Cisco UCS, HP Converged/CloudSystem - OneView",
                "Nutanix Acropolis & Prism",
                "Windows System Center 2016/2012, SCCM/SCOM, SMS/MOM & WSUS",
                "VMWare VSAN, vSphere OM & Pivotal tcServer (vFabric)",
                "IIS 8.5/7.x, Nginx, Apache Tomcat & IBM WebSphere",
                "Symantec NetBackup 7.x, 5.x and AWS Storage Gateway"
            ]
        },
        {
            "hdr": "Database, Collaboration & Analytics",
            "items": [
                "MongoDB 2/3x, AWS DynamoDB/SimpleDB/RDS/S3",
                "MySQL 5x, PostgreSQL 8/9x, SQLite, JSON P/LD & XML",
                "Microsoft SQL Server 2016/2012/2008",
                "Atlassian Jira, BMC Remedy & Salesforce Desk.com",
                "SharePoint 2013/2010 & Sharepoint Online",
                "Skype for Business (Formerly Lync) & Exchange 2013/2010/2007",
                "MS Project, Basecamp/Campfire/HighRise, Trello and ActiveCollab",
                "Tableau, Splunk and ELK (Elasticsearch-Logstash-Kibana)"
            ]
        }
    ],
    [{
            "hdr": "Security & Risk Management",
            "items": [
                "Dell SonicWALL and KACE Systems Management Appliances",
                "Wireshark and Microsoft Message Analyzer (Network Monitor)",
                "NMAP, OpenVAS (Nessus), OSSEC and Metasploit Framework",
                "Security Onion and OSSIM including Bro IDS, Snort & Suricata",
                "OPSWAT OESIS Framework and MetaDefender",
                "Microsoft EMET and Baseline Security Analyzer (MBSA)",
                "NGINX Plus and F5 BIG-IP Appliances",
                "RSA, OAuth2, XACML, OpenID, OpenSSH & 2-factor authentication"
            ]
        },
        {
            "hdr": "Storage & Network",
            "items": [
                "Dell EMC VCE v/vxBlock Converged, PowerEdge C/M/R/T & OptiPlex",
                "HP ProLiant BL/DL/ML Servers & MSA Drive Enclosures",
                "Lenovo Flex, Converged HX Servers & SuperMicro Twin/MicroBlade",
                "Cisco Meraki MX, Catalyst, HP ProCurve & Dell PowerConnect switches",
                "Drobo, QNAP, Synology and other external storage devices",
                "NAS & SAN including EMC, NetApp & HP 3PAR /w Brocade Fabric"
            ]
        },
        {
            "hdr": "Client/Mobile & SOHO Networking",
            "items": [
                "Dell Latitude, Vostro, XPS & Inspiron",
                "Lenovo ThinkCentre/M, IdeaPad & ThinkPad",
                "HP Elite, Pro, Essential, Z Book/Workstation & Pavilion/Omen/Spectre",
                "Apple Macbook Pro/Air, iMAC, Mac Pro/mini, iPad Pro/Air/mini & Airport",
                "Cisco/Linksys, Asus, Netgear, Buffalo, D-Link & DD-WRT/OpenWRT"
            ]
        }
    ]
];
var accrJSN = {
    "MCSA MCSE+I MCP Certified and MVA Training": "",
    "Windows Server 2k12/2k8 R2 & MDT/BDT Training": "Dell Higher Education and Training Services",
    "Microsoft Learning Certificates of Completion": "Windows 10/8/7 for IT Professionals, IT Service Management - System Center 2012 R2, Management & Automation - Windows 2012 R2, Server Management Windows 2012 R2/2008",
    "A.S. Degree - Computer and Information Science": "College of San Mateo California - 12/04",
    "Dell Recognition Plaques & Appreciation Awards": "Dell Management, Employee & Client Relations, Dell Certified Systems Expert - DCSE and DM",
    "CNE3 - Novell Certified NetWare Engineer Level 3": "",
    "AWS Certified SysOps Administrator - Exam Ready": ""
};
var lateJSN = [
    [{
            "jobcomp": "Sears Holding Management Corp.",
            "jobtitle": "Systems Engineer",
            "empspan": "082017-022018",
            "emptype": "CORP2CORP",
            "salary": "75/PH",
            "summary": "Brought on board to provide assistance with development and enhancement of massive organizational reduction strategy encompassing thousands of assets and objects.",
            "list": [
                "Construction and development of automation utilities and processes for systems asset/entity reduction integrating various scripting and monitoring technologies",
                "CStreamlined error and event notification implementing Windows Event Log injection and HTTP Event collection via cURL on Linux for SCOM and Splunk collection",
                "Provided detailed architectural design documentation whilst collaborating and coordinating with applicable stakeholders/resources"
            ]
        },
        {
            "jobcomp": "Visa USA",
            "jobtitle": "Solutions Engineer/Network Analyst",
            "empspan": "122015-072017",
            "emptype": "CONW2",
            "salary": "70/PH",
            "summary": "Responsible for the design and implementation of infrastructure applications/services for internal, partner and transaction based business segments.  Engineered and integrated core components for the primary configurable Compute-as-a-Service offering for development and production environments.",
            "list": [
                "Designed automation experiences with custom and off-the-shelf applications/services and implemented infrastructure components based on development and business requirements",
                "Composed and maintained complex architectural documentation and diagrams for applications/services detailing compute, network and interconnection design",
                "Architecture, integration and configuration of services for all required surrounding technologies, including Application/Web Servers along with other middleware technologies",
                "Gathered and analyzed requirements from development/engineering teams to design, deploy and support various enterprise middleware technologies or new application initiatives",
                "Led problem resolution and improvement efforts with level 3 (engineering) production support for new and existing integration solutions",
                "Managed and maintained constant interaction with analyst, developers, architects, project managers, technical and non-technical staff to translate business goals into actionable technical requirements",
                "Formulated and provided input to project planning, estimations, budgets, resources, and other technology business requirements"
            ]
        },
        {
            "jobcomp": "US Center for Disease Control + Prevention",
            "jobtitle": "Cloud DevOps Engineer",
            "empspan": "012014-062015",
            "emptype": "FTE-CONW2",
            "salary": "115K/YR",
            "summary": "Provided progressive development and infrastructure solutions while managing day-to-day ceiling-level operational support for both companies. The highlight was being able to lead the server infrastructure and configuration management re-design of the CDCP's public-facing web application known as PHINS.",
            "list": [
                "Design of RHEL 5.8 and Windows 2012 R2 hybrid server infrastructure including configuration of storage, prerequisite apps, MySQL and PostGreSQL database instances and configuration management assisting future maintenance and expansion needs",
                "Collaborated with Dev Team members and application owners to assess performance and resource issues to identify re-design or remediation direction",
                "Configured Puppet for AWS EC2 VM provisioning and utilized applicable modules for server role-based configuration, post-build automation needs; i.e. security development build changes and database Hot Standby failover/failback",
                "Updated current AWS operational/configuration knowledge with AWS FedRAMP security requirements and GovCloud framework differences",
                "Constructed continuous integration/delivery pipelines including environment reproduction, deployment, resource scaling by tying together CMS, custom scripts and monitoring solutions",
                "Performed extensive penetration testing of development, UAT and pre-production environments scanning vulnerabilities and developed baseline hardening configuration"
            ]
        },
        {
            "jobcomp": "BioRad Laboratories Inc.",
            "jobtitle": "IT Manager/Solutions Engineer",
            "empspan": "092012-102013",
            "emptype": "CONW2",
            "salary": "65/PH",
            "summary": "As a BioRad Solutions Engineer, Mr. Karriem utilized his skills leading the technical assimilation of a newly acquired diagnostic business providing design and architecture for all asset migration including HW inventory, Windows Active Directory migration and Linux integration for 300+ assets. Project success transitioned to the tech management position for the acquisition's satellite office.",
            "list": [
                "Using WMI, PowerShell and Python scripts, created network infrastructure analysis process to acquire Windows 2008 R2, VMWare 5.x, RHEL and Appliance assessment categorizing hosts, virtual machines, applications, services and user accounts",
                "Design of Migration Infrastructure incorporating Microsoft, VMWare, custom scripts and open source tools providing thorough migration, automation and report management of Active Directory objects, virtual machine creation and Linux server integration",
                "Engineered MDT, ADMT, vSphere CL/ VIX, Python, PowerShell, Autoit and VB scripts to automate most cumbersome migration tasks including, if possible, ad-hoc script creation for one-off requests",
                "Implemented test development environment using AWS Direct Connect, VPC, S3 and EC2 and setup of Google Apps for sandboxed project collaboration with document sharing and retention",
                "Created detailed documentation and provided technical training of applications, services and procedures new to the environment contrasting the old differences/changes if applicable",
                "Worked with Managers and Platform/Application owners to determine migration justification assisting with technical presentations to BioRad migration and IT teams",
                "Maintained and managed day-to-day operations of isolated and/or sandboxed systems and projects including test and development environments"
            ]
        },
        {
            "jobcomp": "Dell Inc.",
            "jobtitle": "Cloud Software & Sustaining Engineer",
            "empspan": "012009-022012",
            "emptype": "CONW2-FTE",
            "salary": "65/PH-130K/YR",
            "summary": "Furnished advanced engineering/support for Dell client infrastructures services, troubleshooting complex datacenter and distributed installations issues remotely, assisting with complex deployment cases, contributing to optimization, performance and the overall health of Dell PaaS and SaaS hosted management products.",
            "list": [
                "Design and engineering of SaaS based scripts/toolsets for Dell's Managed Client Infrastructure and Global Software and Service delivery units",
                "Triage, in-depth analysis and repair for a wide variety of issues with deploying and using Dell products in conjunction with customer networks including heterogeneous environments and multiple OS flavors",
                "Provide training and technical discussions concerning design, processes and behavior of SaaS/Cloud based management logic and functions",
                "Developed detailed documentation, FAQs and procedures for use by customers and internal help desk units",
                "Drive critical situation problem resolution teams to remediate and restore productivity for affected customers",
                "Participate in design reviews and testing for new releases to ensure the right product is developed and deployed to ensure customers are delighted with the product offering",
                "Provide product direction and assist development /design team with implementation of corrective actions including feedback regarding lessons learned, postmortem documentation and other product support improvement tasks",
                "Define and review technical documents, information data points and procedural processes"
            ]
        },
        {
            "jobcomp": "Microsoft Consulting Services",
            "jobtitle": "Microsoft Systems Engineer",
            "empspan": "042007-012009",
            "emptype": "CONW2",
            "salary": "55/PH",
            "summary": "Provided strategic technical consultation and infrastructure support for clients implementing the Microsoft Mediaroom/IPTV software platform, primarily onsite at AT&T Labs.",
            "list": [
                "Extrapolation of complex system data to provide strategic solutions for all IPTV and Windows issues",
                "Provided technical consultation for the IPTV solution including infrastructure, architectural and design support",
                "Supported all IPTV framework components including ADS, SMS 2003, MOM 2005, SQL 2005, and Windows 2003",
                "Managed Exchange 2k3/2k7, MS SharePoint 2007 (MOSS), SCOM/SCCM 2007 and SQL Server 2k8",
                "Configuration and Maintenance of VMware environment consisting of more than 100 VMs",
                "Provided consultation to Microsoft clients from both a systems, relational and business perspective",
                "Provided and reviewed technical documents, information data points and procedural processes"
            ]
        },
        {
            "jobcomp": "Logitech Inc.",
            "jobtitle": "Sr. Project Engineer",
            "empspan": "062006-032007",
            "emptype": "CONW2",
            "salary": "50/PH",
            "summary": "Recruited to apply expertise on the Windows Server infrastructure, client deployment & provide direction for Citrix enterprise-wide initiative.",
            "list": [
                "Designed, developed and engineered the production deployment roadmap for all terminals and virtualized service-based server solutions",
                "Implemented Global Citrix server farm and provided internal logistics for all applied applications",
                "Architecture of VMware testing and production environments providing P2V/V2V & scripting",
                "Compiled and managed enterprise-wide, server hardening framework and desired- state patch distribution model",
                "Performed Citrix, Windows 2003, Windows 2000, Windows XP and Active Directory 3rd level support",
                "Developed hardware-aware PXE boot environment using ADS and Altiris reducing client (new-hire, repurpose, etc.) build and deployment times by 60%",
                "Supplied in-depth technical documents and repository for projects, as well as, day-to-day operations"
            ]
        }
    ]
];
var othrJSN = {
    "Other Notable Positions": "Sr. Application Server Design Analyst, Lead Windows Desktop Engineer, IT Manager"
};
// Misc Obects | Arrays
var mNms = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
var strFx = [
    "-tmpl", "Data", "hdr", "award"
];
var hdrFavIco = [
'<link rel="shortcut icon" href="img/ico/favicon.ico">',
'<link rel="apple-touch-icon" sizes="57x57" href="img/ico/apple-icon-57x57.png">',
'<link rel="apple-touch-icon" sizes="60x60" href="img/ico/apple-icon-60x60.png">',
'<link rel="apple-touch-icon" sizes="72x72" href="img/ico/apple-icon-72x72.png">',
'<link rel="apple-touch-icon" sizes="76x76" href="img/ico/apple-icon-76x76.png">',
'<link rel="apple-touch-icon" sizes="114x114" href="img/ico/apple-icon-114x114.png">',
'<link rel="apple-touch-icon" sizes="120x120" href="img/ico/apple-icon-120x120.png">',
'<link rel="apple-touch-icon" sizes="144x144" href="img/ico/apple-icon-144x144.png">',
'<link rel="apple-touch-icon" sizes="152x152" href="img/ico/apple-icon-152x152.png">',
'<link rel="apple-touch-icon" sizes="180x180" href="img/ico/apple-icon-180x180.png">',
'<link rel="icon" type="image/png" sizes="192x192" href="img/ico/android-icon-192x192.png">',
'<link rel="icon" type="image/png" sizes="32x32" href="img/ico/favicon-32x32.png">',
'<link rel="icon" type="image/png" sizes="96x96" href="img/ico/favicon-96x96.png">',
'<link rel="icon" type="image/png" sizes="16x16" href="img/ico/favicon-16x16.png">',
'<link rel="manifest" href="cfg/manifest.json">',
'<meta name="msapplication-TileColor" content="#757575">',
'<meta name="msapplication-TileImage" content="img/ico/ms-icon-144x144.png">',
'<meta name="theme-color" content="#536dfe">',
'<meta name="msapplication-config" content="cfg/browserconfig.xml">'
];
var btnLbls = [
    "Print", "Download", "GoTo", "Search", "Offline", "Online", "repo", "Last update", "Version", "Beta"
];
var hdrHrefs = [
    "#hdrQual",
    "#hdrSoft",
    "#hdrAccr",
    "#hdrLate"
];
var alpha = [
    "a", "b", "c", "d", "e", "f"
];
var mdlData = {
    "dlAgrmnt": [
            '<form id="dlFrm" action="#" class="row"><p><input type="checkbox" id="dlChk" class="filled-in" /><label for="dlChk" class="font-m black-text">By checking this box and downloading resume, you agree to be bound by the terms of this <a class="privlnk" target="_parent" data-target="mdl1">privacy policy</a>.</label></p><div id="mdlbtns"><span id="nfoPnl" class="font-s left center-align"></span><a target="_blank" class="dlbtn modal-action modal-close waves-effect waves-green btn disabled" download>Agree</a><a class="btnClose modal-action modal-close waves-effect waves-red red black-text btn">Cancel</a></div></form>'
        ],
    "dropTmpl": ['<ul id="drpJmp" class="table-of-contents"></ul>', '<li><a href="" class="font-s"></a></li>'],
    "truckBtn": '<button id="mozTghtr" class="waves-effect waves-dark btn blue darken-2 font-m valign-wrapper hide-on-med-and-down" onclick="TogetherJS(this); return false;"><i class="icon-m material-icons">headset_mic</i><span class="font-mi badge"></span></button>'
}

var testScriptUrls = [
    "http://cdnjs.cloudflare.com/ajax/libs/html-inspector/0.8.2/html-inspector.js",
    "https://cdnjs.cloudflare.com/ajax/libs/helium-css/1.1/helium.min.js"
];

var socLinks = [
	"https://facebook.com/mtoddkarriem", "https://linkedin.com/in/tkarriem", "skype:tkarriem_2?call", "https://plus.google.com/share?url=mtkarriem.com", "t.me/tkarriem", "https://github.com/tkarriem2", "mailto:" + resData.email + "?subject=Re: Inquiry (From WebResume)", "https://www.sharethis.com", "paypal.me/BillowSolutions"
];

var mdlArrUris = [
    btnLbls[6],
    'bin/coverLtr.html',
    'ftp://ftp.sonic.net/pub/users/mtkarriem',
    'https://manage.auth0.com/login'
];

var mdlLblArr = ["Download Copy", "Cover Letter"];

var devMdTgs = [
    "<meta http-equiv='cache-control' content='no-cache'>",
    "<meta http-equiv='pragma' content='no-cache'>",
    "<meta http-equiv='cache-control' content='no-store'>",
    "<meta http-equiv='pragma' content='no-store'>",
    "<meta http-equiv='expires' content='0'>"
];
