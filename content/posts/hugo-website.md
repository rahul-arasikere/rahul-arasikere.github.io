---
title: "Hugo Website"
date: 2021-04-11T14:55:30-04:00
tags: ["hugo", "PaperMod"]
author: ["Rahul Arasikere"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
description: "Hosting a similar portfolio site."
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
editPost:
  URL: "https://github.com/rahul-arasikere/rahul-arasikere.github.io/content"
  Text: "Suggest Changes" # edit text
  appendFilePath: true # to append file path to Edit link
---

## How it works

Hosting this site is pretty straightforward. I use hugo to generate the website from a list of markdown
files. Read more about hugo [here](https://gohugo.com).

There are many tutorials out there that will teach you how to setup a new hugo project, so I won't go into the details of starting a new hugo project.

## Getting started

But the gist of it is:

1. Run `hugo new site <path to site>`.

2. Edit the `config.[toml|yml|json]` file in the newly generated directory.

3. Set a theme in the config file.

4. Run `hugo serve` to launch a development server to locally preview the new site.

## Installing a new theme

There are multiple ways to install a new theme into the new project we created. My preferred way is to add it as a git sub-module in the `themes/` subdirectory as I use git to maintain my project however any of the ways mentioned below will work.

- Use git: `git submodule add <url to the repo> --depth=1 themes/`.

- Download the theme and extract it to the theme folder.

## Modifying the theme

Hugo has powerful templating engine that is used to generate the site from the markdown files.
