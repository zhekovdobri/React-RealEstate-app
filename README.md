<img align="justify" alt="chart" width="950px" src="https://github.com/zhekovdobri/React-RealEstate-app/blob/main/src/assets/images/React_Real_Estate_GIF1200px.gif">

# React-RealEstate-app

#### By: Dobri Zhekov

#### [<ins>Check the entire project here</ins>](https://zhekovdobri.github.io/React-RealEstate-app/)

## Technologies Used

<div class=pull-left>

</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class=pull-right>
<img align="right" alt="chart" height="200px" src="https://github.com/zhekovdobri/React-RealEstate-app/blob/main/src/assets/images/Language%20chart%20diagram%20image.png">
</div>

* _JavaScript_
* _CSS_
* _HTML_


<br />

## Description
The project is a simple React app created with VSC. The web page has modern design style. It contains the main app functionality. The languages used for this project are JavaScript 69.3%, CSS 19.8% HTML 6.110.9%. The user can easily send an inquiry for new real estate. All the information about the real estates, including the new inquirys are stored in Firebase API database. To store data in Firebase API database I used `fetch()` function and `POST` request in my NewMeetup.js component.
```function addMeetupHandler(meetupData) {
        fetch(
            'https://react-first-app-91e36-default-rtdb.firebaseio.com/apartments.json',
                { 
                method: 'POST', 
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            history.replace('/')
        });
    }
```
Last but not least, I used that fetch() returns a promise object. This way - to get rid of the information, after the POST request was send I used history hook and replace method. To get the information back from the Firebase database API, I used the same `fetch()` URL with GET request and `useEffect()` Hook. By the way teh GET request is coming by default - that is why was no need to write the body structure and the method type.

</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class=pull-right>
<img align="right" alt="chart" height="100px" src="https://github.com/zhekovdobri/React-RealEstate-app/blob/main/src/assets/images/Directory_structure_logo.png">
</div>

## Directory structure:

<img alt="chart" src="https://github.com/zhekovdobri/React-RealEstate-app/blob/main/src/assets/images/RealEstate%20directory%20structure%20image.png">

## Setup/Installation Requirements

### Clone a repository using the command line 

1. From the repository, click "Code" and copy the address (either the SSH format or the HTTPS). 
2. From a terminal window (cmd or Bash), change to the local directory where you want to clone your repository.
3. Paste the address you copied from GitHub, with one of the next comand:

* **Clone over HTTPS**<br>
  $ git clone (https://..)
  
* **Clone over SSH**<br>
  $ git clone (ssh://..)

# React-RealEstate-app

This project was bootstrapped with Create React App.

## Development server

Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject` 

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Known Bugs

* No bugs

## License

React-RealEstate-app is licensed under the GNU GPL 3 license.

<sub><sup>Copiright © 2016-2021 Dobri Zhekov All Rights Reserved</sup></sub>
