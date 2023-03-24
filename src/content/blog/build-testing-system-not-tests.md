---
layout: layouts/base.html
title: Build testing system, not tests
description: Reasons why you need to build testing system, not tests
---

# Build testing system, not tests

<details open>
<summary>TLDR</summary>

- **Requirements are everything.**  
- A testing system **sets requirements** to your software and a way to **measure how requirements are met**  
- Requirements can be **not only functional**. ChatGPT gives you a lot of examples&ast;
- **Fine tuning requirements and measurement solutions** is your way to create a **decent software**

&ast;Performance, Scalability, Availability, Reliability, Maintainability, Security, Usability, Compatibility, Portability, Compliance, Resilience, Interoperability, Supportability, Extensibility, Testability, Accessibility, Internationalization, Localization, Configurability, Auditability, Capacity, Throughput, Response time, Latency, Capacity planning, Recoverability, Backup and restore, Disaster recovery, Redundancy, Fault tolerance, Consistency, Data integrity, Privacy, Confidentiality, Non-repudiation, Traceability, Monitoring, Reporting, Analytics, Logging, Integration, Deployment, Versioning, Upgradability, Customizability, Flexibility, Adaptability, Performance tuning, Code quality, Error handling, Compliance with standards and regulations, Documentation, Training, User feedback, User experience, User satisfaction.

</details>


----
## Story
Let's imagine you are building a startup. This story is not real, but can happen in real life.

### DAY 1
You have a vision. You want to make our world a happier place. 
Your idea is to make a website, where users can see word "Hello". Your hypothesys is that when people will see word "Hello", they will feel welcomed, which will improve their wellbeing.

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| People can see world "Hello" on the page|I see it|

</details>

You build a quick prototype

```html
<html>
    <head>
        <title>Hello</title>
    </head>

    <body>
        <p style="color: silver;">Hello</p>
    </body>
</html>
```

### DAY 2
You expect your website to be used by wide audience, you want to make people sure people with disabilities also can use your website, so that you can make them happy as well. You decided to try to think what can stop people with disabilities from using my website. 

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| People can see word "Hello" on the page|I see it|
| People with disabilities can experience word "Hello" on my website| I looked at the page, from my knowleadge it should be ok|

</details>

As a result, I found that silver color on white background can hardly be visible by users with pure eyesight, and I decided to change it to default color

```html
<html>
    <head>
        <title>Hello</title>
    </head>

    <body>
        <p>Hello</p>
    </body>
</html>
```

### DAY 3
I want my website to be accesible by anyone in the world, so I decided to publish my website. 
I bought a domain name and selected a cloud provider, which I think works well and have a reasonable price. 
I deployed my website and it works well, I can see the website up and running, accessible via my new domain name

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| People can see word "Hello" on the page|I see it|
| People with disabilities can experience word "Hello" on my website| I looked at the page, from my knowleadge it should be ok|
| my website accesible by anyone in the world| I deployed it and tried myself, looks fine|

</details>

### DAY 4
Everything is ready, I want to show my shiny website to people. I briefly googled and selected a couple of forums about wellbeing and wrote a message there, saying "Hello. I know ther is a problem about being welcomed. I have a solution. Can you please have a look and give me some feedback if it helps or not. My-shiny-website.in". I also decided to try contextual ads and bought google adwords for a couple of hundreds visits to my website. I used keywords, like wellbeing, feel welcomed

### DAY 10
I had a couple of comments on forums, they were
- Nice
- Site is funny, but I don't really get the idea how it should help
- Can't open your website
- Takes a lot of time to load
- `****** ** ****`
- What should be there?

I also saw there were 450 people from google adwords. 
I decided to stop google adword compaign, review feedback and think what I have at the moment
- I invited 450 people from google adwords. Did I help anyone? I have no feedback
- How many people came from forums
- There were a person who can't open my website. What does he mean? I reached out to him and he said he coudn't open it, but now seems fine
- One person said it takes a lot of time to load. 
- There were 2 people who didn't get my idea
- One person can't see anything or didn't get the idea

As a result, I decided to do a few more improvements to website

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| People can see word "Hello" on the page|I see it|
| People with disabilities can experience word "Hello" on my website| I looked at the page, from my knowleadge it should be ok|
| My website accesible by anyone in the world| I deployed it and tried myself, looks fine|
| I need to have feedback from users, how it helps them to feel more welcomed| they give me feedback and I recieve it|
| I want to know how many people comes to my site every day| I see the number|
| I need to know how long it takes for a user to load my website| I see a number|
| I need to know how many user can't load my website| I see number| 

</details>

### DAY 11
I took a few hours to explore internet and decided to go with the following solution. I will have google analytics, which will tell how many users were on my site. I create a form in google forms, where I will ask about feedback and add it as iframe to the page. 

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| People can see word "Hello" on the page|I see it|
| People with disabilities can experience word "Hello" on my website| I looked at the page, from my knowleadge it should be ok|
| My website accesible by anyone in the world| I deployed it and tried myself, looks fine|
| I need to have feedback from users, how it helps them to feel more welcomed| they give me feedback and I recieve it|
| I want to know how many people comes to my site every day| I see the number|
| I need to know how long it takes for a user to load my website| I see a number|
| I need to know how many user can't load my website| I see number| 
| Google analytics works on my page| I can see results in google analytics|
| I have google form on my website and can send feedback| I see feedback in google forms|

</details>

### DAY 12
I need to think about questions what I need to ask. I took another search of the internet and found a good example of questions. I decided to rephrase the problem I'm trying to solve, asking about good and bad mood. So here they are
```
- What is the hardest part about being in a good mood?
- When were the last time you faced with a bad mood?
- Why is it hard to be in good mood?
- What is, if anything, have you done to be in good mood?
- What don't you like about the solution for a good mood that you have?
```

I wrote those questions and try out it myself in google forms to make sure it works.
After, I made one more post on the forums, asking people about their opinion about being in good mood and turned on google google adwords with new keywords. 

### DAY 18
I had 1300 visitors to my website and 12 replies in google forms. 
To sum up, main ideas there were the following
```
- What is the hardest part about being in a good mood?
A: Stay calm when environment around you is not friendly and welcomed
A: Stay in a good mood after a fight
A: Stay in good mood when remember about bad things
- When were the last time you faced with a bad mood?
A: today, when I was in a traffic jam
A: last week, I remembered my loved ones who passed away
A: When I went to bed last night
- Why is it hard to be in good mood?
A: I feel tired after being in bad mood
A: I can't stop thinking, which doesn't let me sleep
A: I become angry and don't want to speak with anyone, which makes my mood even worse
- What is, if anything, have you done to be in good mood?
A: I tried to listen to music
A: I tried to walk a bit near my house
A: I tried to watch a tv show to think about something else
- What don't you like about the solution for a good mood that you have?
A: Sometimes when I listen to music I fell asleep and music is playing whole night
A: It's hard to find a tv show or film that will improve my mood
A: If it is evening or weather is not good, it's hard to go for a walk. I feel more stressed walking after 9pm. Rain doesn't imporve my mood when I outside. I prefer looking at window when it's raining, or in times of thunderstorm, rather than walking.
```

### DAY 20
Interesting to see that nobody mentioned they like to look at a static picture or text to improve their mood. But I see people are looking at moving pictures, like tv shows or films to improve mood. I also see some people were using music to improve mood, which also correlates to what I'm trying to do. There were a feedback, that some person forgot to turn off music when he fell asleep, which correlates with my experience when I fell asleep with TV turned on.

So I decided to rethink my idea of static text and replace it with something moving. 
I found a nice gif image of rainy day and a nice relaxing music. I also build a timer for 60 minutes, which automatically stops music. I also moved feedback form, so that it appear in popup and have a button to open and close popup

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| People can see word "Hello" on the page|I see it|
| People with disabilities can experience word "Hello" on my website| I looked at the page, from my knowleadge it should be ok|
| My website accesible by anyone in the world| I deployed it and tried myself, looks fine|
| I need to have feedback from users, how it helps them to feel more welcomed| they give me feedback and I recieve it|
| I want to know how many people comes to my site every day| I see the number|
| I need to know how long it takes for a user to load my website| I see a number|
| I need to know how many user can't load my website| I see number| 
| Google analytics works on my page| I can see results in google analytics|
| I have google form on my website and can send feedback| I see feedback in google forms|
| Website has full width background image| I see image|
| There is a circular button in the centre of page, which I can use to play and pause the music| I can see and click the button. Music starts and music stops|
| There is a countdown when I press start. When 0 reached, music stops| I tried it myself with a bit less timeout, works fine|
| There is a button which opens feedback form and have ability to close it| I tried myself, works fine|

</details>

### DAY 30
I finished development and ready to show new version to people. I make one more post on forums and turn on google adwords back again.
People are visiting website, but I still don't understand whether it help people or no. What should I do? Shall I ask people on forums? Shall I create form? I don't think asking directly how do you like my solution is right way. 
People are polite, they will tell you what you want to hear, or sometimes impolite, but angry feedback is not always honest feedback. 
I think I need metrics, if people are spending their time here, it means website helps. It's good that google analytics provide such metrics

### DAY 50
I need money for this website to live. I selected ads as a way to make money.

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| People can see word "Hello" on the page|I see it|
| People with disabilities can experience word "Hello" on my website| I looked at the page, from my knowleadge it should be ok|
| My website accesible by anyone in the world| I deployed it and tried myself, looks fine|
| I need to have feedback from users, how it helps them to feel more welcomed| they give me feedback and I recieve it|
| I want to know how many people comes to my site every day| I see the number|
| I need to know how long it takes for a user to load my website| I see a number|
| I need to know how many user can't load my website| I see number| 
| Google analytics works on my page| I can see results in google analytics|
| I have google form on my website and can send feedback| I see feedback in google forms|
| Website has full width background image| I see image|
| There is a circular button in the centre of page, which I can use to play and pause the music| I can see and click the button. Music starts and music stops|
| There is a countdown when I press start. When 0 reached, music stops| I tried it myself with a bit less timeout, works fine|
| There is a button which opens feedback form and have ability to close it| I tried myself, works fine|
| There is an ads block which helps me to earn run this site| I can see ads on website and money in my account|

</details>

### DAY 60
I need to reduce costs, but still maintaining enough traffic to my website
- I need cheaper traffic to my website. I need traffic from search. I think I can get it with less price than paying for google ads. I've done a bit of googling and find that content creation is a way to get good places in google search.
- I need to reduce my cloud provider price. I pay for bandwidth, storage, computing resources. Computing is relativly cheap, storage as well, but bandwidth isn't. I think caching image and audio track is a way to reduce price for bandwidth. 

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| People can see word "Hello" on the page|I see it|
| People with disabilities can experience word "Hello" on my website| I looked at the page, from my knowleadge it should be ok|
| My website accesible by anyone in the world| I deployed it and tried myself, looks fine|
| I need to have feedback from users, how it helps them to feel more welcomed| they give me feedback and I recieve it|
| I want to know how many people comes to my site every day| I see the number|
| I need to know how long it takes for a user to load my website| I see a number|
| I need to know how many user can't load my website| I see number| 
| Google analytics works on my page| I can see results in google analytics|
| I have google form on my website and can send feedback| I see feedback in google forms|
| Website has full width background image| I see image|
| There is a circular button in the centre of page, which I can use to play and pause the music| I can see and click the button. Music starts and music stops|
| There is a countdown when I press start. When 0 reached, music stops| I tried it myself with a bit less timeout, works fine|
| There is a button which opens feedback form and have ability to close it| I tried myself, works fine|
| There is an ads block which helps me to earn run this site| I can see ads on website and money in my account|
| There are google ads running with cheapest price I can get| I feel it is a good price and I see people comming from google ads|
| I have traffic from google search| I can see it in google analytics dashboard|

</details>

---
## Review

This is latest state of testing system, a list of requirements and measurment solutions

| Requirements| Measurement |
| ----------- | ----------- |
| People can see word "Hello" on the page|I see it|
| People with disabilities can experience word "Hello" on my website| I looked at the page, from my knowleadge it should be ok|
| My website accesible by anyone in the world| I deployed it and tried myself, looks fine|
| I need to have feedback from users, how it helps them to feel more welcomed| they give me feedback and I recieve it|
| I want to know how many people comes to my site every day| I see the number|
| I need to know how long it takes for a user to load my website| I see a number|
| I need to know how many user can't load my website| I see number| 
| Google analytics works on my page| I can see results in google analytics|
| I have google form on my website and can send feedback| I see feedback in google forms|
| Website has full width background image| I see image|
| There is a circular button in the centre of page, which I can use to play and pause the music| I can see and click the button. Music starts and music stops|
| There is a countdown when I press start. When 0 reached, music stops| I tried it myself with a bit less timeout, works fine|
| There is a button which opens feedback form and have ability to close it| I tried myself, works fine|
| There is an ads block which helps me to earn run this site| I can see ads on website and money in my account|
| There are google ads running with cheapest price I can get| I feel it is a good price and I see people comming from google ads|
| I have traffic from google search| I can see it in google analytics dashboard|

### What do you see here
- During development process we changed problem we are solving from 'feel welcomed' to 'be in good mood'. Some requirements become obsolite and not relevant anymore
- Some requirement doesn't have measurement solution, eg. countdown. It was measured, tested once during development and going forward we have no idea about it workability and efficiency
- Some requirements are measured, but results of measurements doesn't affect the requirements, eg. How long it takes for user to load website. We didn't do any actions based on results.
- Some requirements are measurement solution for some other requirements. eg. google analytics is a measurement for knowing how many people come to website

### What went well
- I did a great job identifying users problem, collecting user feedback.
    - I set requirements I think will work
    - I setup measurement solution, feedback form
    - I reviewed feedback
    - I changed our requirements
    - I changed our measurement solutions

---
## What is an efficient testing system development lyfecycle

1. I set initial requirements, which I think solving a problem
2. I develop a solution that fits requirements
3. I develop measurements solution
4. I review results of measurements
5. I add new requirements
6. I delete obsolete requirements
7. I delete obsolete measurement solution
8. Go to #2

This flow is important. Let's rewrite it in a programming language

```js
function testSystemDevelopment(){
    let requirements = SetInitialRequirements()
    let measurements;

    while(true) {
        Develop(requirements)
        measurements = DevelopMeasurementSolution(requirements)
        let reviewResults = ReviewResultsOfMeasurement(measurements.getResults())
        let {requirements, prevRequirements} = AddNewRequirements(reviewResults)
        requirements = DeleteObsoleteRequirements(requirements, prevRequirements)
        measurements = DeleteObsoleteMeasurementSolutions(requirements, prevRequirements)
    }
}
```

This flow works on different levels
### Case one: developer
1. [Set initial requirements] He takes a small part of total requirement. His task is to develop html button with css styles. He sets initial requirements to the following
- html button with css styles
    - Button should have full page width on mobile, and fixed with on desktop
    - Button should be accessible
2. [Develop] He develops the button
3. [Develop Measurement Solution] He creates pull request, shows his button to designers and product owners
4. [Review Results Of Measurement] He listens and write down all what was said in pull request, by designers and product owners
5. [Add New Requirements] He creates new requirements
- html button with css styles
    - Button should have full page width on mobile, and fixed with on desktop
    - Button should have fixed size on mobile and desktop
    - Button should be accessible
6. [Delete Obsolete Requirements] 
- html button with css styles
    - Button should have fixed size on mobile and desktop
    - Button should be accessible
7. [Delete Obsolete Measurement Solutions] - marks PR as draft and not ready for review
8. Go to # 2 with new requirements

Usually, it takes 1-2 iteration for a developer to fulfill his requirement. 

### Case two: startup owner
Look above to the story. 

## To wrap it up
1. Know the problem you are solving
2. Develop requirements
3. Measure how your requirements solves problem. 
4. Use your measurements to modify your requirements.
5. Delete obsolete requirements and measurements solutions

### Steps 4 and 5 are essential for efficient testing system
If you want to have efficient testing system, you must use measurements to modify requirements and delete obsolete requirements and measurement solutions. People skip steps 4 and 5 as sometimes they are the most difficult steps. Your company might have an issue with steps 5 or 4 if you experience the following things:
- You make reports no one reads, including you
- You support system no one cares about
- You create dashboards no one looks at, including you
---

## Roles in a team

1. Business analyst. Sets requirements for software to solve problem, using knowleadge in industry, subject, user feedback
2. Software manual tester. Gatheres requirements and measure how requirements are met. Usually from functional point of view.
3. Automation tester/ SDET. Gatheres requirements and Creates automated measurement solutions. Usually from functional and performance point of view
4. Software Engineer. Develops requirements, measurement solutions, measure how requirements are met. Usually from software point of view.
5. DevOps. Develops requirements, measurement solutions, measure how requirements are met. Usually from infrastructure point of view. 
6. Engineering Manager. Sets requirements for software to solve problem. Allocate people and resources required to develop and measure requirement

### Other team structure
Artifacts:
1. Testing system. Global to whole company. Here you can find all requirements and requirement owners, pool of requirement managers

Roles:
1. Owner. Takes requirement and creates subrequirements and measurement solutions for it. Uses industry, subject knowleadge, user feedback. Has power to delete and add subrequirements. Can ask requirement manager to give him more requirement owners if he has more subrequirements he can handle. Requirement owner who has people working on subrequirements has power to dealocate people from subrequirements and remove subrequirement.

2. Manager. Manage testing system and resources(materials and people, sick leaves, absence, anything outside of requirement). Requirement owners can reach out to requirement manager if he thinks that his measures will impact other requirements outside requirement owner's requirement and subrequirements. Requirement manager is not assigned to specific person. Requirement owner can choose from pool of requirement managers who to work with. Requirement manager has power to delete requirements from testing system, outside of requirement owner area. He can allocate resources and people for requirement owners. His goal is to manage requirement owners and their colobaration

3. Expert. Software Expert, Operations Expert, Accesibility Expert, Automated Measurement Expert, Business Domain Expert. People with exceptional knowleadge in some area. Expets can play roles of requirement owner or requirement manager. Other requirement owners can reach out to experts in order to help them to solve the task. If there are a set of tasks, requirement owner can ask requirement manager to make the expert requirement owner for those subtasks