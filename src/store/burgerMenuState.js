import { makeAutoObservable } from "mobx"

class BurgerMenuState {
    activeMenu = false

    constructor() {
        makeAutoObservable(this)
    }

    openMenu(){
        this.activeMenu = true
        console.log(this.activeMenu)
    }

    closeMenu(){
        this.activeMenu = false
        console.log(this.activeMenu)
    }
}

// eslint-disable-next-line
export default new BurgerMenuState()