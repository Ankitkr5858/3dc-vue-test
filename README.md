# vue-test

This is a simple Vue/Vuex/Nuxt project which along with a default Nuxt welcome shows a list of Github repos for `vue` or `nuxt` depending on the button clicked.

As a testing task the following changes are required

 1. Add another button on the main page along with "Vue" and "Nuxt" which will show any other Github repos query (you decide which) in the same way the existing buttons do it.
 1. Show a total number of repos found for active query in Github
 1. Add a checkbox nearby, which will hide the new button when checked
 1. Make the app look nicer and more user friendly (at your discretion)
 1. Try to make the app code better, freely changing the existing code to the state you like it more
 1. Describe why you think it is better.
 1. Provide the result as a GIT *.patch file with all the change you have made.
 1. Add some comments regarding the project code/desing itself:
    1. What you think is good about it?
    1. What don't you like about it?
    1. What would you change, add to make it better?

## Describe
For #6
1. I think that the current UI looks pretty clean as compare to previous because previously most of the component was broken and not responsive and was taking a lot of space which was making the UI dull. So I decided to change the UI for featuring elegant, user-friendly, mobile-friendly, high-performance, accessible, fully customizable UI Components and closer to the site.

2. I decided to mostly segment the code for high-performance and professional project organizations.


For #8
1. We can improve the search bar by placing that in the header which will remove the unused space and we can add animation to it for better UI and we can place the "ADD NEW" button as well for the same.

2. We can add new features like pagination, sort, and multiple searches in GitHub, etc for high-performance and more than a professional project.

3. We can improve the card traffic by giving the hover effect so that on hovering we can see all the details of the card like to open the repo and the details of the repo by doing this the card will look cleaner.

I think is good about it. Because
1. Improve UI like user-friendly, elegant and modern.
2. Improve performance.
3. Users can know about the repositories without visit Github.


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
