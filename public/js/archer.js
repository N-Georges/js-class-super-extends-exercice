import humain from "./humain";

class archer extends humain{
    constructor(nom, age, fleches){
        super(nom, age)
        this.fleches = fleches
    }
}