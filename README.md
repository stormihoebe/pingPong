# _Ping Pong Games_

#### Simple Counting Games, 2/22/17

### By Stormi Hoebelheinrich

## Description

#### This website contains three simple counting games. The first game will take a user inputted number and return a list counting from 1 to the given number with a couple of exceptions. With numbers that are divisible by 5, the computer counts "pong", numbers divisible by 3, are replaced by "ping", and numbers divisible by both 3 and 5 are replaced by "pingpong". In the second game, the user chooses a number to count to, numbers that will be replaced by a certain word, and the word that replaces the numbers. The third game is a simple quiz to see if you can identify the counting pattern.

### GAME 1 Specifications

| Behavior |   Input   |   Output   |
|----------|:---------:|:----------:|
| Output can count to a number inputted by the user | 2| [1,2] |
| Output can replace numbers divisible by 3 with "ping"| 3| [1,2,ping]|
| Output can replace numbers divisible by 5 with "pong"|5| [1,2,ping,4,pong] |
| Output can replace numbers divisible by 15 with "pingpong"| 15| [1,2,ping,4,pong, ping,7,8,ping,pong,11,ping,13,14,pingpong ] |


### GAME 2 Specifications

| Behavior |   Input   |   Output   |
|----------|:---------:|:----------:|
| Output can count to a number inputted by the user | 2| [1,2] |
| Output can replace numbers divisible by second number with a user inputed word| 4, 2, word| [1,word,3,word]|


III Ping-Pong Game Three
* program recognizes user input
* program compares user input to the correct answer
* program displays whether or not input was correct

###This is the initial release (1.0):
https://github.com/stormihoebe/pingPong


## Setup/Installation Requirements
Open the terminal and preform the following:
* clone repository
* open index.html in web browser
* enter number for first game
* enter numbers and word for second game
* try to solve the pattern in third game

## Known Bugs

The program has no known bugs. It is not optimized for all screen sizes.

## Support and contact details

Contact Stormi at Epicodus

#Built with the following tools:

* Atom (https://atom.io/)
* GitHub (https://github.com/)
* Git (https://git-scm.com/)
* Bootstrap (http://getbootstrap.com/)
* jQuery (https://jquery.com/)

#License

*This software is licensed under the MIT license.*

Copyright (c) 2017 Stormi Hoebelheinrich
