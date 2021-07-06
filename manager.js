const Collection = require("./collection.js");

class Manager extends Collection{
    constructor(options){
        super(options)
        this.dataset = options.dataset
        this.transformerClass =  options.transformerClass
    }
    sweep(lifetime=600000){
        const keys = [...this.keys()]
        let r = 0;
        for(let i = 0; i < this.size; i++){
            const result = this.get(keys[i])
            if(typeof result !== 'object') continue;
            if(!result.lastaccess) continue;
            const sweepTime = (Date.now() - result.lastaccess);
            if(sweepTime > lifetime){
                this.delete(keys[i]);
                r++
            } 
        }
        return r;
    }

}
module.exports = Manager;