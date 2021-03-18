# Plugable third party script
This repo contains source code for displaying a modal when a specific dom element clicked

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Tech used
- Javascript
- Jquery
- HTML
- CSS

## How it works
![alt text](https://d2mz8tzczvasm7.cloudfront.net/design.png)

| File | Purpose |
| ------ | ------ |
| loader.js | This file will be called from provider site  |
| model.js | This file called by loader.js and loads Jquery, css and other business logics |
| model.css | contains styles |
| provider.html | Example site where the script is embedded |

## Installation

```sh
npm install -g http-server
cd external-script
http-server ./
Hit the URL in browser - http://121.0.0.1:8080/provider.html
```
## Instruction to embed the script
Place the below line anywhere into HTML
```sh
  <script type="text/javascript" async src="https://d2xlo5np10kf5x.cloudfront.net/loader.js"></script>
```

## Features

- Used `async` way of loading the script to not impact the performance
- To overcome the conflicts between the Jquery versions used noConflict()

## Have a look 
The application is hosted in Cloudfront. Please do the checkout.

Provider site - https://d2mz8tzczvasm7.cloudfront.net/provider.html
External script -  https://d2xlo5np10kf5x.cloudfront.net/loader.js
