# AWS Developer Associate Certification Notes

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