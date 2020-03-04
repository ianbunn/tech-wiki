# AWS Certified Solutions Architect Associate

## How to stay up to date

- View the A Cloud Guru’s AWS This Week YouTube video
- Review Gartner’s Magic Quadrant for Internet as a Service (IaaS)

## Helpful links

[AWS Security Best Practice White Paper for studying](https://aws.amazon.com/whitepapers)

[Install AWS CLI on MacOS](https://docs.aws.amazon.com/cli/latest/userguide/cliinstallmacos.html)

**Install Python (pip)** before you go on with this study guide, so you can practice! Run the following command:

`sudo easy_install pip`

## Services

### Regions, Availability Zones and Edge Locations

- Region is a physical area location
- Availability Zone (AZ) is a data center, facility
- Edge Location is used for content caching with CloudFront

### Compute !important for SA Associate

- EC2 (Elastic Compute Cloud) (virtual machine in the cloud)
- On Demand EC2 instances = allow you to pay a fixed rate by the hour (or by the second) with no commitment
    - Best used for:
        - No upfront payment and longterm contract
        - Apps w/short term, spiky, or unpredictable workloads that cannot be interrupted
        - Apps being developed or tested for the first time
- Reserved EC2 instances = a reservation with Amazon
    - A contract with 1 year or 3 year terms
    - Significant discount for the hourly charge
    - Types of Reserved Instances (RIs)
        - Standard RIs
            - Up to 75% off ondemand
        - Convertible RIs = feature the capability of changing the attributes of the RI as long as it’s an equal or greater value
            - Up to 54% off ondemand
        - Scheduled RIs = available to launch w/in the time window reserved
            - Allows you to match your capacity reservation to a predictable recurring schedule that only requires a fraction of a day, a week, or a month
                - Best used for:
                    - Apps w/predictable usage or workload (steady state)
                    - Apps requiring reserved capacity
                    - Reduce total computing costs by making an upfront payment
- Spot EC2 instances = bid a price for instance capacity, providing you can get that price
    - For flexible start and end times
    - Apps only feasible at very low compute prices
    - An example would be a genome lab studying DNA sequencing (big data companies)
    - This lab would bid for spot compute time during offpeak hours, meaning cheaper compute costs
- Dedicated Hosts EC2 instances = physical EC2 servers dedicated for your use
Allows you to use your existing serverbound software licenses (Veeamware, SQL, etc.)
    - Useful for regulatory requirements that don’t allow multitenant virtualization
    - Great for licensing that does not support multitenancy or cloud deployments
    - Can be purchased on demand (hourly)
    - Can be purchased as RI for up to 70% off ondemand
    - Types of instances
        - HVM = 
        - PV = Paravirtual
        - SubnetCIDR= AZ
    - Each subnet resides in one AZ
    - One subnet always equals to one AZ
    - Termination Protection is turned off by default
    - You must check the box to turn on this protection
- EBS = EC2 instances will be launched with a storage device (EBS)
    - Storage = Volume
    - Root device volume is a virtual disk that you can customize based on storage type (see EBS storage types below)
    - Delete on Termination is always checked by default for EBS when creating a new EC2 instance
- Amazon Machine Image (AMI) options
  - When spinning up an EBS, you can use an AMI that is specific to:
    - Region
    - OS
    - Architecture (32bit or 64bit)
    - Launch permissions
    - Storage for the root device (root device volume)
    - Instance store (EPHEMERAL STORAGE)
    - Cannot stop the instance
    - You get less durability if the instance fails
    - If the underlying host fails, you will lose your data
    - Less data persistent
    - Root device for an instance launched from the AMI is an instance store volume created from a template stored in S3
    - It might take longer to provision this type of AMI
- EBS backed volumes
  - CAN stop the instance
    - Reboot will not lose your data
    - By default, root devices can be deleted, unless you check the box off to not delete
    - Uses Hypervisors to stop, start
    - Root device for an instance launched from the AMI is an EBS volume created from an EBS snapshot
    - Default AMI cannot be encrypted
    - Root device volume provisioned by AWS cannot be encrypted during creation; however, there is a way to create it without encryption, and then encrypting it
    - Three ways to encrypt it:
      - Third party software, such as BitLocker
      - Copying the root volume, and encrypting it while copying it
        - First, stop your EC2 instance associated with the root device you are trying to encrypt
        - Once EC2 instance is stopped, create a snapshot of the root volume of that EC2 instance
        - This will not let you add encryption yet
        - Then, move the snapshot to a different region, and when doing this, you will be prompted to turn on volume encryption or not
        - Turn on volume encryption
        - Create an AMI from that encrypted snapshot to make it available when launching an EC2 instance with an encrypted root device at rest
        - Snapshots of encrypted volumes are encrypted automatically
        - Volumes restored from encrypted snapshots will also be encrypted
    - Using the API
      - Additional volume devices can be encrypted by checking the box
- Tags help you control the costs of everything
- Security Group is a set of firewall rules that control the traffic for your EC2 instance
  - A virtual firewall
  - First line of defense VS hackers
  - PORT 22 for SSHing into your EC2 instance should be closely monitored
  - 1 instance can have multiple security groups
  - Security groups are stateful
  - By adding an inbound rule, it automatically adds an outbound rule
    - What comes in, must go out
    - ALL inbound traffic is blocked by default
  - Security groups can only “allow” traffic, and not block traffic
  - ALL outbound traffic is allowed
    - Example, if a web server needs to allow Internet traffic to reach it, rules that allow unrestricted access to HTTP and HTTPS ports need to be added
      - SSH = Port 22
        - CIDR address range for source IP
      - HTTP = Port 80
        - CIDR address range for source IP
      - HTTPS = Port 443
        - CIDR address range for source IP
    - Key Pair
Public and private key (PEM key)
Public can be the same for multiple EC2 instances
Private needs to stay private (DO NOT SHARE OR MAKE COPIES)
EC2 Dashboard = Once an EC2 Instance is up and running, the details will be available to review
Description tab will contain:
Public DNS and Public IP to hit your web app using your browser
Status Checks tab will contain:
System Status Checks
Systems required to run the instance to ensure they are functioning properly
Instance Status Checks
Monitors your software and network configuration for this instance
Monitoring tab will contain:
CloudWatch metrics updated every 5 minutes
Detailed metrics are available for an additional cost
A lot of disk reads and writes data
Network operations
Status checks
Tags tab will contain all assigned tabs at creation, and allows you to CRUD tags
EC2 Instance types mnemonic tool below:
F for FPGA = Field Programmable Gate Array for genomics research, financial analytics, real time video processing, big data, etc.
I for IOPS
G  graphics intensive for video encoding / 3D application streaming
H  high disk throughput for MapReducebased workloads, distributed file systems such as HDFS and MapRFS
T  cheap general purpose (think T2 Micro) for web servers and small DBs
D  dense storage for file servers, data warehousing, Hadoop, etc.
R  RAMemory optimized for memory intensive apps / DBs
M  main choice for general purpose apps
C  compute optimized for CPU intensive Apps / DBs
P  graphics / general purpose GPU for machine learning, BTC mining, etc.
X  extreme memory optimized for SAP HANA / Apache Spark , etc.

[AWS EC2 Instance Lifecycle](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2instancelifecycle.html)

EBS (Elastic Block Storage) (virtual hard disk drive) allows you to create storage volumes and attach them to EC2 instances
Once attached to an EC2 instance, you can run a DB, an application, etc.
Root device volume is where your OS is installed
Can have multiple drives or volumes
Spread over multiple AZs
Snapshots exist on S3
Snapshots are point in time copies of volumes
Snapshots are incremental  only the blocks that have change since your last snapshot are moved to S3
Only recording the changes
Snapshots of encrypted volumes are encrypted automatically
Volumes restored from encrypted snapshots are encrypted automatically
You can share snapshots only if they are unencrypted
These snapshots can be shared w/other AWS accounts or made public
You can share the EBS volume size and type on the fly, except for changing magnetic (standard) type
Volumes will ALWAYS be in the same AZ as the EC2 instance
EBS Volume Types:
General Purpose SSD (GP2)
Balances both price and performance
3 IOPS per GB with up to 10,000 IOPS and the ability to burst up to 3000 IOPS for extended periods of time for volumes at 3334 GB and above
Provisioned IOPS SD (IO1) (SSD)
Designed for extreme performance for I/O intensive apps such as large relational or NoSQL DBs
More than 10,000 IOPS
Provision up to 20,000 IOPS per volume
Throughput Optimized HDD (ST1)
Big data or data warehouses
Log processing
Cannot be a boot volume, only an additional volume
Cold HDD (SC1)
Lowest cost storage for infrequently accessed  workloads
File server
Cannot be a boot volume, only an additional volume
Magnetic (Standard)
Lowest cost per GB and only magnetic EBS volume that is bootable
Magnetic volumes are perfect for data that is accessed infrequently, and apps where the lowest storage cost is important
Previous generation
You cannot modify the volume type for magnetic (standard) EBS
To copy an EBS to another region or AZ, you first have to create a snapshot of the EBS
Then, you need to copy the snapshot into the region and/or AZ
Elastic Beanstalk automatically handles the deployment of your code, from capacity provisioning, load balancing, autoscaling to application health monitoring, based on the uploaded code
Elastic Beanstalk is specifically designed to automatically provision the resources required to host the code a developer uploads during the development process
Lightsail is used if you don’t want to deal with any AWS setup
Lambda allows you to run code without having to worry about provisioning any underlying resources, such as virtual machines, DBs, etc.
https://aws.amazon.com/lambda/

Elastic Load Balancer (ELB)
Types of ELBs:
Application load balancer
Best suited for HTTP and HTTPS traffic
Operates at OS’s Layer 7 and are application aware
Intelligent capabilities, and can create advanced request routing
This sends specified requests to specific web servers
Network load balancer
Best suited for TCP traffic where extreme performance is required
Operates at OS’s Layer 4
Capable of handling millions of requests per second, while maintaining ultralow latencies
Classic load balancer AKA ELB
Legacy ELBs
Best suited for HTTP/HTTPS traffic
Can use Layer 7 specific features, such as:
XForwardedFor Header
124.12.3.231 (IPv4 = public IP) sends requests to classic load balancer (10.0.0.23) (private IP address)
Classic load balancer takes that requests and sends it to the EC2 instance (10.0.0.23)
EC2 instance will not see the public IP address (124.12.3.231) without the XForwardedFor header
ELB can pass the public IP from the visitor by sending an XForwardedFor Header with the IP information of the requestor to the EC2 instance
Sticky sessions
Nowhere near intelligent as Application load balancer
Can use Layer 4 for application that rely purely on TCP
If your application stops responding, the ELB (classic) responds with a 504 error (gateway timeout)
This means that the application is having issues with the gateway connection
This could be either at the web server layer or at the DB layer
To resolve, identify where it’s failing, and scale it up or out, where possible



Storage !important for SA Associate
EFS (Elastic File System) provides simple, scalable file storage for use with EC2 instances
https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html
EFS is a NAS (network attached storage) in the cloud, allowing you to connect it to multiple EC2 instances at once
Storage Gateway is a hybrid storage service that enables your onpremise apps to seamlessly use storage on the AWS cloud
https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html
Storage Gateway connects an onpremise software app (or virtual machine) with cloud based storage
Storage Gateway is available for download as a VM image that you install on a host in your datacenter
Supports either VMware ESXi or Microsoft HyperV
Four types of Storage Gateways
File Gateway (NFS = Network File System)
Flat files in S3
Volumes Gateway (iSCSI block protocol)
Blockbased storage, or virtual hard disk
You can write SQL, OS, run DBs
You can also have flat files
You can back up Volumes Gateway as pointintime snapshots in Amazon EBS Snapshots
All snapshots are incremental
Snapshots are compressed to minimize your storage charges
Two different Volumes Gateway
Stored volumes = store onsite an entire copy of the data set locally, while asynchronously backing up data to AWS
Data written to your stored volumes is stored on your onpremises storage hardware
Data is asynchronously backed up to S3 in the form of Amazon EBS (Elastic Block Store) snapshots
1GB16TB in size for Stored Volumes
Cached volumes = only storing onsite the most recently accessed data, while asynchronously backing up data to AWS
Storage Gateway stores data that you write to these volumes in S3 and retains recently read data in your onpremises storage gateway’s cache and upload buffer storage
1GB32TB in size for Cached Volumes
Tape Gateway (VirtualTapeLibrary) offers a durable, costeffective solution to archive your data in AWS
Lets you leverage your existing tapebased backup application infrastructure to store data on virtual tape cartridges that you create on your Tape Gateway
Each Tape Gateway is preconfigured w/a media changer and tape drives, which are available to your existing client backup app as iSCSI devices
Supported by NetBackup, Backup Exec, Veeam, etc.
Instead of using physical tapes, you’re now using virtual tapes
Virtual tapes are uploaded to S3
DynamoDB is a NoSQL DB service
https://aws.amazon.com/documentation/dynamodb/
Glacier is a long term data archival service
Lower fess than any S3 tier service
Three types of retrieval:
Expedited is the most expensive
Retrieval takes a few minutes
Standard retrieval takes about 35 hours
Bulk retrieval takes about 512 hours
S3 is a service that offers durable storage for flat files
Simple storage service = S3
Objectbased storage
Files can be 0 bytes to 5 TB in size
Unlimited storage
Files stored in buckets
Buckets have an universal namespace (unique globally)
Buckets policies control access inside a bucket, not an individual object or file
The link will look something like this:
https://s3euwest1.amazonaws.com/acloudguru
s3 = service
euwest1 = region
amazonaws.com = aws domain
/acloudguru = bucket name
Objects consists of the following: (core fundamentals of S3)
Key = the name of the object
Value = the data or the type of file
Version ID = important for versioning
Stores all versions of an object
Great backup tool
Once enabled, it can only be suspended
Integrates with Lifecycle rules
Lifecycle MGMT can be used in conjunction with versioning
Lifecycle can be applied to current and previous versions
Actions include:
Transition to S3IA
Minimum 128KB and 30 days after the creation date
Transition to Glacier
Minimum 30 days after transition to S3IA, if relevant
Permanently Delete
MFA Delete Capability = uses MFA to provide an additional layer of security
You can request a MFA code to avoid accidental delete of objects and/or enabling/suspending version control
Metadata = data you are storing (owner, tags, etc.)
Access Control Lists (ACL) = individual permissions on file
Encryption = server side encryption
In Transit
SSL/TLS
At Rest (SSE = server side encryption)
Amazon S3 Managed Keys (SSES3) = e/object is encrypted with its unique key
Amazon then encrypts the objects with a master key that is in a rotation policy
Think of a multifactor authentication code
Key Management Service (SSEKMS)
An envelope key protects your data’s encryption key
Provides you with an audit trail of who is using the keys and when
Customer Provided Keys (SSEC)
User manages the key
Amazon manages the encryption as it writes to disk, and then the decryption as user access the objects
Client side encryption
Encrypt objects on local device and then upload to S3 already encrypted
Torrent = not on the exam
Data consistency model
Read after Write consistency for PUTS of new Objects: you can read new objects in storage nodes with no propagation
Eventual consistency for overwrite PUTS and DELETES: when you edit an object, it might take some time to propagate to all storage nodes, so changes might not be immediate
Propagating to all availability zones
This data consistency goes along with their SLA about 99.99% availability
When you upload a file to S3, you will receive a `HTTP 200` status code if the upload was successful
Storage tiers/classes include:
S3 Standard = 99.999999999% (9 x 11), durability, stored redundantly across multiple devices (disks) in multiple facilities (availability zones)
Designed to sustain the loss of 2 facilities concurrently
Think of durable, immediately available, frequently accessed
S3  IA (Infrequently Accessed) = for data less accessed, but requires rapid access (retrieval fee) when needed
Lower fees than S3 Standard for storage
Think of durable, immediately available, infrequently accessed
S3 One Zone  IA = infrequently accessed data, stored only in one availability zone
Lower fees than S3  IA
Retrieval fee when accessed
Not good for data resiliency
Think of cheaper than IA, but only one availability zone
Reduced Redundancy
For frequently accessed data to store noncritical, reproducible data at lower levels of redundancy than S3 Standard
S3 charges
Storage
Requests
Storage management pricing
Metadata for tags to manage billing
Data transfer pricing
Cross region replication fees
You can replicate an S3 bucket to a different region to increase resiliency
You can change the storage class to the replicated S3 bucket
DELETE markers are replicated
Deleting individual versions or delete market are not replicated
No cross region to multiple buckets or use daisy chaining (at this time)
Transfer acceleration enables fast, easy, and secure transfers of files globally between end users and AWS backbone network
Costs extra
Uses CloudFront’s edge locations to route data over an optimized network path
Users upload objects or files to their nearest edge location by using the nearest edge location’s URL, then the edge location pushes the object via the Amazon network to the S3 bucket
You can load files to S3 much faster by enabling multipart upload
Not where you install an OS or application
For this, use blockbased storage (discussed later in the EC2 section of the course)
S3 can be used for static web hosting
Cannot host dynamic content
The URL for the website will be based on the name of the bucket
https://acloudguru.s3euwest1.amazonaws.com
acloudguru = bucket name
s3 = service
euwest1 = region
amazonaws.com = aws domain
Read S3 FAQs before taking exam



Database !important for SA Associate
Redshift is primarily used for data warehousing
Snowball is a petabytescale data transfer solution that uses secure appliances to transfer large amounts of data into and out of the AWS cloud
https://docs.aws.amazon.com/snowball/latest/ug/whatissnowball.html
Before this service was called “Import/Export” where users would send their harddrives or disks to Amazon to move data into and out of AWS
Different types of Snowball:
Snowball (an actual physical device)
A petabytescale data transport solution using secure appliances to transfer large amounts of data into and out of AWS S3
80 TB of data
Addresses common challenges w/largescale data transfers including:
High network costs
Could be as little as onefifth the cost of highspeed internet
Long transfer times
Security concerns
Uses multiple layers of security including:
tamperresistant enclosures
256bit encryption
Industrystandard Trusted Platform Module (TPM) designed to ensure security and full chainofcustody of your data
Once the data transfer job has been processed and verified, AWS performs a software erasure of the Snowball appliance
Snowball Edge
100TB data transfer device w/onboard storage and compute capabilities
Move large amounts of data into and out of AWS, as a temporary storage tier for large local datasets, or support local workloads in remote or offline locations
Can use Lambda functions to compute the datasets
Snowmobile
A container (on an 18wheeler) for 100 petabytes or exabyte size of data
Takes about 6 months to move data into AWS
Using a Snowball
You need the AWS Client for your OS to connect to your Snowball
Then, you need to open up the Snowball flaps
Plug in Snowball to power supply and internet cable
Turn on from the Kindle power button
Login to console to get Snowball credentials
You will get a client unlock code and a manifest file
Start the AWS CLI and run the `./snowball start i <IP> m <manifestfile> u <unlockcode>` + ENTER
Run the command `./snowball cp hello.txt s3://<s3bucketname>` to copy files into the ./snowball appliance and into the assigned S3 bucket
Relational Database Services offers the following DB engines:
SQL
MySQL
MariaDB
PostgreSQL
Aurora
Oracle
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html

Migration !important for SA Associate
DatabaseMigrationService (DMS) can migrate data to and from most widely used commercial and opensource DB such as:
Oracle
PostgreSQL
Microsoft SQL
Amazon Redshift
Aurora
DynamoDB
S3
MariaDB
MySQL
https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html

Networking & Content Delivery !important for SA Associate
VPC is a critical skill to pass the certification exam
https://aws.amazon.com/gettingstarted/
Virtual Private Cloud (VPC) is a virtual network dedicated to a single AWS account
In a nutshell, VPC is a data center where you provision your resources
Logically isolated from other virtual networks in the AWS cloud
Providing compute resources with security and robust networking functionality
CloudFront is a Content Delivery Network (CDN)
https://aws.amazon.com/cloudfront/
CDN is a system of distributed servers (network) that delivers content to a user based on their geographical location, the origin of the webpage and a content delivery server
Edge location = location where content will be cached
This is different to an AWS Region or AZ
Currently over 50 Edge locations
You can also WRITE to Edge locations
TTL = time to live for objects cached
Invalidating objects removes them from CloudFront Edge caches
There is a fee to clear the cache at an Edge location
Origin = origin of all the files that the CDN will distribute
CloudFront is optimized to work with other AWS like Amazon S3, EC2, Elastic Load Balancing and Route 53
CloudFront also works with any nonAWS origin server, which stores the original version of your files
Distribution = consists of a collection of Edge locations
Web Distribution used for websites
RTMP used for media streaming
CloudFront works when a user requests content from an Edge location, and if the content is not yet in the Edge location, the Edge location requests it from the origin, and then caches it for the next user that wants to access the cached content
The next user’s content will load faster with less latency due to content caching in the nearest Edge location
Route53 is a highly scalable DNS service

Developer Tools
Not on the exam, but good to know these services for development
CodeCommit is a git repo service

Management Tools !important for SA Associate
CloudWatch is the bread and butter of the SysOps Certification Exam
CloudWatch allows you to monitor the performance of EC2 instances including:
CPU utilization
Disk IO
CloudFormation is turning your infrastructure into code
CloudFormation is an automated provisioning engine designed to deploy entire cloud environments via a JSON script
CloudTrail logs changes to AWS environment
https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrailuserguide.html
Only stores for one week
Highly recommended to turn on for all regions and AZ
CloudTrail enables governance, compliance, operational auditing, and risk auditing of your AWS account
Config is used for snapshots
TrustedAdvisor gives you tips on your AWS resources
https://docs.aws.amazon.com/awssupport/latest/user/gettingstarted.html#trustedadvisor
TrustedAdvisor is an automated service that scans AWS environment with the goal of improving security and reducing costs
OpsWorks is a configuration management service that uses Chef, an automation platform that treats server configurations as code
https://docs.aws.amazon.com/opsworks/latest/userguide/welcome.html
To allow a system administrator to use Chef to configure and operate web applications, OpsWorks is used

Media Services
Not featured on AWS certification exams
Elastic Transcoder is used to convert media files to formats that can be viewed on a variety of devices

Machine Learning
Not featured on AWS certification exams
Comprehend gives you sentiment analysis
DeepLens is an artificially aware camera
Lex powers the Amazon Alexa services
Polly turns text and converts it into speech

Analytics !important for SA Associate
Important for exam are:
EMR
Kinesis
Data Pipeline
Athena allows you to run SQL queries inside your AWS resources
Completely serverless
Kinesis is used for collating large amounts of data streamed from multiple sources
https://aws.amazon.com/documentation/kinesis/
Kinesis is used to collect, process, and analyze realtime, streaming data
ElasticMapReduce is specifically designed to assist you in processing large data sets
https://docs.aws.amazon.com/emr/latest/ManagementGuide/emrwhatisemr.html
QuickSight is a fast, cloudpowered business analytics service that makes it easy to build visualizations, perform adhoc analysis, and quickly get business insights from your data
https://docs.aws.amazon.com/quicksight/latest/user/welcome.html
QuickSight aggregates your data from multiple data sources (S3, DynamoDB, RDS, etc.) and provides business intelligence based on this data

Security & Identity & Compliance !important for SA Associate
Identity Access Management (IAM) is crucial to know for the AWS certification exam
You can add new users to AWS account and set password rotation policies for these new users
IAM is global or universal, so region does not matter for IAM
Access Type for IAM users
Programmatic access enables an access key ID and secret access key
AWS Management Console access to enable a password to login to AWS MGMT Console
“root” account has full Admin access to AWS resources
Always use MFA with “root” account
New users don’t have permissions when first created
Access key ID & secret access keys can be assigned only during user creation or access key creation
Export to csv all access key IDs and secret access key
Functionality of IAM
Centralized control of your AWS account
Shared access to your AWS account
Granular permissions
Identity federation (including Active Directory, Facebook, LinkedIn, etc.)
MFA
Provide temporary access for users/devices and services where necessary
Set up password rotation policy
Integrates w/many AWS services
Supports PCI DSS (Payment Card Industry Data Security Standard) compliance
You can attach a policy of a user, group or role
Policy documents are made up of JSON key:value pair

Cognito is a way to do mobile device authentication
Request temporary access to AWS resources
GuardDuty is a brand new service and not featured on AWS certification exams
Inspector checks for any vulnerabilities in all AWS resources
Macie checks S3 buckets for PII data
CloudHSM is a hardware security module
WAF is a web application firewall at the application layer
Shield protects against DDoS attacks
Artifact is a way to generate accesscontrolled documents relevant to compliance and security

Mobile Services
Mobile Hub is not covered on the AWS certification exams
Pinpoint is used to push notifications based on geographical location
Not covered on the AWS certification exams
AWS AppSync not covered on the AWS certification exams
DeviceFarm not covered on the AWS certification exams
MobileAnalytics not covered on the AWS certification exams

AR & VR
Sumerian is still in preview mode
Not covered on the AWS certification exams

Application Integration !important for SA Associate
AmazonMQ not covered on the AWS certification exams
StepFunctions not covered on the AWS certification exams
SimpleNotifiationService (SNS) covered on AWS certification exams
Sends notifications
SimpleQueueService (SQS) covered on AWS certification exams
SimpleWorkforceService (SWS) used on AWS Warehouse to create workflows
Covered on AWS cert exams

Customer Engagement
Connect contact services as a service
Not covered on AWS cert exams
SimpleEmailService to send a large amount of emails
Covered at a high level on AWS cert exams

Business Productivity
AlexaForBusiness not covered on AWS cert exams
Chime is similar to GoogleHangout as a video conference app
WorkDocs will be covered on AWS cert exams

Desktop & App Streaming !important for SA Associate
Workspaces is a Virtual Desktop Interface (VDI) solution
Not covered on AWS cert exams

Internet Of Things
Not covered on AWS cert exams

Game Development

Not covered on AWS cert exams