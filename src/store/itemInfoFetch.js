import { makeObservable, observable, action, configure} from "mobx";
import { shopFetchItems } from "../api/shopFetchItems";

configure({useProxies: "never", enforceActions: "never"})


class ItemInfoFetch {

    neededItem = {};
    itemSimilarColor = []


    async findItem(id){
        const items = await shopFetchItems();
        this.neededItem = items.find(el => el.id === id)
    }
    
    async filterByColors(){
        const items = await shopFetchItems();

        if(this.neededItem !== {}){
            let newSet = []
            const {colorSet} = this.neededItem;
            colorSet.forEach(item => {
                let p = items.find(el => el.id === item)
                newSet.push(p)
            })
            this.itemSimilarColor = newSet
        }
    }

    constructor() {
        makeObservable(this,
            {
                neededItem: observable,
                itemSimilarColor: observable,
                findItem: action,
                filterByColors: action

            });
    }
    
}

// eslint-disable-next-line
export default new ItemInfoFetch()