<div align= >
   

# <img align=center width=75px height=75px src="https://media1.giphy.com/media/mDN904TRuZwJhmc4mf/giphy.gif?cid=ecf05e47i8t7ozdn1ted9aqqf1z56vqkt9kwei9b5d46c4hy&rid=giphy.gif&ct=s"> NonLegit


</div>
<div align="center">
   <img align="center"  width="675px" src="https://user-images.githubusercontent.com/71986226/210291217-ebbf139b-a191-4300-b135-97b24414f7b4.gif" alt="logo">


### ”Lets Go, Start new adventure.⚡“
   
</div>
 
<p align="center"> 
    <br> 
</p>

## <img align= center width=50px height=50px src="https://thumbs.gfycat.com/HeftyDescriptiveChimneyswift-size_restricted.gif"> Table of Contents

- <a href ="#about"> 📙 Overview</a>
- <a href ="#started"> 💻 Get Started</a>
- <a href ="#deployment"> 🌎 Build & deployment</a>
- <a href ="#features"> 🔍 Features</a>
- <a href ="#video">  📽 GIF Demo</a>
- <a href ="#contributors"> ✨ Contributors</a>
- <a href ="#license"> 🔒 License</a>
<hr style="background-color: #4b4c60"></hr>

## <img align="center"  width =60px  height =70px src="https://media3.giphy.com/media/h46Wk2BSHGch87Mk7w/giphy.gif?cid=ecf05e47uzbe4n6uzosogred6c2meppawdd9nb2avjp6ltdl&rid=giphy.gif&ct=s"> Overview <a id = "about"></a>

<ul>
<li> We are Front-end team web development</li>
<li>
The Project mimic some functionalities of <a href="https://www.reddit.com/">Reddit</a>
</li>
<li>The project is built by
<ol>

<li>
<a href="https://reactjs.org/docs/getting-started.html">React</a> 
</li>
<li>
<a href="https://mui.com/material-ui/getting-started/overview/">MUI</a>
</li>
<li>
<a href="https://firebase.google.com/">Firebase</a> 
</li>
</ol>
</li>
<li>
<a href="https://github.com/NonLegit/Reddit-Front/blob/development/%5BSoftware%20Engineering%5D%20Project%20F2022.pdf">Project Description</a>
</li>
</ul>
<hr style="background-color: #4b4c60"></hr>

## <img  align= center width=50px height=50px src="https://c.tenor.com/HgX89Yku5V4AAAAi/to-the-moon.gif"> Get Started <a id = "started"></a>

<ol>
<li>Clone the repository

<br>

```
git clone https://github.com/NonLegit/Reddit-Front/tree/main
```

</li>
<li>Run json server

<br>

```
npm run server-json 
```
</li>
<li>Run the program

<br>

```
npm run start
```
</li>
<li>Build functional document

<br>

```
npm run docs
```
</li>
<li>Build test document

<br>

```
npm run test
```
</li>
</ol>
<hr style="background-color: #4b4c60"></hr>



## <img  align= center width= 80px height =80px src="https://media2.giphy.com/media/r0xXyasMMP3MA493e2/giphy.gif?cid=ecf05e47zzldel3l1zcdf08jibtto03qcwidkegx0itev1fd&rid=giphy.gif&ct=s">  Build & Deployment <a id ="deployment"></a>

There are a few additional environment variables that are used when building and deploying for production.

1. `REACT_APP_GOOGLECLIENTID`: A environment string used in connecting with google client.
1. `REACT_APP_FACEBOOKCLIENTID`:A environment string used in connecting with facebook client.
1. `REACT_APP_SITEKEY`: A environment string used in google captcha..
1. `REACT_APP_ENV`:  An environment string. Currently it is only used to differentiate different deploys (development or production).
1. `REACT_APP_PROXY_DEVELOPMENT`: The base URL of the development server. default value is `http://localhost:8000`.
1. `REACT_APP_PROXY_PRODUCTION`: The base URL of the backend


<hr style="background-color: #4b4c60"></hr>



## <img  align= center width= 70px height =70px src="https://media1.giphy.com/media/NnSFnC428LRHaxUNzj/giphy.gif?cid=ecf05e47r1hlw9wrf1swakc9gxgn508lyzvbyzgp9i1iyvwl&rid=giphy.gif&ct=s"> Features  <a id ="features"></a>



<div align="center">
   <img align="center"  width="800px" src="https://user-images.githubusercontent.com/71986226/214808210-ecd763c4-4826-42ba-a552-9b8a3438b20e.png" alt="Features">
   
</div>
<hr style="background-color: #4b4c60"></hr>
<div align="center">
   <img align="center"  width="800px" src="https://user-images.githubusercontent.com/71986226/214808658-bf3af293-148a-4548-bd9a-2089d31c12de.png" alt="Features">
   
</div>
<hr style="background-color: #4b4c60"></hr>

<table align="left;">
<tr>
<th >Feature</th>
<th width=40%>ScreenShot</th>
<th>Description</th>
</tr>
<tr>
<td>
🔷 Authentication
</td>
<td>

   <img align="center"  src="https://user-images.githubusercontent.com/71986226/214926073-f15e5b52-9752-4b19-b5e8-c174c0c37e9f.png" alt="logo">
</td>
<td>
<ul>
<li>Login</li>
<li>Sign-up</li>
<li>Sign-up with Google and Facebook</li>
<li>Reset Password</li>
<li>Forget User Name</li>
</ul>
</td>
</tr>
<tr>
<td>🔶 Create Post</td>
<td>

<img align="center" src="https://user-images.githubusercontent.com/71986226/214927486-0d758927-af11-444d-811b-50b1a95953ec.png" alt="logo">
</td>
<td>

<p>1) You con create 3 types of post</p>
<ul>
<li>Text: you can add text and styling it with fancy text editor</li>
<li>Image: you can upload photo or video to add to your post</li>
<li>Link: you can add link to your post</li>
</ul>
<p>2) You con add 2 tag to your post</p>
<ul>
<li>NSFW</li>
<li>spoiler</li>
</ul>
</td>
</tr>
<tr>
<td>🔷 Search</td>
<td>

   <img align="center"   src="https://user-images.githubusercontent.com/71986226/214928486-b004a587-072b-4e4d-99c1-82c9b232f248.png" alt="logo">
</td>
<td><p>The search results have 4 types</p> 
<ul>
<li>Posts</li>
<li>Comments</li>
<li>Communities</li>
<li>People</li>
</ul>
</td>
</tr>
<tr>
<td>🔶 User Actions</td>
<td>
<p>You con do actions on posts like</p>
<ul>
<li>Upvote & Downvote</li>
<li>Share</li>
<li>Edit post</li>
<li>Approve (if you are moderator)</li>
<li>Spam</li>
<li>Hidden</li>
<li>Save</li>
<li>Delete (if you are moderator or creator post)</li>
<li>Lock (if you are moderator or creator post)</li>
</ul>
</td>
</tr>
</tr>
<tr>
<td>🔷 Comments</td>
<td>
<p>1) Multilevel Comments</p>
<p>2) You con make comment on posts if you like </p>
<p>3) Actions on posts:</p>
<ul>
<li>Upvote & Downvote</li>
<li>Approve (if you are moderator)</li>
<li>Spam</li>
<li>Save</li>
<li>Replay</li>
</ul>
</td>
</tr>
<tr>
<td>🔶 Settings</td>
<td>
<ul>
<li>
<p>Account</p>
<ul>
<li><p>You can change (Email, Password, Gender, Country)</li>
<li>
<p>Delete Account</p></li>
<li>
<p>Connect with google </p></li>
</ul>
</li>
<li>
<p>Profile</p>
<ul>
<li><p>You can Edit (name , about, Profile picture, Background Picture) </p></li>
<li>
<p>You can on/off (NSFW, allow people to follow you)</p></li>
<li>
<p>You can add  social links to other website </p></li>
</ul>
</li>
</li>
<li>
<p>Safety and privacy</p>
<ul>
<li><p>You can block and unblock user  </p></li>
<li>
<p>You can see block list</p></li>
</ul>
</li>
</li>
<li>
<p>Feed Settings</p>
<ul>
<li><p>You can on/off (Adult content, autoplay media)</p></li>
</ul>
</li>
</ul>
</td>
</tr>
<tr>
<td>🔷 Notifications</td>
<td>
<p>You con hide notification </p>
<p>Types Notification:</p>
<ul>
<li>New Followers</li>
<li>Replies</li>
</ul>
</td>
</tr>
</tr>
<tr>
<td>🔶 Profile</td>
<td>
<p>You con view </p>
<ul>
<li>Overview: you can see activity of user</li>
<li>Posts: you can see posts of user</li>
<li>Comments: you can see comments of user</li>
<li>History: posts just yo see it</li>
<li>Saved: posts and comments you saved it</li>
<li>Hidden: posts you hide it </li>
<li>Upvote: posts you upvote it </li>
<li>Downvote:  posts you downvote it</li>
</ul>
</td>
</tr>
<td>🔷 Subreddit</td>
<td>
<p>You con create Subreddit</p>
<p>View posts of Subreddit</p>
<p>join or leave Subreddit</p>
<p>Subreddit types:</p>
<ul>
<li>👷🏼‍♂️ Public: Anyone can view, post, and comment to this community</li>
<li>👁‍🗨 Restricted: Anyone can view this community, but only approved users can post</li>
<li>🔒 Private: Only approved users can view and submit to this community</li>
</ul>
</td>
</tr>
<tr>
<td>🔶 Moderation</td>
<td>
<p>In Moderation  page, you can control:</p>
<ul>
<li>Spam: you can control spam posts</li>
<li>Edited: you can control edited posts</li>
<li>Unmoderator: you can control unmoderator posts</li>
<li>BANNED: you can ban users</li>
<li>MUTED:  you can mute users</li>
<li>APPROVED: you can add new moderators </li>
<li>MODERATORS: you can edit access to moderators</li>
<li>POST FLAIR: you can edit flair and make new flairs</li>
<li>RULES: you can add new rules to subreddit</li>
<li>COMMUNITY: you can edit (name of subreddit, community topics, community description, region, type of community)</li>
<li>POSTS AND COMMENTS: you can control type of posts</li>
</ul>
</td>
</tr>
<tr>
<td>🔷 Messages</td>
<td>
<p>1) Message Form (Send a private message)</p>
<p>2) Sent Messages: message which you sent</p>
<p>3) Inbox :</p>
<ul>
<li>All: All messages</li>
<li>Unread: message which you didn't read it</li>
<li>Messages : message which you receive</li>
<li>Post replies: replies to your posts</li>
</ul>
</td>
</tr>
<td>🔶 Push Notifications</td>
<td>
<p>1)  Notifications and messages </p>
<p>2) You must give permission to push notifications</p>
<p>3) Push Notifications types:</p>
<ul>
<li>Foreground</li>
<li>Background</li>
</ul>
</td>
</tr>
</tr>
<tr>
<td>🔷 Pages</td>
<td>
<ul>
<li>
<p>Home page </p>
</li>
<li>
<p>Popular</p></li>
<li>
<p>ALL</p></li>
<li>
<p>Explorer</p></li>
</ul>
</td>
</tr>
<tr>
<td>🔶 Listing</td>
<td>
<p>You can sort posts </p>
<ul>
<li>Hot</li>
<li>Top</li>
<li>New</li>
<li>Hot</li>
</ul>
</td>
</tr>
</table>

<hr style="background-color: #4b4c60"></hr>


## <img  align= center width= 70px height =70px src="https://img.genial.ly/5f91608064ad990c6ee12237/bd7195a3-a8bb-494b-8a6d-af48dd4deb4b.gif?genial&1643587200063">  GIF Demo <a id ="video"></a>

<table align="left;">
<tr>
<th>Video</th>
<th>Content</th>
</tr>
<tr>
<td  width="83.5%">
<video src="https://user-images.githubusercontent.com/71986226/214705509-cb1f10bb-aab2-4252-843b-57249bc10ed3.mp4"   >
</video> 
</td>
<td >
<ul>
<li>Authentication</li>
<li>Comments</li>
<li>Notification</li>
<li>Messages</li>
<li>Settings</li>
</ul>
</td>
</tr>
</table>
<hr style="background-color: #4b4c60"></hr>
<table align="left;">
<tr>
<td width="80.5%">
<video src="https://user-images.githubusercontent.com/71986226/214708909-fccfd917-f8bb-4166-a76d-de1248faa2bd.mp4"   >
</video> 
</td>
<td >
<ul>
<li>Home page</li>
<li>Posts</li>
<li>Create Post</li>
</ul>
</td>
</td>
</tr>
</table>
<hr style="background-color: #4b4c60"></hr>
<table align="left;">
<tr>
<td width="83.5%">
<video src="https://user-images.githubusercontent.com/71986226/214707390-e21e2c04-08b2-4319-bb1e-7a3cd6316bc4.mp4"   >
</video> 
</td>
<td   >
<ul>
<li>My profile</li>
<li>Other Profile</li>
<li>Moderation</li>
<li>Top Communities</li>
</ul>
</td>
</tr>
</tr>
</table>
<hr style="background-color: #4b4c60"></hr>
<table align="left;">
<tr >
<td  width="83.5%">
<video src="https://user-images.githubusercontent.com/71986226/214714497-83c68943-4ced-4116-a06d-7830b0e0607d.mp4"   >
</video> 
</td>
<td >
<ul>
<li>Create Subreddit</li>
<li>Subreddit</li>
<li>Moderation</li>
<li>Search</li>
<li>Explorer</li>
</ul>
</td>
</tr>
</table>



<hr style="background-color: #4b4c60"></hr>

## <img  align="center" width= 70px height =55px src="https://media0.giphy.com/media/Xy702eMOiGGPzk4Zkd/giphy.gif?cid=ecf05e475vmf48k83bvzye3w2m2xl03iyem3tkuw2krpkb7k&rid=giphy.gif&ct=s"> Contributors <a id ="contributors"></a>

<table align="center" >
  <tr>
     <td align="center"><a href="https://github.com/nouralmulhem"><img src="https://avatars.githubusercontent.com/u/76218033?v=4" width="150px;" alt=""/><br /><sub><b>Nour Ziad Almulhem</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/BasmaElhoseny01"><img src="https://avatars.githubusercontent.com/u/72309546?v=4" width="150px;" alt=""/><br /><sub><b>Basma Elhoseny</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/fady2001"><img src="https://avatars.githubusercontent.com/u/75928317?v=4" width="150px;" alt=""/><br /><sub><b>Fady Adel</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/AhmedHosny2024"><img src="https://avatars.githubusercontent.com/u/76389601?v=4" width="150px;" alt=""/><br /><sub><b>Ahmed Hosny</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/AdhamAliAbdelAal" ><img src="https://avatars.githubusercontent.com/u/83884426?v=4" width="150px;" alt=""/><br /><sub><b>Adham Ali</b></sub></a><br />
    </td>
     <td align="center"><a href="https://github.com/EslamAsHhraf"><img src="https://avatars.githubusercontent.com/u/71986226?v=4" width="150px;" alt=""/><br /><sub><b>Eslam Ashraf</b></sub></a><br /></td>
  </tr>
</table>

## 🔒 License <a id ="license"></a>

> **Note**: This software is licensed under MIT License, See [License](https://github.com/NonLegit/Reddit-Front/blob/development/LICENSE) for more information ©NonLegit.
