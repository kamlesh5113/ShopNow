import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';
export const Contact = () => {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [query,SetQuery]=useState('');
    function AddQuery()
    {
        Axios.post('http://localhost:3000/insert1' ,{
            name:name,
            email:email,
            query:query
        }).then(function(succ)
        {
            if(succ.data===true)
            {
                alert("Thanks your query is Submitted");
                window.location.href="/";
            }
            else
            {
                alert("Please enter valid details");
            }
        })
    }



    return (
        <div> 
            <br/><br/><br/>
              <span><h2>Contact Us...</h2></span>
              <div className="container-fluid">
                  <div className="panel panel-default">
                      <div className="panel-body">
                          <form>
                              <div className="form-group">
                              <label for="name">Name</label>
                          <input type="text" name="name" className="form-control"
                           onChange={(event=>{setName(event.target.value)})}
                          placeholder="Enter your name"/>
                          </div>
                          <div className="form-group">
                              <label for="Email">Email</label>
                          <input type="email" name="Email" 
                           onChange={(event=>{setEmail(event.target.value)})}
                          className="form-control" placeholder="Enter your email"/>
                          </div>
                          <div className="form-group">
                              <label for="query">Enter Your Query</label>
                              <input type="address" placeholder="Enter your query" 
                              onChange={(event=>{SetQuery(event.target.value)})}
                              className="form-control" name="query"/>
                          </div>
                          <div className="form-group">
                              <button onClick={AddQuery} className="btn btn-primary">Submit</button>
                          </div>
                          </form>
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



        </div>
    )
}
