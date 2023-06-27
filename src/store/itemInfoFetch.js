import { makeObservable, observable, action, configure} from "mobx";
import { shopFetchItems } from "../api/shopFetchItems";
configure({useProxies: "never", enforceActions: "never"})


class ItemInfoFetch {
    neededItem = {};

    async findItem(id){
        const items = await shopFetchItems();
        this.neededItem = items.find(el => el.id === id)
    }

    constructor() {
        makeObservable(this,
            {
                neededItem: observable,
                findItem: action
            });
    }
    
}

// eslint-disable-next-line
export default new ItemInfoFetch()