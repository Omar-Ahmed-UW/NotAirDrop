# NotAirDrop

## Inspiration
Based on the hackathon’s themes, we decided to make a web application that also works on mobile devices because we were inspired by the problems of sharing files, and photos, between friends, and other people. Oftentimes we are limited by upload size, and the time it takes to transfer files because of this issue we decided to create our own application that allows us to send files without needing the same wifi connection through AWS servers.
## What it does
This is a File sharing application built with the React Native JS framework. When the application is first started up, a one-time 4-digit alphanumeric code is generated to identify your device. You select a file from your local device and input the device ID you are sending the file to. IDs are stored in AWS Amplify and all IDs are verified to make sure they are valid. Files are transferred through an AWS S3 bucket.
## How we built it
We started off by making a repo on GitHub to store our work in and split it into 2 branches front and back end. The front end focused on the UI on react native and generating a platform for the back end to link with. Backend focused on creating unique UserID for local machines as well as focusing on AWS servers using amplify to transfer and store files to the S3 Bucket. The back end used the bucket to send files to and from users depending on 3 things FromUserID, URL, and ToUserID with this information the bucket allows us to send files to the ToUserId from them to receive when they search for files sent to them.
## Challenges we ran into
The challenges we ran into were our inexperience coding in javascript because of this we had to do a lot of research on how to react-native uses of js to code. One extreme challenge was getting AWS set up a process that took most of our time as a group setting up the s3 bucket and getting every functional was a very difficult process.
## Accomplishments that we're proud of
We are proud of setting up the whole frontend and being able to connect it to our backend successfully. We are also proud of ourselves for being able to fully use AWS s3 Bucket and getting everything set up.
## What we learned
Over the course of this project we have learned the most about react-native and front and back end development we started off with a limited understanding of javascript and finished with a stronger base. We also learned how to use AWS servers and databases to store and share files using unique users that are saved locally to the machine you are using.
## What's next for NotAirDrop
Upgrading our service to be able to handle bigger files as well as videos to send
