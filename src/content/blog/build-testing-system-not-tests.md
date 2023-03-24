---
layout: layouts/base.html
title: Build testing system, not tests
description: Reasons why you need to build testing system, not tests
---

# Build testing system, not tests

<details open>
<summary>TLDR</summary>

- **Requirements are key to everything.**
- A testing system **establishes the requirements** for your software and provides a means to **measure how those requirements are met**.
- Requirements are **not limited** to just **functionality**; ChatGPT provides many examples&ast;.
- Fine-tuning requirements and measurement solutions is crucial for developing quality software.

&ast;Performance, Scalability, Availability, Reliability, Maintainability, Security, Usability, Compatibility, Portability, Compliance, Resilience, Interoperability, Supportability, Extensibility, Testability, Accessibility, Internationalization, Localization, Configurability, Auditability, Capacity, Throughput, Response time, Latency, Capacity planning, Recoverability, Backup and restore, Disaster recovery, Redundancy, Fault tolerance, Consistency, Data integrity, Privacy, Confidentiality, Non-repudiation, Traceability, Monitoring, Reporting, Analytics, Logging, Integration, Deployment, Versioning, Upgradability, Customizability, Flexibility, Adaptability, Performance tuning, Code quality, Error handling, Compliance with standards and regulations, Documentation, Training, User feedback, User experience, User satisfaction.

</details>


----
## Story
Imagine you're launching a startup. While the following story is fictional, it could easily happen in real life.

### DAY 1
You have a vision: to make the world a happier place. Your idea is to create a website where users can see the word "Hello." Your hypothesis is that when people see the word "Hello," they will feel welcomed, which will improve their well-being.

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| Users can view the word 'Hello' on the webpage.|I see it|

</details>

You built a quick prototype

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
You anticipate that your website will have a broad audience, and you want to ensure that people with disabilities can also use it, so that you can make them happy too. You've decided to consider what might prevent people with disabilities from using your website.

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| Users can view the word 'Hello' on the webpage.|I see it|
| Users with disabilities can view the word 'Hello' on my website. | After reviewing the page, I believe it meets accessibility requirements.| 

</details>

After conducting some research, I found that the silver color on a white background can be difficult for users with poor eyesight to distinguish. Therefore, I've decided to change it to the default color.

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
I want my website to be accessible to anyone in the world, so I've decided to publish it. I purchased a domain name and selected a cloud provider that I believe offers good performance at a reasonable price. After deploying my website, I confirmed that it's up and running and accessible through my new domain name.

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| Users can view the word 'Hello' on the webpage.|I see it|
| Users with disabilities can view the word 'Hello' on my website. | After reviewing the page, I believe it meets accessibility requirements.| 
| I aimed to make my website accessible to anyone in the world. | After deploying it, I tested the website myself and it appears to be working properly.| 

</details>

### DAY 4
Everything is ready, I want to show my shiny website to people. I briefly googled and selected a couple of forums about wellbeing and wrote a message there, saying "Hello. I know ther is a problem about being welcomed. I have a solution. Can you please have a look and give me some feedback if it helps or not. My-shiny-website.in". I also decided to try contextual ads and bought google adwords for a couple of hundreds visits to my website. I used keywords, like wellbeing, feel welcomed

### DAY 10
I received several comments on the forums:

- One person said "Nice"
- Another person found the site funny, but didn't quite understand how it was supposed to help
- Someone reported that they couldn't open my website
- One person mentioned that it took a long time to load
- I also received an inappropriate comment, which I won't repeat here
- Someone asked "What should be there?"
 
I also noticed that 450 people visited my website through the Google AdWords campaign. However, I received no feedback from them. After reviewing the feedback, I decided to stop the Google AdWords campaign and assess the situation:

- How many people came from the forums?
- I reached out to the person who couldn't open my website and they said it's working fine now
- One person reported that the site took a long time to load
- Two people didn't understand my idea
- One person either couldn't see anything or didn't understand the idea
- As a result, I decided to make a few more improvements to the website."

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| Users can view the word 'Hello' on the webpage.|I see it|
| Users with disabilities can view the word 'Hello' on my website. | After reviewing the page, I believe it meets accessibility requirements.| 
| I aimed to make my website accessible to anyone in the world. | After deploying it, I tested the website myself and it appears to be working properly.| 
| I need to receive feedback from users on how my website helps them feel more welcomed.| - |
| I also want to track the number of daily visitors to my site.| - |
| It's important for me to know the website loading time for users and to track the number of users who can't load my website.| - |


</details>

### DAY 11
After spending a few hours researching on the internet, I decided to go with the following solution. I will use Google Analytics to track the number of users who visit my site. I also created a feedback form using Google Forms and added it as an iframe to the page.

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| Users can view the word 'Hello' on the webpage.|I see it|
| Users with disabilities can view the word 'Hello' on my website. | After reviewing the page, I believe it meets accessibility requirements.| 
| I aimed to make my website accessible to anyone in the world. | After deploying it, I tested the website myself and it appears to be working properly.| 
| I need to receive feedback from users on how my website helps them feel more welcomed.| Google Forms |
| I also want to track the number of daily visitors to my site.| Google Analytics |
| It's important for me to know the website loading time for users and to track the number of users who can't load my website.| Google Analytics |

</details>

### DAY 12
I need to consider the questions that I should ask to gather useful feedback. After doing some research on the internet, I found a good set of example questions. I decided to rephrase the problem I'm trying to solve, focusing on how my website can affect users' mood, whether positively or negatively. Here are the questions I came up with: 

- What is the hardest part about being in a good mood?
- When was the last time you experienced a bad mood?
- Why is it difficult to maintain a good mood?
- What is, if anything, have you done to be in good mood?
- What are the drawbacks of your current methods for improving your mood?

I crafted those questions and tested them out on myself using Google Forms to ensure they work properly. Next, I made another post on the forums, seeking people's opinions on maintaining a good mood, and I also activated a new Google Adwords campaign with fresh keywords.

### DAY 18
To summarize, the main ideas that emerged from the 1300 visitors to my website and 12 replies in the Google form were as follows:

- What is the hardest part about being in a good mood?
    - Staying calm when the environment around you is unwelcoming or hostile.
    - Maintaining a positive mood after an argument or disagreement.
    - Keeping a positive mindset despite unpleasant memories or thoughts.
- When was the last time you experienced a bad mood?
    - Today, when I was stuck in traffic.
    - Last week, when I was reminded of loved ones who passed away.
    - Last night, when I had trouble falling asleep.
- Why is it difficult to maintain a good mood?
    - Feeling tired or drained after being in a bad mood.
    - Having persistent, racing thoughts that keep me awake.
    - Becoming irritable and wanting to isolate myself, which only worsens my mood.
- What is, if anything, have you done to be in good mood?
    - Tried listening to music.
    - Went for a short walk around my neighborhood.
    - Watched a TV show to take my mind off things.
- What are the drawbacks of your current methods for improving your mood?
    - Sometimes I fall asleep when listening to music, and the music plays all night.
    - It's hard to find a TV show or movie that actually improves my mood.
    - It's difficult to go for a walk when the weather is bad or it's late at night. I find walking stressful at night, and rain doesn't help my mood. I prefer looking out the window during thunderstorms instead of going for a walk.

### DAY 20
It's interesting to note that no one mentioned looking at static pictures or text to improve their mood. Instead, people preferred to watch moving pictures, such as TV shows or films, or listen to music, which aligns with my own findings. One user even provided feedback about forgetting to turn off the music when falling asleep, which resonates with my own experience of accidentally falling asleep with the TV on.

Therefore, I decided to reconsider my idea of using static text and instead opted for something more dynamic. I found a nice GIF image of a rainy day and selected a soothing music track. Additionally, I created a timer for 60 minutes, which automatically stops the music. I also moved the feedback form to a pop-up window, with a button to open and close it.

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| Users can view the word 'Hello' on the webpage.|I see it|
| Users with disabilities can view the word 'Hello' on my website. | After reviewing the page, I believe it meets accessibility requirements.| 
| I aimed to make my website accessible to anyone in the world. | After deploying it, I tested the website myself and it appears to be working properly.| 
| I need to receive feedback from users on how my website helps them feel more welcomed.| Google Forms |
| I also want to track the number of daily visitors to my site.| Google Analytics |
| It's important for me to know the website loading time for users and to track the number of users who can't load my website.| Google Analytics |
|The website features a full-width background image that is clearly visible.| I tried it out myself and it seems to be working well. |
|In the center of the page, there is a circular button that allows me to play or pause the music.| I tried it out myself and it seems to be working well.|
| When I press the start button, a countdown appears, and the music plays until the countdown reaches zero and then stops.| I tested this with a shorter countdown, and it worked perfectly.|
| There is a button that opens the feedback form and allows me to close it when I'm finished.| I tried it out myself and it seems to be working well. |

</details>

### DAY 30
I have completed the development and I am ready to showcase the new version to the public. I have made another post on the forums and re-enabled Google AdWords to attract visitors to the website. However, I am still unsure whether my solution is helping people or not. What should I do? Should I ask people on the forums or create a feedback form? I don't think asking people directly how they like my solution is the right approach. People tend to be polite and tell you what you want to hear, or sometimes they can be impolite and their angry feedback may not always be honest. I believe I need metrics to determine if people are finding the website helpful. It's fortunate that Google Analytics provides such metrics, such as the amount of time people spend on the website.

### DAY 50
I need to generate revenue from this website to support myself. I have decided to use ads as a means of monetization.

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| Users can view the word 'Hello' on the webpage.|I see it|
| Users with disabilities can view the word 'Hello' on my website. | After reviewing the page, I believe it meets accessibility requirements.| 
| I aimed to make my website accessible to anyone in the world. | After deploying it, I tested the website myself and it appears to be working properly.| 
| I need to receive feedback from users on how my website helps them feel more welcomed.| Google Forms |
| I also want to track the number of daily visitors to my site.| Google Analytics |
| It's important for me to know the website loading time for users and to track the number of users who can't load my website.| Google Analytics |
|The website features a full-width background image that is clearly visible.| I tried it out myself and it seems to be working well. |
|In the center of the page, there is a circular button that allows me to play or pause the music.| I tried it out myself and it seems to be working well.|
| When I press the start button, a countdown appears, and the music plays until the countdown reaches zero and then stops.| I tested this with a shorter countdown, and it worked perfectly.|
| There is a button that opens the feedback form and allows me to close it when I'm finished.| I tried it out myself and it seems to be working well. |
| There is an ad block that helps me sustain this website | I can see ads on the website and the money accumulating in my account |

</details>

### DAY 60
I need to cut down on costs while still maintaining traffic to my website. Here are some steps I'm considering:

I want to find cheaper ways to drive traffic to my website, and I believe I can achieve this by focusing on search engine optimization. By creating valuable content, I can improve my website's search engine ranking and attract visitors without having to pay for expensive ads.

I also need to reduce my cloud provider expenses, which include costs for bandwidth, storage, and computing resources. Computing and storage are relatively cheap, but bandwidth costs can add up quickly. To address this, I am thinking of implementing caching strategies for images and audio tracks to minimize the amount of bandwidth I use."

<details>
<summary>Testing system</summary>

| Requirements| Measurement |
| ----------- | ----------- |
| Users can view the word 'Hello' on the webpage.|I see it|
| Users with disabilities can view the word 'Hello' on my website. | After reviewing the page, I believe it meets accessibility requirements.| 
| I aimed to make my website accessible to anyone in the world. | After deploying it, I tested the website myself and it appears to be working properly.| 
| I need to receive feedback from users on how my website helps them feel more welcomed.| Google Forms |
| I also want to track the number of daily visitors to my site.| Google Analytics |
| It's important for me to know the website loading time for users and to track the number of users who can't load my website.| Google Analytics |
|The website features a full-width background image that is clearly visible.| I tried it out myself and it seems to be working well. |
|In the center of the page, there is a circular button that allows me to play or pause the music.| I tried it out myself and it seems to be working well.|
| When I press the start button, a countdown appears, and the music plays until the countdown reaches zero and then stops.| I tested this with a shorter countdown, and it worked perfectly.|
| There is a button that opens the feedback form and allows me to close it when I'm finished.| I tried it out myself and it seems to be working well. |
| There is an ad block that helps me sustain this website | I can see ads on the website and the money accumulating in my account |
| I am getting traffic from Google search| which I can view in my Google Analytics dashboard.|

</details>

---
## Review

These are the most recent testing system updates, including a list of requirements and corresponding measurement solutions.

| Requirements| Measurement |
| ----------- | ----------- |
| Users can view the word 'Hello' on the webpage.|I see it|
| Users with disabilities can view the word 'Hello' on my website. | After reviewing the page, I believe it meets accessibility requirements.| 
| I aimed to make my website accessible to anyone in the world. | After deploying it, I tested the website myself and it appears to be working properly.| 
| I need to receive feedback from users on how my website helps them feel more welcomed.| Google Forms |
| I also want to track the number of daily visitors to my site.| Google Analytics |
| It's important for me to know the website loading time for users and to track the number of users who can't load my website.| Google Analytics |
|The website features a full-width background image that is clearly visible.| I tried it out myself and it seems to be working well. |
|In the center of the page, there is a circular button that allows me to play or pause the music.| I tried it out myself and it seems to be working well.|
| When I press the start button, a countdown appears, and the music plays until the countdown reaches zero and then stops.| I tested this with a shorter countdown, and it worked perfectly.|
| There is a button that opens the feedback form and allows me to close it when I'm finished.| I tried it out myself and it seems to be working well. |
| There is an ad block that helps me sustain this website | I can see ads on the website and the money accumulating in my account |
| I am getting traffic from Google search| which I can view in my Google Analytics dashboard.|

### What's going on here?
- We've shifted the focus of our development from "feeling welcomed" to "being in a good mood," which means some requirements are no longer relevant.
- Some requirements lack a measurement solution. For example, we only tested the countdown feature once during development, and we have no way to assess its efficiency going forward.
- Some requirements have been measured, but the results haven't been used to inform any actions. For example, we know how long it takes for users to load the website, but we haven't done anything to improve the loading time based on this information.

### What was successful

- I effectively identified the users' problem and gathered their feedback.
- I established requirements that I believed would be effective.
- I implemented measurement solutions, such as a feedback form.
- I analyzed the feedback received.
- I adapted our requirements based on the feedback.
- I modified our measurement solutions as needed.

---
## An Efficient Lifecycle for Developing a Testing System

- Define initial requirements to solve the problem at hand
- Develop a solution that fulfills the requirements
- Create measurement solutions to track progress and performance
- Review the results of the measurements
- Add new requirements as needed
- Eliminate any obsolete requirements
- Remove any measurement solutions that are no longer relevant
- Repeat steps 2-7 as necessary."

----
# In conclusion

- Understand the problem you are addressing.
- Create clear requirements.
- Establish measurement methods to assess how well the requirements address the problem.
- Use the results of your measurements to adjust and improve your requirements.
- Eliminate outdated or unnecessary requirements and measurement approaches."
