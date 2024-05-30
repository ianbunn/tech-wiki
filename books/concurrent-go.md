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
