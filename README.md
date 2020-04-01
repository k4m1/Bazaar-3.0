# The Bazaar

Check out a live version of The Bazaar here:

The Bazaar is a clone of the website tcgplayer, a online marketplace for board and card games. The
backend of The Bazzar is built on rails with a PostgreSQL database. Frontend
rendering is handled with React. Redux architecture is used to manage data on the
frontend.

## Features & Implementation

### Single-Page App

*React router and components*

The Bazaar is a single page app. All “pages” are rendered at a root url “/” by a
collection of shuffling react components. The React router handles the logic
associated with component navigation and updates an addendum to the root route.
Re-rendering of child components is done through the React API.

*Frontend and Backend Interaction*

The Bazaar server interactions are limited to retrieval of data from and
modification of the database. The front end stores the necessary information for
rendering upon site entry. Other requests are made on a “need to know” basis by
various React components. This minimizes info passed between the frontend
and backend and allows for speedy re-rendering handled by React.

### Authentication

*Auth Page*

*Normal Authentication*

Users of the site are required to authenticate or sign up. Navigation to any
other "protected" section of the site before authentication will redirect back to auth. The
user model requires a unique email adress and password (not necessarily unique) for
sign up. Upon account creation, user passwords are digested using the B-Crypt
gem before being stored.

