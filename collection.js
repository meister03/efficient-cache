const {clean, refill} = require('./util.js')
class Collection extends Map{
    constructor(options){
        super()
        this.dataset = options.dataset || {};
        this.transformerClass =  options.transformerClass;
    }
    get(key){
        if(!super.has(key)) return undefined;
        const refilled = new this.dataset(super.get(key));
        if(this.transformerClass) return new this.transformerClass(refilled)
        return refilled
    }

    set(key, value){
        return super.set(key, clean(value))
    }

    has(key){
        return super.has(key)
    }

    delete(key){
        return super.delete(key)
    }

    clear(){
        return super.clear();
    }

    hasAny(...keys){
        return keys.some((k) => super.has(k));
    }

    first(amount){
        if (typeof amount === 'undefined'){
            const key = this.keys().next().value;
            return this.get(key)
        }
        if(amount > 0){
            const arrayofkeys = [...this.keys()]
            const keys = Array.from({length: amount}, (a,b) => {if(arrayofkeys[b]) return arrayofkeys[b]})
            const result = [];
            for(let i = 0; i < keys.length; i++){
                if(!keys[i]) continue;
                result.push(this.get(keys[i]))
            }
            return result
        }
    }


}
module.exports = Collection
