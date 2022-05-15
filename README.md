# NotAirDrop

## Inspiration
Based on the hackathon’s themes, we decicded to make a web application that also works on mobile devices because we were inspired by the problems of sharing files, photos, between friends, and other people. Oftentimes we are limited by upload size, and the time it takes to transfer files because of this issue we decided to create our own application that allows us to send files without needing the same wifi conneciton through AWS servers.
## What it does
This is a File sharing application built with the React Native JS framework. When the application is first started up, a one time 4 digit alphanumeric code is generated to identify your device. You select file from your local device and input the device ID you are sending the file to. ID's are stored in AWS Amplify and all ID's are verified to make sure they are valid. Files are transfered through an AWS S3 bucket, and are deleted after a certain amount of time.
## How we built it
We stared off with making a repo on github to store our work in and split it into 2 branches front and back end. Front end focused on the UI on react native and generating a platfrom for the back end to link with. Backend focused on creating unique UserID's for local machines as well as focusing on AWS servers using amplify to transfer and store files to the S3 Bucket. Back end used the bucket to send files to and from users depneding on 3 things FromUserID, URL, ToUserID with this information the bucket allows us to send files to the ToUserId from them to recive when they search for files sent to them.
## Challenges we ran into
Challenges we ran into were our inexperience coding in javascript because of this we had to do a lot of research on how react native uses js to code. One extreme challege was getting AWS setup a process that took most of our time as a group setting up the s3 bucket and getting every functional was a very difficult process.
## Accomplishments that we're proud of
We are proud of setting up the whole frontend and being able to connect it to our backend successfully. We are also proud of ourselves for being able to fully use AWS s3 Bucket and getting everything setup.
## What we learned
Over the course of this project we have learned the most about react native and front and back end development we started off with a limited understanding of javascript and finished with a stronger base. We also learned how to use AWS servers and databases to store and share flies using unique userIDs that are saved locally to the machine you are using.
## What's next for NotAirDrop
Upgrading our serivce to be able to handle bigger files as well as videos to send
