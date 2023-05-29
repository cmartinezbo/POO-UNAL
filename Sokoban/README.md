<p align="center">
  <img width="500" src="https://github.com/cmartinezbo/POO-UNAL/blob/main/Sokoban/GitHub%20Resources/titleGitHub.png"/>
</p>

<p align="center">
  <strong>Welcome to <a href="https://sokoban.poo-un.repl.co/"> Sokoban Game: Blue Lock Edition</a>. An online, 2D Sokoban game using JavaScript, P5 and HTML5.</strong>
</p>

<p align="center">
  <img width="500" alt="Game screenshot" src="https://github.com/cmartinezbo/POO-UNAL/blob/main/Sokoban/GitHub%20Resources/image.png">
</p>

 <h2> Introduction ✅</h2>
 
  - Go to the following <a href="https://sokoban.poo-un.repl.co/"> <em> link </em> </a> to play the game.
  
  - Once you open the game, detailed instructions are given.
  
  - There are two different interfaces, in the settings menu you can choose the player, the sport and the level you want to play. Once you press the play button, the fun begins (while playing you cannot adjust the settings mentioned at the beginning). 
  
  - There is a level that implements the classical maze game, try to find it.
  
  - You can not only play in your computer (wasd or arrow keys), but you can play it on your phone (just slide in whatever direction you want, android devices and chrome browser are suggested).
  
  - Finally, ¡press play and have fun!


- You can find <a href="https://github.com/cmartinezbo/POO-UNAL/blob/main/Sokoban/GitHub%20Resources/References.md">here</a> all references of resources used on this game.

 <h2> Key Implementation Details 🛠</h2>
 
  - JSON is used to create maps (<a href="https://github.com/cmartinezbo/POO-UNAL/blob/main/Sokoban/Resources/Maps/map1.json">here</a> you can find an example) and also to get every object position to allow either player and ball movement, it also allows every object to interact with each other.
  - There are visual and sound responses to user inputs, such as play/settings button and sliders.
  - There is music played according to play/settings interface.
  - If a sound starts playing in draw function of p5, the audio overlaps one on top of the other, according to each iteration of the loop. That's why a function is created to only work in the first loop of the draw function, so that the audios are played only once and this problem is solved.
  - Sokoban game mechanics allow level creation to make a maze map also, so there are 2 games in 1 (Sokoban and Maze).


 <h2> Future Features 🔜</h2>
 
  - We will implement a scoreboard where you will find the best scores for each map.
  - We are going to develop and design more maps, levels, characters, sounds and personalization.
  - Our plan is that you could play with your friends by cross-platform (PC and mobile), also you will be able to play with your friends offline (Multiplayer).


 <h2> Try to beat Creator's Scoreboard 🔜</h2>
  - You can find our scoreboard for the first 4 levels <a href="https://github.com/cmartinezbo/POO-UNAL/blob/main/Sokoban/Creator's Scoreboard">here</a>.


