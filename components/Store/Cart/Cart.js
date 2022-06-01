import React, {useContext} from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CheckOutBtn from "../PaymentCheckout/CheckOutBtn";
import CartContext from "../../../context/cart-context";
import PayStackBtn from "../PaymentCheckout/PayStackBtn";

 

const Cart = ({ className, onHideCart }) => {
  const cartCtx = useContext(CartContext);



    const hideCartHandler = () => {
        onHideCart()
    }

    const cartClasses = `${classes["cart"]} ${classes[className]}`

  return (
    <div className={cartClasses}>
         <div className={classes["exit-btn"]} onClick={hideCartHandler}>&times;</div>
      <h2 className={classes.title}>Shopping Cart</h2>
     
      <div className={classes["cart-items-wrapper"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={`cart-item${item.id}${Math.random().toFixed(5)}`}
            item={item}
          />
        ))}
      </div>
      <div className={classes["subtotal-section"]}>
          <p className={classes["subtotal-title"]}>SUBTOTAL</p>
          <p className={classes["subtotal"]}>₦{cartCtx.subtotal.toFixed(2)}</p>
      </div>
      <p className={classes["tax-calc-info"]}>taxes and shipping calculated at checkout</p>
      {cartCtx.items.length > 0 && (
        <div className={classes["actions"]}>
          <CheckOutBtn className={classes["check-out-btn"]} />
          {/* <GooglePayBtn item={cartCtx} fromCart={true} className={classes["g-pay-btn"]} /> */}
          {/* <PayStackBtn item={cartCtx} fromCart={true} /> */}
        </div>
      )}
    </div>
  );
};

export default Cart;

//fcd4ff2119a914e5621732d661967be20008657
