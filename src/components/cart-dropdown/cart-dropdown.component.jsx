import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Custombutton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                    )
            }
        </div>
        <Custombutton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>
            GO TO CHECKOUT
        </Custombutton>
    </div>
);

const mapsStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapsStateToProps)(CartDropdown));

