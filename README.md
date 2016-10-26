# TH.Leaderboard

##Description
Simple AngularJS application that displays dynamic leaderboard information of real people.

##Key points
1. The application is configured to display the people in groups of 16 people.
2. The application displays the top three people on top of the screen.
3. The time needed to cycle between the groups of N people is set to 4 seconds.
4. The application is intended to be displayed on a 48' TV screen.
5. The total amount of people that may appear on the leaderboard is about 300.
6. The place where the people may be watching this leaderboard is a gym.

##Decisions that I took
 To reach out to this point I had to consider the size of the monitor, the users that may be interested on watch the leaderboard statics, the place where the monitor may be located, the existing site conventions (colors for example).
 
 The first thing that I thought was that the first thing a user will look on the screen is his picture. So, I gave high importance to the size of the picture and made it rounded trying to follow the existing conventions on the development site.
 Then, as the size of the picture was so important, I had to find then the optimistic size of each "user card". It couldn't be too big because the biggest the user card is, the slower the process to cycle thorough all the 300 users will be. It couldn't be too small because most of the users won’t be too close to the screen at first and the things that I consider they will want to identify at first is the rank and the picture.
 Also, the goal here for me was to make the process of cycling through the users the closest as possible to 1 minute. Actually it may take around 75 seconds ( (300 users / 16 users per screen) * 4 seconds )
 4 seconds are fine from my point of view: If the user wants to see specific information of himself or related to other person, he may want to get close to the screen. Then, 16 users are few if you consider as well the size of the picture. So lets say that trying to find an user may take 2 seconds or maybe 2,5. Once the user finds out the right "user card", there is no much information to see on it (name, rank and RX), so it may take 1-2 seconds to read it.
 Other important thing is that I didn't want to include too much information. The simpler the better, mostly with too many users.
 By last, just want to say that I didn't include any additional animation to avoid overhead of time considering the fact that there are many users and the time is too valuable. 
 
 #Development
 - I decided to use AngularJS because it is the framework being used on the development site.
 - I also included Bootstrap 3, as I feel too familiarized with.
 - Although I included Bootstrap, I made lot of customizations of CSS on the custom.css file.
 - I made the deploy on Azure because I have an account on it.
 - The structure of the code is one of my favorites as it is well modularized and all the components are separately from each other.
 

##Link of the site
http://thleaderboard.azurewebsites.net/
