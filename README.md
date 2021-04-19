# From AdobeXD to ReactJS a mapped translation of implementation possibilities - Resource pack
## Related Videos
### [Resource Pack Short Demo](https://youtu.be/uj3j_X0F5hw).
### [Real React Project using such interactions](https://youtu.be/CxecLeXn3D0). This React app from the video has been created based on this [AdobeXD Prototype](https://xd.adobe.com/view/d6005f36-e49c-44f4-bfa7-7c42286688c4-8353/?fullscreen&hints=off).

## Relevant Documentation and Libraries Used
### [Howler.JS](https://howlerjs.com/)
### [Lodash](https://lodash.com/)
### [React Bootstrap](https://react-bootstrap.github.io/)
### [React Spring](https://www.react-spring.io/#:~:text=react-spring%20is%20a%20spring-physics%20based%20animation%20library%20that,This%20library%20represents%20a%20modern%20approach%20to%20animation.)
### [React UseGesture](https://use-gesture.netlify.app/)
### [React Hook use-sound](https://github.com/joshwcomeau/use-sound)
### [React Styled Components](https://styled-components.com/)

## The Resource Pack
The resource-pack represents a series of basic to advanced interactions available in AdobeXD transposed/translated to React, so rather than a proper Single-Page Application (SPA), with the use of the best libraries available, a series of tutorials presenting those specific interactions and how can they be achieved in React. Most importantly, instead of having them presented separate and from a general approach (as in the original documentations most of the times, in the index.js or index.html files), they will be presented in an actual ‘context’ as actual function or class components that can be properly integrated anywhere in the project and be reused. Similarly, all components have been inspired from the original documentation of the used libraries and referenced in the code whenever needed! 

As mentioned above, all interactions are totally reusable. You can either use them as they come (for example in a card, or button) or similarly you can use the functions concerning the main interaction in any other objects. You can either create the main function concerning the interaction in a different file (and then import it in another component to be reused and call it using the JSX tags) or simply define the function doing that interaction/animation inside your component and then return an object you like (card/button etc...) and bind it to it.

## Getting Started with Create React App

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Follow the instructions from the above link and create your React app. After the app has been created, copy the URL of this repository and perform a pull request `git pull <repository link>` inside your app's directory in order to get the code of the resource pack.

Next you need to install the following libraries using npm for the code to function as intended. If you chose to use yarn instead of npm, replace npm with yarn in each following command):
### `npm install -S bootstrap` 
### `npm install -S react-bootstrap` 
### `npm install -S browser-sync`
###	`npm install -S framer-motion` 
###	`npm install -S howler`
###	`npm install -S lodash`
###	`npm install -S react-router-dom` 
###	`npm install -S react-spring` 
###	`npm install -S react-use-gesture` 
###	`npm install -S react-with-gesture` 
###	`npm install -S styled-components` 
###	`npm install -S use-sound` 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contents
### [Pull](https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/pull.js)
The card is supposed to be grabbed with the mouse and once the mouse is clicked again the component should return to its initial place. 
## ![image](https://user-images.githubusercontent.com/58561792/114913579-442b6e00-9e19-11eb-8a99-5bf5f58b65b8.png)

### [Drag](https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/drag.js)
Each coloured box represents a draggable item which should have the ability of being dragged only within a row and not a column.
## ![image](https://user-images.githubusercontent.com/58561792/114913917-a4baab00-9e19-11eb-9596-cd5ede751968.png)

### [Slide](https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/slide.js)
The slider container is an interactive component which can be perceived as an interactive button. Whenever the user grabs the slider and slides in a direction, something different should happen for each direction. An example could be adding an object to the shopping cart or deleting it from the shopping cart.

## ![image](https://user-images.githubusercontent.com/58561792/114914391-227eb680-9e1a-11eb-8021-f7a459ac46f6.png)

### [Expandable Card](https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/expandable.js)
When landing on the page, the card is by default not expanded as it will expand whenever it is clicked. Before settling in place, the card would perform a quick animation and rotate in place for few seconds. Once it settles down, the card can be clicked and it will expand into another card. Whenever the card is hovered by the user (not clicked) the image should scale and gradually increase in size until it reaches a pre-given stop point (size) .

## ![image](https://user-images.githubusercontent.com/58561792/114914644-7a1d2200-9e1a-11eb-93e7-dedbd445a239.png)

On click the card should exapnd. Before being completely expanded, the card performs again a quick animation on a given transition, scaling, and rotating in place before settling into its given position.

![image](https://user-images.githubusercontent.com/58561792/114914659-7e493f80-9e1a-11eb-9e1b-532e4fa9c60d.png)

### [Animated and Draggable Carousel](https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/carousels.js)
An animated and draggable carousel using an array of images(URLs). Each image from the array receives an unique index. The carousel has defined functions for keeping track of pagination and direction. The carousel's direction can be handled by either clicking on the provided buttons or swiping left(for next picture) or right(for previous picture).
## ![image](https://user-images.githubusercontent.com/58561792/114914975-ebf56b80-9e1a-11eb-9cc3-86ae18b6564f.png)

### [Audio Interactions on Cards](https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/audio.js)
For audio interactive components there are 2 different cards handling the same sound represented by a popular kids story, The Golden Bread. The sound is handled in two different ways. It is either played and paused whenever the user clicks a button or it is either played and paused whenever the user hovers the mouse on top of the card or takes it away. 
## ![image](https://user-images.githubusercontent.com/58561792/114915498-8a81cc80-9e1b-11eb-957e-f10a7e0b6527.png)




