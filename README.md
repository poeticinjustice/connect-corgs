# connect-corgs
First project for GA

Connect Corgs!

You got it. I’m making connect four with pictures of corgis. These oblong dogs will battle it out at their rounds ends: their foxy faces and bouncy butts.

That’s the only goal, initially. If I can figure out how to make the connect four part work well, and I’m feeling ambitious, then I hope to add features like having the user choose the size of the grid (between three and nine in each direction—maybe less to keep it reasonably responsive) and choosing the number of connected corgs (also between three and nine). Ultimately, I’d like it to look like the images are falling into place, fading in and out as they pass each hole. Maybe the could randomly rotate too. 

At first, it would be one corgi’s butt and another corgi’s face that would duel, but I would like to have arrays of images of different color corgwn (the plural of corgis if you speak Welsh, the dog’s indigenous language) that would duke it out. I would even consider adding inferior animals like cats or c0derz. 

Before I add the pseudocode, why is my pdf pink? There's no such thing as a pink corgi!

PSEUDOCODE

When I first code the game, I will create a static grid using a table in html. If I find success with my connect four algorithm, I will create the table dynamically using jquery, but I suspect the algorithm will be the most difficult part to implement, so the rest of this discussion will be about a regular game of connect four with a static grid in an html table.

- Create a grid in html
- Create a class for each player to populate the cell with either a corgi face or butt
- Create a message box to indicate which player starts and whose turn it is
    - Create a function that randomly chooses heads or tails (but we all know many corgis don’t have tails)
- Create a function that serves as the corgi drop off (check the arrows at the top of the mock-up). When a player clicks directly above (not sure if an arrow will really be there) or on a column, that will be where the corgi will fall.
    - Upon clicking a column, the function will check what the highest populated position is and add the player’s (by class) corgi to the row in the column directly above the top corgi already in the column.
    - If there is no corgi played in that column, the corgi will fall to the bottom or the first row
    - If the column is full, a notification will appear in the message box, and nothing will happen in the game
    - Make the corgi image fadeIn to whatever cell is ultimately chosen
- Create a function that will track which player’s turn it is either by using a boolean expression or checking against even/odd numbers with an if statement
- Watch for patterns!
    - Event listeners and other stuff. I’m not sure how I’ll do this yet, but it will be the hardest part, and I suspect I’ll credit a person, site or several of each, but I’ll take a stab about how it might work
        - Once a corgi falls, it will trigger an event listener that will sniff around to see what other corgs are hanging out near him. He will have to look at each of the cells that directly surround him including those connected diagonally
            - To find the diagonal cells he may have to move twice
        - Once he sniffs a neighboring cell, he will know if it is another corgi like him or if he’s just sniffing some other corgi’s butt.
            - If he’s sniffing butt, then he’ll just stop and go find another corg to sniff (It’s a game, it isn’t supposed to be realistic)
        - If he finds a corgi like him, then he will have to keep going in the same and directly opposite direction via a loop.
            - This is probably where I’m going to need the most help (like if he goes in one direction, then tracks back, I’ll need to make sure that each cell is only counted once—maybe it will create an array that will check for duplicates—each cell could be given an id based on its position in the table)
        - Every time a corgi is dropped, it will have to trigger this pattern, which will begin running in a clockwise motion and will go in the opposite direction once it hits an empty cell, the end of the grid, or a cell populated by the opponent.
            - The function will only have to track 180 degrees because it will go in the other direction, but I will test 360 degrees in case.
- If four cells in a line match, someone wins

