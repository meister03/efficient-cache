class Test{
    constructor(data){
        this.food = data.food;
        this.test = data.test
        this.voice = data.voice || 0;
    }
}



const Manager = require('./manager.js')
const cache = new Manager({dataset: Test});
console.log(cache)
cache.set(`hello`, {food: true, test: {test2: null, test3: true, test4: {test2: null}}})
cache.set(`hello2`, {food: true, test: {test2: null, test3: true, test4: {test2: null}}})
cache.set(`hello3`, {food: true, test: {test2: null, test3: true, test4: {test2: null}}})
cache.set(`hello4`, {food: true, test: {test2: null, test3: true, test4: {test2: null}}})
console.log(cache.get(`hello`))
console.log(cache.first(7))
setTimeout(()=>{
    console.log(cache.sweep(0))
})
