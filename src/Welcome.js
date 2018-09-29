import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

const Welcome = () => {
    return(
        // TODO:Add tagline
        <div className="hero">
            <h1 className="tagline animated fadeInUp" style={{textTransform:`uppercase`}}><em>"making the world smaller"</em></h1>
            <p className="about animated fadeInUp">Grand Mentor is a global company that provides sales partnering 
            and program management services to the automotive industry Customers/Suppliers, promoting sale 
            processes that keep client ahead of their competitors, helping them retain and grow market share. 
            Our sales solutions reduce cost, build customer loyalty and accelerate time to market. We are sales 
            professionals at pioneering new business and products to the automotive industry.
            </p>
            <Link to="/start" className="get-started animated fadeInUp">learn more</Link>
        </div>
    )
}

export default Welcome
