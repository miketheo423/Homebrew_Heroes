# Homebrew_Heroes
Homebrew heroes offers a way for homebrewers to showcase their creations to people in the homebrew community. Try it [HERE](http://homebrew-heroes.herokuapp.com) 


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

### Wireframes
![image uploaded from ios 1](https://user-images.githubusercontent.com/22715776/32858344-73c5f33a-ca08-11e7-9592-f06417dc2b27.jpg)

![image uploaded from ios](https://user-images.githubusercontent.com/22715776/32858300-4f1f66ba-ca08-11e7-9ddf-f89d85fabc32.jpg)

![image uploaded from ios 2](https://user-images.githubusercontent.com/22715776/32858302-5125d868-ca08-11e7-83f8-db066f82762c.jpg)

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

## Documentation:
<details>
<summary>Frontend routes:</summary>
  
### Front-end routes (`app-routing.module.ts`)

* `/welcome` - Landing page w/loggin and signup options
* `/` - Feed page, redirect to `welcome` if not logged in
* `/beers` -  also shows Feed Page
* `/beers/new` - for adding new beers
* `/beers/:id` - show route for individual beer
* `/beers/edit/:id` - edit route for beers
* `/brewer/:name` - user profile pages
* `/brewer/edit` - for a user to edit their own profile
</details>

<details>
<summary>Beer API Routes:</summary>
  
### Beer API Routes @ `/api/beers`
  
Test with `cd backend && mocha` 
(seed database first to pass index and show routes)

Available routes:
1) **GET `/api/beers`** - index / beer feed
Responds with ALL beers in database from newest to oldest.
Only includes the fields required for the beer preview cards.
Response:
```
{beers: [
  {
    name: 'beer name',
    photoUrl: "http://www.image.com/image.jpg",
    style: "IPA",
    id: #,
    user: {
      username: "user name",
      id: #
    }
  },
  {. . .}
]}
```

2) **GET `/api/beers/:id`** - show / beer detail page
Respond with the full details of a single beer
Response:
```
{
  id: #,
  photoUrl: "imageUrl",
  name: "Beer Name,
  style: "Beer Style",
  abv: "#",
  ibus: "#",
  description: "Description",
  recipe: "Recipie",
  createdAt: "2017-11-10T04:33:35.225Z",
  updatedAt: "2017-11-10T04:33:35.225Z",
  userId: #,
  user: {
    id: #,
    username: "User Name",
    email: "Email",
    firstName: "Name",
    lastName: "Name",
    zipcode: "#",
    photoUrl: "imageUrl",
    createdAt: "2017-11-10T04:33:35.111Z",
    updatedAt: "2017-11-10T04:33:35.111Z"
  }
}
```

3) **POST `/api/beers`** - Create a new beer
Post the new beer information in the request body.
Respond with the newly created beer.
***REMEMBER to add the userId when creating***

4) **PUT `/api/beers/:id`** - Update a beer
Update the attributes in the request body. 
It is not necessary to send all fields. Only need the ones that are being updated.
Respond with the updated beer.

5) **DELETE `/api/beers/:id`** - Delete a beer
Delete the beer with the given ID.
Respond with the success json message: `{"message":"Beer deleted"}`
</details>

<details>
<summary>User API routes: </summary>

### User API Routes @ `/api/users`

1) **`GET /api/users`** - User index route for searching users
Responds with an array of all users and their `usersname`, `photoUrl`, and `id`.

2) **`GET /api/users/:id`** - User show route for user profiles
Responds with the relevant user information and an array of their beers:
```
{
username: "username",
createdAt: "2017-11-10T23:23:12.192Z",
updatedAt: "2017-11-10T23:23:12.192Z",
firstName: "first",
lastName: "last",
photoUrl: "url",
beers: [
  {
    name: "name",
    photoUrl: "url",
    style: "style",
    id: #
  },
  { ... }
]
}
```
3) **`PUT /api/users/`** - Edit a user's profile information
Pass the informatin to be updated in the request `body`. 
The updates will be applied to the ***currently logged in user***. (user Id not needed)
Responds with a success message.
</details>


## Contributors
- Ryan Elliott - [GitHub](https://github.com/ryan104)
- Wes Hebert - [GitHub](https://github.com/weshebert20)
- Michael Theodorou - [GitHub](https://github.com/miketheo423)

Special Thanks:
Juwon and Jeff (UX Consultation)
Dan and any other homebrewers who have provided feedback
