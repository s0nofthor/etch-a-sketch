# etch-a-sketch
An in-browser adaptation of the Etch-a-Sketch

How To Use:

    It should be pretty easy to tell how to use this site once you launch it. Simply drag your mouse around the grid to color it in. If you want, you can change the resolution easily. Just please don't get greedy about it.

Biggest Challenges:

    Flexbox was definitely something I've been struggling with as I went into this one, specifically getting things to fit in the format I wanted. My approach so far had been to use the tried and true method of trial and error, which at least seemed to work. The difficult thing about working with something that hasn't quite "clicked" is that you need to fumble around like that.

    Thankfully, the problems that seem to take up most of my time seem to have the simplest of solutions. Mine that took the most time was the formatting of the tiles that make up the grid. I was trying to figure out ways to write css that would be reactive to the sizing conditions of the window while also allowing the user to choose the resolution, but with the route I was taking I realized that I'd need to complicate things by a factor of a hundred. This issue disappeared the moment I realized I could just set flex-grow to 1. Just like that, everything was in its right place. I guess the simplicity is what's so beautiful about programming. There's always someone who's put a lot of thought towards those problems and has set up a way to get past it, you just need to find it and understand how it works to get rid of the problem for good.

Project instructions provided by https://www.theodinproject.com/lessons/foundations-etch-a-sketch

PS: I will be completing the "extra credit" quite soon