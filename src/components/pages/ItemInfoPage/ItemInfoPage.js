import React from "react";
import './ItemInfoPage.sass'


const ItemInfoPage = () => {
    return(
        <div className="container">
            <div className="itemInfoPage">
                <div className="itemInfoPage__photo">

                </div>
                <div className="itemInfoPage__info">
                    <div className="itemInfoPage__info_title">Birch Shirt in Sand</div>
                    <div className="itemInfoPage__info_describe">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id risus dolor. Cras in interdum arcu. Fusce tempor vulputate pharetra
                    </div>
                    <div className="itemInfoPage__info_rating">
                        <div className="itemInfoPage__info_rating-stars"></div>
                        <div className="itemInfoPage__info_rating-review"></div>
                    </div>
                    <div className="itemInfoPage__info_price"></div>
                    <div className="itemInfoPage__info_color"></div>
                    <div className="itemInfoPage__info_size">
                        <div className="itemInfoPage__info_size-title"></div>
                        <div className="itemInfoPage__info_size-selecter">
                            {/* здесь будет выбранный размер*/}
                            <div className="itemInfoPage__info_size-selecter-value">Select value</div>
                            <ul className="itemInfoPage__info_size-selecter-sizeList">
                                <li className="itemInfoPage__info_size-selecter-item">2-3 years</li>
                                <li className="itemInfoPage__info_size-selecter-item">2-3 years</li>
                                <li className="itemInfoPage__info_size-selecter-item">2-3 years</li>
                            </ul> 
                        </div>
                    </div>
                    <div className="itemInfoPage__info_quantity">
                        <div className="itemInfoPage__info_quantity-dec">-</div>
                        <div className="itemInfoPage__info_quantity-value">1</div>
                        <div className="itemInfoPage__info_quantity-inc">+</div>                   
                    </div>
                    <div className="itemInfoPage__btn">pre-order</div>
                </div>
            </div>
        </div>
    )
}

export default ItemInfoPage