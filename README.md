# FreeRoyalties Technical Interview

We only care about 1 metric right now. Can you take requirements and turn it into UIs using react/next/tailwindcss and can you do it using generative ai (chatgpt, anthropic, whatever). I've been coding for 30 years now and I am a master at my craft but I still do not write ANY code by hand these days.

## Task

USE GENERATIVE AI to build this component:

Create a nextjs app using js and tailwind and the app router
git init and git commit to save your FIRST timestamp

Use: https://ui.shadcn.com/docs/cli for components and dark mode for styles

Create a page
On the page is a modal
the modal starts open
in the modal there is a text field (title) and a button [add question]
when the title is typed into th etext field and the button is clicked show 2 empty "choices"
each choice has "text" (text field) and a type (select field)
- dollar
- number
- string
- boolean

when both choices have their text filled in and their type set - show a "save" button
when the save button is clicked the question title and choices will be saved as json in the PAGE state

make all components their own (dont put everything in one file) and only have state in the PAGE (no components)
