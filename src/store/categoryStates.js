import { makeAutoObservable } from "mobx"

class categoryStates {
    tops = false;
    bottoms = false;
    rompers = false;
    hats = false;

    constructor() {
        makeAutoObservable(this)
    }

    onTops() {
        this.tops = !this.tops;
        this.bottoms = false;
        this.rompers = false;
        this.hats = false;
    }

    onBottoms() {
        this.bottoms = !this.bottoms;
        this.tops = false;
        this.rompers = false;
        this.hats = false;
    }
    
    onRompers() {
        this.rompers = !this.rompers;
        this.bottoms = false;
        this.tops = false;
        this.hats = false;
    }
    
    onHats() {
        this.hats = !this.hats;
        this.bottoms = false;
        this.rompers = false;
        this.tops = false;
    }


}

// eslint-disable-next-line
export default new categoryStates()