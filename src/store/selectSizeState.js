import { makeAutoObservable } from "mobx"

class selectSizeState {
    activeMenu = false
    statusSize = 'Select value'
    constructor() {
        makeAutoObservable(this)
    }

    openMenu(){
        this.activeMenu = this.activeMenu? false : true;
    }
    closeMenu() {
        this.activeMenu =  false;
    }
    chooseSize(name){
        this.statusSize = name
    }
}

// eslint-disable-next-line
export default new selectSizeState()