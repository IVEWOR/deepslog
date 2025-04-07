---
title: Green Building Canada

website: 

platform: WordPress, Plugin Development, Theme Development

location: Canada

featured_image: /green-building-canada.png

date: 2024

testimonial: It was a joy working with Deepak. He delivered what I asked for, patiently working through all issues to arrive at the desired outcome. He is thorough and cares about his work.

client: Kiva B
---

Green Building Canada is a Canadian-based job portal focused on eco-friendly, sustainable employment opportunities. The client wanted a custom-built WordPress site that could fetch and organize job listings from a Canadian government feed, while also offering full control over manually posted listings.

The challenge wasn't just technical — it was about making messy, inconsistent data usable and structured. The government job data being fetched often came with malformed fields and scattered information, so a high degree of customization was required to make the content publishable and searchable.

## Objectives

- Build a WordPress-powered job portal tailored to the green job sector  
- Automatically fetch and sync job listings from a Canadian government API  
- Enable both admins and external users to create, edit, and manage job posts  
- Parse and clean inconsistent fetched content  
- Automatically populate custom fields like location, salary, and company details

## Approach

I developed a custom plugin that fetches job data from the government feed and integrates it into WordPress in a clean, structured format. To tackle the inconsistencies in the fetched content, I used a combination of PHP and JavaScript to extract and assign critical data fields.

Using WordPress `save_post`, `before_save`, and `after_save` hooks, I set up an automated system where each job post is processed after it's saved. The system scans the job description for relevant data — such as salary, company name, and location — and then populates corresponding custom fields accordingly. If needed, the post is resaved with the updated structured information, ensuring each listing has clean, searchable metadata.

On top of that, the platform allows logged-in users to submit their own jobs. I built custom submission forms, account management views, and moderation tools for the admin team.

## Results

- Fully functional green job board with automated job import system  
- Clean, categorized listings with structured custom fields  
- Frontend job submission system for third-party users  
- Significant time saved in content moderation through automation  
- Strong testimonial from the client for clear communication and thoughtful execution

> *"It was a joy working with Deepak. He delivered what I asked for, patiently working through all issues to arrive at the desired outcome. He is thorough and cares about his work."*  
> — Kiva B
