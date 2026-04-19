# etch-a-sketch
An in-browser adaptation of the Etch-a-Sketch

How To Use:

It should be pretty easy to tell how to use this site once you launch it. Simply drag your mouse around the grid to color it in. If you want, you can change the resolution easily. Just please don't get greedy about it.

Biggest Challenges:

Flexbox was definitely something I've been struggling with as I went into this one, specifically getting things to fit in the format I wanted. My approach so far had been to use the tried and true method of trial and error, which at least seemed to work. The difficult thing about working with something that hasn't quite "clicked" is that you need to fumble around like that.

Thankfully, the problems that seem to take up most of my time seem to have the simplest of solutions. Mine that took the most time was the formatting of the tiles that make up the grid. I was trying to figure out ways to write css that would be reactive to the sizing conditions of the window while also allowing the user to choose the resolution, but with the route I was taking I realized that I'd need to complicate things by a factor of a hundred. This issue disappeared the moment I realized I could just set flex-grow to 1. Just like that, everything was in its right place. I guess the simplicity is what's so beautiful about programming. There's always someone who's put a lot of thought towards those problems and has set up a way to get past it, you just need to find it and understand how it works to get rid of the problem for good.

Project instructions provided by https://www.theodinproject.com/lessons/foundations-etch-a-sketch

PS: I will be completing the "extra credit" quite soon

Update, April 19th, 2026:

It turns out "quite soon" is now.

I've finally wrapped up adding the functionality of letting each cell be its own randomly assigned color and dimming each tile the more it's drawn over. This proved the rule yet again of the solution being simpler than I had belived it could be, another relief. I was really puzzling over how to get a "filter" element to increase in opacity with each event activation while juggling a few different limits to its functionality like making sure it doesn't start immediately and how to append it to the tile element from the intial activation while still being able to be referred to while outside of the scope (I thought figuring out how to refer to the newly created element through the html instead of the js file might do it). I abandoned this when it hit me that I could just decrease the opacity of the tile itself and just make the background of the container black. This got around the scope issue immediately and resulted in much simpler code, which excites me quite a bit. I'm also quite pleased with how little time it took me to get through this project, seeing as how I've quite evidently struggled with being daunted by projects and the fact that I don't seem to be moving forward terribly quickly session to session when I get stuck on parts of it. Before, I would have a panic response of procrastinating and prioritizing other things in my life, but this time I made sure I was chipping away at it each day and constantly trying new things and thinking the problems over in my spare time. I feel this will propel me to keep this momentum up and really start to use my skills with more and more ease.

Expect some stlyistic additions in the future.