<h1 align= "center">Chat Application</h1>

<p align= "center" ><img src="/gifs/rm1.png" height= auto width= 80%" /></p>
<hr>

<p align= "center" ><img src="/gifs/chat.gif" /></p>
<hr>

<p align= "center" ><img src="/gifs/channels.gif" /></p>
<hr>

### Required Skills

- Python - [Tutorial](https://github.com/wncc/learners-space/tree/master/Python)
- Flask - [Tutorial](https://www.wncc-iitb.org/wiki/index.php/Flask)
- HTML - [Tutorial](https://www.wncc-iitb.org/wiki/index.php/HTML) [Tutorial](https://github.com/wncc/learners-space/blob/master/Web%20Development/Week%201/HTML.md)
- Javascript - [Tutorial](https://www.wncc-iitb.org/wiki/index.php/JavaScript_Basics) [Tutorial](https://github.com/wncc/learners-space/blob/master/Web%20Development/Week%203/Bootstap%2BJavaScript.md)
- Websockets (SocketIO) - [Tutorial](https://flask-socketio.readthedocs.io/en/latest/)

### Problem Statement

This is a Chat Application where users will be able to sign into your site with a display name, create channels (i.e. chatrooms) to communicate in, as well as see and join existing channels. Once a channel is selected, users will be able to send and receive messages with one another in real time. 

- Display Name: When a user visits your web application for the first time, they should be prompted to type in a display name that will eventually be associated with every message the user sends. If a user closes the page and returns to your app later, the display name should still be remembered.

- Channel Creation: Any user should be able to create a new channel with a channel key, so long as its name doesn’t conflict with the name of an existing channel.

- Channel List: Users should be able to see a list of all current channels, and selecting one should allow the user to view the channel. We leave it to you to decide how to display such a list.

- Messages View: Once a channel is selected, the user should see any messages that have already been sent in that channel, up to a maximum of 100 messages. Your app should only store the 100 most recent messages per channel in server-side memory.

- Sending Messages: Once in a channel, users should be able to send text messages to others the channel. When a user sends a message, their display name and the timestamp of the message should be associated with the message. All users in the channel should then see the new message (with display name and timestamp) appear on their channel page. Sending and receiving messages should NOT require reloading the page.

- Remembering the Channel: If a user is on a channel page, closes the web browser window, and goes back to your web application, your application should remember what channel the user was on previously and take the user back to that channel.

### Improvements Needed

- Storage: Conversation Data is to be stored in local storage at client-side in browser sessions.

- Storage 2: Display Names and Passwords to be stored in PostgreSQL Database and sessions to be implemented for user Log in and Log out.

- UI/UX: A robust mobile responsive application has to be implemented. People with knowledge in Bootstrap4 and CSS can work on this.

- Document Sharing: Feature to upload and share documents in different channels.

You can find more such improvements in issues on which you can contribute.
