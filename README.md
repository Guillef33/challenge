## Read me

### How to run the project

After you clone the repo, for installing the dependencies, you can run

### `npm install`

The go to the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Explanation

It's a little application for get random profiles with profile data.
I organized conceptually by Poker Players, but can be for any subject.

Im consuming the public api random user generator and create a Context to store that request and can be accessible to the whole app.

I use React Router Dom for creating the routes in the AppRouter component.

I use Material UI (MUI for React) to style the elements.

### The architecture of folders is:

/ Components \
/ Pages \
/ Context \
/ Router

The components are stores in a inner folder in the components folder. In the list I create another inner folder with some tests.

The advanced search

### The user can do three interactions:

/ Filter the grid of random users by name .\
/ See the profile of each user in a modal .\
/ In the advanced search, create a custom request with nationality and quantity as parameters .\

### More things I'd like to do

/ A mock Login.\
/ Validate the inputs for search and the advanced search with MUI.\
/ Create better tests.\
/ Create pagination in the UserList component.\
/ Make the user grid a reusable component where I only pass the array to be display .\
/ Add properties related with poker for filter a mock level of each profile.
