import React, { useEffect } from "react";
import './ShopPage.sass'
import { observer } from "mobx-react-lite";
import shopPriceFilter from "../../../store/shopPriceFilter";
import ShopCard from './shopCard/shopCard';
import shopItemsFetch from "../../../store/shopItemsFetch";
import categoryStates from "../../../store/categoryStates";


const ShopPage = observer(() => {

    useEffect(() => {

        shopItemsFetch.loadItems()
    }, []);

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
                            <li className="shopPage__sort_filter-item" onClick={() =>{
                                if(shopPriceFilter.statusFilter !== 'All'){
                                    shopItemsFetch.sortAllPriceItems()
                                }
                                shopPriceFilter.chooseNameFilter("All")
                        }}>All</li>
                            <li className="shopPage__sort_filter-item" onClick={() => {
                                shopItemsFetch.sortLowToHighPriceItems()
                                shopPriceFilter.chooseNameFilter("Price - Low to High")
                                }}>Price - Low to High</li>
                            <li className="shopPage__sort_filter-item" onClick={() => {
                                shopItemsFetch.sortHighToLowPriceItems()
                                shopPriceFilter.chooseNameFilter("Price - High to Low")
                        }}>Price - High to Low</li>
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
                            <div className="shopPage__filter_category-title">Categories</div>
                            <li className="shopPage__filter_category-item">
                                <div 
                                className="shopPage__filter_category-radio"
                                style={{
                                    backgroundColor: categoryStates.tops? "#50735F":""
                                }}
                                onClick={() => {
                                    shopItemsFetch.chooseCategory('tops') 
                                    categoryStates.onTops()}
                                }
                                ></div>
                                <div className="topstitle">Tops</div>
                            </li>
                            <li className="shopPage__filter_category-item">
                                <div 
                                className="shopPage__filter_category-radio"
                                style={{
                                    backgroundColor: categoryStates.bottoms? "#50735F":""
                                }}
                                onClick={() => {
                                    shopItemsFetch.chooseCategory('bottoms') 
                                    categoryStates.onBottoms()}
                                }
                                ></div>
                                <div className="topstitle">Bottoms</div>
                            </li>
                            <li className="shopPage__filter_category-item">
                                <div 
                                className="shopPage__filter_category-radio"
                                style={{
                                    backgroundColor: categoryStates.rompers? "#50735F":""
                                }}
                                onClick={() => {
                                    shopItemsFetch.chooseCategory('rompers') 
                                    categoryStates.onRompers()}
                                }
                                ></div>
                                <div className="topstitle">Rompers</div>
                            </li>
                            <li className="shopPage__filter_category-item">
                                <div 
                                className="shopPage__filter_category-radio"
                                style={{
                                    backgroundColor: categoryStates.hats? "#50735F":""
                                }}
                                onClick={() => {
                                    shopItemsFetch.chooseCategory('hats') 
                                    categoryStates.onHats()}
                                }
                                ></div>
                                <div className="topstitle">Hats</div>
                            </li>
                        </ul>
                    </div>
                    <ul className="shopPage__clothes">
                        {
                            shopItemsFetch.shopItems.map((item) => {
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