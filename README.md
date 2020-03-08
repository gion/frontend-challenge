# form3 interview test

![Node.js CI](https://github.com/gion/form3-interview-test/workflows/Node.js%20CI/badge.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/251e985b-040a-4a6a-9f2a-009a5e2d90be/deploy-status)](https://app.netlify.com/sites/form3-interview-test/deploys)

I'm **Bogdan Gradinariu** and this is my test submission for [frontent developer opening @form3](https://form3.tech/jobs/job-application.html?gh_jid=4652683002).

> 💡Actually most people call me **Gion** (pronounced `/dʒɑn/`, like your ordinary _John_), so you can also call me that :)

The online result is hosted on netlify, so you can see it (without needing to locally run this app) just by clicking here: [https://form3-interview-test.netlify.com/](https://form3-interview-test.netlify.com/)

## 🤓Specs

Just click on [this google doc](https://docs.google.com/document/d/1sCV9XaicOc8OigAklfm5d7m0ik4wKnimmotdbM1AI78/edit?usp=sharing) to see the original specifications.

## 📝Notes

### 🕑 I'm new to vue

This was my first vue app, so it did take me some time to read the docs, learn the basics and accomodate with the framework. It took me about **16 hours** to complete this test, but it was spanned cross 4 days (since it was more of an afterwork work).

### 🚂 Project management

I used github to setup [a kanban board](https://github.com/gion/form3-interview-test/projects/1) where I've broken up the specs into smaller items. You can check it out to see my train of thought.

### 🖼Frameworks

I would normally use a UI framework (such as [ant design](https://www.antdv.com/)) to speed things up, but since the job description stressed that _strong vanilla javascript skills_ were needed, I built all the things from the ground up.

### 🧪Unit tests

I added unit tests and tested all the vue components. I went with `mocha`, since I've used it a lot in the past with React

### 📏Test coverage

I also added test coverage (with istanbul), but I had some issues configuring it to work with vue, and it only targets `.vue` files for now (this means that `.js` files are currently excluded from the coverage ☹️)

### ⤳Workflow

I set up git hooks that won't let you commit if you have a failing test and won't let you push the code upstream if the code coverage is under the configured treshold.

There also is a CI test setup, via [github actions](https://github.com/gion/form3-interview-test/actions), that ensures a PR is healty before merging it.

### 😀Fun

Sorry if the image on the [about page](https://form3-interview-test.netlify.com/#/about) is too much.  
I can bring it down if you find it inappropriate.

## 🏃‍♂️Run locally

This project was bootstraped with [vue-cli](https://cli.vuejs.org/), so all you have to do is to run in the terminal the classic `npm install` followed by `npm run serve`.

To run unit tests type `npm run test:unit`, and to run test coverage type `npm run test:coverage`.
