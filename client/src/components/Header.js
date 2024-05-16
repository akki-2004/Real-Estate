import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();
    let locObj = useLocation();

    // Find if user has any notifications from collection notifi status
    let [notifStatus, setNotifStatus] =  useState(true);

    let loginHandler= () =>{
        navigate('/login');
    }

    let logoutHandler = () => {
        localStorage.clear();
        navigate('/');
    }

    let signupHandler = () => {
        navigate('/signup');
    }


    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand fs-3" to="/">Welcome to OurHomes!</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        {localStorage.getItem('loggedIn') === "true" ? (    
                            <>
                                {/* <span className="navbar-text me-3">Hello {localStorage.getItem("rname")}</span> */}
                                <button onClick={logoutHandler} className="btn btn-danger me-3">Logout</button>
                            </>
                        ) : (
                            <>
                                <button onClick={loginHandler} className="btn btn-success me-3">Login</button>
                                <button onClick={signupHandler} className="btn btn-success me-3">Sign Up</button>
                            </>
                        )}
                       
                        <Link className='btn btn-light ms-1' to="/">Home</Link>
                        <button className="btn btn-primary ms-3">
                            Notifications
                            {notifStatus ? <span className="badge bg-danger ms-2">12</span> : <span className="badge bg-success ms-2">12</span>}
                        </button>
                        <Link to="/listahouse"> 
            <button className="btn btn-primary btn-small ms-3">
                List a house 
            </button> 
        </Link>  
        <Link to="/search">
            <button className="btn btn-primary btn-small ms-3">
                Look up a house
            </button>
        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;