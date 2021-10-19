import humain from "./humain";

class guerrier extends humain {
    constructor(nom, age, force, vie){
        super(nom, age)
        this.force = force
        this.vie = vie
    }
}