
import { useContext, useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Cartcontext } from "../context/cartContext";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    //console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  //console.log(Globalstate);
  return (
    
    <Card className="Prod">
      {products.map((product, index) => {
        product.quantity = 1;
        return (
          <Card.Body key={index}>
           <Card.Img variant="top" src={product.image} />
            
            <Card.Text>
            {product.title}
            </Card.Text>
            <h3>$. {product.price}</h3>
            <Button onClick={() => dispatch({ type: "ADD", payload: product })}>
              add to cart
            </Button>
          
          </Card.Body>
        );
      })}
    </Card>
    
  );
};

export default Homepage;