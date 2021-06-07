# Front-End Notes

## Front-End Handbook by Cody Lindley

[Front-End handbook 2019](https://frontendmasters.com/books/front-end-handbook/2019/)

Types of browsers:
Headless browser is a web browser without a GUI
Useful to test web pages
Used for web automation
Functional testing, scraping, unit testing, etc.
Command line interface (CLI)
Most common are:
PhantomJS
SlimerJS
TrifleJS
WebView is a mobile browser that allows different OS to deliver web content using hybrid mobile technology. This will create code for different native languages using the device’s API
Used natively in OS, in native app, to run web pages
Most common are:
NW.JS (Node-Webkit best for desktop apps)
Electron (best for desktop apps)
No Web Engine apps are truly native apps
Most common are:
NativeScript
ReactNative

Document Object Model (DOM)
DOM is a cross-platform language independent convention for representing and interacting with objects in XML, HTML & XHTML
Nodes of each document are organized in a DOM tree
Objects on the DOM tree can be manipulated and addressed by using methods on the objects
Public interface is in its API
DOM allows registration of event handlers

## Great Sites Common Attributes

1) Have a clear value proposition
    - What is your purpose?
    - The website's purpose needs to be CLEAR and STRAIGHT-FORWARD to the user

2) Easy navigation
    - Clear website hierarchy

3) UX

4) Innovate in one area
    - Break the rules about content story-telling

5) Loading times
    - How long does the user have to wait for your site to load?

6) Responsive

7) Avoid elaborate transitions
    - Takes too long to load

8) Target audience
    - Who is your website intended for?

9) Engage instantly

10) New Technologies
    - See numero 4

11) Humor
    - Why so serious?

12) Dare to be original

https://medium.com/@lassekristensen_95506/how-to-design-award-winning-websites-6f4d2a71495

## Random notes from Google Doc

UI notes (top)
How to fix a bad user interface by Scott Hurff
http://scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack
Creating interfaces that are easily understood by humans puts us product designer right up against the sad fact that computers are lazy. They don’t care about helping people understand what’s new, what to do next, or how to react when something goes wrong
We think in flows, and we’re used to the physical world...Awkward UI is when a product designer doesn’t take this into account


A good designer will always consider these states above for every screen he/she makes
Following the rules of the UI stack helps you create a cohesive interface that’s forgiving, helpful, and human
Ideal state
What people will see
This will serve as foundation for every other state you’ll create for this screen
Think of this as the quintessential marketing page
Empty state
Provide your customer an incredible first impression as you introduce them to your product
First-time use / onboarding
This state is your one shot to describe what your customer will see when data exists
Compare this to the “Hero’s Journey” introduced by Joseph Campbell in “Hero with a Thousand Faces”
Propel your customer from the empty state down to the hero’s journey
Call them to adventure
Take them through known challenges and the temptations of the abyss
Transform them into more powerful individuals
Be encouraging and uplifting in copywriting
Use your product’s content to instruct your customer about what to do
Offer an example screenshot of what the screen will look in the ideal state
Monitor your customers’ progress and respond accordingly
If they pause too long on a certain screen, you could message them with a live chat asking if they need help
User-cleared data
The second type of the empty state is the case where the user has removed data from the screen
These types of empty states are great opportunities to reward your customers or to spur further action
A customer clearing data is a customer who’s engaged with your product


No results
These scenarios are amazing opportunities to infer what your customer intended to find and to make intelligent suggestions
Example, Amazon’s search rarely gives you an empty result
Give your users something they might be able to work with or suggest an alternate path. Make it easy for them
Error state
When things go wrong
These can include anything from form data that’s missing or invalid; an inability for your app to connect to the server, etc.
Error states should also be comforting in the sense that your product keeps all user input safe
“The system should treat all user input as sacred and - to paraphrase Asimov’s first law of robotics, ‘A robot shall not harm a human, or, through inaction, allow a human to come to harm.’
Contextual error message
Bonus: we get a little sense of humor to humanize it
Error states shouldn’t be dramatic, nor should they be vague
Simple: make error messages human, not technical, and suited to your audience
Partial state
Page is no longer empty but sparsely populated
Your job here is to prevent people from getting discouraged and giving up on your product
Guide your users to the full glory of the ideal state
Keep them hooked
The trick is to make the user not realize they’re performing what could be perceived as tedium in order to extract the maximum value of your product
Make them enter the “acceleration” phase to level up

Loading state
You must take great care to be mindful of how you represent situations where you’re fetching data
Spinners and whitespace encourages your customers to figuratively watch the clock - putting the focus on the indication of progress VS actual loading progress being made
Skeleton screens
It places the focus on the content as it loads versus the fact that the content is loading
This is accomplished by displaying the basic structure of the page and gradually filling in the missing pieces as they download


By assuming an action’s success, actions appear to take place much faster
AJAX requests
That’s the power of the UI stack
These states don’t exist in vacuums
They exist on a vertical axis that can be called at any time by the product
It’s your job not only to account for each of these states, but to dictate how the screen moves between each state
Without these transitionary elements, we risk confusing or surprising our customers as new states appear and disappear


Mobile first, content first, and objects first

Mobile first simply means forced prioritization
Think about layout later
Start w/a single column 'design' (also known as a list)
Content first means that you have to know what you're saying before you can prioritize it
Evergreen content means that the content will always be relevant like encyclopedias and how-to's, etc
Instantiated objects are news articles, products, campaigns, donations, etc., there is no way to think about priority or a copy deck like you would with Evergreen content
THINK IN OBJECTS
OOUX is powerful
HISTORY: in the 80s, it began w/procedural languages to object-oriented languages
Benefits of object-oriented languages are:
Code re-use
Data encapsulation
Easier software maintenance
Examples of object-oriented language are:
Java
Ruby
Python
C++


C#
Problem Domain: How does an engineer think when it comes to wireframes and protypes?
How will object X talk to object Y?
Will object A be made up of lots of objects B?
Which attributes will each object have?
Will this class of objects inherit from that class of objects?
Basing both front-end and back-end design on object-oriented principles brings coherence to the software development process
Object orientation reveals deep structural correspondences
Besides team cohesion, object-oriented design can help you in the following areas:
User's mental model match with ours by improving their experience


Ensure simplicity; reduce redundancy
Easy to maintain as objects can be modified without affecting the rest of the system and new objects can be gracefully folded in (as opposed to tacking on new features to the system)


Easy APIs w/portable, independent objects
EXTRA: SEO brownie points from structured content and valuable cross-linking between objects
When a user visits a site for the first time, they often gravitate to the big shiny objects
Use navigation and search bar as backup plans
USER EXPERIENCE: anticipate where the user might want to go next
EXAMPLE: if a user is reading a recipe, how would the user go about to baking cookies?
Always show related articles or posts or anything related!!!


Give them options to pivot the related articles, that would be COOL
In the object-oriented design below, a user can continually explore instances of these three objects:
Ingredient
Recipe
Chef


They would explore all the content without ever hitting a dead end! Interconnectedness!

The content creator is also a primary user
Content modeling gives you systematic knowledge; it allows you to see what types of content you have, which elements they include, and how they operate in a standardized way
Object Mapping
Object mapping is content modeling for designers who do not deal with content in the traditional sense, but still need to design systems, and not just systems of implementation


While a tight collection of reusable templates and modules is invaluable, those design patterns don't hold meaning for a user unless they're tied by a system of real-world objects that matches the user's mental model
Focus first on the design of the system with real-world objects


Then, design a system of implementation to bring it to life
This transforms goals into an executable system that meets those goals
STEP 1: EXTRACT OBJECTS FROM GOALS
It provides a perfect bridge from goals to design
Move from strategy to design
Give your wild creativity a solid foothold
EXAMPLE: an app to help home improvement brands connect to DIYers
DIYers get expert solutions to their challenges and brands get exposure

To extract the objects, we basically highlight the nouns
Pay special attention to nouns that keep popping up (challenge and solution above)
Ignore fancy words that describe standard things like library and a map that is the design mechanism instead of an object itself
Always have a comment object

STEP 2: DEFINE CORE CONTENT OF OBJECTS
Content modeling requires you to simultaneously understand your goals at the highest level and get intimate with your content's most minute attributes
At this step, we will separate two types of elements
http://alistapart.com/article/object-oriented-ux

## UI Design Baseline Grids


Design Snack #7: Baseline grids in web / UI design
by Andy Orsow
on June 4, 2015
View all posts
In this Design Snack, I'll give you an overview of what baseline grids are, how to use them, and why they're so good at tightening up your designs.
What is a baseline grid?
A baseline grid is an underlying structure that helps guide the vertical spacing of your design. It’s an excellent typographic tool, but also comes in handy when laying out other elements on the page. Just like using columns as guides in your design, the baseline grid is a way to help you make decisions and build consistency into your layout.
Setting up your grid

In Photoshop, go to View > New Guide Layout… to create your grid. Select Rows, and set your Height to a small number, like 6 or 8. Using smaller units gives you more guides on the page, which help you understand if and when things are aligning to your grid. Increase the Number of rows up until they fill the page, then click OK. After that, you’ll want to lock your guides to avoid dragging them around on accident, so go to View > Lock Guides.
Aligning type
Let’s say for example that your grid height is set to 8 pixels. In that case you could set the leading of your type to any multiple of 4 (or 2, for that matter), and it will align perfectly to the grid.
The benefit of rows
The nice thing about having rows as a guides, is that they give you an easy way to tell if your spacing is right. Just turn on your guides and you can quickly check if your eyes are playing tricks on you, or if something on the page really is missing an extra row of space.
Of course, these rows translate to pixels, so it’s easy to come up with mental models and standards based off your grid once you’re used to working with it.
Final thoughts
Screen sizes, expectations, and interactions are constantly evolving, but there are two things that remain constant: Text on screens and scrolling. Baseline grids help make both of these things more aesthetically pleasing, and might get you thinking a little harder about the value of vertical rhythm.
Want to pick it apart? Download the [example file](https://www.dropbox.com/s/o01hfn5amfbxjgl/example-baseline.psd.zip?dl=0).

## UI Notes

Website layout examples
https://www.nasa.gov/
https://www.cooperhewitt.org/
http://www.tomzen.net/#
https://www.vevo.com/
https://thespaces.com/

Think about the product/services first
Landing section


Have the trading bots and backtesting coming soon announcement
Arrow or button to “Learn More”

## UX Design the behavioral revolution

Instead of having employees check a box to enroll in a savings plan, have them check a box to NOT enroll. This small material difference is a large psychological one. (page 1)
Behavioral economics helps us realize that people do not behave as we think they do. The assumptions we make - sometimes without realizing - when we design programs do not match actual psychology. (page 2)
Figure 1 (page 3)
Define (defined problem) / Diagnose (actionable bottlenecks) / Design (scalable intervention) / Test

WE LACK SELF CONTROL
It is not merely about marketing or better tools of persuasion (sometimes it’s that too). It is a deeper perspective on what makes people behave. (page 6)
Sometimes we can change behavior without ever changing people’s minds. (page 9)
Make it easy for the user.

THE OTHER LIMITED RESOURCES
Procrastination and self-control are just some potential psychological phenomena. What about others? How do we diagnose more systematically? (page 7)
Without realizing, we often design programs assuming that people have unbounded cognitive capacity. We assume that they can think through complex problems effortlessly and quickly arrive at the “correct” choice.

SCARCITY OF SELF-CONTROL
They [focus on improving skills] diagnose low productivity as a capacity issue: “people are not capable of working more effectively.” (page 7)
These [focus on incentives] diagnose low productivity as one of motivation: “people have no interest in working harder.” (page 7)
It takes self-control to identify, plan and execute all the tasks that need to be done, all the while resisting the many temptations and distractions that surround us. (page 8)
We now know that it makes sense to think of “self-control” as a psychic commodity of which we have a limited stock, so that using some up for one task depletes the amount available for other tasks. (page 8)

SCARCITY OF ATTENTION
It requires a user to be especially attentive to some particular feature or aspects of the technology. If he doesn’t pay attention to the right things, a person is unlikely to become adept at using the new technology. (page 9)
Whenever possible, we use fast, intuitive thinking or rough rules of thumb. (page 12)
Providing more options can actually make it less likely that any of them is chosen. Choice simplification can be remarkably powerful.

SCARCITY OF UNDERSTANDING
Behavioral economists argue that this understanding, too, is scarce; not all underlying causal relationships are correctly or accurately understood.
Any effective solution will have to tackle the flawed mental model at its root: without doing so, information or exhortation is unlikely to have much effect. (page 14)

BEHAVIORAL DESIGN
The first step to finding a solution is identifying the root of the problem.
We instead need a systematic approach to identifying candidate bottlenecks. This process, which we call “behavioral mapping”, reveals “behavioral stress points”, each of which is a possible intervention.
Behavioral mapping is thus a process that generates questions; these then lead to surveys - qualitative and quantitative.
Behavioral design principles: (page 16)
PRINCIPLE 1: Facilitate self-control by employing commitment devices
PRINCIPLE 2: Reduce the need for self-control
PRINCIPLE 3: Remove snags to choosing
Behavioral economists have found that people frequently passively accept whatever happens if they do nothing. This means that the “default option” is disproportionately important.
PRINCIPLE 4: Use micro-incentives
PRINCIPLE 5: Reduce inattention: Reminders and implementation intentions
Timely reminders can be used to tackle other situations where people forgo significant benefits because they don’t do something at the right time. (page 24)
PRINCIPLE 6: Maximize the impact of messaging: framing effects, social comparisons, norms
People are much more responsive to being informed of what they lose by not doing something than they are to being told how much it benefits them. (page 24)
Comparing a person to his peers, neighbors, friends, etc. is an extremely effective way to change behavior. (page 24)
Most individuals make efforts to conform to what they perceive the social norm to be.
Messaging about social norms can change people’s perceptions about what is normal and thus change behavior.
Drawing attention to this could help reduce these gaps further. (page 25)
PRINCIPLE 7: Frame messages to match mental models
Information or evidence that directly targets the beliefs at the core of the flawed mental model has a better chance of success. (page 25)


CONCLUSION
Embedding innovation into the design process itself leads to designs that have a greater chance of success than if we proceeded to testing the first feasible and reasonable set of ideas about how to solve a problem. (page 28)

## UX Notes

Buchanan’s Orders of Design
I believe secrets about human behavior, which provide insights into the way people act even though they can’t tell you why, are levers for creating user habits and competitive advantage.

A new crop of companies like AirBnB, DropBox, and Square exploits secrets gleaned not from industrial design, but from interaction and systems design. These companies remedy old problems by designing online interfaces to create new user behaviors.

Changes in interface suddenly make all sorts of behaviors easier. Subsequently, when the effort required to accomplish an action decreases, usage tends to explode.

With both Pinterest and Instagram, tiny teams generated huge value, not by cracking hard technical challenges, but by solving interaction problems.

The kind of secrets that build big businesses today must support a plan to build a network effect business.

What UX Roles You Need and Why
https://www.uxmatters.com/mt/archives/2015/12/what-ux-roles-you-need-and-why.php
By Christian Rohrer, VP of Design, Research, and Enterprise Services at Capital One

Basic UX roles that most teams need when designing and developing applications.
Typical Design Roles
Visual Design Role
The first thing most stakeholders think of when they think about UX
An application’s visual design is the first thing users notice, so providing a design that has aesthetic appeal and high quality is critical to the legitimacy of a visual design solution
Interaction Design Role
Commonly the lead UX professional on a given project, simply because the role needs to be involved in the project throughout the development lifecycle
The work of all UX roles seems to hinge on the work of the interaction designer
User Researcher Role
Direct research methods to find what their users need and understanding how to deliver it well
Content Strategist Role
Words in a user interface are among the first elements with which users interact
Words lead users to make a subsconscious judgment about the product’s quality and relevance
When content is not professionally controlled or at least guided, the result can be a patchwork of compromises and inconsistencies
To solve this, UX teams rely on providing clear content guidelines and training
Front End Developer Role
Directly influence the interaction designers and visual designers’ decisions by helping them to make design choices that are more feasible
Assist in constructing a testable prototype for user research or in producing a demo for stakeholders
Business and System Analyst Role
Technical professionals who deeply understand and can document the capabilities of the underlying systems a UX team is designing
Important to UX team because:
Complexity of technical platforms and business rules is often so high that is unreasonable to expect the UX lead to keep all of this in mind, while simultaneously being acutely aware of the various user types, their differing needs, and product requirements
Help define and clearly document complex business rules and provide design specifications to ensure that development understand and builds the intended design
This role is especially important when developers are not local and are using agile methods
Essential Soft Skills for UX Team Roles
Collaboration
UX teams have team members with very different backgrounds, training, and ways of thinking, so collaborating effectively is critical
Collaboration is essential when launching a product on time
Communication
Quality Consciousness
Someone who holds everyone to the highest standards of which they’re capable
Operational Excellence
Necessary to ensure that a team runs on time and with efficiency
Innovation
Create new and better experiences that no one has conceived of before
The Eight Principles of Purpose-Driven Design
By Greg Podunovich from ExpandTheRoom in NYC
https://medium.com/expand-the-room/the-eight-principles-of-purpose-driven-design-e7d05111701b
Why Every Designer Needs A Code
The ability to articulate how we’re going to turn a potential client’s great idea into a functional, valuable product or service is every bit as critical as wowing them with a Keynote deck full of hot-looking designs.

Don’t fixate on design deliverables that might not be right for a given project just because your process mandates it. Instead, focus on the desired outcome of a given design phase and use the best tools in your arsenal to get there.

Designers differentiate themselves through their principles more than their process. Here is an example of a Purpose Driven Design from ExpandTheRoom.

The Eight Principles
Real Value is Discovered
Getting beyond what a client has stated as their problem and unearthing a hidden root-cause is one of the high points for any designer
Gaining a deep understanding of their business, customers, competitors, goals and aspirations
The idea of creating a Project Manifesto can articulate who the client is, who they serve, where they’ve been and where they’re going
When you can create a Project Manifesto that a client agrees accurately captures them and their business, you will surely have what you need to deliver real value to a project
Usefulness Depends on Empathy
People care more about their problems than their solutions
Design decisions must be rooted in solving real problems suffered by actual users, or they’re not useful
This serves as a gut-check and forces us to ask whether or not our design solutions are genuinely in the service of what we know about end users and stakeholders
Collaboration Requires Learning
Learn from other people
Able to navigate new and increasingly complex design challenges collectively and honestly
The Road to Obvious is Rigor
Achieving true simplicity is a lot like solving a riddle – the answer is obvious ONLY after you’ve worked it out
No shortcut to simplicity in design
You Can’t Guess Your Way to Credibility
Unverified facts are just opinions
Facts, not opinions, are the foundation of credible designs
Verify or refute any assumptions in all processes
Design for Context, Not Device
Considering the full context around an experience, can be key to remaining flexible for whatever the future brings
Innovation = Aspiration / Feasibility
Can’t innovate on what you can’t realistically build
Temper our aspirations with reality
Feasibility has to do with collaborating early w/developers to gain alignment and find efficiencies, allowing us to focus on the most potent opportunities for innovation
Keep It Human, Stupid
Human emotion must be woven into what we design from the very start
Making users feel known and understood at every touchpoint along an interaction that matters to them is critical
Building Helpful User Experiences
By Wade Meredith
https://medium.com/expand-the-room/the-eight-principles-of-purpose-driven-design-e7d05111701b

As designers and engineers seeking to empower people through technology, we must build robust systems that enable them to understand and utilize that technology.


Expanding circles of support – the level of support as well as the cost and complexity increases as we approach the edge of a proposed software support ecosystem.

A System of Support
User experience many stages of considering, acquiring, questioning and understanding a product.

A robust support system should be able to speak to both of these user types and everything in between in a helpful manner.

Consideration should be paid to how e/type of help relates to the other in the critical task of supporting users as they accomplish their goals. The design of the system in a holistic manner, consistency of language and interaction design, and ease of movement between layers are what will make it a valuable part of our product, rather than a confusing mish mash of project artifacts.

Graphic User Interface
First level of help offered to the user in understanding how to access and utilize the functionality our software provides.

A GUI is a collection of affordances or helpful environmental cues that reveal to the user how their surroundings may be manipulated.

Space and contrast should be effectively utilized to communicate hierarchy and order of function.

Color and motion can be used to enhance this hierarchy (but require a disciplined hand to keep from distracting users).

Layouts should guide the eye, and interactive elements like links and buttons should be inviting and responsive.

Direct communication is accomplished in the GUI using signifiers such as written copy and iconography.

Elements should be labeled appropriately for our target market.

Language and tone should be consistent throughout.

Copy should strike a balance between verbosity and terseness.
Copy editing for typos and grammatical errors should be made a priority

Balance is important, so an interface that explains everything all the time will be cluttered and annoying.

Embedded Help
Usually a short intro set of images, GIFs, or video walkthroughs for first time users of the application.

GUI augmentation such as an overlay with helpful notes or tooltips. These are often hidden but can be triggered automatically when a user first encounters an interface or perhaps on demand if they turn on a “help mode”.

Documentation
The problem w/docs is now we’re definitely moving to the outside of our circle of support graphic. Things are getting harder and more expensive. Challenges to helpful docs are rife and well known:
It needs to be written by someone who understands the software
It needs to be written by someone who understands the market
Documentation needs to be written in a manner that is engaging, but technically accurate and helpful but not patronizing

Great docs can be beneficial in many different ways, so we can reap our investment over and over:
Link to our help docs from within the app
Deep links directly to the most helpful topics where contextually appropriate

Docs should be written with eye toward training and user onboarding. Good software docs can also be the star of content marketing campaigns and sales pitches.

Help Desk
This requires hiring, training, staff, facilities, communication logistics, and more.

Where are the entry points into this tier of support?
One entry point could be on error pages within the software
Another help desk promotion point could be on the home page of the marketing website
Perhaps help desk is a competitive advantage and we want users to be able to jump straight into it whenever possible
Things Left Unsaid (Quite a Bit)
Chat bots, chat humans, webinars, service status pages, social media channels, and more.

Final Word
Dropping something on the user without introduction or explanation for a variety of understandings is a recipe for disaster or worse: a recipe for nothing at all.

Most users that cannot figure out software will not tell you, they just won’t use it.
