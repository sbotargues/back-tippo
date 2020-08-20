# TIPPO

## Description

This is a social network that apart from providing the utilities of following and giving likes, you can immediately meet a person that interests you.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** Create account, if you have an account you can log in at the link.
- **Login:** Log in, if you don't have an account you can create one.
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Edit profile (profile page):** In the profile, you can click edit and you can change the profile picture, delete posts, add and delete description and links.
- **Other accounts:** Page that users use. 
- **Add photo:** Page that users will use to add all photos: profile, posts ...
- **Chat list:** List of all open conversations, it will mark the users with you have connected through superlike.
- **Superlike:** This page will appear when two users connect with each other, it will show you an option to start to chat and another link that you can view their profile.
- **Chat:** Simple chat.
- **Search** Search accounts.



![Captura de Pantalla 2020-08-19 a les 12.47.22](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C3c1b4d22e45645ed9610cb817a3ebe3f/projects/M68b61bc4c8ebcfa1ea0bf852b3449b581597747386784/pages/eeb9d041eaa74f50bc04925b81d9531e/image/eeb9d041eaa74f50bc04925b81d9531e.png)



## Backlog

#### User profile:

- See someone's followers and who follows me.
- Location and hashtag search.
- 24 hour posts.



## Client / Frontend

#### React Router Routes (React App)

| Path       | Component  | Permissions            | Behavior                                                     |
| ---------- | ---------- | ---------------------- | ------------------------------------------------------------ |
| /          | Home       | Private <Route>        | Home page with the lasts posts of following users            |
| /          | Login      | Anon only <AnonRoute>  | Login form, link to signup, navigate to homepage after login |
| /signup    | Signup     | Anon only <AnonRoute>  | Signup form, link to login, navigate to homepage after signup |
| /post      | PostDetail | Private <PrivateRoute> | Post detail                                                  |
| /myprofile | MyProfile  | Private <PrivateRoute> | My profile                                                   |
| /profile   | Profile    | Private <PrivateRoute> | Other Users profile                                          |
| /search    | SearchUser | Private <PrivateRoute> | Profiles with the search name                                |

## Server / Backend

#### Models

User model

```
{
 username: String,
 description: String,
 profilePhoto: String,
 mail: String,
 superlike: [id],
 link: String,
 password: String,
 followers: [id],
 following: [id],
 post: [post_id](populate),
}
```

Post model

```
 {
   postPhoto: String,
   postDescription: String,
   like: Number,
   Comment: [{
  	 username: String,
   	 text: String,
   }]
 }
```



#### Routes

| HTTP Method | URL                | Request Body                      | Succes status | Error Status | Description                                        |
| ----------- | ------------------ | --------------------------------- | ------------- | ------------ | -------------------------------------------------- |
| GET         | /auth/profile      | Saved session                     | 200           | 404          | Check if user is logged in and return profile page |
| POST        | /auth/signup       | {username, email, password}       | 201           | 404          | Sing Up                                            |
| POST        | /auth/login        | {username, password}              | 200           | 401          | Log In                                             |
| POST        | /home/like         | {like}                            | 204           | 400          | Like                                               |
| POST        | /home/comment      | {comment}                         | 200           | 400          | Comment                                            |
| POST        | /home/superlike    | {id}                              | 204           | 400          | Superlike                                          |
| GET         | /home/post         | {post_id}                         | 201           | 400          | Last posts of following users                      |
| POST        | /profile/edit      | {profilePhoto, link, description} | 200           | 400          | Edit profile                                       |
| GET         | /profile/myprofile | {id}                              | 200           | 400          | View my profile                                    |
| GET         | /post/post         | {post_id}                         | 204           | 400          | View Post                                          |
| POST        | /post/edit         | {postPhoto, postDescription}      | 201           | 404          | Edit Post                                          |
| DELETE      | /post/delete       | {post_id}                         | 200           | 404          | Delete Post                                        |
| GET         | /profile/users     | {id}                              | 201           | 401          | View other profiles                                |
| POST        | /profile/follow    | {follower}                        | 201           | 400          | Follow users                                       |
| POST        | /publish           | {postPhoto, postDescription}      | 200           | 400          | Make new Post                                      |
| GET         | /search            | {id}                              | 204           | 400          | Search users                                       |

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com/)