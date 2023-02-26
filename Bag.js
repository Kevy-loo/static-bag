class Bag {
    static MAX_WEIGHT = 23;
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } else if (weight > Bag.MAX_WEIGHT) {
            throw new Error(`bag cannot be more than ${MAX_WEIGHT}` )
        }
        this.weight = weight
    }
}

module.exports = Bag