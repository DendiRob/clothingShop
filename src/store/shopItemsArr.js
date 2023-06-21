import { action, makeObservable, observable, configure } from "mobx";
import { shopFetchItems } from "../api/shopFetchItems";

configure({
    useProxies: "never"
})

class shopItemsArr {
    shopItems = [];

    async loadItems() {
        const items = await shopFetchItems();
        console.log(items)
        this.shopItems = items
    }

    constructor() {
        makeObservable(this,
            {
                shopItems: observable,
                loadItems: action
            });
    }

}

// eslint-disable-next-line
export default new shopItemsArr()