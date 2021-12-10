import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';

function Signup()
{
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    function submitform()
    {
        Axios.post('http://localhost:3000/insert',{
            name:name,
            email:email,
            password:password
        }).then(function(succ){
            if(succ.data === true)
            {
                alert("Registered Successfully")
                window.location.href="/Login";
            }
            else
            {
                alert("Enter valid details")
                window.location.href="/Signup";
            }
        })
    }
    return(
        <>
        <br/><br/><br/>

        <div className="col-lg-8 col-md-8 col-sm-12 col-sm-12">
            <div className="container-fluid">
                <div className="panel">
                    <div className="panel-heading">
                        <h4>Register here</h4>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control"
                                onChange={(event=>{setname(event.target.value)})} placeholder="enter your name"
                                  required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control"
                                onChange={(event=>{setemail(event.target.value)})} placeholder="form-control"
                                placeholder="enter your email" required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control"
                                onChange={(event=>{setpassword(event.target.value)})} placeholder="enter password"
                                required/>
                            </div>
                            <div className="form-group">
                                <button onClick={submitform} value="submit" className="btn btn-info">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Signup;