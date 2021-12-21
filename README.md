# Headstrong 3.0
Senior Immersion Legacy App

Development Team: Amelia Neville, Taylor Suarez, Benjamin Adams, Benjamin Lyon

## Description
Headstrong is an application designed to provide the user with a relaxing, stress-free environment to write out their thoughts without any judgment. It is designed to improve the user's mental health.

Upon entering the site, users are greeted by a motivational quote which can be liked and saved to look back on. Also, a feed of public journal entries is displayed where they can follow other Users if they like their comments.

Users can then click on write entry, enter in a title, a journal body and upload an image. Users are also prompted to select their present mood. A tool is provided to help generate ideas in case of writers block. The memory will be captured with the current weather at the user's location and their current mood.

At any point, a user can view a memory to reflect on their progress. Memories can be deleted or refreshed for a new random memory. If the user does not like their memory, they have the option to delete it.

Also, the application has a designated section designed to displayed all public comments of those the User has followed.

If the User would like to escape  or draw their feelings out, a Drawing section is provided.

A Resources tab is provided to the user, which includes a list of different services in a variety of areas in Mental Health

Users are also able to see their daily horoscope, select their birth sign, and select a horoscope from a range of dates to see what their day will be like.

A tarot card tab allows users to draw a series of tarot cards, representing their past, their present, and their future.

The Sounds tab will let you play some binaunual beats to sooth your internal vibrations, and give you a soothing mood to create your better day.

The "How're you?" tab lets users see their moods charted over a series of days, and a collection of all other users moods over the timeline of their posts.


## Dependencies
``` "@babel/plugin-proposal-class-properties": "^7.16.0",
    "@devexpress/dx-core": "^2.7.6",
    "@devexpress/dx-react-chart": "^2.7.6",
    "@devexpress/dx-react-chart-material-ui": "^2.7.6",
    "@devexpress/dx-react-core": "^2.7.6",
    "@emotion/react": "^11.7.0",
    "@emotion/styled": "^11.6.0",
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "@mui/icons-material": "^5.2.0",
    "@mui/material": "^5.2.2",
    "@mui/styled-engine": "^5.2.0",
    "@mui/styles": "^5.2.2",
    "axios": "^0.24.0",
    "cloudinary": "^1.27.1",
    "cloudinary-react": "^1.7.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "css-loader": "^6.5.1",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-fileupload": "^1.2.1",
    "express-form-data": "^2.0.17",
    "express-session": "^1.17.2",
    "file-loader": "^6.2.0",
    "md5": "^2.3.0",
    "moment": "^2.29.1",
    "mysql2": "^2.3.3",
    "nodemon": "^2.0.15",
    "passport": "^0.4.1",
    "passport-google-oauth": "^2.0.0",
    "passport-oauth": "^1.0.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.3",
    "react-chartjs-2": "^4.0.0",
    "react-cloudinary-upload-widget": "^1.4.3",
    "react-component-whiteboard": "^1.1.1",
    "react-dom": "^17.0.2",
    "react-geolocated": "^3.2.0",
    "react-google-button": "^0.7.2",
    "react-google-login": "^5.2.2",
    "react-router-dom": "^6.0.2",
    "sequelize": "^6.11.0",
    "socket.io": "^4.4.0",
    "socket.io-client": "^4.4.0",
    "style-loader": "^3.3.1",
    "tone": "^14.7.77"
  },
  "devDependencies": {
    "@babel/cli": "^7.16.0",
    "@babel/core": "^7.16.0",
    "@babel/preset-env": "^7.16.4",
    "@babel/preset-react": "^7.16.0",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.3",
    "eslint": "^8.3.0",
    "eslint-config-airbnb": "^19.0.1",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-react": "^7.27.1",
    "eslint-plugin-react-hooks": "^4.3.0",
    "husky": "^7.0.4",
    "webpack": "^5.64.4",
    "webpack-cli": "^4.9.1"
  ```

## APIs used
Weatherbit API
*requires an access key
https://www.weatherbit.io/api/weather-current

IPStack API
*requires an access key
https://ipstack.com/

IPify
https://api.ipify.org

Quotes API
https://type.fit/api/quotes

Tone.JS
https://tonejs.github.io/

FarmSense
https://www.farmsense.net/api/

Indie Alchemy
https://indiealchemy.com/

Astrology
https://www.astrology.com/us/home.aspx

Sample data can be found in the project's root

## Google OAuth
Google Oauth requires a google cloud account. First create your account and then navigate to the developer console. Go to google API and create a clientID and clientSecret. This goes inside the .env file.

## Installation/Start-uo
1. First fork the repo and clone it to your local machine.
2. Get all env keys, the env variable names are listed below this section.
3. Run npm install to install all dependencies
4. Run npm run dev to start Webpack
5. Run npm start to run the server

## .env Variable Names
PORT=
host=localhost
database=headstrong
user=root
password=
google_clientID=
google_clientSecret=
weatherbit_token=
IPStack_access_key=
cloud_name=
cloud_api_key=
cloud_api_secret=

## Database
Setup Clever Cloud account to gain access to database.
https://www.clever-cloud.com/en/
Clever Cloud env keys can be found here. Select MySQL for database used.
If Sequelize is installed, start the server:
sequelize.sync
If Sequelize is not installed, check out the Sequelize documentation for instructions on how to proceed.
https://sequelize.org/master/manual/getting-started.html

## Additional Notes:
When setting up your Google OAuth keys, keep in mind to set up your authorized Javascript origin to `http://127.0.0.1:3000` and `http://localhost:3000`, and your Authorized Redirect URI's to `http://localhost:3000/auth/google/callback`.

