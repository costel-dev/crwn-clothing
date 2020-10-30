import React from "react";
import "./cart-icon.styles.scss";
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

// REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCardHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCardHidden, itemCount }) => (
  <CartContainer onClick={toggleCardHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount} </ItemCountContainer>
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
