import { action, makeObservable, observable, configure } from "mobx";
import { shopFetchItems } from "../api/shopFetchItems";
import categoryStates from "./categoryStates";
import shopPriceFilter from "./shopPriceFilter";

configure({
    useProxies: "never"
})

class shopItemsArr {
    shopItems = [];

    setItems(data) {
        this.shopItems = data
    }

    async loadItems() {
        const items = await shopFetchItems();
        this.setItems(items);
        this.sortByStatus();
    }
    async sortAllPriceItems() {
        for (let i = this.shopItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.shopItems[i], this.shopItems[j]] = [this.shopItems[j], this.shopItems[i]];
        }
        this.setItems(this.shopItems);
    }
     sortByStatus(){
        switch(shopPriceFilter.statusFilter){
            case 'All':
                this.sortAllPriceItems()
                break
            case 'Price - Low to High':
                this.sortLowToHighPriceItems()
                break
            case 'Price - High to Low':
                this.sortHighToLowPriceItems()
                break
            default:
        }
     }

     sortLowToHighPriceItems() {
        this.shopItems.sort((a,b) => {return a.price - b.price})
        this.setItems(this.shopItems);
    }

     sortHighToLowPriceItems() {
        this.shopItems.sort((a,b) => {return a.price - b.price}).reverse()
        this.setItems(this.shopItems);
    }
    async chooseCategory(category) {
        const items = await shopFetchItems();
        if(categoryStates.bottoms || categoryStates.hats || categoryStates.tops || categoryStates.rompers){
            switch(category){
                case "tops":
                    this.setItems(items.filter(item => item.category === 'tops'))
                    this.sortByStatus()
                    break
                case "hats":
                    this.setItems(items.filter(item => item.category === 'hats'))
                    this.sortByStatus()
                    break
                case "rompers":
                    this.setItems(items.filter(item => item.category === 'rompers'))
                    this.sortByStatus()
                    break
                case "bottoms":
                    this.setItems(items.filter(item => item.category === 'bottoms'))
                    this.sortByStatus()
                    break
                default:
            }
        }else{
            this.loadItems()
        }
    }


    constructor() {
        makeObservable(this,
            {
                shopItems: observable,
                loadItems: action,
                sortLowToHighPriceItems: action,
                sortHighToLowPriceItems: action,
                sortAllPriceItems: action,
                setItems:action
            });
    }

}

// eslint-disable-next-line
export default new shopItemsArr()