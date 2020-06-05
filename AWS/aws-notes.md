# Overview of Amazon Web Services

I have finally finished reviewing the lengthy [Overview of AWS pdf](https://d1.awsstatic.com/whitepapers/aws-overview.pdf) and summarized the services here.

I'll treat this as a **living document**, so I will probably come back and edit the service sections based on my practice exams and other research. I'm doing this because I'm using this as the repository for my notes as well, so it will help me and help you to keep everything centralized.

Without further ado...

## AWS Cloud Computing

AWS started offering its services back in 2006. Ever since then, it’s been growing exponentially, not only in loyal customers, but in services they offer. The main reason why AWS took off was because it lowered the barriers to entry into application development for start-ups, it lowered expenses of on-prem infrastructure (server setup & management), and it allows businesses to scale rapidly, this was key for both, new and existing businesses.

## Cloud Computing Models

### -- Infrastructure as a Service (IaaS)

Building blocks of networking and cloud IT, IaaS gives you the flexibility and control over your IT resources.

### -- Platform as a Service (PaaS)

Underlying infrastructure that typically include hardware and O.S., PaaS helps by taking the stress and worry about resource management, capacity planning, software maintenance, patching, or any other tedious and complex task for your hardware to run the O.S. that hosts your application.

### -- Software as a Service (SaaS)

SaaS provides you with a completed product or feature for your application that is run and managed by the SP (Service Provider). The benefit is that you don’t have to think about how to configure your software, just how to use it in your application, whether it be a web-based email or AWS Cognito.

## Cloud Computing Deployment Models

### -- Cloud

A cloud-based app is fully deployed in the cloud and all parts of the app run in the cloud.

### -- Hybrid

A hybrid deployment is a way to connect on-prem infrastructure with cloud-based resources.

### -- On-premises

On-prem infrastructure with some app management and virtualization on the cloud is often referred to as “private cloud”.

## Global Infrastructure

The AWS Cloud infrastructure is built around Regions and Availability Zones (AZ).

A **Region** is a physical location in the world where we have multiple AZs.

An **Availability Zone** consist of one or more discrete data centers, each with redundant power, networking, and connectivity, house in separate facilities.

The AWS Cloud operates in over 60 AZs within 20 Regions around the world, with more coming soon. Each Region is designed to be completed isolated from the other Regions. Each AZ is isolated, but the AZs in a Region are connected through low-latency links.

These AZs give you the ability to operate apps and DBs that are highly available, fault tolerant, and scalable as fast as a few clicks.

## Security and Compliance

### -- Security

Cloud security at AWS is the highest priority. As an AWS customer, we inherit all the best practices of AWS policies, architecture, and operational processes built to satisfy the most security-sensitive customers.

**While AWS manages the security of the cloud, we are responsible for security in the cloud**.

### -- Compliance

The IT infrastructure in AWS provides best security practices and a variety of IT security standards, following a partial of assurance programs:

* SOC 1/ISAE 3402, SOC 2, SOC 3
* FISMA, DIACAP, and FedRAMP
* PCI DSS Level 1
* ISO 9001, ISO 27001, ISO 27017, ISO 27018

# AWS Cloud Platform

This section introduces the major AWServices by category.

To access AWS services, you can use:

* AWS Management Console
* Command Line Interface (CLI using AWS CLI)
* Software Development Kits (SDKs)

## Analytics

### -- Amazon Athena

Athena is an interactive query service used to analyze data in Amazon S3. This SaaS has no infrastructure to manage, and you pay only for queries ran.

To use it, simply point your data in Amazon S3, define the schema, and start querying using SQL. Data is returned within seconds, and there is no need for extract, transform and load (ETL) jobs to massage your data for analysis, Athena does it for you.

Benefits include, but not limited to:

* Athena uses Presto with ANSI SQL support and works with a variety of data formats, including CSV, JSON, ORC, Avro, and Parquet.
* Athena uses Amazon S3 as its data store, so it is highly available and durable, as well as cheap
* Pay per queries ran. You are charged $5 per TeraByte scanned by queries. To save on queries, use compression, portioning, and converting data into columnar formats
* Athena is fast, as it executes queries in parallel, so you’ll get data back within seconds
* Run federated queries against relational DBs, data warehouses, object stores, and non-relational data stores
* Create your own user-defined functions (UDF), and invoke one or multiple UDFs from your SELECT and FILTER clauses
  * Some custom functions include compressing and decompressing data, redacting sensitive data, or applying customized decryption
* Invoke Machine Learning models for inference directly from SQL queries using Athena, and integrate with Amazon SageMaker’s learning algorithms
  * The ability to use Machine Learning models in SQL makes complex tasks such as anomaly detection, customer cohort analysis and sales predictions as simple as invoking a function in a SQL query
* Athena is out-of-the-box integrated with AWS Glue Data Catalog, allowing you to create a unified metadata repo across various services, crawl data sources to discover schemas and populate your Catalog with new and modified table and partition definitions to maintain schema versioning

### -- Amazon EMR

Amazon Elastic MapReduce (EMR) is a tool for big data processing and analysis. Using open source tools, coupled with the scalability of AWS EC2 and storage of Amazon S3, EMR can run PetaBytes scale analysis for a fraction of the cost of traditional on-prem clusters.

Some of the benefits to use EMR are:

* Easy to use — EMR is easy to use because you don’t worry about infrastructure setup, node provisioning, Hadoop configuration, or cluster tuning. Data lovers can launch a server less Jupyter notebook in seconds using EMR Notebooks
* Elastic and Flexible — Unlike the rigid infrastructure of on-prem clusters, EMR decouples compute and persistent storage, to scale each independently, rather than having to buy hardware for storage running out when there is no need for additional compute power. You also have full control and root access to every instance, so additional apps can be installed to customize every cluster. There’s also an option to launch EMR clusters with custom Amazon Linux AMIs, and reconfigure already running clusters on the fly, without having to re-launch existing, running clusters
* Reliable — EMR is tuned for the cloud, and constantly monitors your cluster — retrying failed tasks and automatically replacing poorly performing instances to fix compute performance issues.
* Secure — EMR automatically configures EC2 firewall settings controlling network access to instances, and launches clusters in an Amazon Virtual Private Cloud (VPC), a logically isolated network you define.
* Low cost - big data workloads for less saving up to 90% using EC2 Spot Instances, using S3 for data lakes for free using EMR services

Some of the use cases for EMR are:

* Machine learning — easily add your preferred libraries and tools to create your own predictive analytics toolkit
* Extract, Transform and Load (ETL) — quickly perform data transformation workloads (ETL) such as - sort, aggregate, and join - on large data sets
* Clickstream analysis — using Apache Spark and Apache Hive to segment users, understand user preferences, and deliver more effective ads
* Real-time streaming — create long-running, highly available, and fault-tolerant streaming data pipelines by analyzing events from Apache Kafka, Kinesis or any real-time streaming data source with Apache Spark Streaming and EMR
* Interactive analytics — EMR Notebooks provide a managed analytic environment based on open source Jupyter to prepare and visualize data, collaborate with peers, build apps, and perform interactive analysis
* Genomics — process vast amounts of genomic data and other large scientific data sets quickly and efficiently

### -- Amazon CloudSearch

CloudSearch is a SaaS that makes it simple and cost-effective to setup, manage and scale a search solution for your app. CloudSearch supports 34 languages and popular search features such as:

* Highlighting
* Autocomplete
* Geospatial search
* Custom relevance ranking and query-time rank expressions
* Field weighting

Cost is based on usage, but the good thing is that it uses S3 as data storage and recovery, and customers get this for free, which is a significant cost saving over self-managed search infrastructure. Customers are billed based on usage across the following dimensions:

* Search instances
* Document batch uploads
* IndexDocuments requests
* Data transfer

### -- Amazon Elasticsearch Service

Elasticsearch is a fully managed service that makes it easy to build, deploy, secure, monitor and troubleshoot applications.

Some of the benefits are:

* Easy to deploy and manage — service simplifies management tasks such as hardware provisioning, software installation and patching, failure recovery, backups, and monitoring
* Highly scalable and available — lets you store up to 3 PB of data in a single cluster, enabling you to run large log analytics via a single Kibana interface
* Kibana — With Elasticsearch service, Kibana is deployed automatically with your domain as a fully managed service, automatically taking care of all the heavy-lifting to manage the cluster
* Highly secure - achieve network isolation using VPC, encrypt data at-rest and in-transit using keys managed through AWS KMS, and manage authentication and access control with Cognito and IAM policies
  * HIPAA eligible, and compliant with PCI, DSS, SOC, ISO, and FedRamp standards
* Low cost — pay only for the resources you consume by selecting on-demand pricing with no upfront costs or long-term commitments, OR get significant savings by getting a Reserved Instance pricing

Some use cases are:

* Application monitoring — log data to find and fix issues faster and improve app performance by receiving automated alerts if app is under performing
* Security Info and Event Management (SIEM) — centralize and analyze logs from disparate applications and systems across your network for real-time threat detection and incident management
* Search — same features as CloudSearch
* Infrastructure monitoring — collect logs from servers, routers, switches, virtualized machines to get a view detailed view into your infrastructure, reducing Mean Time To Detect (MMTD) and Resolve (MMTR) issues and lowering system downtime

### -- Amazon Kinesis

Kinesis makes it easy to collect, process and analyze video and data streams in real-time. Kinesis enables you to process and analyze data as it arrives, instead of having to wait for it to begin processing.

Amazon Kinesis capabilities include:

* Kinesis Video Streams
  * Ingests and stores video streams to use in custom apps for analytics, ML, playback...
![Kinesis Video Streams](https://i.imgur.com/BLPDeW9.png)

* Kinesis Data Streams (KDS)
  * Takes care of getting the data streamed to storage, streams such as: DB event streams, website click streams, social media feeds, IT logs, location-tracking events
![Kinesis Data Streams](https://i.imgur.com/TAVFqqO.png)

* Kinesis Data Firehose
  * Think of the name firehose and the shape of it, now think of data flowing through that actual hose, that is the data streaming into data stores and analytic tools
![Kinesis Data Firehose](https://i.imgur.com/CzpPEg3.png)

* Kinesis Data Analytics
  * Analytics happen at the end of the data stream to generate the output
![Kinesis Data Analytics stream](https://i.imgur.com/QBmWZtr.png)

Major benefits from Amazon Kinesis:

* Real-time data metrics ingestion, buffering and processing
* Fully managed infrastructure
* Scalable to stream and process data from a variety of sources

Some use cases:
![Web click streams](https://i.imgur.com/vwZ0LkZ.png)
![Social media streams](https://i.imgur.com/aqN19cg.png)

### -- Amazon Redshift

Redshift is cloud data lakes and/or warehouse services. Redshift has been improved by using ML, massively parallel query execution, and columnar storage on high-performance disk.  Redshift allows you to query petabytes of data (structured or unstructured) out of your data lakes using standard SQL.  

Redshift AQUA (Advanced Query Accelerator) is a new distributed and hardware accelerated cache that allows Redshift to run 10x faster than any other data lake or warehouse.

Some use cases for Redshift:

* Business Intelligence (BI) reports built by analyzing all of your data, data lake, or data warehouse.
* Use mixed structured data from a data lake and semi-structured data such as app logs to get operational insights on your apps and systems

### -- Amazon QuickSight

QuickSight is a BI service used to efficiently deliver insights to everyone in an org.  You can build interactive dashboards that can be accessed from mobile or web that provide powerful self-service analytics. QuickSight scales to thousands of users without any software, servers, or infrastructure to deal with and buy. It is a pay-as-you-go service with no upfront costs or annual commitments.

Benefits:

* Pay only for what you use
* Scale to all your users
* Embed analytics in apps
* Built end-to end BI reports

How it works...
![QuickSight](https://i.imgur.com/lfNyjO9.png)

Some use cases include:

Using QuickSight in interactive dashboards for BI
![DashboardBI](https://i.imgur.com/GD7Io6K.png)

Create dashboards for ML anomaly detection, pattern seeker, forecasting, and data auto-narratives
![ML](https://i.imgur.com/GUpZ0gq.png)

Enhance custom apps by embedding QuickSight dashboards
![QuickSightDashboard](https://i.imgur.com/ze4woS6.png)

BI sent via email
![BI sent via email](https://i.imgur.com/LveicYQ.png)

### -- AWS Data Pipeline

Data Pipeline allows you to process and move data from different AWS resources such as compute and storage services, as well as on-prem storage. The results can be stored in S3, RDS, DynamoDB or EMR. As with most AWS services, you don’t have to worry about creating complex data processing workloads that are fault tolerant, highly available, and repeatable, or worry about resource availability or inter-task dependencies.  Even if something fails after retries, AWS Data Pipeline will send you notifications via AWS Simple Notification Service (SNS).

Data Pipeline makes it so easy to use that their drag-and-drop console allows you to create a file search function in S3 within a few clicks. There are a number of Data Pipeline templates to create pipelines for complex use cases.

### -- AWS Glue

Glue is a fully managed ETL SaaS that makes it easy to prepare and load data for analytics. Simply point AWS Glue to the data storage on AWS, and Glue will crawl your data, suggest schemas and transformations, and store associated metadata in the AWS Glue Data Catalog.

Once cataloged, data is immediately searchable, query-able and available for extract, transform and load (ETL).

Some use cases are:

* Queries against an S3 Data Lake
![Queries Data Lake](https://i.imgur.com/XpZIEct.png)

* Analyze log data in S3 to enrich data set and generate BI reports
![Analyze Data](https://i.imgur.com/iEbCnhY.png)

* One-stop-shop for multiple data stores
![Glue Dashboard](https://i.imgur.com/W3m03Dw.png)

* Event-driven ETL data pipelines
![Event Driven Pipelines](https://i.imgur.com/F6lQ3qQ.png)

### -- AWS Lake Formation

Lake Formation makes it easy to setup a secure data lake in days. A **data lake** is a centralized, curated and secured repo that stores all your data, in original form and prepared for analysis.

Point Lake Formation at the data sources that you want to move into Lake Formation, and it moves it cleanly taking care of the right schema and metadata, along with choosing security policies and encryption for your data to be used in analytic services.

How it works:

* Everything that the orange box touches is Lake Formation’s kingdom
![Lake Formation](https://i.imgur.com/RTN47D4.png)

### -- Amazon Managed Streaming for Kafka (MSK)

MSK is a fully managed service that helps you build and run apps that use Apache Kafka to process streaming data. With MSK, you can use Kafka API to populate data lakes, stream changes to and from DBs, and power ML and analytics apps.

**Apache Kafka** is a streaming data store that decouples apps producing streaming data (producers) into its data store from apps consuming streaming data (consumers) from its data store. Companies use Kafka as a data source for apps that continuously analyze and react to streaming data.

Once again, AWS makes it easy to manage the MSK infrastructure taking care of most of the heavy lifting. AWS takes care of monitoring Kafka clusters and replaces unhealthy nodes with no downtime to your app.

Benefits:

* Fully compatible
  * Easy to migrate and run existing Kafka apps on AWS w/out changes to your app’s source code
  * You can continue using custom and community built tools such as MirrorMaker, Apache Flink (streaming), and Prometheus.
* Fully managed by AWS
  * MSK manages the provisioning, config and maintenance of Apache Kafka clusters and Apache ZooKeeper nodes
* Elastic stream processing
  * Run fully managed Apache Flink apps that elastically scale to process data streams w/in MSK
* Highly available
  * Multi-AZ replication within an AWS Region
* Highly secure
  * VPC network isolation, AWS IAM for API auth, encryption at rest, TLS encryption in-transit, TLS based certificate auth, and supports Kafka Access Control Lists (ACLs) for data auth.
![Amazon Managed Streaming for Kafka](https://i.imgur.com/1HuBYPi.png)

## Application Integration

### -- AWS Step Functions

Coordinate multiple AWS services into serverless workflows so you can develop and deploy apps quickly. Workflows are made up of a series of steps, and translates your workflow into a state machine diagram that is easy to understand and update.

### -- Amazon MQ

MQ is a managed message broker service for Apache ActiveMQ.

What are message brokers? They allow different software systems — often using different programming languages, and on different platforms — to communicate and exchange information. MQ reduces operational load by managing the provisioning, setup, and maintenance of ActiveMQ.

What is ActiveMQ? An open source message broker written in Java together w/a full Java Message Service (JMS).

### -- Amazon SQS

Simple Queue Service (SQS) is a fully managed SaaS to decouple and scale micro services, distributed systems, and serverless apps. SQS eliminates the complexity and overhead associated with managing and operating message oriented middleware.

SQS offers common constructs such as **dead-letter queues** and **cost allocation tags**. It provides generic web services API and it can be accessed by any programming language that the AWS SDK supports.

Two types of SQS:

* Standard queues - offer max throughput, best-effort ordering, and at least-once delivery
* FIFO - designed to guarantee messages are processed exactly once, in the exact order that they are sent

When creating a 2-tiered service, for example an app with premium (paid) and basic (non-paid) customers, you'd want to give preference for paid customers, so you can do that with SQS by creating 2 separate SQS queues, so messages can be processed by the app from the high priority queue first (paid) then basic customers can access the app second.

### -- Amazon SNS

Simple Notification Services (SNS) is a highly available, durable, secure, fully managed publisher/sub messaging service that enables you to decouple micro services, distributed systems, and serverless apps. Using Amazon SNS topics, your pub system can disperse messages to a large number of subscriber endpoints for parallel processing. SNS can be used to send notifications to end users using mobile push, SMS, and email.

### -- Amazon SWF

Simple Workflow (SWF) is a fully managed state tracker and task coordinator.

## AR and VR

### -- Amazon Sumerian

With Sumerian, create and run VR, AR, and 3D apps quickly and easily without any specialized programming or 3D graphics expertise (disclaimer: expertise is not the same as experience, so some experience would definitely help). Sumerian allows you to create all the building blocks needed to build highly immersive and interactive 3D experiences including adding objects, and designing, animating, and scripting environments.

## AWS Cost Management

### -- AWS Cost Explorer

Interface that lets you visualize, understand, and manage your AWS costs and usage over time.

### -- AWS Budgets

Set custom budgets that alert you when your AWS costs or usage exceed (or are forecasted to exceed) your budgeted amount.

### -- AWS Cost & Usage Report

Lists AWS usage for each service category used by an account an its IAM users in hourly or daily line items, as well as any tags that are activated for cost allocation purposes.

### -- Reserved Instance (RI) Reporting

Visualize RI data at an aggregate level or inspect a particular RI subscription.

## Blockchain

### -- Amazon Managed Blockchain

Create and manage scalable blockchain networks using open source frameworks Hyperledger Fabric and Ethereum. Managed Blockchain eliminates the overhead required to create the network, and automatically scales to meet the demands of thousands of apps running millions of transactions at once.

In addition, Managed Blockchain can replicate an immutable copy of your blockchain network activity into Amazon Quantum Ledger Database (QLD) to analyze the network activity outside the network and gain insights into trends.

## Business Applications

### -- Alexa for Business

With Alexa for Biz, employees can use Alexa as their intelligent assistant to be more productive in meeting rooms, at their desks, and even with the Alexa devices they already have at home.

### -- Amazon WorkDocs

A fully-managed, secure enterprise file storage and file sharing service with strong admin controls and feedback capabilities.

### -- Amazon WorkMail

Secure, managed business email, contacts and calendar service with support for existing desktop and mobile email client apps.

Integrate WorkMail with existing corporate directory, use email journaling to meet compliance requirements, and control both keys that encrypt your data and the location in which your data is stored.

### -- Amazon Chime

Use Chime for online meetings, video conference, calls, chat, and to share content, both inside and outside the organization.

## Compute

### -- Amazon EC2

EC2 services are cloud hypervisors providing you with complete control of your computing resources. EC2 changes the economics of computing by allowing you to pay only for compute usage only.

There are 3 types of EC2 Instances:

* On-demand - pay for compute capacity by the hour with no long-term commitments
* Reserved Instances - discount up to 75% compared to On-demand instance prices
* Spot Instances - discount up to 90% compared to On-demand instance prices, and lets you take advantage of unused EC2 capacity in the AWS cloud

### -- Amazon EC2 Auto Scaling

EC2 Auto Scaling helps you maintain app availability and allows you to automatically add or remove EC2 instances according to user-defined conditions.

### -- Amazon Elastic Container Registry (ECR)

ECR is a fully-managed Docker container registry that makes it easy for developers to host, store, manage, and deploy Docker container images.

ECR is integrated with Amazon Elastic Container Service (ECS), simplifying development to production workflow.

Integration with AWS IAM provides resource-level control of each repository.

You pay only for the amount of data stored in repositories and data transferred to the Internet.

### -- Amazon Elastic Container Store (ECS)

ECS is a container orchestration service that supports Docker containers and allows you to easily run and scale containerized apps on AWS.

With API calls, launch and stop Docker-enabled apps, query the complete state of apps, and access many familiar features, such as IAM roles, security groups, load balancers, CloudWatch Events, CloudFormation templates, and CloudTrail logs.

### -- Amazon Elastic Container Service for Kubernetes (EKS)

EKS runs the Kubernetes management infrastructure for you across multiple AWS AZs to eliminate single point of failure.

EKS is certified Kubernetes so you can use existing tooling and plugins from partners and the Kubernetes community.

### -- Amazon Lightsail

Launch and manage a virtual private server with AWS, which includes everything needed to jumpstart a project — a virtual machine, SSD- based storage, data transfer, DNS management, and a static IP address.

### -- AWS Batch

Batch dynamically provisions the optimal quantity and type of compute resources based on the volume and specific resource requirements of the batch jobs submitted.

### -- AWS Elastic Beanstalk

Elastic Beanstalk deploys and scales web apps and services developed with Java, .NET, PHP Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and Internet Information Services (IIS).

There are a couple of deployment methods to use AWS Elastic Beanstalk.

* **Immutable deployment** - performs an immutable update to launch a full set of new instances running the new version of the app in a *separate* Auto Scaling group, alongside the instances running the old version of the app
  * Immutable deployments can prevent issues caused by partially completed rolling deployments. If new instances don’t pass health checks, Elastic Beanstalk terminates them, leaving the original instances untouched
* **Blue/Green deployment** - have *separate* deployment environments

Elastic Beanstalk supports custom platforms. A custom platform lets you develop an entire new platform from scratch, customizing the OS, additional software, and scripts that Elastic Beanstalk runs on platform instances. This allows you to build a platform for an app that uses a language or other infrastructure software, for which Elastic Beanstalk doesn't provide a platform out of the box.

To create a custom platform, you build an Amazon Machine Image (AMI) from one of the supported OSs and add further customizations. You create your own Elastic Beanstalk platform using **Packer**, which is an open-source tool for creating machine images for many platforms, including AMIs for use w EC2s.

### -- AWS Fargate

A compute engine for Elastic Container Store (ECS) that allows you to run containers without having to manage servers or clusters, so it removes the need for you to interact with or think about servers or clusters to focus on building apps.

### -- AWS Lambda

Lambda runs code without provisioning or managing servers, **serverless**. There is no charge when code is not running with zero infrastructure administration.

Setup your code to automatically trigger from other AWServices, or call it directly from any web or mobile app.

To execute a Lambda function, Lambda uses the **handler**. The **handler** is the name of the method within a code that calls to execute the function.

NOTE: Avoid using recursive code in your Lambda function, wherein the function automatically calls itself until some arbitrary criteria is met. This could lead to unintended volume of function invocations and escalated costs. If you do use recursive code in your Lambda function, set the function **concurrent execution limit** to ‘o’ (Zero) to throttle all invocations to the functions, while you update the code.

#### Using Versions with AWS Lambda

Each Lambda function version has a unique ARN, after you publish a version, you CAN NOT change the ARN or the function code.

You can change a Lambda function code and settings ONLY on the **unpublished** version of a function. When you publish a Lambda function version, the code and most of the settings are **locked** to ensure a consistent experience for users of that version.

#### Using Aliases with AWS Lambda

Event sources such as S3 invoke your Lambda functions, and these event sources maintain a mapping that IDs the function to invoke when events occur. If you specify a Lambda function alias in the mapping config, you don’t need to update the mapping when the Lambda function version changes.

### -- AWS Serverless Application Repository

Quickly deploy code samples, components, and complete apps for common use cases such as web and mobile back-ends, event and data processing, logging, monitoring, IoT, and more.

AWS Serverless Application Model (SAM) template defines the AWS resources needed for your Serverless Application Repository.

AWS SAM templates can be used to embed application from Amazon S3 bucket. The resource can be nested from S3 as `AWS::Serverless::Application`.

With Serverless Application Repository, publish your own apps and share them within your team, across your org, or with the community at large.

### -- AWS Outposts

Outposts can be used to support on-prem workloads needed to remain on-premises due to low latency or local data processing needs.

### -- VMWare Cloud on AWS

VMWare Cloud on AWS is ideal for infrastructure and operations looking to migrate their on-prem vSphere-based workloads to the public cloud, consolidated and extend their data center capacities, and optimize, simplify and modernize their disaster recovery solutions.

With VMWare Cloud on AWS, organizations can simplify their hybrid IT infrastructure by using the same VMWare Cloud Foundation technologies across their on-prem data centers and on the AWS Cloud without having to purchase any new or custom hardware, rewrite apps, or modify their operating models.

## Customer Engagement

### -- Amazon Connect

A self-service, cloud-based contact center service that makes it easy for any business to deliver better customer service at lower cost.

### -- Amazon SES

Simple Email Service (SES) is a cloud-based email sending service designed to help digital marketers and app developers send marketing, notification, and transactional emails.

## Database

### -- Amazon Aurora

Aurora is a MySQL and PostgreSQL compatible relational DB engine that combines the speed and availability of high-end commercial DBs w/the simplicity and cost-effectiveness of open source DBs.

Aurora is up to 5x faster than standard MySQL and 3x faster than standard PostgreSQL DBs.

Aurora features a distributed, fault-tolerant, self-healing storage system that auto-scales up to 64TB per DB instance.

### -- Amazon Relational Database Service (RDS)

RDS makes it easy to setup, operate and scale relational DBs in the cloud. There are several DB instance types — optimized for memory, performance or Input/Output — and provides you with 6 familiar DB engines to choose from, including:

* Amazon Aurora
* PostgreSQL
* MySQL
* MariaDB
* OracleDB
* SQL Server

Amazon RDS offers **Read Replicas** that provide enhanced performance and durability for DB instances. This feature makes it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy workloads, thereby increasing aggregate read throughput.

### -- Amazon RDS on VMWare

Amazon RDS on VMWare lets you deploy managed DBs in on-prem VMWare environments using Amazon RDS.

RDS on VMWare allows you to utilize the same simple interface for managing DBs in on-prem VMWare environments as you would use in AWS.

### -- Amazon DynamoDB

DynamoDB is a key-value and document DB that delivers single-digit millisecond performance at any scale.

DynamoDB offers **server-side encryption** for **ALL** table data, so no additional configuration is required. This could be used to meet requirements that call for all data to be encrypted at rest.

DynamoDB offers **DAX**, *DynamoDB Accelerator*.

DAX is a DynamoDB-compatible caching service that enables you to benefit from fast in-memory performance for demanding apps. DAX addresses 3 scenarios:

1. As an in-memory cache, DAX reduces the response times of eventually-consistent read workloads by an order of magnitude, from single-digit milliseconds to microseconds
2. DAX reduces operational and app complexity by providing a managed service that is API-compatible with DynamoDB, and thus requires only minimal functional changes to use w/an existing app
3. For read-heavy or fast bursts workloads, DAX provides increased throughput and potential operational cost savings by reducing the need to over-provision read capacity units. This is beneficial for apps that require repeated reads for individual keys

DynamoDB also allows you to set **Time To Live (TTL)** for when items in a table need to be expunged and deleted from the database. TTL is provided at extra cost as a way to reduce storage usage and reduce cost of storing irrelevant data w/out using provisioned throughput. With TTL enabled on a table, you can set a timestamp for deletion on a per-item basis, allowing you to limit storage usage to only those records that are

When scanning Amazon DynamoDB tables, you should follow best practices for avoiding sudden bursts of read activity. To minimize the impact of a **scan** on a table's provisioned throughput create reduced page sizes for your app.

Because a **scan** operation reads an entire page (by default 1MB), you can reduce the impact of the scan op by setting a smaller page size. The **scan** provides a *Limit* parameter that you can use to set the page size for your request. Each scan request that has a smaller page size uses fewer read ops and creates a *pause* between each request.

#### Determine Write Capacity

When working with write capacity, the rule is to divide the item size by `1KB`, round to the nearest `1KB`. Then, you multiple by the speed of items per second written to DynamoDB.

For example, if we are writing 10 items every second and each item is 15.5KB in size, you would:

1. `(15.5 KB/1 KB) = 15.5`
2. Round to the nearest `1KB` so 15.5 rounded up to 16KB
3. Multiple `16 KB * 10 items per second = 160 write capacity`

### -- Amazon ElastiCache

ElastiCache makes it easy to deploy, operate, and scale in-memory cache in the Cloud.

ElastiCache improves the performance of web apps by allowing it to retrieve info from fast, managed, in-memory caches, instead of relying on slower disk-based DBs.

There are 2 open source in-memory machine engines:

* **Redis** - a Redis-compatible in-memory service that delivers the ease-of-use and power of Redis along with the availability, reliability, and performance suitable for the most demanding apps
* **Memcached** - a protocol compliant with Memcached
  * Features available w/Memchached are that it supports simple data types and has multi-threaded performance with utilization of multiple cores

### -- Amazon Neptune

Neptune is a fully-managed graph DB service that makes it easy to build and run apps that work with highly connected data sets.

Neptune is a purpose-built, high-performance graph DB engine optimized for storing billions of relationships and querying the graph with milliseconds latency.

### -- Amazon Quantum Ledger Database (QLDB)

QLDB provides a transparent immutable, and cryptographically verifiable transaction log owned by a central authority.

Ledgers are typically used to record a history of economic and financial activity in an organization. Ledger apps are often implemented using custom audit tables or audit trails created in relational DBs.

With QLDB, data change history is **immutable**, and using cryptography, you can easily verify that there have been no unintended modifications to app’s data.

QLDB provides developers with familiar SQL-like API, a flexible document data model, and full support for transactions. QLDB is also serverless, so it automatically scales to support the demands of your app.

### -- Amazon Timestream

Timestream is fully-managed time series DB service for IoT and operational apps to store and analyze trillions of events per day at 1/10th the cost of Relational DBs.

Time-series data has specific characteristics such as typically arriving in time order form, data is append-only, and queries are always over a time interval.

With Timestream, you can easily store and analyze log data for DevOps, sensor data for IoT apps, and industrial telemetry data for equipment maintenance.

Timestream offers adaptive query processing engine which understands its location and format, making your data ampler and faster to analyze. Timestream also automates rollups, retention, tiering, compression of data, so data can be managed at the lowest possible cost.

Timestream is also serverless.

### -- Amazon DocumentDB

DocumentDB is designed from the ground-up to give you the performance, scalability, and availability needed when operating mission-critical MongoDB workloads at scale.

## Desktop and App Streaming

### -- Amazon WorkSpaces

WorkSpaces is a fully-managed, secure cloud desktop service. You can provision either Linux or Windows desktop. You will pay either monthly or hourly, just for WorkSpaces you launch, which saves money when compared to traditional desktops and on-prem VDI solutions. You can access WorkSpaces from anywhere, anytime, from any supported device.

### -- Amazon AppStream 2.0

AppStream 2.0 is a fully-managed app streaming service. With AppStream 2.0, centrally manage desktop apps and securely deliver them to any computer.

Each user has a fluid and responsive experience with AppStream 2.0, including GPU-intensive 3D design and engineering ones, because your apps run on virtual machines (VMs) optimized for specific use cases and each streaming session automatically adjusts to network conditions.

With AppStream 2.0, you can develop a full SaaS solution without rewriting a whole application.

## Developer Tools

### -- AWS CodeCommit

A fully-managed source control service that hosts secure Git-based repositories.

### -- AWS CodeBuild

A fully-managed build service that compiles source code, runs tests, and produces software packages that are ready to deploy.

It is important to note that if you don't have access to a CodeBuild project, you can still override a build command as part of a build run to test a change. To do this, you will have to run the `start-build` AWS CLI command with `buildspecOverride` property set to the new `buildspec.yml` file.

`buildspecOverride` - (optional string) a build spec declaration that overrides for this build the one defined in the build project.

1. Run the `start-build` command in one of the following ways:

    -- Use this if you want to run a build that uses the latest version of the build input artifact and the build project's existing settings:

    `aws codebuild start-build --project-name your-project-name`

    -- Use this if you want to run a build w/an earlier version of the build or if you want to override the settings for the build out put artifacts, environment, variables, build spec, or default build timeout period:

    `aws codebuild start-build --generate-cli-skeleton`

### -- AWS CodeDeploy

CodeDeploy automates code deployments to any instance, including EC2 instances and instances running on-prem.

CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during app deployment, and handles the complexity of updating your apps.

For example, if you have a bunch of Lambda functions that need to be deployed and the Lambda functions have gone through multiple code revisions and versioning in Lambda is ON to maintain revisions, make sure that the right version of the function is deployed by specifying the version in the **AppSpec file**.

### -- AWS CodePipeline

A fully-managed continuous delivery service that helps you automate your release pipelines for fast and reliable app and infrastructure updates.

CodePipeline automates the build, test, and deploy phases of your release process every time there is a code change.

You can integrate server-side encryption using CodePipeLine by:

* Creating an S3 artifact bucket and default AWS-managed SSE-KMS encryption keys when you create a pipeline using the Create Pipeline wizard. The master key is encrypted along with object data and managed by AWS
* Creating and managing your own customer-managed SSE-KMS keys

### -- AWS CodeStar

CodeStar provides a unified UI, enabling you to easily manage your software development and deployment activities in one place.

Depending on your choice of AWS CodeStar project template, that toolchain might include:

* Source control
* Build servers
* Deployment servers
* Virtual servers
* Serverless resources
* And more...

Each CodeStar project comes with a project management dashboard, including issue tracking capability powered by JIRA.

CodeStar manages the permissions required for project users (called team members) by adding users to the project you can quickly and simply grant e/member role-appropriate access to a project and its resources.

### -- AWS Corretto

A no-cost, multi-platform, production-ready distribution of the Open Java Development Kit (OpenJDK).

With Corretto, you can develop and run Java apps on popular OS, including Amazon Linux 2, Windows, and MacOS.

### -- AWS Cloud 9

A cloud-based IDE that lets you write, run, and debug your code with just a browser.

Cloud9 also provides a seamless experience for developing serverless apps enabling you to easily define resources, debug, and switch between local and remote execution of serverless apps.

Cloud9 can quickly share your development environment with your team, enabling you to pair program and track each other’s inputs in real time.

### -- AWS X-Ray

X-Ray helps developers analyze and debug distributed apps in production or under development, such as those built using a microservice architecture.

X-Ray provides an end-to-end view of requests as they travel through your app, and shows a map of your app’s underlying components.

X-Ray helps trace Lambda function giving you a granular view of your downstream services. See an example below for a Lambda async function trace using AWS X-Ray:

![Lambda-async-fx-w-x-ray](https://i.imgur.com/OoEQZoj.png)

## Game Tech

### -- Amazon GameLift

GameLift is a managed service for deploying, operating, and scaling dedicated game servers for session-based multiplayer games.

### -- Amazon Lumberyard

Lumberyard is a free, cross-platform, 3D game engine for you to create the highest-quality games, connect your games to the compute and storage of the AWS Cloud, and engage fans on Twitch.

With Lumberyard, you spend less time on the undifferentiated heavy lifting of building a game engine and managing server infrastructure.

## Internet of Things (IoT)

### -- AWS IoT Core

IoT Core can support billions of devices and trillions of messages, and can process and route those messages to AWS endpoints and to other devices reliably and securely.

Use AWServices to build IoT apps that gather, process, analyze and act on data generated by connected devices, without having to manage any infrastructure.

### -- Amazon FreeRTOS

Amazon FreeRTOS is an OS for microcontrollers that make small, low-power edge devices easy to program, deploy, secure, connect, and manage.

Microcontrollers frequently run OS that don’t have built-in functionality to connect to local networks or the cloud, making IoT apps a challenge. Amazon FreeRTOS helps solve this problem by providing both the core OS (to run the edge device) as well as software libraries to securely connect to the cloud (or other edge devices) so you can collect data from them.

### -- AWS IoT Greengrass

IoT Greengrass is SaaS that provides local compute and secure cloud connectivity so devices can respond quickly to local events even without Internet connectivity.

IoT Greengrass extends AWS to devices so they can act locally on data generated, while still using the cloud for management, analytics, and durable storage.

AWS IoT Greengrass can be programmed to filter device data and only transmit necessary info to the Cloud.

IoT Greengrass can connect to 3rd-party apps, on-prem software, and AWServices out-of-the-box with AWS IoT Greengrass Connectors. Connectors jumpstart device onboarding with pre-built protocol adapter integrations and allow you to streamline authentication via integration with AWS Secrets Manager.

### -- AWS IoT 1-Click

IoT 1-Click is a service that enables simple devices to trigger AWS Lambda functions that can execute an action.

You can easily create device groups and associate them with a Lambda function, or track device health and activity with pre-built reports.

### -- AWS IoT Analytics

AWS IoT Analytics filters, transforms, and enriches IoT data before storing it in a **time-series** data store for analysis.

AWS IoT Analytics is a fully-managed service that analyses and scales automatically to support up to petabytes of IoT data.

### -- AWS IoT Button

A programmable button based on the Amazon Dash Button hardware.

### -- AWS IoT Device Defender

IoT Device Defender continuously audits IoT devices and configurations to make sure all is good in the hood, and all security best practices are being followed.

IoT Device Defender maintains and enforces IoT configs, such as ensuring device ID, authenticating and authorizing devices, and encrypting device data. IoT Device Defender will send an alert if there are any gaps in the IoT config that might create a security risk.

### -- AWS IoT Device Management

With IoT Device Management, it’s easy to:

* Register connected devices individually or in bulk
* Manage permissions to keep connected devices secure
* Organize devices
* Monitor and troubleshoot connected devices
* Update connected devices’ firmware over-the-air (OTA)
* IoT Device Management is agnostic to device type or OS.

### -- AWS IoT Events

With IoT Events, select the relevant data sources to ingest, define the logic for each event using `if-then-else` statements, and select the alert or custom action to trigger when the event occurs.

IoT Events continuously monitor data from multiple IoT sensors and apps, and it integrates with other services, such as AWS IoT Core and AWS IoT Analytics, to enable early detection and unique insights into events. This helps resolve issues quickly, reduce maintenance costs, and increase operational efficiency.

### -- AWS IoT SiteWise

IoT SiteWise is a managed service that collects and organizes data from *industrial equipment at scale*.

IoT SiteWise provides software running on a gateway that resides in your facilities and automates the process of collecting and organizing industrial equipment data. This gateway securely connects to on-prem data servers, collects the data, and sends the data to AWS Cloud.

IoT SiteWise is used to monitor operations across facilities, quickly compute common industrial performance metrics, and build apps to analyze industrial equipment data, prevent costly equipment issues, and reduce production inefficiencies.

### -- AWS IoT Things Graph

 IoT Things Graph provides a visual drag-and-drop interface for connecting and coordinating devices and web services.

In IoT Things Graph, devices and services are represented using pre-built reusable components, called **models**, that hide low-level details, such as protocols and interfaces, and are easy to integrate to create sophisticated workflows.

IoT Things Graph apps run on IoT Greengrass-enabled devices.

### -- AWS Partner Device Catalog

With AWS Partner Device Catalog, search for and find hardware that works with AWS, including development kits and embedded systems to build new devices, as well as off-the-shelf-devices such as gateways, edge servers, sensors, and cameras for immediate IoT project integration.

## Machine Learning

### -- Amazon SageMaker

A fully-managed platform that enables developers and data scientists to quickly and easily build, train, and deploy machine learning models at any scale.

### -- Amazon SageMaker Ground Truth

SageMaker Ground Truth offers easy access to public and private human labelers and provides them with built-in workflows and interfaces for labeling tasks.

### -- Amazon Comprehend

Comprehend uses ML to help uncover insights and relationships in unstructured data.

The service:

* Identifies the language of the text
* Extracts key phrases, places, people, brands, or events
* Understands how positive or negative the text is
* Analyzes text using tokenization and parts of speech
* Automatically organizes a collection of text files by topic

### -- Amazon Lex

Lex provides the advanced deep learning functionalities of Automatic Speech Recognition (ASR) for converting speech to text, and Natural Language Understanding (NLU) to recognize the intent of the text, to enable you to build apps with highly engaging user experiences and lifelike conversational interactions.

### -- Amazon Polly

Polly lets you create apps that talk, enabling you to build entirely new categories of speech-enabled products. Polly is an Amazon AI service that uses advanced deep learning technologies to synthesize speech that sounds like a human voice.

With Polly, you only pay for the number of characters converted to speech, and you can save and replay Polly’s generated speech as much as you want without paying for playback.

### -- Amazon Rekognition

With Rekognition, detect objects, scenes, and faces in images (image analysis), and also search and compare faces.

Rekognition is based on the highly scalable, deep learning technology developed by Amazon’s computer vision scientists to analyze billions of images daily for Prime Photos.

With Rekognition, only pay for the images analyzed and the face metadata stored.

### -- Amazon Translate

Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation. Neural machine translation is a form of language translation automation that uses deep learning models to deliver more accurate and more natural sounding translations.

Amazon Translate allows you to localize content — such as websites and apps — for international users, and easily translate large volumes of text efficiently.

### -- Amazon Transcribe

Transcribe is an automatic speech recognition (ASR) service that makes it easy for developers to add speech-to-text capability to their apps.

Transcribe can be used for lots of common apps, including:

* Transcription of customer service calls
* Generating subtitles on audio or video content
* Application that write lyrics from free-style rap

### -- Amazon Elastic Inference

Elastic Inference allows you to attach low-cost GPU-powered acceleration to EC2 and SageMaker instances to reduce the cost of running deep learning inference by up to 75%.

With Elastic Inference, choose the instance type that is best suited to the overall CPU and memory needs of your app, and then separately configure the amount of inference acceleration (GPU-powered) needed to use resources efficiently and to reduce the cost of running inference.

### -- Amazon Forecast

Forecast is a fully managed service that uses ML to deliver highly accurate forecasts. Forecast uses ML to combine time series data with additional variables to build forecasts.

With Forecast, there is no servers to provision or ML models to build, train, or deploy.

### -- Amazon Textract

Textract is a service that automatically extracts text and data from scanned docs. Textract goes beyond simple Optical Character Recognition (OCR) to also identify the contents of fields in forms and information stored in tables.

With Textract, create smart search indexes, build automated approval workflows, and better maintain compliance with document archival rules by flagging data that may require redaction.

### -- Amazon Personalize

Personalize is a ML service that makes it easy for developers to create individualized recommendations for customers. Personalize can be used to:

* Improve customer engagement by powering personalized product and content recommendations
* Tailored search results
* Targeted marketing promotions

To use Personalize, provide an activity stream from your app — page views, sign-ups, purchases, and so forth — as well as an inventory of the items you want to recommend, such as articles, products, videos, or music.  You can also choose to provide additional demographic info from your users such as age, or geographic location. Personalize will process and examine the data, ID what is meaningful, select the right algorithms, and train and optimize a personalization model that is customized for the data provided.

### -- Amazon Deep Learning AMIs

Deep Learning AMIs provide ML practitioners the infrastructure and tools to accelerate deep learning in the cloud, at any scale.

### -- AWS DeepLens

DeepLens is literally a video camera that helps you expand deep learning skills. Use it for face recognition, conferences, etc.

### -- AWS DeepRacer

DeepRacer is a 1/18th scale race car to get started with Reinforcement Learning (RL). RL superpower is that it learns very complex behaviors without requiring any labeled training data, and can make short term decisions while optimizing for a longer term goal.

### -- Apache MXNet on AWS

MXNet on AWS is a fast and scalable training and inference framework with an easy-to-use, concise API for ML.

MXNet includes the Gluon interface, which can build linear regression, convolutional networks and recurrent LSTMs for object detection, speech recognition, recommendation, and personalization.

### -- TensorFlow on AWS

TensorFlow enables developers to quickly and easily get started with deep learning in the AWS Cloud.

### -- AWS Inferentia

Inferentia is a ML inference chip designed to deliver high performance at low-cost. Inferentia will support the **TensorFlow**, **Apache MXNet**, and **PyTorch** deep learning frameworks, as well as models that use **ONNX** format.

Using Amazon Elastic Inference, developers can reduce inference costs, however, some inference workloads require an entire GPU or have extremely low latency requirements, so solving this challenge at low cost requires a dedicated inference chip.

Inferentia provides high high throughput, low latency inference performance at an extremely low cost. Each chip provides hundreds of TOPS (terabyte operations per second) of inference throughput to allow complex models to make fast predictions. If more performance is required, you can add additional Inferentia chips to drive thousands of TOPS of throughput.

## Management and Governance

### -- Amazon CloudWatch

CloudWatch is a monitoring and management service that provides data and actionable insights to:

* Monitor apps
* Understand and respond to system-wide performance changes
* Optimize resource utilization
* Get a unified view of operational health

With CloudWatch, you can:

* Set alarms
* Visualize logs and metrics side by side
* Take automated actions
* Troubleshoot issues
* Discover insights to optimize apps
* Ensure apps are running smoothly

### -- AWS Auto Scaling

Auto Scaling monitors apps and automatically adjusts capacity to maintain **steady**, **predictable performance** at the lowest possible cost.

### -- AWS Control Tower

Control Tower helps setup a landing zone that is secure, has great architecture, multi-account AWS environment by configuring AWS management and security services based on established best practices.

### -- AWS Systems Manager

Systems Manager provides a unified UI to view operational data from multiple AWServices and automates operational tasks across AWS resources.

With Systems Manager, it’s easy to:

* Manage resources and apps
* Shorten time to detect and resolve operational problems
* Operate and manage infrastructure securely at scale

Systems Manager contains the following tools:

* **Resource Groups** - create a logical group of resources associated w/a particular workload such as different layers of an app stack, or PROD vs DEV environments
* **Insights Dashboard** - displays operational data that Systems Manager automatically aggregates for each resource group
  * Insights Dashboard centralizes all relevant operational data to have a clear view of infrastructure compliance and performance
* **Run Command** - provides automation of common admin tasks like executing shell scripts or PowerShell commands, update software, or making changes to OS config, software, EC2 and servers on-prem
* **State Manager** - define and maintain consistent OS configs such as firewall settings, anti-malware definitions, monitor configs of large set of instances, specify a config policy for instances, and automatically apply updates or config changes
* **Inventory** - collect and query system config and inventory info about instances and the software installed on them
* **Maintenance Window** - define a recurring window of time to run admin and maintenance tasks across instances
* **Patch Manager** - select and deploy OS and software patches automatically across large groups of instances
  * Define a *Maintenance Window* so that patches are applied only during set times that fit business needs
* **Automation** - simplifies common maintenance and deployment tasks used to apply patches, update drivers and agents, or bake apps into AMIs using a streamlined, repeatable and auditable process
* **Parameter Store** - an encrypted location to store important admin info such as passwords and DB strings
  * Parameter Store integrates w/AWS KMS to make it easy to encrypt the info kept in the store
  * Lambda functions can share a connection string that contains a DB's credentials, which are secret by using the Parameter Store secure string
* **Distributor** - centrally store and systematically distribute software packages while keeping version control
  * Use Distributor to create and distribute software patches, and then install them using *Run Command* and *State Manager*
* **Session Manager** - a browser-based interactive shell/CLI for managing Windows and Linux EC2 instances
  * Control which users can access each instance, including the option to provide non-root access
  * Audit which user accessed which instance and a log of each command

### -- AWS CloudFormation

CloudFormation creates and manages a collection of related AWS resources, provisioning and updating them in an orderly and predictable fashion.

Use the CloudFormation templates or create custom templates to describe AWS resources, and any associated dependencies or runtime parameters. With CloudFormation, visualize templates as diagrams and edit them using a drag-and-drop interface.

### -- AWS CloudTrail

CloudTrail records AWS API calls and delivers log files. Information included:

* ID of API caller
* Time of the API call
* Source IP address of the API caller
* Request parameters
* Response elements returned by AWService

AWS API call history produced by CloudTrail enables:

* Security analysis
* Resource change tracking
* Compliance auditing

### -- AWS Config

Config is a fully managed service that provides you with an AWS resource inventory, config history, and config change notifications to enable security and governance.

These capabilities enable compliance auditing, security analysis, resources change tracking, and troubleshooting.

### -- AWS OpsWorks

OpsWorks is a config management service that provides managed instances of Chef and Puppet. OpsWork lets you use Chef and Puppet to automate how servers are configured, deployed, and managed across EC2 instances or on-prem servers.

OpsWorks has 3 offerings:

* OpsWorks for Chef Automate
* OpsWorks for Puppet Enterprise
* OpsWorks Stacks

### -- AWS Service Catalog

Service Catalog allows to centrally manage commonly deployed IT services and helps achieve consistent governance and meet compliance requirements, while enabling users to quickly deploy only approved IT services needed.

### -- AWS Trusted Advisor

Trusted Advisor provides online, real-time guidance to help provision resources following AWS best practices.

### -- AWS Personal Health Dashboard

While the AWS Service Health Dashboard displays the general status of AWServices, Personal Health Dashboard gives a personalized view into the performance and availability of the AWServices underlying used AWS resources.

With Personal Health Dashboard, alerts are automatically triggered by changes in the health of AWS resources, give you event visibility and guidance to help quickly diagnose and resolve issues.

### -- AWS Managed Services

Managed Services automates common activities such as:

* Change requests
* Monitoring
* Patch management
* Security
* Backup services
* Provides full-lifecycle services to provision, run and support infrastructure

### -- AWS Console Mobile Application

A limited view of the actual AWS Console. Console Mobile App allows us to monitor AWS resources through a dedicated dashboard and view config details, metrics, and alarms for select AWServices.

### -- AWS License Manager

License Manager manages license in AWS and on-prem servers from software vendors. License Manager lets admins create a customized licensing **rules** that emulate the terms of there licensing agreements, and then enforces these rules when an EC2 instance is launched.

Admins gain control and visibility of all licenses with License Manager dashboard and reduce the risk of non-compliance, misreporting, and additional costs due to licensing overages.

Through seamless integration with AWS Systems Manager and AWS Organizations, admins can manage licenses across AWS accounts in an organization and on-prem environments.

AWS Marketplace buyers can also use License Manager to track Bring Your Own License (BYOL) software obtained from the Marketplace.

### -- AWS Well-Architected Tool

The Well-Architected Tool reviews the state of workloads and compares them to the latest AWS architectural best practices. The tool is baed on the AWS Well-Architected Framework (important to know for the exam), developed to help cloud architects build **secure**, **high-performing**, **resilient**, **efficient** (low-cost) app infrastructure.

## Media Services

### -- Amazon Elastic Transcoder

Elastic Transcoder converts or transcodes media files from their source format into versions that will play back on devices like smartphones, tables, and PCs.

### -- AWS Elastic MediaConnect

Elastic MediaConnect is a video live-streaming service. MediaConnect allows you to build live video workflows in a fraction of the time and cost of satellite or fiber services.

MediaConnect provides:

* Reliable video transport
* Highly secure stream sharing
* Real-time network traffic and video monitoring

### -- AWS Elemental MediaConvert

MediaConvert makes it easy to create video-on-demand (VOD) content for broadcast and multiscreen delivery at scale, a la Netflix or Hulu video on-demand services.

### -- AWS Elemental MediaLive

Elemental MediaLive lets you create high-quality video streams for delivery to broadcast TV and Internet-connected devices. With MediaLive, setup streams for both live events and 24/7 channels with advanced broadcasting features, high availability and pay-as-you-go pricing.

### -- AWS Elemental Media Package

From a single video input, Media Package creates video streams formatted to play on connected devices. Think of Media Package as a cable company, Media Package can implement popular video features for viewers (start-over, pause, rewind, etc.) like those found on DVRs.

Elemental Media Package protects your content using Digital Rights Management (DRM).

Media Package scales automatically in response to load, so viewers will always great smooth streaming experience.

### -- AWS Elemental MediaStore

Elemental MediaStore is a storage service optimized for media. MediaStore gives you the performance, consistency, and low latency required to deliver live streaming video content.

### -- AWS Elemental MediaTailor

Elemental MediaTailor inserts individually targeted ads into video streams without sacrificing broadcast-level quality-of-service. Elemental MediaTailor delivers automated reporting based on both client and server-side ad delivery metrics, making it easy to accurately measure add impressions and viewer behavior.

## Migration and Transfer

### -- AWS Migration Hub

Migration Hub provides a single location to track the progress of app migrations across multiple AWS and partner solutions.

Using Migration Hub, you can view the migration progress of all the resources in the app. This allows you to quickly get progress updated across all of your migrations, easily ID and troubleshoot any issues, and reduce the overall time and effort spent on your migration projects.

### -- AWS Application Discovery Service

Application Discovery Service helps plan migration projects by gathering info about on-prem data centers.

Application Discovery Service collects and presents configuration, usage, and behavior data from on-prem servers to help better understand workloads.

This data is also available in AWS Migration Hub, where you can migrate the discovered servers and track their progress as they migrate into AWS.

### -- AWS Database Migration Service

Database Migration Service migrates DBs to AWS easily and securely. Source DBs remain fully operational during migrations. This service supports homogeneous migration (Oracle to Oracle) as well as heterogenous migration (Oracle to Aurora).

Database Migration Service allows you to stream data to Amazon Redshift from any of the supported sources enabling consolidation and easy analysis of data in the petabyte-scale data warehouse.

Database Migration Service can also be used for continuous data replication with high availability.

### -- AWS Server Migration Service

Server Migration Service (SMS) automates, schedules, and tracks incremental replications of live server volumes, making it easier to coordinate large-scale server migrations.

### -- AWS Snowball

Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of AWS.

Simply create a job in the AWS Management Console and a Snowball appliance will be shipped to you. Attach the appliance to local network, download and run the Snowball client to establish a connection, and then transfer the file directories to Snowball appliance.

Snowball uses multiple layers of security designed to protect the data uploaded. Once the data transfer job has been processed and verified, AWS performs a software erasure of the Snowball appliance.

### -- AWS Snowball Edge

Snowball Edge is a data migration and edge computing device that comes in 2 options.

Snowball Edge Storage Optimized provides 100 TB of capacity and 24 vCPUs and is well suited for local storage and large scale data transfer.

Snowball Edge Compute Optimized provides 52 vCPUs and an optional GPU for use cases such as advanced ML and full motion video analysis in disconnected environments.

Use these 2 options for data collection, ML and processing, and storage in environments with intermittent connectivity or in extremely remote locations before shipping it back to AWS. These can also be rack mounted and clustered together as temporary installations.

### -- AWS Snowmobile

Snowmobile is an exabyte-scale data transfer service used to move EXTREMELY large amounts of data to AWS. Transfer up to 100 PB per Snowmobile, a 45-foot long rugged shipping container, pulled by a semi-trailer truck, an 18-wheeler!

After your data is loaded, the Snowmobile is driven back to AWS where your data is imported into S3 or Glacier.

Snowmobile uses multiple layers of security designed to protect your data including dedicated security personnel, GPS tracking, alarm monitoring, 24/7 video surveillance, and optional escort security vehicle while in transit. All data is encrypted with 256-bit encryption keys managed through AWS KMS.

### -- AWS DataSync

DataSync is a data transfer service that makes it easy to automate moving data between on-prem storage and S3 or AWS Elastic File Systems (EFS).

DataSync uses on-prem software agents to connect to existing storage or file systems using Network File System (NFS) protocol, so no scripting needed to work with AWS APIs. Use DataSync to copy data over AWS DirectConnect or Internet links to AWS.

### -- AWS Transfer for SFTP

Transfer for SFTP is a fully-managed service that enables the transfer of files directly into and out of S3 using the SFTProtocol known as Secure Shell (SSH) File Transfer Protocol.

## Mobile

### -- AWS Amplify

Amplify seamlessly provisions and manages your mobile backend and provides a simple framework to easily integrate your backend with iOS, Android, Web, and React Native front-ends.

Amplify provisions and manages back-ends for your mobile apps. You just select the capabilities you need such as authentication, analytics, or offline data sync and Amplify will automatically provision and manage the AWS service that powers each of the capabilities.

You can then integrate those capabilities into your app through the Amplify libraries and UI components.

### -- Amazon Cognito

Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps. Authenticate users through social ID providers such as FB, Twitter, or Amazon with SAML ID solutions, or by using your own ID system.

### -- Amazon Pinpoint

Pinpoint sends targeted messages or notifications to customers through multiple engagement channels.

Pinpoint tracks the ways that customers respond to the messages sent — for example, by showing the number of messages delivered, opened or clicked.

With Pinpoint, develop custom audience segments and send them pre-scheduled targeted campaigns via email, SMS, voice messages, and push notifications.

You can send transactional messages using the console or the Pinpoint REST API.

### -- AWS Device Farm

With Device Farm, test and interact with Android, iOS, and web apps on many devices at once, or reproduce issues on a device in real time.

### -- AWS AppSync

AppSync is a serverless back-end for mobile and web apps.

AppSync makes it easy to build data driven mobile and web apps by handling securely all the app data management tasks like:

* Online and offline data access
* Data sync
* Data manipulation across multiple data sources

AppSync uses GraphQL.

## Networking and Content Delivery

### -- Amazon Virtual Private Cloud (VPC)

Virtual Private Cloud (VPC) provisions a logically isolated section of the AWS Cloud for your AWS resources in a user-defined virtual network.

With VPC, get full control over:

* Virtual networking environment
* Selection of IP address range
* Creation of subnets
* Configuration of route tables and network gateways

VPC can use both IPv4 and IPv6.

Additionally, you can create a hardware Virtual Private Network (VPN) connection between on-prem data center and AWS VPC.

### -- Amazon CloudFront

CloudFront is a fast Content Delivery Network (CDN) service that securely delivers data, video, apps, and APIs globally with low-latency and high transfer speeds.

CloudFront offers **Lambda@Edge**, a compute service that lets you execute functions that customize content that CloudFront delivers. You can code functions in one region and execute them in AWS locations globally that are closer to the viewer, w/out provisioning or managing servers, therefore reducing latency and improving UX.

### -- Amazon Route 53

Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. Uses IPv4 and IPv6.

Use Route 53 to configure DNS health checks to route traffic to healthy endpoints, or to independently monitor the health of your app and its endpoints.

You can also manage traffic globally through a variety of routing types, including:

* Latency-based routing
* Geo DNS
* Weighted round robin

All of the above can be combined with DNS Failover to enable a variety of low-latency, fault-tolerant architectures.

Route 53 also offers Domain Name Registration.

### -- AWS Private Link

PrivateLink implies the security of data shared w/cloud-based apps by eliminated the exposure of data to the public Internet.

### -- AWS Direct Connect

Direct Connect establishes a dedicated network connection from on-prem to AWS Direct Connect locations. Using industry standard 802.1Q VLANs, this connection can be partitioned into multiple virtual interfaces.

This will in turn:

* Reduce network costs
* Increase bandwidth throughput
* Provide a more consistent network experience than Internet-based connections

### -- AWS Global Accelerator

Global Accelerator improves the availability and performance of apps that you offer to global users.

Global Accelerator uses the highly available and congestion-free AWS global network to direct internet traffic from your users to your apps’ endpoints on AWS.

Global Accelerator can provide static IPs acting as fixed entry points to your app hosted on AWS, eliminating the complexity of managing specific IPs for different AWS Regions and AZs.

### -- Amazon API Gateway

API Gateway acts as a “front door” for apps to access data, business logic, or functionality from back-end service, such as workloads running on EC2s, Lambda or any web app.

**Stage variables** are name-value pairs that you can define as configuration attributes associated with a deployment stage of an API. They act like environment variables and can be used in your API setup and mapping templates.

For example, you can direct traffic to different backend endpoints for each stages (i.e. Development, Testing, Production) without creating a separate API for each.

A stage variable can be used as a part of HTTP integration URL as in following cases:

* A full URI without protocol
* A full domain
* A subdomain
  * `http://${stageVariables.<variable_name>}.example.com/dev/operation`
* A path
  * `http://example.com/${stageVariables.<variable_name>}/prod`
* A query string

### -- AWS Transit Gateway

Transit Gateway enables customers to connect their Amazon VPC and on-prem networks to a single gateway.

Transit Gateway acts as a hub that controls how traffic is routed among all the connected networks which act like spokes. This hub and spoke model significantly simplifies management and reduces operational costs bc e/network only has to connect to the Transit Gateway and not to every other network. Any new VPC connected to the Transit Gateway is then automatically available to every other network already connected to the Transit Gateway. MAGIC!

### -- AWS App Mesh

App Mesh makes it easy to run microservices (containers, usually Docker) by providing consistent visibility and network traffic controls for every micro service in an app. App Mesh configures each micro service to export monitoring data and implements consistent communications control logic across your app. This makes it easy to quickly pinpoint the exact location of errors and automatically re-route network traffic when there are failures or when code changes need to be deployed.

Use App Mesh with Amazon Elastic Container Services (ECS) or Elastic Kubernetes Services (EKS) to better run containerized microservices at scale.

App Mesh uses the open source [EnvoyProxy.io](http://Envoyproxy.io)

### -- AWS Cloud Map

With Cloud Map, define custom names for app resources, and it maintains the updated location of these **dynamically** changing resources.

### -- Elastic Load Balancing

Elastic Load Balancing (ELB) distributes incoming app traffic across multiple targets, such as EC2s, containers, and IPs.

Elastic Load Balancing (ELB) offers 3 types of load balancers:

* **Application Load Balancer** - load balancing of HTTP and HTTPS traffic and provides advanced **request** routing targeted at the delivery of modern app architectures, including microservices and containers
  * Operating at the individual request level (Layer 7), Application Load Balancer routes traffic to targets within VPC based on the content of the request
* **Network Load Balancer** - load balancing of TCP traffic where extreme performance is required.
  * Operating at the connection level (Layer 4), Network Load Balancer routes traffic to targets within VPC and is capable of handling millions of requests per second while maintaining ultra low latencies
* **Classic Load Balancer** - basic load balancing across multiple EC2s and operates at both the request level (Layer 7) and connection level (Layer 4)

Elastic Load Balancing (ELB) provides **access logs** that capture detailed information about requests sent to your load balancer. You can use these access logs to analyze traffic patters and troubleshoot issues. Each log contains info such as:

* Time the request was received
* Client's IP address
* Latencies
* Request paths
* Server responses

## Robotics

### -- AWS RoboMaker

RoboMaker extends the most widely used open source robotics software framework, Robot Operating System (ROS), with connectivity to AWS Cloud.

RoboMaker provides a:

* Robotics development environment for app development
* Robotics simulation service to accelerate app testing
* Robotics fleet management service for remote app deployment, update and management

## Satellite

### -- AWS Ground Station

Ground Station is a fully managed service that lets you control satellite communications, downlink and process satellite data, and scale your satellite operations quickly, easily and cost-effectively without having to worry about building or managing your own ground station infrastructure. Some use cases include:

* Weather forecasting
* Surface imaging
* Communications
* Video broadcasts

With Ground Station, you pay only for the actual antenna time used.

## Security, Identity, and Compliance

### -- AWS Security Hub

Security Hub gives you a view of high-priority security alerts and compliance status across AWS accounts.

With Security Hub, have a single place that aggregates, organizes, and prioritizes your security alerts, or findings from multiple AWS services, such as Amazon GuardDuty, Amazon Inspector, and Amazon Macie, as well as other AWS partner solutions.

Security Hub continuously monitors your environment using automated compliance checks based on AWS best practices and industry standards your organization follows.

### -- Amazon Cloud Directory

With Cloud Directory, create directories for a variety of use cases, such as:

* Organizational charts
* Course catalogs
* Device registries

While traditional directory solutions, such as AD Lightweight Directory Services (AD LDS) and other LDAP-based directories, limit you to a single hierarchy, Cloud Directory offers multiple dimensions for your hierarchy.

Simply define the schema, create directory, and then populate your directory by making calls to the Cloud Directory API.

### -- AWS Identity and Access Management (IAM)

Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.

IAM allows you to do the following:

* Manage IAM users and their access
* Manage IAM roles and their permissions
  * Create roles in IAM and manage permissions to control which operations can be performed by the entity, or AWS service, that assumes the role
* Manage federated users and their permissions - identity federation to allow existing identities (users, groups, and roles) in your enterprise to access the AWS Management Console, call AWS APIs, and access resources

### -- Amazon GuardDuty

GuardDuty is a threat detection service that continuously monitors for malicious or unauthorized behavior to help protect your AWS accounts and workloads.

GuardDuty also detects potentially compromised instances or reconnaissance by attackers.

### -- Amazon Inspector

Inspector is an automated security assessment service that helps improve the security and compliance of apps deployed on AWS.

Inspector produces a detailed list of security findings prioritized by level of severity. Inspector assessments are offered as pre-defined lures packages mapped to common security best practices and vulnerability definitions, some include:

* Access to EC2s from Internet
* Remote root login being enabled
* Vulnerable software versions installed

### -- Amazon Macie

Macie recognizes sensitive data such as PII or intellectual property, and provides you with dashboards and alerts that give visibility into how this data is being accessed or moved.

Currently available for S3 only.

### -- AWS Artifact

Artifact is a central resource for compliance related information.

### -- AWS Certificate Manager

Certificate Manager is a service that provisions, manages, and deploys Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use w/AWServices and internal connected resources.

With Certificate Manager Private Certificate Authority, you pay monthly for the operation of the private Certificate Authority and for the private certificates you issue.

### -- AWS CloudHSM (Hardware Security Module)

Cloud Hardware Security Module (CloudHSM) is a cloud-based hardware security module that enables you to easily generate and use your own encryption keys on the AWS Cloud.

### -- AWS Directory Service

Directory Service for Microsoft Active Directory (AD), also known as AWS Managed Microsoft AD, enables your directory-aware workloads and AWS resources to use managed AD in the AWS Cloud.

### -- AWS Firewall Manager

Firewall Manager is a security management service to centrally configure and manage AWS WAF rules across accounts and apps.

Firewall Manager rolls out AWS WAF rules for Application Load Balancers and Amazon CloudFront distributions across accounts in AWS Organizations.

Now you have a single service to build firewall rules, create security policies, and enforce them in a consistent, hierarchical manner across entire Application Load Balancers and CloudFront distributions.

### -- AWS Key Management Service (KMS)

Key Management Service (KMS) create and manages keys and controls the use of encryption across a wide range of AWServices and in apps.

KMS is integrated with CloudTrail to provide you with logs of all key usage.

Using KMS with Envelope Encryption, unencrypted data is encrypted using a plaintext Data key. This Data key is further encrypted using a plaintext **Master** key. This *Master* key is stored in AWS KMS and known as **Customer Master Keys** (CMK).

AWS Owned or AWS Managed CMK can be used to generate and encrypt keys.

While **AWS Owned CMK** is free of charge, **AWS Managed CMK** is chargeable.

Also, **AWS Managed CMK** are not encrypted at rest.

Using CMK with *DynamoDB*, you can encrypt a unique data key for the table, known as the **table key**. Using AWS Owned CMK and encryption at rest, DynamoDB transparently encrypts data in a DynamoDB table, including its primary key & local and global secondary indexes, whenever the table is persisted to disk.

### -- AWS Organizations

With Organizations, you can create groups of accounts, automate account creation, apply and manage policies for those groups.

### -- AWS Secrets Manager

Secrets Manager protects secrets needed to access your apps, services, and IT resources.

Users and apps retrieve secrets with a call to Secrets Manager API, eliminating the need to hardcode sensitive info in plain text.

Secrets Manager offers secret rotation w/built-in integration for RDS for MySQL, PostgreSQL, and Aurora.

Secrets Manager enables you to control access to secrets using fine-grained permissions and audit secret rotation centrally for resources in AWS, 3rd party, and on-prem.

### -- AWS Shield

Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards web apps running on AWS. There are 2 tiers of AWS Shield:

* Shield Standard - defends against most common, frequently occurring network and transport layer DDoS attacks that target your website or app
* Shield Advanced - provides additional detection and mitigation against large and sophisticated DDoS attacks, near real-time visibility into attacks, and integration with AWS WAF, a web application firewall
  * Also provides 24/7 access to the AWS DDoS Response Team (DRT)
  * Also protects against incurred charges from DDoS attacks

You can protect your web apps hosted anywhere in the world by deploying Amazon CloudFront in front of your app to use AWS Shield, standard or advanced.

### -- AWS Single Sign-On (SSO)

SSO is a cloud SSO service to centrally manage SSO access to multiple AWS accounts and business apps.

### -- AWS Web Application Firewall (WAF)

Web Application Firewall (WAF) helps protect web apps from common web exploits that could affect app availability, compromise security, or consume excessive resources.

Create custom rules that block common attack patterns, such as SQL injection or cross-site scripting, and rules that are designed for your specific app.

## Storage

### -- Amazon Simple Storage Service (S3)

S3 is an object storage service that offers industry-leading scalability, data availability, security and performance.

Amazon S3 is designed for 99.999999999% (11 9s) of durability.

You can enable CORS (Cross-Origin Resource Sharing) for S3 buckets.

### -- Amazon Elastic Block Store (EBS)

Elastic Block Store (EBS) provides persistent block storage volumes for use with EC2s.

### -- Amazon Elastic File System (EFS)

Elastic File System (EFS) provides a simple, scalable, elastic file system for Linux-based workloads.

You can access your file systems across AZs and Regions and share files between thousands of EC2s and on-prem servers via AWS Direct Connect or AWS VPN.

### -- Amazon FSx for Lustre

Fix for Lustre is a fully managed file system that is optimized for compute-intensive workloads, such as high-performance computing, ML, and media data processing workflows.

With Amazon FSx for Lustre, you can launch and run a Lustre file system that can process massive data sets at up to hundred of gigabytes per second of throughput, millions of IOPS, and sub-millisecond latencies.

### -- Amazon FSx for Windows File Server

With Amazon FSx for Windows, you can launch highly durable and available Windows file systems that can be accessed from up to thousands of compute instances using industry standard SMB protocol.

### -- Amazon S3 Glacier

S3 Glacier is a secure, durable and extremely low-cost storage service for data archiving and long-term backup.

S3 Glacier provides query-in-place functionality, allowing you to run powerful analytics directly on your archive data at rest.

You can store data for as little as $0.004 per GB per month.

S3 Glacier provides 3 options for access to archives, from a few minutes to several hours.

### -- AWS Storage Gateway

Storage Gateway is a hybrid storage service that enables on-prem apps to seamlessly use AWS Cloud Storage, S3, S3 Glacier, and Amazon Elastic Block Store (EBS).
