# Pull Request Details

How to write better pull requests for teams to have a historical data of what, why and how something was implemented into the main branch.

Pull request aka merge request, used interchangeably, and abbreviated as PR in the content below.

At the end of the day, PRs need to prove they are ready to be merged into the main branch/trunk.

Keep it simple, stupid (KISS). You are communicating w/a human being, so short and sweet is where the spot is.

## The What

Explain at a high-level the changes you've made. Let the reviewer know the overall effect of the PR. Don't just reference the ticket number/link/url, but if you have it, feel free to add it at the end of the explanation as "...For more details see ticket #123.".

## The Why

The “why” tells us what business or engineering goal this change achieves. Explain the engineering goal, but also some business objective.

## The How

Draw attention to the significant design decisions.

## PR template

```md
## What?

EXAMPLE. I've added support for authentication to implement Key Result 2 of OKR1. It includes
model, table, controller and test. For more background, see ticket #JIRA-123.

## Why?

EXAMPLE. These changes complete the user login and account creation experience. See #JIRA-123 for more information.

## How?

EXAMPLE. This includes a migration, model and controller for user authentication. I'm using Devise to do the heavy lifting. I ran Devise migrations, and those are included here.

## Testing?

If testing, include expectations and edge cases.

EXAMPLE. I've added coverage for testing all new methods. I used Faker for a few random user emails and names.

## Screenshots (optional)

Screenshots are especially helpful for UI-related changes.

For infrastructure code, you could create a UML diagram to add as a "screenshot" to illustrate the architecture proposed in the solution.

## Anything else?

You may want to delve into possible architecture changes or technical debt here. Call out challenges, optimizations, etc.

EXAMPLE. Let's consider using a 3rd party authentication provider for this, to offload MFA and other considerations as they arise and the privacy landscape evolves. AWS Cognito is a good option, so is Firebase. I'm happy to start researching this path.
Let's also consider breaking this out into its own service. We can then re-use it or share the accounts with other apps in the future.
```

Ref: [Pullrequest.com - writing a great PR description](https://www.pullrequest.com/blog/writing-a-great-pull-request-description/)
