import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { Badge,
    Button,
    Dropdown,
    } from 'react-bootstrap';
import { CartState } from '../context/Context';
import './Scrip.css';
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function Navbar()
{
    const {
        state: { cart },
        dispatch,
        productDispatch,
      } = CartState();

    var token = localStorage.getItem('token');
    console.log("c: ",cart);
    function logout()
    {
        localStorage.removeItem('token');
        window.location.href="/";
    }
    if(token!=null){
        return(
            <>
            <nav className="navbar navbar-default navbar-fixed-top navbar-expand-sm" style={{background:"white"}}>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                        data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="active navbar-brand" href="/"><span style={{color:"black",fontSize:"20px"}}>Shop Now</span></a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
      
                    <ul className="nav navbar-nav">
                          <li><a className="active navbar-brand" href="/MenShirt" style={{color:"black", marginLeft:"40px"}}><span>Home</span></a></li>
                          <li><a className="active navbar-brand" href="/Contact" style={{color:"black", marginLeft:"40px"}}><span>Contact Us</span></a></li>

                           </ul>
                    <ul className="nav navbar-nav navbar-right">
                    <li>
                      <button style={{color:"black", border:"0px",padding:"10px",marginRight:"8px",background:"white"}} onClick={logout}>Logout</button>
                    </li>
                    <li>                    
                    <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
                    
                    </li>
                    </ul>
                    </div>
                </div>
            </nav>
            </>
        )
              }
              else
              {
                return(
                  <>
                  <nav className="navbar navbar-default navbar-fixed-top navbar-expand-sm" style={{background:"white"}}>
                      <div className="container">
                          <div className="navbar-header">
                              <button type="button" className="navbar-toggle" data-toggle="collapse"
                              data-target="#myNavbar">
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                              </button>
                              <a className="active navbar-brand" href="/"><span style={{color:"black",fontSize:"30px"}}>Shop Now</span></a>
                          </div>
                          <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                          <li><a className="active navbar-brand" href="/MenShirt" style={{color:"black", marginLeft:"40px"}}><span>Home</span></a></li>
                          <li><a className="active navbar-brand" href="/Contact" style={{color:"black", marginLeft:"40px"}}><span>Contact Us</span></a></li>

                           </ul>
                          <ul className="nav navbar-nav navbar-right">
                          <li><a href="/Signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                          <li><a href="/Login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                          <li>                    
                          <Dropdown alignRight>
                  <Dropdown.Toggle variant="success">
                    <FaShoppingCart color="white" fontSize="25px" />
                    <Badge>{cart.length}</Badge>
                  </Dropdown.Toggle>
      
                  <Dropdown.Menu style={{ minWidth: 370 }}>
                    {cart.length > 0 ? (
                      <>
                        {cart.map((prod) => (
                          <span className="cartitem" key={prod.id}>
                            <img
                              src={prod.image}
                              className="cartItemImg"
                              alt={prod.name}
                            />
                            <div className="cartItemDetail">
                              <span>{prod.name}</span>
                              <span>₹ {prod.price}</span>
                            </div>
                            <AiFillDelete
                              fontSize="20px"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: prod,
                                })
                              }
                            />
                          </span>
                        ))}
                        <Link to="/cart">
                          <Button style={{ width: "95%", margin: "0 10px" }}>
                            Go To Cart
                          </Button>
                        </Link>
                      </>
                    ) : (
                      <span style={{ padding: 10 }}>Cart is Empty!</span>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
                          
                          </li>
                          </ul>
                          </div>
                      </div>
                  </nav>
                  </>
              )
              }
              }

export default Navbar;