import { useContext } from "react";
import { Cartcontext } from "../context/cartContext";
import Button from 'react-bootstrap/Button';
import "./cart.css";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  return (
    <div className="card">
      {state.map((product, index) => {
        return (
          <div className="carditem" key={index}>
            <div>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            </div>
            <div>
              <h4>PRICE</h4>
            <p>{product.quantity * product.price}</p>
            </div>
            
              <div className="quantity">
              <div className="button">
              <Button variant="primary" className= "Add" onClick={() => dispatch({ type: "INCREASE", payload: product })} >+</Button>{' '}
              <p>{product.quantity}</p>
              <Button className="Sub"
                onClick={() => {
                  if (product.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: product });
                  } else {
                    dispatch({ type: "REMOVE", payload: product });
                  }
                }}>
                -
              </Button>
              </div>
              <div>
              <Button variant="danger" onClick={() => dispatch({ type: "REMOVE", payload: product })} >REMOVE</Button>{' '}
              </div>
            
            
            </div>
          </div>
        );
      })}
      {state.length > 0 ?(
        <div className="total">
          <h2>{total}</h2>
        </div>
      ):(
        <div>
          <h1>NO ITEMS IN THE CART. PLEASE ADD ITEMS</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;