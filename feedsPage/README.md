# Intro - 

This project is a basic feeds page with features like lazy loading, like ,comment , remove like and comment, and basic auth(frontend auth I didn't wanna complicate the project or divert the purpose of project). 

You can start both client and server with `npm run start` or `npm start`.

The feeds video are just iframe which supports youtube and twitch video's, you can add data into db.json or i have implementes a route to add data, you can also use that. your data of likes and comments will be stored in db.json with your username so your data can be sustained throughout every session.

feel free mess with the project or suggest me some better ways of doing it. ;-) .

**The part that i love the most**

- Lazy loading and the post itself.  I like them all. UI can be improved but I just Wanted to make a working feeds page

    ![Feeds page](feedpage.png)



# Languages and libraries - 

Html , Css, Javascript , reactjs, nodejs , expressjs, materialUI, few Google fonts

# Code Concept and Details - 

All the features implemeted are just basic react operations and basic server logic for likes and comments , I made sure once the video iss rendered it never re renders again no matter what unless the page is reloaded, this made the feeds section pretty fast. 

The pagination I implemented in this project is inspired by how dynamoDB implements it's pagination.
I first send a constant amount of data along a variable LastEvalValue which is a JSON Data that consists
of parameters that uniquely identifies the last sent data. This LastEvalValue is then send to backend to recieve more data. If the data left is less than the pagination number server doesn't send the variable LastEvalValue this is an indicator for client that there is no more data left to send.


**Some difficulties**

1. The difficulty was setting iframe for twitch because of it's new update of mentioning 
parenturl in the iframe embeded link which doesn't allow you to add special characters like ':' 
for specifying port so  had to shift to javascript version of adding twitch video .
