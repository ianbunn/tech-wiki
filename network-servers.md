# Network Servers

## Hypervisors

What is a Hypervisor? [1]

* Hypervisor is a process that separates a computer’s OS and applications from the underlying physical hardware
  * Hypervisor allows the the physical host to operate multiple virtual machines as guests to help maximize the effective use of computing resources:
    * Memory
    * Network bandwidth
    * CPU cycles

History of Hypervisors [1]

* Hypervisors was developed in the late 1960s and 1970s by IBM for testing new OS ideas or even exploring new hardware concepts
  * The virtualization aspect allowed programmers to deploy and debug w/out jeopardizing the stability of the main PRODUCTION system
  * Testing did not require new equipment or having to deploy additional costly development systems
* In mid-2000s, hypervisors and virtualization grew due to the following reasons:
  * Better hardware capabilities
    * Allowed a single machine to do more simultaneous work
  * Cost-control efforts that led to consolidation of servers
  * Improved security and reliability due to hypervisor architecture improvements
  * Ability to run OS-dependent applications on different hardware or OS environments
* In 2005, CPU vendors included hardware virtualization to their x86-based products
  * This would extend the availability (and benefits) of virtualization to PC (consumers) and server-based (professionals) audiences

Benefits of Hypervisors [1]

* Even though VMs run on the same physical hardware, they are still logically separated from each other.
  * If one VM experiences an error, crash, or a malware attack, it doesn’t extend to other VMs on the same machine, or even other machines
* VMs are very mobile, because they are independent of the underlying hardware
  * Can be moved or migrated between local or remote virtualized servers, easier than traditional applications that are tied to physical hardware

Types of Hypervisors [1]

* Type 1 = “native” or “bare metal” hypervisors that run directly on the host’s hardware to control the hardware and manage the guests VMs
  * Modern type 1 hypervisors include:
    * Xen
    * Oracle VM Server for SPARC
    * Oracle VM Server for x86
    * Microsoft Hyper-V
    * VMware’s ESX/ESXi
* Type 2 = “hosted hypervisors” that run on conventional OS, just like any other application on the system, so a guest OS runs as a process on the host, while the hypervisors separate the guest OS from the host OS
  * Modern type 2 hypervisors include:
    * VMware Workstation
    * VMware Player
    * VirtualBox
    * Parallels Desktop for Mac
* Enterprise data center vendors include:
  * VMware
  * Microsoft
  * Citrix Systems

Containers VS Hypervisors [1]

* Containers are growing in popularity as a possible replacement for hypervisors
  * Containers can place more apps into a single physical server than a VM can
    * VMs takes up a lot of resources with a full copy of an OS, and a virtual copy of all the hardware that the OS needs to run
      * This adds lots of RAM and CPU cycles
  * Containers only requires the OS, OS’ supporting programs & libraries, and system resources to run a program
* Security concerns and practical uses of VMs mean that containers will not necessarily replace hypervisors/VMs, but rather be used in combination
  * On the security side, containers have one OS that applications share, while VMs isolate not only the application, but the OS
  * If the application gets compromised, it could attack a single OS in a container, affecting other applications that share the OS
    * If an application in a VM gets compromised, only one OS is affected, not other applications or OS on the VM
  * There are some security concerns with hypervisors when hackers create a malware and rootkits that install themselves as a hypervisor below the OS
    * This is known as hyperjacking
      * Hyperjacking is a tough process to detect, as the malware could intercept operations of the OS (i.e., entering a PW) w/out anti-malware software, because the malware runs below the OS
    * Detection alternatives have been pursued with the SubVirt and BluePill malware, while others have demonstrated a hypervisor-layer anti-rootkit called HookSafe
      * HookSafe provides generic protection against kernel-mode rootkits

Hypervisor Expansion [1]

* Hypervisors have expanded into storage hypervisors
  * Storage hypervisors take the same concept and apply it to data storage
    * Can run on physical hardware, as a VM, inside a hypervisor OS or within a larger storage network
    * Storage hypervisors can run on specific hardware or be independent of hardware
  * Storage hypervisors are key for:
    * Desktop virtualization
    * OS virtualization
    * Application virtualization

Embedded Hypervisor [1]

* Embedded hypervisors support the requirements of the embedded systems
  * These are different from hypervisors that target web server and desktop applications
  * Embedded hypervisors are designed into the embedded device from the outset
* In an embedded systems, various components function collectively to provide the device’s functionality
  * Mobile virtualization overlaps with embedded system virtualization, and shares some use cases

[1] Shaw, Keith. “What Is a Hypervisor?” Network World, Network World, 19 Dec. 2017, 12:18, www.networkworld.com/article/3243262/virtualization/what-is-a-hypervisor.html.