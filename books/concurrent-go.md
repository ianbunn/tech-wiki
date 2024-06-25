# Learn Concurrent Programming With Go

By James Cutajar

## 1 Stepping into Concurrent Programming

### 1.3 Increase Throughput

Computational power can only be harnessed if our code is written in a manner that takes advantage of 
all the processing units. Just by adding processing units without optimizing code will not
improve performance.

**Horizontal scaling**: when we improve the system performance by distributing the load on multiple processing resources,
such as processors and server machines.

**Vertical scaling**: when we improve the system performance by improving the existing resources, such as
getting a faster processor.

Most programs spend very little time executing computations on processing resources. Most of the time, programs spend
time waiting for I/O.

### 1.5 Programming concurrency in Go

#### 1.5.1 Goroutines at a Glance

Goroutines gives us a system of:

- User-level threads
- Running on a set of kernel-level threads
- Managed by Go's runtime

**Go channels** allows us to coordinate the concurrent executions together on a common task.
Channels allows goroutines to pass messages between each other.
This enables the exchange of information and synchronization of the multiple executions.

#### 1.5.2 Modeling Concurrency with Communicating Sequential Processes (CSP) and Primitives

**CSPs** were first described in 1978 by C.A.R. Hoare as a formal language to express concurrent interactions.

Go tries to implement many of CSP's ideas such as the use of _synchronized channels_. 
This communication and synchronization helps reduce the risk of programming errors.

Some other mechanisms like **mutexes** and **conditional vars** are provided by Go, so when CSP is not the appropriate model to use,
we can fall back on other classic primitives.

#### 1.5.3 Building Our Own Concurrency Tools

This includes concurrency constructs such as:

- Mutexes
- Conditional vars
- Channels
- Waitgroups
- Semaphores
- Others

### 1.6 Scaling Performance

**Performance scalability** is the measurement of how well a program speeds up in proportion to the increase in
the number of processing resources available to the program.

**Scalability limit** is the limit associated with the notion that no matter how many processing resources you throw at a program,
there is an optimal number of resources that will produce the same outcome as the max number of resources.

#### 1.6.1 Amdahl's Law

First described in 1967 by Gene Amdahl.

**Amdahl's law** states that the overall performance improvement gained by optimizing a single part of the system
is limited by the fraction of time that the improved part is actually used, a problem's parallel-to-sequential ratio.

Processes that need to be done sequentially and parts that can be done in parallel influence and limit the scalability of a task.

Parallel parts of our execution act as a "bottleneck", thus limiting the advantage of parallelizing the execution.

It is wise to always look to parallelize execution of a program, so we can use up the most out of our resources.

#### 1.6.2 Gustafson's Law

First described in 1988 by John L. Gustafson and Edwin H. Barsis mentioning a few shortcomings on Amdahl's Law.

Their main argument was that the problem changes when we have access to more resources. If we notice that a program is 
only using half of its resources, we can then use the remaining resources for other programs.

Gustafson's Law tells us that as long as we find ways to keep our extra resources busy, the speed-up should continue 
to increase, and not be limited by the sequential part of the problem/execution. This is only true if the serial parts
of the execution stay constant as we increase the problem size, which is true in most cases.

According to Gustafson's Law, when we increase the resources, there is an expectation of an increase in the system's capabilities
that engineers can put to good use, therefore taking advantage of the extra processing power.

## 2 Dealing with Threads

### 2.1 Multiprocessing in Operating Systems

Multiprocessing AKA multiprogramming is the ability of a CPU to execute multiple processes concurrently.

An *interrupt* is a mechanism used to stop the current execution and notify the OS of a particular event.

A piece of hardware called the **interrupt controller** handles all interrupts coming from multiple devices.

**Process context block** is the list of all the information needed to restore a process to its previous state. Loading this adds is called *context switching*.

In the 1950s, Semi-Automatic Ground Environment (SAGE) was the first system to use multiprocessing in a US military air defense system.

In the 1960s, IBM's OS/360 was the first OS to use multiprocessing. It also introduced the concept of *time-sharing*. Time-sharing is when many programmers are connected via terminals.

Parallelism is when multiple processes are executed at the same time, also in a multicore system. Concurrency is when multiple processes are executed in overlapping time periods.

### 2.2 Abstracting Concurrency with Processes and Threads

A **process** represents a program that is currently running on the system. Processes provide isolation at the cost of consuming more resources.

A **thread** is an extra construct that executes within the process context to give us a more lightweight and more efficient approach to concurrency.

#### 2.2.2 Creating Processes

In Unix-like systems, the `fork()` system call is used to create a new process. The new process is a copy of the parent process. **Copy on write (COW)** is an optimization introduced to the fork() system call. It reduces the time taken by not copying the entire memory space.

In Windows, the `CreateProcess()` function is used to create a new process.

We refer to the new process as the **child** and the process that created it as the **parent**.

Because each process has its own memory space, if one process changes its memory contents (for example, changing a variable’s value), the other process will not see this change.

In addition to consuming more memory, copying and allocating system resources takes time and consumes precious CPU cycles. This means that creating too many processes takes a heavy toll on the system.

Support for creating and forking processes in Go is limited to the `syscall` package and is OS-specific. Go also gives us the ability to run commands in a new process by calling the exec() function, abstracting some of the OS-specific functions in the syscall package. However, concurrent programming in Go does not typically rely on heavyweight processes.

A process will terminate when it has finished executing its code or has encoun- tered an error it cannot handle. Once a process terminates, the OS reclaims all its resources so they are free to be used by other processes.

#### 2.2.4 Concurrency with Threads

Threads are the answer to some of the problems that come with using processes for concurrency.

We can think of threads as the lightweight alternative to multiple processes. Creating a thread is much faster (sometimes 100x faster), and a thread consumes fewer system resources than a process. This is more efficient because we’re not consuming large amounts of memory for each execution.

Conceptually, we can separate the resources from the execution because this lets us create more than one execution and share the resource between them, each single execution is called a **thread** or a **thread of execution**.

When you start a process, it contains one main thread by default. When we have more than one, it is **multithreaded**, meaning we code in a manner that has different threads working together in the same app.

When we create a new thread, the operating system needs to create only enough resources to manage the stack space, registers, and a program counter. The new thread runs inside the context of the same process.

We can typically create many more threads than processes before the system starts running out of resources.

In addition, because there are so few new resources to allocate, starting a thread is a lot faster than starting a process. Although threads share the same memory space, it's important to realize that e/thread has its own private stack space.

The **stack space** stores local vars that live within a function, these are short-lived vars. This space does not include vars that are allocated on the heap, the main memory space.

Working in the same memory space means we don’t get the isolation that processes offer. This can lead to one thread stepping over another thread’s work. Communication between and synchronization of the mul- tiple threads are important in avoiding this.

Each thread has a **program counter** aka **instruction pointer**, which tells the CUP where to execute the next instruction. Each thread also has its own **register set**. The register set is a small amount of memory that is used to store the current state of the thread.

In Go, when the main thread of execution terminates, the entire process also terminates, even if other threads are still running.

Operating systems and programming languages implement threads in different manners. For example, on Windows, we can create a thread using the CreateThread() system call. On Linux, we can use the clone() system call with the CLONE_THREAD option.

IEEE attempted to standardize thread implementations using a standard called POSIX Threads (pthreads for short). These threads are created, managed, and synchronized through the use of a standard POSIX Threads API.

### 2.3 What's So Special About Goroutines?

Go’s answer to concurrency is the goroutine. Instead, goroutines are managed by Go’s runtime at a higher level to give us an even more lightweight construct, consuming far fewer resources than an operating system thread.

#### 2.3.1 Creating Goroutines

Adding the keyword go in front of a function call creates a goroutine. This tells the Go runtime to execute the function concurrently. We can never guarantee the execution order of goroutines.

#### 2.3.2 Implementing Goroutines In the User Space

Goroutines are user-level threads that are managed by the Go runtime. The Go runtime is responsible for scheduling the goroutines on the available OS threads.

he OS also stores the context of each thread (registers, stack, and state) and uses it whenever the threads need executing. We refer to these types of threads as **kernel-level** threads because the operating system manages them.

Instead of implementing threads at the kernel level, we can have threads running
completely in the user space, which means the memory space that is part of our application, as opposed to the operating system’s space. 

From an operating system point of view, a process containing user-level threads will
appear to have just one thread of execution. The OS doesn’t know anything about user- level threads.

The process itself is responsible for managing, scheduling, and context switching between the user-level threads.

To execute this internal context switch, there needs
to be a separate runtime that maintains a table containing all the data (such as the
state) of each user-level thread. We are replicating on a small scale what the OS does.

The main advantage of user-level threads is performance. Context-switching a user-
level thread is faster than context-switching a kernel-level one. When we can switch execution without invoking any kernel, the executing process can keep hold of the CPU without needing to flush its cache and slow us down.

The downside of using user-level threads comes when they execute code that
invokes blocking I/O calls. If a user-level thread performs this blocking read call, the entire process is descheduled. If any other user-level threads are present in the same process, they will not get to execute until the read operation is complete.

To work around this limitation, applications using user-level threads
tend to use non-blocking calls to perform their I/O operations. However, using non-blocking I/O is not ideal, since not every device supports non-blocking calls.

Another disadvantage of user-level threads is that if we have a multiprocessor or a
multicore system, we will be able to utilize only one of the processors at any point in
time. The OS sees the single kernel-level thread, containing all the user-level threads,
as a single execution. Thus, the OS executes the kernel-level thread on a single processor, so the user-level threads contained in that kernel-level thread will not execute in a truly parallel fashion.

Go’s runtime allows its goroutines to take full advantage of multiple CPUs.

Go provides a hybrid system that gives us the great performance of user-level threads
without most of the downsides. It achieves this by using a set of kernel-level threads,
each managing a queue of goroutines.

The system that Go uses for its goroutines is sometimes called the **M:N threading
model**. This is when you have M user-level threads (goroutines) mapped to 
N kernel-level threads.

Go’s runtime determines how many kernel-level threads to use based on the number
of logical processors. This is set in the environment variable called `GOMAXPROCS`.

Go’s runtime will assign a **local run queue (LRQ)** to each of these kernel-level threads.
Each LRQ will contain a subset of the goroutines in the program. In addition, there is
a **global run queue (GRQ)** for goroutines that Go has not yet assigned to a kernel-level thread. Each of the kernel-level threads running on a processor will
take care of executing the goroutines in its LRQ.

To work around the problem of blocking calls, Go wraps any blocking operations so
that it knows when a kernel-level thread is about to be descheduled.

When this happens, Go creates a new kernel-level thread (or reuses an idle one from
a pool) and moves the queue of goroutines to this new thread, which picks a goroutine 
from the queue and starts executing it

This system of moving goroutines from one queue to another is known in Go as
**work stealing**.

Work stealing does not just happen when a goroutine makes a blocking
call. Go can also use this mechanism when there is an imbalance in the number of
goroutines in the queues. This will ensure that there are no processor cores that are
idle while others are overloaded.

In Go, we can force a goroutine to lock itself to an OS thread by calling the
runtime.LockOSThread() function. This call binds the goroutine exclusively to its
kernel-level thread. No other goroutines will run on the same OS thread until the
goroutine calls runtime.UnlockOSThread(). This is useful when we need to interact
with C code that expects to run on a single thread.

#### 2.3.3 Scheduling Goroutines

The Go scheduler needs to execute to perform its context switching. Thus, the Go
scheduler needs user-level events to trigger its execution

We can also call the Go scheduler in our code to try to get the scheduler to 
context-switch to another goroutine. In concurrency lingo, this is usually called a **yield command**. It’s when a thread decides to yield control so that another thread gets its turn on the CPU.

We have no control over which goroutine the scheduler will select
to execute. When we call the Go scheduler, it might pick up the other goroutine
and start executing it, or it might continue the execution of the goroutine that
called the scheduler.

As programmers writing concurrent programs, we must never write
code that relies on an apparent scheduling order, because the next time we run the
program, the ordering might be different.

If we need to control the order of execution of our threads,
we’ll need to add synchronization mechanisms to our code instead of relying on the
scheduler. 

### 2.4 Concurrency VS Parallelism

**Concurrency** is about planning how to do many tasks at the same time.
**Parallelism** is about performing many tasks at the same time.

In fact, we can say that parallelism is a subset of concurrency. Only concurrent programs can execute in parallel, but not all concurrent programs will execute in parallel.

## 3 Thread Communication Using Memory Sharing

Threads of execution working together need to communicate with **inter-thread communication (ITC)**
or **inter-process communication (IPC)** when referring to processes.
They communicate two things: 

- **Memory sharing**
- **Message passing**

### 3.1 Memory Sharing

In concurrent programming, memory sharing is sharing part of the process's memory -
for example, sharing a variable or a data structure, and we have different goroutines
working concurrently on this memory.

Memory sharing gets complicated when there are multiple processors, because
computer architecture involves various layers of cache between the CPUs and the main memory.

Since processors utilize a system bus to communicate with the main memory and
to reduce the load on the bus, we can use caches to bring memory contents closer to where
they need to be, thus improving performance.

In a multithreaded process, if thread 1 updates a variable in its cache, thread 2 will have an outdated copy of the variable in its cache. This is known as the **cache coherence problem**.

One solution to this problem is to perform **cache write-through**, where the cache is updated and the main memory is updated at the same time. This is a slow operation because it involves writing to the main memory every time we update a variable.

Another solution is to use **cache write-back**, where the cache listens for updates from another thread
and updates or invalidates its cache accordingly.

The mechanism for dealing with reads and writes on memory and caches in a multiprocessor system is known as the **cache-coherency protocols**.

The **coherency wall** is the point at which the cost of maintaining cache coherency outweighs the benefits of using caches.

### 3.2 Memory Sharing in Practice

#### 3.2.2 Escape Analysis

The Go compiler uses **escape analysis** to determine whether a variable should be allocated on the memory heap or the function's stack.

It doesn't make sense for one goroutine to read or modify the memory contents of another
goroutine's stack, because the goroutines might have completely different lifecycles.
One goroutine's stack might not be available by the time another goroutine needs to update it.

Go's compiler is smart enough to realize when we are sharing memory between goroutines.
When it notices this, it allocates memory on the heap instead of the stack.

**Escape analysis** consists of the compiler algorithms that decide whether a variable should be allocated
on the heap instead of the stack.

When a variable that looks like it belongs to the local function's stack
but instead is allocated in the heap memory, we say that the variable has **escaped** to the heap.

There are many reasons why a variable might escape to the heap

- For example, if we pass a pointer to a local variable to another function, the variable will escape to the heap
- Anytime a variable is shared outside the scope of a function's stack frame, it will escape to the heap

Goroutines can update heap variable through a pointer. There is a tax to using heap memory,
as the heap will need to be cleaned up by Go's **garbage collector**.

The **garbage collector** goes through the objects in the heap that are no longer referenced
by any goroutine and marks the space as free, so it can be reused. As opposed to using space on the stack,
this memory is reclaimed when the function finishes executing.

By using goroutines, we are forfeiting some compiler optimizations, such as inlining, 
and we are increasing overhead by putting our shared variable on the heap.
The trade-off is that by executing our code concurrently, we potentially achieve a performance boost.

### 3.3 Race Conditions

A **race condition** may arise when two or more goroutines try to update a shared variable at the same time, 
and they step over each other, giving us unexpected results.

**Race conditions** happen in other environments as well, such as:

- Distributed systems
- Electronic circuits
- Human interactions

A race condition is a good example of a **Heisenbug**, named after the physicist Werner Heisenberg,
with the reference to his quantum mechanics uncertainty principle, a Heisenbug is a bug that disappears or changes its behavior when we attempt to debug and isolate it.

A **critical section** in our code is a set of instructions that should be executed without interferences from other executions affecting the state used in that section. When this happens, race conditions can occur.

The word **atomic** has its origins in the ancient Greek language meaning "indivisible". In computer science, an atomic operation is an operation that is indivisible, meaning it cannot be interrupted.

When we're using goroutines, user-level threads, and we're running only on a single processor, 
it's unlikely that the runtime will interrupt the execution in the middle of these instructions.
This is bc **user-level scheduling** is usually non-preemptive; it'll only context switch in specific cases,
such as I/O or when the app calls a thread yield (`runtime.Gosched()` will invoke the scheduler to yield execution to another goroutine).

The above is unlike the **OS scheduling**, which is usually preemptive and can interrupt the execution at any time.

WARNING: to test with a single processor, we can set the following: `runtime.GOMAXPROCS(1)`. DO NOT USE THIS IN PRODUCTION, it's just for testing purposes and to understand how the runtime works.

#### 3.3.3 Proper Synchronization & Communication Eliminate Race Conditions

There is no single best technique to solve for every race condition case out there. 

Find the best tool to fix the race condition, is it improving channel communication? Is it using a mutex? Is it using a waitgroup?

The second step to good concurrent programming is identifying when a race condition can happen.
We must be mindful when we are sharing resources with other goroutines.

To avoid race conditions in our programming, we need good synchronization and communication between the goroutines to make sure they don't step all over each other.

Good concurrent programming involves effectively synchronizing your concurrent executions to eliminate race conditions while improving performance and throughput.

#### 3.3.4 The Go Race Detector

Go gives us a tool to detect race conditions in our code: we can run the Go compiler with the `-race` command-line flag. 
With this flag, the compiler adds special code to all memory accesses to track when different goroutines are reading from and writing to memory. 
When we use this flag and a race condition is detected, it outputs a warning message on the console.

WARNING: Go's race detector only finds race conditions when a particular race condition is triggered.
For this reason, the detector is not perfect.
When using the race detector, production-like scenarios should be used; however, enabling the race detector in production is not recommended, since it slows performance and uses a lot of memory.

## 4 Synchronization With Mutexes

We can protect critical sections of our code with **mutexes**, so that only one goroutine at a time
can access a shared resource. This eliminates race conditions.

Variations on mutexes, sometimes called **locks**, are used in many programming languages and systems.

**Reader-writer mutexes** gives us performance optimizations in situations where we need to block concurrency for writing, but not for reading. They give us the ability to perform multiple concurrent reads
while still allowing us to lock write access.

### 4.1 Protecting Critical Sections With Mutexes

A **mutex** can be used to ensure that only one goroutine is executing a critical section of code at a time.
Think of it as physical locks that block certain parts of our code from more than one goroutine at a time.

If only one goroutine is accessing a critical section at a time, then we can ensure there will not be any race conditions.

#### 4.1.1 How Do We Use Mutexes?

When a goroutine comes to a critical section of our code protected by a mutex, it must first lock the mutex
explicitly as an instruction of the program. When the goroutine is done with the critical section, then it must unlock the mutex.

Mutex is short for **mutual exclusion**, and is a form of **binary semaphore**. A binary semaphore is a semaphore that can only have two states: locked and unlocked.

A mutex allows only one execution, such as a goroutine or a kernel-level thread to enter a critical section of our code.
The semantics of a mutex guarantees that only one execution will acquire access to the critical section at a time.
The other executions will have to wait until the mutex is unlocked.

In go, mutex functionality is provided by the `sync` package under the `sync.Mutex` type.
This gives us the `Lock()` and `Unlock()` methods to lock and unlock the mutex.
When we create a new mutex, it is in an unlocked state.
It's always good practice to protect shared resources with a mutex, even if we think we don't need it.
The compiler's organization can cause the executions to go out of order, so it is always
a good idea to protect shared resources with a mutex.

Mutexes need help from OS and hardware to work. Mutexes rely on hardware to provide atomic tests and set operations.
With this operation, an execution can check the memory address, and if the value is what was expected,
it updates the memory to a locked flag value.

It is said to be **atomic** because the operation is indivisible, meaning it cannot be interrupted.

#### 4.1.2 Mutex and Sequential Processing

According to Amdahl's Law, the sequential-to-parallel ratio will limit the performance scalability of our code,
so it's essential that we reduce the time spent holding a mutex lock.

Locking the mutex too many times turns a concurrent program into a sequential one.

When we decide where to use mutexes, it's best to focus on which resources to protect,
and discover where critical sections in our code begin and end. We need to think about how to 
minimize the number of `Locks()` and `Unlocks()` calls.

Maximize the scalability of our code by using the locks only on code that runs fast in proportion to the rest.

#### 4.1.3 Non-Blocking Mutex Locks

A **blocking function** is when the execution of the goroutine stops until `Unlock()` is called by another goroutine.

In some apps, we might not want to block the goroutine, but instead, perform some other work
while waiting for the mutex to be unlocked.

It doesn't make much sense to have a goroutine do something else if the mutex is not available,
since in Go it’s easier to just spawn another goroutine to do the work while we’re waiting for the lock to be released.

Golang provides us with a non-blocking mutex lock, called `TryLock()`. When we call this, we can expect 2 things:

- The lock is available, and we acquire it, returning `true`
- The lock is not available and used by another goroutine, so we don't acquire it, returning `false`

From Go’s mutex documentation (pkg.go.dev/sync#Mutex.TryLock):

NOTE: that while correct uses of TryLock do exist, they are rare, and use of TryLock
is often a sign of a deeper problem in a particular use of mutexes.

### 4.2 Improving Performance with Reader-Writer Mutexes

**Reader-Writer mutexes** gives us a variation on standard mutexes that only block concurrency
when we need to update a shared resource. Using reader-writer mutexes, we can improve a read-heavy app's performance.

When we need to update the shared resource, the goroutine executing the write critical section requests the write lock to acquire exclusive access.

Go comes with its own implementation of a readers–writer lock, called `sync.RWMutex`.

#### 4.2.2 Building Our Own Read-Preferred Readers-Writer Mutex

**Read-preferring** means that if we have a consistent number of readers’ goroutines hogging the
read part of the mutex, a writer goroutine would be unable to acquire the mutex.
In technical terms, we say that the reader goroutines are starving the writer ones.

## 5 Conditional Variables And Semaphores

Mutexes are not the only synchronization tool that we have available: 
condition variables give us extra controls that complement exclusive locking.

Conditional variables give us the ability to wait for a certain condition to occur before unblocking the execution.

**Semaphores** go one step further than mutexes in that they allow us to control how
many concurrent goroutines can execute a certain section at the same time.

In addition, **semaphores** can be used to store a signal (of an occurring event) for later
access by an execution.

Apart from being useful in our concurrent applications, condition variables and
semaphores are additional primitive building blocks that we can use to build more
complex tools and abstractions.


