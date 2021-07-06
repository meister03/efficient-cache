<p align="center"><a href="https://nodei.co/npm/efficient-cache/"><img src="https://nodei.co/npm/efficient-cache.png"></a></p>
<p align="center"><img src="https://img.shields.io/npm/v/efficient-cache"> <img src="https://img.shields.io/npm/dm/efficient-cache?label=downloads"> <img src="https://img.shields.io/npm/l/fast-cache"> <img src="https://img.shields.io/github/repo-size/meister03/efficient-cache">  <a href="https://discord.gg/YTdNBHh"><img src="https://discordapp.com/api/guilds/697129454761410600/widget.png" alt="Discord server"/></a></p>

# Fast-Cache
A super efficient Cache Manager, which removes all undefined/null/false keys and re-add's the back, when calling .get

## Why?
When saving values in maps, you often have a lot of undefined, null keys and empty objects. When saving them, the Keys itself uses memory, which could follow to a higher ram usage and to a slower response time. This Package automatically remove nullish keys and transform them back on a DataSet Class, when calling get.

## In Work:
- Cache Lifetime (Dynamic Lifetime, delete when lasttime accessed)
- Manual Cache Sweeper (+ optional filter)
- Collection form (new Array Funtions on the Collection: `.find`, `.filter`, `.last()`, `.first()`)
- Remove empty Arrays

```js
npm install efficient-cache
```

**If you need help feel free to join our <a href="https://discord.gg/YTdNBHh">discord server</a>. We will provied you all help ☺**

### See below for the Docs
You have to require the Package and create a new Collection with it. See the examlple below

```js
const dataset = require('./Test.js') //A Dataset is shown below
const Manager = require('efficient-cache');
const cache = new Manager({dataset: dataset});

cache.set(`hello`, {food: true, water: null}}})
cache.set(`hello2`, {food: null, water: `10`}})


cache.get(`hello`)) //Get The Value
cache.first())            //The First Value in the Map
```
Transformer Class
```js
class Test{
    constructor(data){
        this.food = data.food || false;
        this.test = data.test || {data: []}
        this.water = data.water || false;
    }
}
```

## References:
**`new Manager({dataset: DATASET, transformerClass: TRANSFORMERCLASS})` **
| Option | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| DATASET     | Class             |'required'   | The Class, in which the Data should be transformed|
| TRANSFORMERCLASS | Class | not required | The Class, where the Dataset Class gets transformed on|


**Collection Options:**
|Function |Description|
| ------------- | ------------- | 
|.get(key)     | Gets the transformed Data Object from the Map|
|.set(key, value) | Sets the Data in the Map and removes all nullish keys|
|.first(amount) | Gets the first `x` (amount) in the map |
| .sweep(lifetime) | Deletes the Cache, which is older than the Lifetime |
 




**Have fun and feel free to contribute/suggest or contact me on my discord server or per dm on Meister#9667**

# Bugs, Glitches and Issues
If you encounter any problems feel free to open an issue in our <a href="https://github.com/meister03/discord-hybrid-sharding/issues">github repository or join the discord server.</a>
