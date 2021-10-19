import humain from "./humain";

class mage extends humain {
    constructor(nom, age, magie){
        super(nom, age)
        this.magie = magie
    }
}