import React, { useEffect } from "react";
import './ShopPage.sass'
import { observer } from "mobx-react-lite";
import shopPriceFilter from "../../../store/shopPriceFilter";
import ShopCard from './shopCard/shopCard';
import shopItemsArr from "../../../store/shopItemsArr";


const ShopPage = observer(() => {

    useEffect(() => {
        shopItemsArr.loadItems()
    }, [])
    return(
        <div onClick={() => shopPriceFilter.closeMenu()}>
        <div className="container" >
            <div className="shopPage">
                <div className="shopPage__banner">
                    <div className="shopPage__banner_title">shop all</div>
                    <div className="shopPage__banner_title-big">Kid and nature approved styles</div>
                </div>
                <div className="shopPage__sort">
                    <div className="shopPage__sort_wrapper">
                        <div className="shopPage__sort_name">Sort of</div>
                        <div className="shopPage__sort_changeFilter" onClick={(e) => {
                            shopPriceFilter.openMenu()
                            e.stopPropagation()
                            }}>
                            <div className="shopPage__sort_changeFilter-current">{shopPriceFilter.statusFilter}</div>
                        <ul className="shopPage__sort_filter" style={{
                            display: shopPriceFilter.activeMenu? 'block' : 'none'
                        }}>  
                            <li className="shopPage__sort_filter-item" onClick={() => shopPriceFilter.chooseNameFilter("All")}>All</li>
                            <li className="shopPage__sort_filter-item" onClick={() => shopPriceFilter.chooseNameFilter("Price - Low to High")}>Price - Low to High</li>
                            <li className="shopPage__sort_filter-item" onClick={() => shopPriceFilter.chooseNameFilter("Price - High to Low")}>Price - High to Low</li>
                        </ul>
                        <div className="shopPage__sort_filter-item shopPage__sort_filter-itemArrow" style={{
                            rotate: shopPriceFilter.activeMenu ? "0deg" : '180deg'
                        }}></div>
                        </div>
                    </div>
                </div>
                <div className="shopPage__content">
                    <div className="shopPage__filter">
                        <div className="shopPage__filter_title">Filter</div>
                        <div className="shopPage__filter_divider"></div>
                        <ul className="shopPage__filter_category">
                            Categories
                            <li className="shopPage__filter_category-item">Tops</li>
                            <li className="shopPage__filter_category-item">Bottoms</li>
                            <li className="shopPage__filter_category-item">Rompers</li>
                            <li className="shopPage__filter_category-item">Hats</li>
                        </ul>
                    </div>
                    <ul className="shopPage__clothes">
                        {
                            shopItemsArr.shopItems.map((item) => {
                                return(
                                    <ShopCard key={item.id} item={item}/>
                                )
                            } )
                        }
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
})

export default ShopPage