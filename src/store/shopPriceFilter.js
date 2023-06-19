import { makeAutoObservable } from "mobx"

class ShopPriceFilter {
    activeMenu = false
    statusFilter = 'All'
    constructor() {
        makeAutoObservable(this)
    }

    openMenu(){
        this.activeMenu = this.activeMenu? false : true;
        console.log(this.activeMenu)
    }

    chooseNameFilter(name){
        this.statusFilter = name
    }
}

// eslint-disable-next-line
export default new ShopPriceFilter()