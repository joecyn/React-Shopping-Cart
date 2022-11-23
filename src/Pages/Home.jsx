
import { useContext, useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Cartcontext } from "../context/cartContext";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const[isLoading,setisLoading]=useState(false)
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    //console.log(data);
  };
  useEffect(() => {
    
    fetchData();
    setisLoading(true)
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  //console.log(Globalstate);
  return (
    
    <Card  >
      <div className="Prod">
        {isLoading ?(
          
          <ul class="fa-ul">
               <li><i class="fa-li fa fa-spinner fa-spin fa-5x"></i></li>
          </ul>


        ):(
          <>{products.map((product, index) => {
            product.quantity = 1;
            return (
              <Card.Body className="card" key={index}>
               <Card.Img variant="top" src={product.image} />
                
                <Card.Text>
                {product.title.length > 20 ? (
                  <p>{product.title.slice(0,10)}...</p>
                ):(
                  <p>{product.title}</p>
                )}
                </Card.Text>
                <h6>$. {product.price}</h6>
                <Button onClick={() => dispatch({ type: "ADD", payload: product })}>
                  add to cart
                </Button>
              
              </Card.Body>
            );
          })}
          
        </>
        )}
        
      </div>
    </Card>
    
    
  );
};

export default Homepage;