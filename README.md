# webdevproject2

> A Vue.js project
- Demo: https://youtu.be/8y0kz8j2aDI
- Document: [Document Link](https://github.com/michealdunne14/FoodWebApp/blob/master/Food%20Web%20app.pdf)
- Site Launched: [Site](https://webdev-c06a8.firebaseapp.com/#/) 

![alt text](https://github.com/michealdunne14/FoodWebApp/blob/master/logo.png)

Introduction
------------
For this project we had to create a vue.js front end web development project. What this app was it implemented the CRUD usage and it would take in information from the backend and then use that in the front end. The purpose of the project is to create a front end for this data. 

DX
--
Food 
----
In the Food page is where I was able to show all the food that is in the database. What this data showed was the type of course that the food is. It also contained the name of the food items, upvotes, content, upvote, remove and edit(vuetable).
I can filter the data by course food item and the upvotes. This would filter by letter and number. If I put in s in course, it would show me all the starters and deserts as they both contain s. I can continue with t and it will only show the starters. This works the same with Food items and the upvotes. 
The content button will show a popup of the title description and an image of the food(vuesax). We can then see this food that has been added and everything with it. We can then close this popup by pressing the x on the top right-hand side of the popup. This would take us back to the main page. The upvote allowed us to like the food. This would also trigger a little notification on the bottom of the screen saying that you upvoted the food(vuesax). It would also then change the number on the upvotes tab by increasing it by one. In the remove section is where when pressed would give you an alert saying are you sure you want to delete this item and you can either say ok delete it or cancel. This would then say if successful that you deleted it or if not that it did not go through. If it went threw it would then delete that item from the database. The edit would allow you to alter the inputs. This would change it. It would take you to a new page that would show you a place where you can change the details of the food. 


Add Food
--------
In the add food this is where you can add food to the database. You can click on a dropdown to choose the course that you want you can chose between a starter, main and a desert. You can then name the food of what you want and give a description on it and then give a URL of that food then you can post it up to the database. On the bottom corner of the screen it will give you a prompt showing if the food has been uploaded to the database and if no it will give you an error saying that did not work. This will then be displayed back onto the food list page.

Login 
-----
When the login button is pressed it will bring up a popup that allows the user to select whether they want to login or signup. Once they user logged in it is supposed to close the popup and also input the name of the user beside the login button. The problem that I encountered was it would give me an error where it would allow me to send the data to my backend and my backend would then send the data back to my frontend this is where the error would occur and it would freeze the app and also crash Heroku. When I used my Signup feature it would allow me to add a user in to the database. It would then close the popup.   

Usage
-----
``` bash
# install dependencies
npm install '''

Tools
-----
- WebStorm
- NPM
- Firebase
- vuesax

Author
------
- Micheal Dunne

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
