# Improve on Software Engineering

## From 50 Tips Improving Your Software Development Game

### Domain, Architecture and Design

You need to know how things work in the front end (UI), the back end, the data store, the OS, any virtualization layers, the hardware, the network, and the data center.

Don't be a one-trick pony.

### Languages and Tools - From Noob to Intermediate

Read more code!

Go to meetups and grow your developer network to expand your experiences from interactions with them.

Don't be scared. Embrace the uncertainty of not knowing, because once you start, you will begin knowing.

Focus on programming techniques, problem solving and analytical skills, this will go along way more than knowing many languages.

Ask before you invent.

“[When reading high-quality code], it might be tempting to look for main() and start from there, but you're likely to spend a lot of time just reading set-up code and command-line parsing. I prefer to scan the filenames to look for some activity that interests me and then dig into those files. It's not crucial to understand the whole project or the ins and outs of the entire design, you'll wear yourself out doing this. Read the code. Look at the comments, see what the authors are doing, and how they went about it.” (Source)
—Andrew Binstock

Develop an aesthetic appreciation for code. Over time, you need to train yourself to know what great code looks like and what bad code “smells” like.

### Code Readibility & Maintainability

Don't ask permission to refactor. It's your job.

Fix what isn't broken. Optimize it.

Delete orphaned code.

Deep-nested code is harder to maintain, harder to reuse, and more likely to create bugs.

Write clear and effective comments as to self-document the code you write.

### Technical Debt, Code Coverage & Process

Know when to take on technical debt, and when to spend more time to clean up or optimize a solution.

QA and testing is required, the key is to maintain the right balance without slowing down deployments.

Ship often, fix less. Have better organizational practices, DevOps.

Think about security during any process you take throughout your code.

### Soft Skills & Productivity

Focus on coding without interreptuions. Deep work.

Communicate your problem solving process to your immediate team, not to prove that you're doing work, but that you could engage them and potentially learn a new perspective on your problem.

Share a wiki with your team.

Don't hide your lack of knowledge, it will only slow you down from getting shit done.

Don't be afraid to share your unfinished work with others.

Emotionally detach yourself from your code, it is not a baby to grow. It is a machine to polish.

Fail quick. Fail often. Win more.

Reference:

[techbeacon.com/app-dev-testing/50-tips-improving-your-software-development-game](https://techbeacon.com/app-dev-testing/50-tips-improving-your-software-development-game)

## From How To Become A Better Software Developer

1. Read more books
2. Watch recorded conference talks
3. Get your code reviewed
4. Keep a journal
    - Daily work log
    - Things I learned today log
5. Read the source code of **gold standard** projects
6. Listen to podcasts
7. Work on side projects
8. Immerse yourself
9. Read postmortems
10. Learn a new language
11. Start a *software craftmanship guild* at work
12. Find a mentor

Reference: [DBader.org/blog/how-to-become-a-better-software-developer](https://dbader.org/blog/how-to-become-a-better-software-developer)

## A Guide To Naming Variables

- Naming tenets:
  - Our job as a coder is to communicate to human readers, not computers
  - Don't make readers think more than they have to
  - Code reviews are essential but mentally taxing, **be considerate of reviewers mental energy and drain**
  - `names > comments` but can't replace comments

Software is written for people to understand.

Choosing good variable names improves code maintenance.

Do not use meaningless, auto-generated names.

Abbreviation isn't always bad.

- Give meaningful names:
  - The tru purpose of var names is to understand the code:
    - What was the coder's intent?
    - What does the code actually do?

When reading or reviewing code, there are 2 taxes on audience's mental endurance:

- **Distance** - refers to how far away reader/reviewer has to scan, visually, to remind themselves what a variable does
  - Readers/reviewers lack the context that coders had in mind when they wrote their code
  - Good variable names eliminate the problem of distance bc they remind the reviewer of their purpose, so to not scan back to an earlier part of the code
- **Boilerplate** - save time with boilerplate characters that are obvious, such as `n` for an integer that is going to be processed by a method/function
  - Every useless character drains the effectiveness of code reviewing
  - Code reviewers can figure out what almost any code does, given enough time and energy, but they can't afford to do that over and over again, it's a painful, slowly death

### Good examples

#### Short Code Review

```java
int printFirstNPositive(int n, Collection<Integer> c)
{
  int skipped = 0;
  for (int i = 0; i < c.size() && i < n; i++) {
    int maybePositive = c.get(i);
    if (maybePositive > 0) {
      System.out.println(maybePositive + " ");
    } else {
      skipped++;
    }
  }
  System.out.println("\n");
  return skipped;
}
```

- For functions/methods, make the intended action clear as crystal, such as `printFirstNPositive`
- `n` is obvious given the function name, no need to complicate it
- `c` is another obvious variable, and since there's only one collection, there's no reason to add mental tax to the reader by using this boilerplate character
- `skipped` self-documents (w/out a comment) what the return value is supposed to be
- `i` is a classic boilerplate character for `for` loops, don't re-invent the wheel, followed by `j`, `k` and so on
  - `maybePositive` is hard to misunderstand and may help spot a bug

#### Naming Cookbook

| Bad Name(s) | Good Name(s) |
| ----------- | ----------- |
| hostList, hostSet | host, validHosts |
| Paragraph | Text |
| hostInputStream | rawHostData |
| hostStr, hostString | hostText, hostJson, hostKey |
| valueStr, valueString | firstName, lowercasedSKU |
| intPort | portNumber, portN |

Other cookbook tips:

- Favor plural variable names VS including name of a collection type
- If you're tempted to add a scalar type (int, String, Char) into variable name, you should consider trying to:
  - Explain better what the variable is
  - Explain any transformation to the derived new variable (i.e. `lowercasedSKU`)
- Be specific as possible w/out being incorrect
  - For example, method to check for CPU overload
    - Good name: `overloadedCPUFinder`, specific
    - Bad name: `unhealthyHostFinder`, generic
      - Not saying to never use generic names, since when something truly generic **should** have a generic name
- Move simple comments into variable names, such as:

```java
// BAD
String name; // First and last name
// GOOD
String fullName;

// BAD
int port; // TCP port number
// GOOD
int tcpPort;

// BAD
// This is derived from the JSON header
String authCode;
// GOOD
String jsonHeaderAuthCode;
```

- Avoid over-used cliches:
  - `val`, `value`
  - `result`, `res`, `retval`
  - `tmp`, `temp`
  - `count`
  - `str`
- Use idioms where meaning is obvious
  - Use of `i`, `j`, and `k` in `for` loops
  - Use of `n` for a limit/quantity when it's obvious
  - Use of `e` for an Error or Exception in a catch clause
- May use short names over short distances when obvious
  - Long names might trigger an "important" flag for the reader, so keep it short if it's a quick name for something
  - Use these pointers to use short names:
    - The distance isn't greater than 5 lines, so declaration of var name is within reader's field of vision
    - There isn't a better name than its type
    - It's not useful to keep in the reader's mental list of things
      - Research has shown that readers can keep about 7 things in memory recall
- Remove thoughtless one-time variable (OTV), AKA *garbage variables* used passively for intermediate results between functions
  - Use short OTVs to break long lines
  - Use short OTVs to break up complicated expressions
  - Use longer OTVs to explain confusing code

Reference:[A-nickels-worth.dev/papers/varnaming](https://a-nickels-worth.dev/papers/varnaming/)
