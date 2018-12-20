# webdevproject2

> A Vue.js project
Demo: https://youtu.be/8y0kz8j2aDI

![alt text](https://github.com/michealdunne14/FoodWebApp/blob/master/logo.png)
![alt text](https://github.com/michealdunne14/FoodWebApp/blob/master/logo.png)

Introduction
------------
For this project we created a trailer marking system where we are able to identify the location of the trailer and the contents of that trailer. To get a accurate result we used bluetooth beacons which allowed us to get an accurate result of the location. This location would we be pushed up to the cloud where it would be stored. 
This data will be pulled down by an app that would show all of the trailers location on the map. It would allow us to filter this data by certain aspects such as by day and also by heatmap. 

App
---
The purpose of this app is to show all the marker locations on a map. This would allow the user to identify each trailer and there location. Where this will be usedfull is where this large companies that have thousands of trailers on the move the whole time they can easily identify there location. 
The app has multiple features such as seaching for a trailer by Id and also filter it by heatmap. 

Requirements
------------
- For this app to work you must have an android phone.
- Connection to the internet.

Tools
-----
- Mapbox
- Android Studio
- Firebase

Author
------
- Jon Gillespie
- Micheal Dunne
- Hongguang Qin

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
