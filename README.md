# RainLib.JS

RainLib is a javascript library that provides algorithms of all sorts, which you might need in most of your projects. As the project is new it aims to be a time-saver library. Therefore any features you might find here aren't very complex or innovative, but rather essential and useful for many projects.


## WEB Usage:

```html
<script src="https://cdn.jsdelivr.net/gh/rainboi/RainLib.JS@0.1-alpha/RainLib.js"></script>
```

View WEB example with RainLib/Vue using CDN - [WEB example](https://rainlib.netlify.com/)

CDN - https://cdn.jsdelivr.net/gh/rainboi/RainLib.JS@0.1-alpha/RainLib.js


## Node Usage:
For node you have three options, download the stand-alone RainLib.js file from root directory, clone/download master branch and use the "RainLib" folder, which has exactly the same functions, but they are structured better for understanding or user/require the specific function from the  "RainLib" folder. Feel free to use any specific function from the library and remove other folders/files that you might not need for the project. Althrough after removing e.g "Generations" folder, you'll have to manually access functions from "Sorting" folder, by using require('./RainLib/Sorting/sort') instead of require('./RainLib/RainLib').
#### Stand-Alone: 
```javascript
const RainLib = require('./RainLib')
//contains every function available
```
#### Folder Structure:
```javascript
const RainLib = require('./RainLib/RainLib')
//contains every function available
```
#### Specific:
```javascript
const Sort = require('./RainLib/Sorting/Sort')
// Sort contains every sorting function

const bubbleSort = require('./RainLib/Sorting/Algorithms/bubbleSort');
// bubbleSort contains one specific function to keep everything lighter
```
#### Example usage:

Example 1:

View [test.js](Examples/Node/test.js), You can instantly 
[![Run on Repl.it](https://rainlibjs.rainboi.repl.run)](https://rainlibjs.rainboi.repl.run)


Example 2:
```javascript
const exampleArray = RainLib.generation.randomArrayNumbers(100, -10000, 10000);
// Get an array of 100 random numbers ranging from -10000 to 10000
```
###### View Examples/Node for better examples
