import React from 'react';
import './Scrip.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { CartState } from "../context/Context";
import logo from "../images/Shirt1.webp";
import logo1 from "../images/Shirt2.webp";
import logo2 from "../images/Shirt3.webp";
import logo3 from "../images/Shirt4.jpg";
import logo4 from "../images/Tshirt1.webp";
import logo5 from "../images/Tshirt2.webp";
import logo6 from "../images/Tshirt3.webp";
import logo7 from "../images/Tshirt4.webp";
import logo8 from "../images/Tshirt5.webp";

function Home()
{
    return(
        <>
        <br/>
        <div className="containe">
            <div className="container">
                    <h5>NEW ARRAIVALS</h5>
                    <h1><span>Best Price</span> This Year</h1>
                    <p>Shoomatic offers yours very comfortable time<br/>
                    on walking and exercises</p>
                    
               </div>

        </div>
        <center><h3>OUR PRODUCTS..</h3></center>

        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Link to="/MenShirt"><div className="thumbnail">
                        <img src={logo} alt="Error"/>
                        <center>
                            <p style={{fontSize:"20px"}}>
                                Shirt
                            </p>
                        </center>
                    </div></Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Link to="/MenShirt"><div className="thumbnail">
                        <img src={logo1} alt="Error"/>
                        <center>
                            <p style={{fontSize:"20px"}}>
                                Shirt
                            </p>
                        </center>
                    </div></Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Link to="/MenShirt"><div className="thumbnail">
                        <img src={logo2} alt="Error"/>
                        <center>
                            <p style={{fontSize:"20px"}}>
                                Shirt
                            </p>
                        </center>
                    </div></Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Link to="/MenShirt"><div className="thumbnail">
                        <img src={logo3} alt="Error"/>
                        <center>
                            <p style={{fontSize:"20px"}}>
                                Shirt
                            </p>
                        </center>
                    </div></Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Link to="/MenShirt"><div className="thumbnail">
                        <img src={logo4} alt="Error"/>
                        <center>
                            <p style={{fontSize:"20px"}}>
                            Tshirt
                            </p>
                        </center>
                    </div></Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Link to="/MenShirt"><div className="thumbnail">
                        <img src={logo5} alt="Error"/>
                        <center>
                            <p style={{fontSize:"20px"}}>
                            Tshirt
                            </p>
                        </center>
                    </div></Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Link to="/MenShirt"><div className="thumbnail">
                        <img src={logo6} alt="Error"/>
                        <center>
                            <p style={{fontSize:"20px"}}>
                            Tshirt
                            </p>
                        </center>
                    </div></Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Link to="/MenShirt"><div className="thumbnail">
                        <img src={logo7} alt="Error"/>
                        <center>
                            <p style={{fontSize:"20px"}}>
                            Tshirt
                            </p>
                        </center>
                    </div></Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <Link to="/MenShirt"><div className="thumbnail">
                        <img src={logo8} alt="Error"/>
                        <center>
                            <p style={{fontSize:"20px"}}>
                                Tshirt
                            </p>
                        </center>
                    </div></Link>
                </div>
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
    )
}
export default Home;


{/* <h2>CATEGORIES TO BAG</h2>
        <br/>
            
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <center>  <Link to="/MenTshirt"><img src={logo} className="img-responsive" alt="error"/>
                     
                         <p>40-50% off</p>
                     
                         </Link></center>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <center><Link to="/MenShirt"><img src={logo1} className="img-responsive" alt="error"/>
                        
                         <p>30-40% off</p>
                        
                         </Link> </center>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <center><Link to="/MenJeans"><img src={logo2} className="img-responsive" alt="error"/>
                       
                         <p>40-60% off</p>
                         
                         </Link></center>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <center><Link to="/MenTrouser"><img src={logo12} className="img-responsive" alt="error"/>
                    
                    <p>40-50% off</p>
                    </Link>
                    </center>
                </div>
            
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <center><Link to="/WomenKurtas"><img src={logo4} className="img-responsive" alt="error"/>
                
                    <p>40-50% off</p>
                
                    </Link></center>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <center><Link to="/MenSarees"><img src={logo5} className="img-responsive" alt="error"/>
                
                    <p>40-50% off</p>
                    
                    </Link></center>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <center><Link to="/WomenHandbags"><img src={logo3} className="img-responsive" alt="error"/> 
            
                    <p>40-50% off</p>
                    
                    </Link></center>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
               <center> <Link to="/WomenDress"><img src={logo13} className="img-responsive" alt="error"/>
                    
                    <p>40-50% off</p>
                   
                    </Link> </center>
                </div>
            
        </div>
        <br/>

        <div className="container">
        <h2>TRENDING TO FOOTWEARS</h2>
        <br/>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
       <center> <Link to="/MenShoes"> <img src={logo6} className="img-responsive" alt="error"/>
        </Link></center></div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <center><Link to="/MenShoes"><img src={logo7} className="img-responsive" alt="error"/>
        </Link></center></div>
        
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <center><Link to="/MenShoes">  <img src={logo14} className="img-responsive" alt="error"/>
        </Link></center></div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <center><Link to="/MenShoes"><img src={logo8} className="img-responsive" alt="error"/>
        </Link></center></div>

        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <center><Link to="/WomenShoes">    <img src={logo10} className="img-responsive" alt="error"/>
        </Link></center></div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <center><Link to="/WomenShoes">  <img src={logo11} className="img-responsive" alt="error"/>
        </Link></center></div>
        
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <center><Link to="/WomenShoes"> <img src={logo15} className="img-responsive" alt="error"/>
        </Link></center></div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <center><Link to="/WomenShoes"> <img src={logo9} className="img-responsive" alt="error"/>
        </Link></center>
        </div>
        </div> */}