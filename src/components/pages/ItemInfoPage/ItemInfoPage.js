import React, { useEffect } from "react";
import './ItemInfoPage.sass';
import itemInfoFetch from "../../../store/itemInfoFetch";
import { useParams } from "react-router";
import { observer} from "mobx-react-lite";
import selectSizeState from "../../../store/selectSizeState";


const ItemInfoPage = observer(() => {
    
    const {id} = useParams();
    const {price,description,raiting,title,urlPhoto} = itemInfoFetch.neededItem

    useEffect(() => {
        itemInfoFetch.findItem(id)
        selectSizeState.chooseSize('Select value')
    }, [id])
    return(
        <div onClick={() => selectSizeState.closeMenu()}>
            <div className="container">
                <div className="itemInfoPage">
                    <div className="itemInfoPage__photo">
                        <img src={urlPhoto} alt="photoItem"></img>
                    </div>
                    <div className="itemInfoPage__info">
                        <div className="itemInfoPage__info_title">{title}</div>
                        <div className="itemInfoPage__info_describe">
                            {description}
                        </div>
                        <div className="itemInfoPage__info_rating">
                            <div className="itemInfoPage__info_rating-stars">
                                <div className="itemInfoPage__info_rating-stars-body">
                                    <div className="itemInfoPage__info_rating-stars-active" style={{
                                        width: `${(raiting/5) * 100}%`
                                    }}></div>
                                    <div className="itemInfoPage__info_rating-stars-items">
                                        <input type="radio" className="itemInfoPage__info_rating-stars-item" value={1} name="rating" />
                                        <input type="radio" className="itemInfoPage__info_rating-stars-item" value={2} name="rating" />
                                        <input type="radio" className="itemInfoPage__info_rating-stars-item" value={3} name="rating" />
                                        <input type="radio" className="itemInfoPage__info_rating-stars-item" value={4} name="rating" />
                                        <input type="radio" className="itemInfoPage__info_rating-stars-item" value={5} name="rating" />
                                    </div>
                                </div>    
                            </div>
                            <div className="itemInfoPage__info_rating-reviews">0 reviews</div>
                        </div>
                        <div className="itemInfoPage__info_price">{price} USD</div>
                        <div className="itemInfoPage__info_color">
                            <div className="itemInfoPage__info_color-item"></div>
                            <div className="itemInfoPage__info_color-item"></div>
                            <div className="itemInfoPage__info_color-item"></div>
                        </div>
                        <div className="itemInfoPage__info_size">
                            <div className="itemInfoPage__info_size-title">Size</div>
                            <div className="itemInfoPage__info_size-selecter">
                                <div className="itemInfoPage__info_size-selecter-value" onClick={(e) => {
                                    selectSizeState.openMenu()
                                    e.stopPropagation()
                                    }}>
                                    {selectSizeState.statusSize}
                                    <div 
                                    className="itemInfoPage__info_size-selecter-value itemInfoPage__info_size-selecter-arrow"
                                    style={{
                                        rotate: selectSizeState.activeMenu? "0deg" : '180deg'
                                    }}
                                    ></div>
                                </div>
                                <ul 
                                className="itemInfoPage__info_size-selecter-sizeList"
                                style={{
                                    display: selectSizeState.activeMenu? 'block' : 'none'
                                }}>
                                    <li 
                                    onClick={() => selectSizeState.chooseSize('2-3 years')}
                                    className="itemInfoPage__info_size-selecter-item">2-3 years</li>
                                    <li 
                                    onClick={() => selectSizeState.chooseSize('4-5 years')}
                                    className="itemInfoPage__info_size-selecter-item">4-5 years</li>
                                    <li 
                                    onClick={() => selectSizeState.chooseSize('6-7 years')}
                                    className="itemInfoPage__info_size-selecter-item">6-7 years</li>
                                    <li 
                                    onClick={() => selectSizeState.chooseSize('8-9 years')}
                                    className="itemInfoPage__info_size-selecter-item">8-9 years</li>
                                    <li 
                                    onClick={() => selectSizeState.chooseSize('10-11 years')}
                                    className="itemInfoPage__info_size-selecter-item">10-11 years</li>
                                </ul> 
                            </div>
                        </div>
                        <div className="itemInfoPage__info_quantity">
                            <div className="itemInfoPage__info_quantity-title">Quantity</div>
                            <div className="itemInfoPage__info_quantity-wrapper">
                                <div className="itemInfoPage__info_quantity-dec">-</div>
                                <div className="itemInfoPage__info_quantity-value">1</div>
                                <div className="itemInfoPage__info_quantity-inc">+</div> 
                            </div>                  
                        </div>
                        <div className="itemInfoPage__btn">pre-order</div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ItemInfoPage