import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

function Login()
{
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    function formsubmit()
    {
        Axios.post('http://localhost:3000/login', {
            email:email,
            password:password
        }).then(function(succ)
        {
            console.log(succ)
            if(succ.data===true)
            {
                localStorage.setItem('token',email);
                window.location.href='/';
            }
            else
            {
                alert("Invalid details")
                window.location.href="/Login";
            }
        })
    }
    return(
        <>
        <br/><br/><br/>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="container-fuild">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2>Login</h2>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control"
                                onChange={(event=>{setemail(event.target.value)})} placeholder="enter your email
                                "  required/>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type="password" className="form-control"
                                onChange={(event=>{setpassword(event.target.value)})} placeholder="enter your password"
                                required/>
                                </div>
                                <div className="form-group">
                                    <button onClick={formsubmit} value="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                </div>

                        </form>
                    </div>
                    <div className="panel-footer">
                        Don't have an Account, <a href="/Signup">Register</a>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Login;