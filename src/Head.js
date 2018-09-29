import React from 'react';
import './App.css';
import Logo from './assets/logo.png';
import Brand from './assets/brand.png';
import {Link} from 'react-router-dom';

const Head = () => {
    return(
        // TODO: Make new header
        <div className="header">
            <div className="container-fluid">
                <div className="navbar navbar-default">                
                    <div className="row">
                        <div className="col-lg-4 col-xs-4">
                            <Link to="/"><img className="logo animated fadeIn" src={Logo} alt="Logo"/></Link>
                        </div>
                        <div className="col-lg-4 col-xs-4">
                            <Link to="/"><img className="brand animated fadeIn" src={Brand} alt="BrandName"/></Link>
                        </div>
                        <div className="col-lg-4 col-xs-4">
                            <Link to="/contact"><i className="far contact-nav fa-envelope fa-2x"></i></Link>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Head;
