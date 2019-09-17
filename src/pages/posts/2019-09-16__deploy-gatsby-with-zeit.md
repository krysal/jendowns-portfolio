---
path: "/posts/deploy-gatsby-with-zeit"
date: "16 Sept 2019"
title: "Deploy a Gatsby Site with ZEIT"
---

Lately I've been playing around with [ZEIT Now](https://zeit.co/docs) to deploy this site, and I wanted to share what I learned in case you'd like to do the same.

But before we begin, two prerequisites for following along:

1. **You are using a static site generator**, like [GatsbyJS](https://www.gatsbyjs.org/).

2. **Your code is hosted in GitHub or GitLab** so you can add one of [ZEIT Now's git integrations](https://zeit.co/docs/v2/git-integration/). I will be talking about GitHub because that's what I use, but both integrations are similar.

## Step 1: setup your project's build

Static site generators usually have a `build` command that you can use to generate a production buid. Make sure you add this command to the `scripts` object in your `package.json`.

Because Gatsby is my current static site generator of choice, here's what my `build` command looks like:

```json
"scripts": {
  "build": "gatsby build",
}
```

When I run my build command, Gatsby generates a static site in a `/public` directory in the root of my project.

## Step 2: add a ZEIT Now config

Add a file called `now.json` in the root of your project.

Copy and paste this json object into `now.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@now/static-build"
    }
  ],
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "status": 404, "dest": "404.html" }
  ]
}
```

To elaborate on what this config means:

- `builds` options:

  - `"src": "package.json"` is the entrypoint that Now uses to access your `build` script.
  - `"use": "@now/static-build"` refers to the type of [Now builder](https://zeit.co/docs/v2/advanced/builders/#official-builders) used.

- `routes` options:
  - `"handle": "filesystem"` routes to filesystem routes. (See ["Routes" documentation](https://zeit.co/docs/v2/advanced/routes/#) for more information.)
  - `"src": "/.*", "status": 404, "dest": "404.html"` applies a custom 404 page. You'll need to do this with Gatsby, for example. (See this [ZEIT Now Spectrum chat](https://spectrum.chat/zeit/now/custom-404-page~1f921045-60d9-477b-b23c-1626c9fa1565?m=MTU1NjIyOTI1MTg0Nw==) for context.)

## Step 3: add a git integration

ZEIT Now offers [git integrations for both GitHub and GitLab](https://zeit.co/docs/v2/git-integration/). After adding one of these integrations to your project's repository, ZEIT Now will depoy your site automatically.

Once I added the GitHub integration, I did not customize anything else. I liked the default settings of ZEIT Now deploying staging sites (with pushed branches) and my main production build (with merges to my main branch). But you can choose to adjust these settings if you prefer.

**And that's my deployment setup!** <span role="img" aria-label="dancing woman">💃🏼</span><span role="img" aria-label="sparkle">✨</span>
