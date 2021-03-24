![The Car Club](memoryTesting/readme.md/assets/img/ami-responsive.jpg "am I responsive")

# The Car Club

## [Code Institute](https://codeinstitute.net)
### Full Stack Web Development Course
### Milestone Project 2 - Interactive Frontend Development
--------------------------------------

<span id="index"></span>
## Index
 <a href="#project">Project Idea 💁</a>
1. <a href="#ux">UX 👌</a>
1. <a href="#features">Features 👍</a>
1. <a href="#technologies">Technologies Used 👉</a>
1. <a href="#testing">Testing 🔧</a>
1. <a href="#deployment">Deployment 💥</a>
1. <a href="#credits">Credits 👋</a>

[live website here](https://martin-itt.github.io/memoryTesting/index.html)

<span id="project"></span>

----------------------------------------

# Project idea

The idea to create a car logos memory game *The Car Club* came from my son who explores and learnes car makes while outside on a walk. To make this project more attractive for everyone I was looking for an API which would fetch different logos from manufacturers all over the world for each game.


<span id="ux"></span>
# 1. UX 👌
## 1.1 Strategy 

The goal of this project is to provide fun for everyone, to train player's memory and to present all car logos from around the world. Intuitive design and consistent navigation will satisfy user needs.

### User stories

With an agile approach I will be focusing on both external and internal clients.

As user I would like to:

- be able to set difficulty level - also in training mode
- see the time needed and flips made
- see various logos each time to make the game more interesting
- quit the game before time is up
- contact car club to submit feedback
- see Car Club address
- easy nav menu
- responsive design for mobile devices

As a website owner I would like to:

 - display my address on Google maps
 - attract users with intuitive design
 - be accessible via contact form

## 1.2 Scope 

The scope will define what features will be implemented into our project based on user stories. For Minimum Viable Product the following features were identified:

- attractive Welcome screen
- intuitive menu
- how to play instructions
- game itself with three levels of difficulty
- timer and a flips counter
- highest score table
- email function
- Google maps location

To be implemented:
- JSON file with car logo url's
- All car logos gallery with basic data about manufacturer

## 1.3 Structure

The project is divided into two main categories. The first is a web content - main page where the game can be launched and a contact page with address, map and contact form. Main page and game screen would have same hero image but it better appeared to have one image for Main screen and Contact screen and another one for Game itself. 
The second is a game window. It will consist of four screens, with level settings, game itself, game results and highest scores.
Navigation between web content and the game will be caried over index.html.

## 1.4 Skeleton 

Wireframes were created using Figma
![The Car Club](./assets/img/figma1.jpg "Figma wireframes")
![The Car Club](assets/img/figma2.jpg "Figma wireframes")

The priorities for this project was to create a memory game written in JavaScript and JQuery library and to connect Google Maps and EmailJS API's. 
Navigation within web pages are caried over intuintive and responsive navbar. It contains Car club logo and two links for each page. A hero picture of a sport car creates the body. A footer consists of a clickable icon to my Github repository and a copyright text. Address, a Google Map window and contact form sending emails over API are inside body of contact page. Game launcher is implemented with BS4 modals in the body of the index page. After clicking Play button on index page a first modal menu will open offering a New game option, Best scores and Game rules. On selection of the New game option a new modal menu will open to select difficulty level. This will navigate to a game screen.
Game screen has no navbar neither the footer. There is a score bar on the side with Time, Score and a Quit button. (Score bar was later moved to the top of the screen). There are three different game boards each written by JavaScript. Player can either Win the game, loose it or interrupt with a quit button. Game results will be displayed and player can either play a new game or return to main menu. The hardest level counts the score. If the player wins the game beating top five players the score can be saved in the best players window. This is accessible after well played game or from main page.

## 1.5

The designed started selecting suitable hero image. I decided to choose a Lamborgini car on a motorway bridge. 
The color scheme was selected using Online Adobe Colors - and extracting the color palette from our hero image.

There is an animation of rotating squares to support the loading page effect. I found basic system fonts sufficient for this project and with the focus on loading efficiency I did not use any external fonts.

<span style="color : #885445">#885445 Sienna color is used for navbar and footer</span>

<span style="color : #28a745">#28a745 Seagreen color is used for buttons</span>

<span style="color : #17a2b8">#17a2b8 Lightseagreen color is used for buttons</span>

<span style="color : #dc3545">#dc3545 Crimson color is used for buttons</span>

Car logo was downloaded from NicePNG.com

Github logo was downloaded from iconfinder.com


<a href="#index">Back to top ☝️ </a>
<span id="features"></span>
# 2. Features 🎮

There are three main features implemented in the project: The Game, The Google Maps, The EmailJS function.

Some features of the game: 
## script.js

- function getData(cb)

    This project does not have any saved pictures of car logos except a picture of old yellow car used for the back of the cards. On game page load JS will loop through a JSON file and extract URL's from there. 

-   function getRandomImages(array)

    This function shuffles array of 330 imported images so every time the game cards has different logos. This function does not shuffle the cards on board.

- getData(function(data) inside function createGame()

    This function create the game itsef. All HTML elements and their classes and ID's - the cards and the board layout are written here.

There are another functions to flip the cards, unflip if no match or disable same cards if match. Some functions and variables protect the game logic - only two cards flipped at the time, reset the cards values so memory is cleared before first clicks. Implemented timer and flips counter check if player has won or lost the game.

## gameover.js
Code will write flips / time spent for game lost.

## gamewon.js
Code will write flips / time left or spent for game won.

- saveHighScore = (e) =>

    If player hits the best score a modal enables player to save his name.

- function limitKeypress(event, value, maxLength)

    This function limits max 12 characters to be typed for player name

There is also one event listener to avoid leaving players name input blank.

## maps.js
Maps.js contain code initializing new map with a set of markers and their comments.

## emailJS
Email functionality is written in a script tags at the bottom of contact.html file. This allows user to send message to The Car Club.

## github

Button in footer allows user to see my Github repositories.

Further features were identified and might be implemented later, eg display logo name on card hover. Also a page off all car makes and their logos could be added to project.

<a href="#index">Back to top ☝️ </a>
<span id="technologies"></span>

# 3. Technologies used 🔌
## 3.1 Languages

- HTML/HTML5

    Basic structure of project was written in HTML5.

- CSS

    Used to style HTML elements.

- JavaScript

    Ebables interactive content in project.

## 3.2 Libraries

- Bootstrap 4

    Some elements - eg Navbar or Modals were written using BS4.

- JQUERY

    write less, do more. Very efficient library saving time to write lines of code in JS.

## 3.3 IDE, Version control & Hosting

-  Visual Studio Code

<span>README.md</span> and all code was written in VS Code.

- Git with GitBash

    used for version control.

- GitHub

    hosting service to save the project in a repository.

## 3.4 Other tools

- [Figma](https://www.figma.com/)

    Online tool to create wireframes for various projects.

- [Adobe Color](https://color.adobe.com/)

    Online tool to extract and match color schemes.

<a href="#index">Back to top ☝️ </a>
<span id="testing"></span>
# 4. Testing 💉

- Responsivness was checked with various devices, OS systems and browsers. Few bugs were found and fixed using CSS

- Cards wouldn't flip - evenlistener was not created properly in JS file.

- Card images were not loaded on document.ready state - timeout function was added.

- Card images were not displaying on game start - spinning loader added.

- Marker clustering was not working with infoWindows - fix found in stackowerflow.com and Google Maps API documentation.

HTML code was checked in W3C validator - https://validator.w3.org/ 

CSS code was checked in W3C validator -  https://jigsaw.w3.org/css-validator/ 

JS code was checked in BeautifyTools - http://beautifytools.com/javascript-validator.php 

JS code was also checked in JSLint - https://jslint.com/


<a href="#index">Back to top ☝️ </a>
<span id="deployment"></span>
# 5. Deployment 🌀

I developed this project in VS Code. Code was pushed using GitBash into GitHub repository in my account. This process is described below:

1. Instal VS Code and Git on your computer.
1. Set up a GitHub account create a new repository.
1. Open GitBash and change the current directory to your local project.
1. Use *$ git init -b main* to initialize this directory as your main branch.
1. Code can now be written in VS Code. Changes must be saved before commiting to repository.
1. Use *$ git add .* command to add all files into repository. Files can also be added separately by specifying their names in *git add* command. Files and locations to be ignored can be specified in .gitignore file. 
1. Use *$ git commit -m "First commit"* to commit changes into the repository.
1. Find and copy your GitHub repository URL. This can be found in GitHub repository's 'Quick Setup Page'.
1. Use *$ git remote add origin 'remote repository URL'* to add the URL to your remote repository. This can be verified using *git remote -v* command.
1. Command *$ git add .* must be used again to add files which will be later commited.
1. Use *$ git commit -m " 'what has been done or changed comment here' "* to commit changes to your local repository.
1. Use *$ git push origin main* to push your commits into GitHub repository.
1. Code needs to be commited and pushed regularly. This allows for version control.
1. You can use GitHub to host your website. In GitHub settings, scroll down to GutHub Pages. Select 'Master branch' in drop-down 'Source' menu. This display your website url.

This is not the only way how you can work using local repository. You might find more suitable approach using GitPod or VS Code Git features. I would suggest to search for Git on Slack or Google. There are also tutorials available on YouTube.

This code can be cloned or downloaded. Deployed version of this project is exactly the same as devolper version. This is located in master branch.

<a href="#index">back to top ☝️</a>
<span id="credits"></span>
# 6. Credits 💳


I would like to thank to:

- My family for patience

- Adegbenga Adeye - my mentor, for guidance and encouragement throughout this project.

- Code Institute and Slack community

- Other developers, photographers and others where a part of a code or their work was used:

    filippofilip95, marina-ferreira, David-A-Ray

    Jose Mueses, Matthias Zomer, Abdulwahab Alawadhi, 

6.1 References

- cars.json file were sourced at

    https://github.com/filippofilip95/car-logos-dataset

- game logic

    https://marina-ferreira.github.io/tutorials/js/memory-game/

- some game functionality

    https://github.com/David-A-Ray/MS2-Whats-your-poison-memory-game

- tutorials from Code Institute

    https://courses.codeinstitute.net/

- tutorials from w3schools

    https://www.w3schools.com/

- Stack Owerflow community

     https://stackoverflow.com/

- Google maps developers

    https://developers.google.com/maps/documentation/

- images

    http://ami.responsivedesign.is/ - title picture in readme<span>.</span>MD

    https://www.pexels.com/photo/photo-of-five-cars-parked-1280560/ - five cars parked
    
    https://www.pexels.com/photo/yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020/ - yellow Nissan

    https://www.pexels.com/photo/photo-of-car-on-expressway-3422964/ - car on motorway bridge

    www.iconfinder.com/icons/298822/download/png/512 - github icon

    -------------------------------------

For any issues related to this project please email me on martinusko@gmail.com

<a href="#index">back to top ☝️</a>
