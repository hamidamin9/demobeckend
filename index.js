require('dotenv').config()
const express = require('express')
// import express from  'express'
const app = express()

// const port  = 3000
const port = process.env.PORT || 3000;

const  githubData = {
    "login": "Hamidamin",
    "id": 18152312,
    "node_id": "MDQ6VXNlcjE4MTUyMzEy",
    "avatar_url": "https://avatars.githubusercontent.com/u/18152312?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Hamidamin",
    "html_url": "https://github.com/Hamidamin",
    "followers_url": "https://api.github.com/users/Hamidamin/followers",
    "following_url": "https://api.github.com/users/Hamidamin/following{/other_user}",
    "gists_url": "https://api.github.com/users/Hamidamin/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Hamidamin/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Hamidamin/subscriptions",
    "organizations_url": "https://api.github.com/users/Hamidamin/orgs",
    "repos_url": "https://api.github.com/users/Hamidamin/repos",
    "events_url": "https://api.github.com/users/Hamidamin/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Hamidamin/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2016-03-29T20:57:58Z",
    "updated_at": "2016-03-29T20:57:58Z"
  }



  app.get('/', (req, res) => {
    res.send('Hello World...!!!');
  });
  
  app.get('/twitter', (req, res) => {
    res.send('hamiddotcom');
  });
  
  app.get('/login', (req, res) => {
    res.send('<h1>please login at facebook</h1>');
  });
  
  app.get('/youtube', (req, res) => {
    res.send("<h2>Hamid or Code</h2>");
  });
  
  // Corrected the route definition here
  app.get("/github", (req, res) => {
    res.json(githubData);
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });