# RainLib.JS

RainLib is a javascript library that provides algorithms of all sorts, which you might need in most of your projects. As the project is new it aims to be a time-saver library. Therefore any features you might find here aren't very complex or innovative, but rather essential and useful for many projects.


## WEB Usage:

```html
<script src="https://cdn.jsdelivr.net/gh/rainboi/RainLib.JS@0.1-alpha/RainLib.js"></script>
```

View WEB example with RainLib/Vue using CDN - [WEB example](https://rainlib.netlify.com/)

CDN - https://cdn.jsdelivr.net/gh/rainboi/RainLib.JS@vv0.1.1-alpha/RainLibWEB.js


## Node Usage:
For node you have three options, download the stand-alone RainLib.js file from root directory, clone/download master branch and use the "RainLib" folder, which has exactly the same functions, but they are structured better for understanding, or use/require the specific function from the  "RainLib" folder. Feel free to use any specific function from the library and remove other folders/files that you might not need for the project. Althrough after removing e.g "Generations" folder, you'll have to manually access functions from "Sorting" folder, by using require('./RainLib/Sorting/sort') instead of require('./RainLib/RainLib').
#### Stand-Alone: 
```javascript
const RainLib = require('./RainLib')
// contains every function available
```
#### Folder Structure:
```javascript
const RainLib = require('./RainLib/RainLib')
// contains every function available
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

View [test.js](Examples/Node/test.js), you can instantly 
[![Run on Repl.it](https://repl.it/badge/github/rainboi/RainLib.JS)](https://rainlibjs.rainboi.repl.run/)


Example 2:
```javascript
const exampleArray = RainLib.generation.randomArrayNumbers(100, -10000, 10000);
// Get an array of 100 random numbers ranging from -10000 to 10000
```
###### View Examples/Node for better examples

# Docs:

## Generations:
### 1) Array of Random Numbers - randomArrayNumbers
```javascript
function randomArrayNumbers(length, minValue = -10, maxValue = 10);
```
**Returns** - an array of given length, containing random numbers between (including) given `minValue` and `maxValue`.
### Parameters
| Parameter | Type | Default | Note |
|---|---|---|---|
| `length` | `Integer` |  | Length of an array you want to be returned.
| `minValue` | `Integer` | `-10` | Minimum value of a random number.
| `maxValue` | `Integer` | `10` | Maximum value of a random number.

## Sorting:
### Parameters which every sorting function shares
| Parameter | Type | Default | Note |
|---|---|---|---|
| `array` | `array` |  | The array which will be sorted.
| `inDirect` | `bool` | `true` | **true** - The original array will not be affected. A copy of it will be sorted and returned. <br/> **false** - The original array will be sorted and returned.
| `key` | `string` | `null` | The `key` is used for sorting an array of objects, with a `key` the function can identify what property of an object determines it's value for sorting.

### 1) Selection
```javascript
RainLib.Sort.selection(array, inDirect = false, key = null)
```
**Returns** - A sorted array. If the value of inDirect is true the original array is also affected (sorted), if your array contains objects, you can pass a "key", which will be used for sorting (View Examples).

### 2) Bubble - bubble
```javascript
RainLib.Sort.bubble(array, inDirect = false, key = null)
```
**Returns** - A sorted array. If the value of inDirect is true the original array is also affected (sorted), if your array contains objects, you can pass a "key", which will be used for sorting (View Examples).

### 3) Recursive Bubble - recursiveBubble
```javascript
RainLib.Sort.recursiveBubble(array, inDirect = false, key = null, end = null)
```
**Returns** - A sorted array (**Unless** you provide the `end` parameter, which sorts the array to a fixed point). If the value of inDirect is true the original array is also affected (sorted), if your array contains objects, you can pass a "key", which will be used for sorting (View Examples).

| Unique Parameter | Type | Default | Note |
|---|---|---|---|
| `end` | `Integer` | `null`  | Number of recursions.

### 4) Insertion - insertion
```javascript
RainLib.Sort.insertion(array, inDirect = false, key = null)
```
**Returns** - A sorted array. If the value of inDirect is true the original array is also affected (sorted), if your array contains objects, you can pass a "key", which will be used for sorting View [test.js](Examples/Node/test.js), you can instantly 
[![Run on Repl.it](https://repl.it/badge/github/rainboi/RainLib.JS)](https://rainlibjs.rainboi.repl.run/).

