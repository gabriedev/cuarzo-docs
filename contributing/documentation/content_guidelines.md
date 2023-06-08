# Content Guidelines

This document outlines what should be included in the official documentation. Below, you will find a couple of principles and recommendations for writing accessible content.

We aim to achieve two goals:

1. Provide a comprehensive reference for Cuarzo Engine.
2. Offer a learning guide for users who are new to Cuarzo.

## Guidelines and Principles

The following are the guidelines we should strive to follow. However, they are not strict rules, as there may be cases where a topic requires breaking one or more of these guidelines. Nonetheless, we should aim to achieve the two goals mentioned above.

### Writing Comprehensive and Accessible Documentation

A feature does not exist unless it is documented. If a user cannot find information about a feature and how it works, it doesn't exist for them. We must ensure to cover everything that Cuarzo Engine offers.

**Note**

When adding or updating a feature in the engine, the documentation team should be informed. Contributors should open an issue in the cuarzo-docs repository when their work is merged and requires documentation.

Make an effort to keep the documents under **1000 words**. If a page exceeds that threshold, consider splitting it into two parts. Limiting the page size forces us to write concisely and break down large documents so that each page focuses on a particular problem.

Each page or section of a page should clearly indicate what **problem** it addresses and what it will teach the user. Users need to know if they are reading the right guide to solve the issues they are encountering. For example, instead of writing the heading "Signals," consider writing "Reacting to Changes with Signals." The second title clarifies the purpose of signals.

**Note**

Long section headings result in long entries in the sidebar, which can make navigation difficult. Try to keep headers to five words or less.

If a page assumes specific knowledge of other Cuarzo features, mention it and link to the corresponding documentation. For example, a page about physics may use signals, in which case it could mention that the signals tutorial is a prerequisite. You can also link to other websites for prerequisites beyond the scope of the documentation. For example, you could link to an introduction to programming in the getting started guide, or a website that teaches mathematical theory in the mathematics section.

### Limiting Cognitive Load

Limit the cognitive load required to read the documentation. The simpler and more explicit the language we use, the more efficient it becomes for people to learn. You can achieve this by:

1. Introducing only one new concept at a time whenever possible.
2. Using plain English.
3. Including one or more **concrete usage examples**. Prefer a real-world example over one that uses placeholders like **foo**, **bar**, or **baz**.
4. Using **visuals** to illustrate complex concepts.

While many people may understand more complex language and abstract examples, others may be lost. Understandable writing and practical examples benefit everyone.

Always strive to **put yourself in the user's shoes**. When we thoroughly understand something, it becomes obvious to us. We may not think of the relevant details for a newcomer, but **good documentation meets users where they are**. We should explain the capabilities of each function or the intended uses with the most straightforward language possible.

Try to remember what you needed to know when you first learned about the function or concept. What new terms did you need to learn? What confused you? What was the hardest part to understand? You want users to review your work, and we recommend practicing explaining the function before writing about it.

**Note**

Fundamentals of programming are a prerequisite for using a complex engine like Cuarzo. Discussing variables, functions
