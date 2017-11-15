# Homebrew_Heroes

## What is it?

Homebrew heroes offers a way for homebrewers to showcase their creations to people in the homebrew community. 

## How does it work?

Users can add their beers to the site for other brewers to view. They can choose to include attributes like:
  - Name
  - Style
  - ABV
  - IBUs
  - A description
  - The Recipe

Users are able to search through a beer-feed that displays all the beers that are uploaded by every user.

## Planning

### Trello
https://trello.com/b/GoDxD5lz/homebrew-heroes

### User Research
We just so happened to be friends with a homebrewer that has been brewing for about 10 years. We asked him some questions to 
help gather what features a homebrewer would want in an app. 
<details>
<summary>These are some questions we asked him...</summary>
<br>
1) How often do you brew beer?

- Probably around 3 times a month. When I have an event i usually bust out about 4 cases in a  day though so it depends. 2 cases per brew is pretty standard.

2) What styles of beer do you typically brew?

  - IPAs, honey basil ale, butternut squash porter. Smash ales single malt single hop. I try to brew pretty much everything except sours. 
(Style guidelines to pick from when uploading beer would be okay, they typically all fall into some sort of already known category)

3) How do you feel about sharing your beer with other homebrewers?
  - Love it, totally onboard with that idea. Other brewers actually critique and say whats good and bad about it. What it needs work on, instead of just an average beer drinker saying “yeah this is pretty good”

4) Does trading beer interest you?
  - Yeah, definitely. A lot of people do beer swaps. Meetup and try each other’s beers and take some home. Usually meet ups are through friends and coworkers from the brewery but i’ve seen a lot of things on craigslist about beer meet ups.

5) Are you interested in having you beer critiqued/critiquing other beers?
  - Yes, absolutely, it helps me grow as a brewer to get feedback from other brewers.

6) Does connecting with other homebrewers interest you?
  - Totally.

7) What is it that you love about homebrewing?
  - I love how I can just be creative and kind of beer like a chef, come up with different flavors, and I like sharing it with people, ya know? It’s a good outlet for me.

8) What kind of information would be most important to display on a beer profile page?
 - Having the option for a beer picture would be cool, some people make labels for all their beer. I generally just keg mine and occasionally make a label for events and whatnot
 - Name of the beer
 - Style
 - IBUs
 - ABV
 - Characteristics/Description
 - Potentially another link to the recipe if you want to share it ***
 - Whether you kegged or bottled it.
 - All grain or Extract (choice if one or the other)
 -  Link to message the brewer

9) Would you be interested in buying/selling/trading equipment?
  - Yes, for sure, that would be awesome. It’d be nice to just have all that kind of stuff in one place instead of having to search through craigslist.

10) If you were to search for beers, how would you want to go about doing that? (by style, location, etc...)
  - Location sounds like a cool idea, get an idea of what brewers are near me.

11) Do you use any kind of app or online forum for homebrewing at the moment?
  - FoamOnTheRange, American Homebrewers Association, Brewtalk, Beeradvocate, Beergeek.
Usually I’ll go on these sites if i need a recipe, substitutions if i’m missing a certain hop or grain in a recipe. 

12) Do you ever go on to these sites to check out other people’s beers?
  - Theres nothing really like that. I mean theres like recipes, but theres nothing really like “this is what I want to share” (referring to our idea to have a beer profile page)

13) How many other homebrewers do you know currently?
  - About 30 or so, and they were all pretty much met through work and mutual friends. From here to Boston, California, Florida. I’ve been brewing for about 10 years though.

14) Does meeting more homebrewers, whether it be in person or over the internet interest you?
  - *From his general vibe about it this is totally a yes. He really loves sharing his beer and seeing how he can improve.*

15) Do you ever enter homebrew competitions? If so, how do you go about finding them?
  - I’ve only entered about 3 in my life. Just heard about them through word of mouth and home-brew shops. I should really enter more though.

Danny’s Suggestions:
1. Homebrewers that are offering brew classes can display that information.
2. Try to incorporate job posting for brewing jobs that come up.
3. Fesitivals and brew competitions that are coming up
4. Links to popular beer websites and beer magazines
5. Forum is extremely important. Brewers being able to ask questions and getting answers is huge. That’s what I use a lot of home brewer forums for.
6. Being able to post/sell/buy equipment would be GREAT.

</details>


## Installation Instructions
1. Fork and clone this repo
2. cd into root folder and run npm install
3. cd into back-end
4. run npm install
5. run node db/dbSetup.js
6. run node db/seed.js
7. run node server.js
8. cd into front-end
9. run npm install
10. run ng serve --open

## Contributors
- Ryan Elliot
- Wes Hebert
- Michael Theodorou

