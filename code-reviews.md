# Code Reviews

## The Checklist

1. Readability / Understandability

* Code is easy to understand
  * Easily see inputs
  * Easily see outputs
* Understand roles of:
  * Functions
  * Methods
  * Classes
* Smaller code blocks for methods or functions
* Naming convention for:
  * Variables
  * Functions
  * Methods
  * Classes

2. Maintainability

* Easily extendable and changeable
* No hard-coded configuration
* Updated versions for all libraries

3. Security

* No out-of-date libraries
* No known libraries' security issues
* Unexploitable code
* DDoS security test

4. Speed and Performance

* Performance for users
  * No lengthy DB queries
  * No unoptimized assets
  * Avoid multiple API requests

* Resource consumption
  * Cloud servers up to par
  * Run verbose logs
  * Load stress test

5. Documentation

* Adequate README.md

6. Reliability

* 404 error page
* Failed API requests with 500 error page
* DB records not found message
* User authentication error messages
  * Wrong password
  * User does not exist

7. Scalability

* Load stress test II
* Load balance test

8. Reusability

* KISS - Keep it simple, stupid
* YAGNI - you aren't gonna need it
* DRY - don't repeat yourself

9. Patterns

* Codebase adheres to the dedicated style-guide or pattern

10. Test Coverage and Test Quality

* Same requirements for production code should also apply to tests
* Are the edge cases accounted for in the tests?
* Are the error handling functions in place?
  * Submitting random text input
  * Clicking a button more than once, 2x, 3x...
  * Browser compatibility
* Mobile responsiveness test

1.  Fit for Purpose

* Does it serve the intended purpose?
* Does the solution pass the quality assurance process?

12. Source Control

* Pull Requests (PR) shouldn't be too large that it becomes an anti-pattern
  * Feature toggles or feature flags
  
Reference: [Codementor - Code Review Checklist](https://www.codementor.io/blog/code-review-checklist-76q7ovkaqj)

[Back home](./README.md)
