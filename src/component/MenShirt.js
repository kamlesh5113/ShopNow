import { CartState } from "../context/Context";
import { Button } from "react-bootstrap";
 import SingleProduct from "./SingleProducts";
 import 'bootstrap/dist/css/bootstrap.min.css';

const MenShirt = ({prod}) => {
  const {
    state: { products },
  } = CartState();
  return (
    <>
      <div style={{display:"flex"}} className="home">
      <div style={{display:"flex",width:"78%",padding:"20px",flexWrap:"wrap",justifyContent:" space-around"}} className="productContainer">
      {products.map((prod) => (
         
         <SingleProduct prod={prod} key={prod.id} />
        
         ))}
      </div>
    </div>
    <footer>
            <div className="container-fluid" style={{background:"gray"}}>
                <center><div className="col-lg-4 col-md-4 col-sm-4">
                <h4><a href="/" style={{color:"black"}}>ONLINE SHOPPING</a></h4>
                   
                    
                    </div>
                    </center>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <h4>
                            About Us
                        </h4>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                        <h4>
                            Contact Us
                        </h4>
                        
                    </div>
                    
                    
                    
            </div>
        </footer>
    </>
  );
};
export default MenShirt;
