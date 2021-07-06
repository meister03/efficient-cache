class Util {

    static clean(obj) {
        for (var propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
                delete obj[propName];
            }
            if(typeof obj[propName] === 'object'){
                obj[propName] = Util.clean(obj[propName])
            }
        }
        return obj
    }




    static refill(dataset, fill) {
        for (var propName in dataset) {
            console.log(dataset[propName] )
            if(typeof dataset[propName] === 'object'){
                console.log(fill[propName])
                fill[propName] = Util.refill(dataset[propName], fill[propName])
            }
            if (!fill?.hasOwnProperty(propName)) {
                if(fill) fill[propName] = dataset[propName];
            }
        }
        return fill;
    }

}
module.exports = Util