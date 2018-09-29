import React, { Component } from 'react'
import './App.css'
import 'simplebar'
import About from './assets/services.jpeg'
import Product from './assets/products.jpeg'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      about:true,
      location: false,
      solutions:false,
      services:false,
      products:false,
      contact:false
    }
  }
  render() {
    const {about,solutions,services,products,contact,location} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-12 bu animated fadeInLeft">
            <button className="home-btn b" onClick={() => {this.setState({about:false,solutions:false,services:false,products:false,contact:false,location:true})}}>Location</button>
            <button className="about-btn b" onClick={() => {this.setState({about:true,solutions:false,services:false,products:false,contact:false,location:false})}}>About</button>
            <button className="solutions-btn b" onClick={() => {this.setState({about:false,solutions:true,services:false,products:false,contact:false,location:false})}}>Solutions</button>
          </div>          
          <div className="col-lg-2 col-sm-12 col-lg-push-8 bu animated fadeInRight">
            <button className="services-btn b" onClick={() => {this.setState({about:false,solutions:false,services:true,products:false,contact:false,location:false})}}>Services</button>
            <button className="products-btn b" onClick={() => {this.setState({about:false,solutions:false,services:false,products:true,contact:false,location:false})}}>Products</button>
            <button className="contact-btn b" onClick={() => {this.setState({about:false,solutions:false,services:false,products:false,contact:true,location:false})}}>Contact</button>
          </div>
          <div className="col-lg-8 col-sm-12 col-lg-pull-2">
            {location &&
              <div className="thumbnail about-thumb animated fadeInUp" data-simplebar>
                <h3 className="about-h">Grand Mentor Satellite Office Locations</h3>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <p className="about about-p" style={{marginTop:`25px`}}>Northville, Michigan</p>
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe title="google maps" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=michigan%20northville%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <p className="about about-p" style={{marginTop:`25px`}}>Lohr am Main Germany</p>
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe title="google maps" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Lohr%20am%20Main%20Germany&t=&z=10&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                      </div>
                    </div>
                  </div>
                </div>                
              </div>
            }
            {about &&
            <div className="thumbnail about-thumb animated fadeInUp" data-simplebar>
              <h3 className="about-h">About Us</h3>
              <img className="about-img animated fadeInUp" src={About} alt="About Us"/>
              <p className="about about-p">
              Grand Mentor is a global company that provides sales partnering and program management services 
              to the automotive industry Customers/Suppliers, promoting sale processes that keep client ahead of 
              their competitors, helping them retain and grow market share. Our sales solutions reduce cost , 
              build customer loyalty and accelerate time to market. We are sales professionals at pioneering new 
              business and products to the automotive industry.
              </p>
            </div>
            }
            {solutions &&
            <div className="thumbnail" data-simplebar>
              <h3 className="about-h animated fadeInUp">Our Solutions</h3>
              <h4 className="solutions-h animated fadeInUp">Conserve Capital :</h4>
              <p className="about-p animated fadeInUp">Hiring People can be one of the most costly experiences for any business.</p>
              <p className="about-p animated fadeInUp">Recruitment costs, which can be up to 30<span style={{fontFamily:'lato',fontWeight:'lighter'}}>%</span> of the annual Salary package, take a large slice of the cash plus other up-front costs including equipment,company, car and office space.</p>
              <h4 className="solutions-h animated fadeInUp">Lower your man power overhead :</h4>
              <p className="about-p animated fadeInUp">If you are a business owner, manager or startup entrepreneur 
              looking to grow your business without high costs, risk and hassle of hiring your own team of people, 
              partnering with us can be the answer you are looking for. Rather than committing capital and time to 
              hire direct people, businesses can access resources through our team of sales professionals.
              </p>
              <h4 className="solutions-h animated fadeInUp">Reduced Risk :</h4>
              <p className="about-p animated fadeInUp">In addition to saving huge up-front recruitment fees, 
              many businesses choose to engage our sales team to reduce their risk. Getting a sales hire wrong 
              can be a costly mistake. Its not just the wasted recruitment fees and employment costs; failure in 
              hiring the right sales person can lose customers and destroy reputations.
              </p>
              <p className="about-p animated fadeInUp">By working with our team, you can engage with an experienced 
              sales team on a flexible basis. This could be a small project to see how things go before you scale 
              up the operation, with the ability to terminate the relationship (without any employer obligations) 
              at short notice. For a business to have the ability to reduce risk by using an outsourced sales team 
              is a big plus.
              </p>
              <h4 className="solutions-h animated fadeInUp">Best Solutions :</h4>
              <p className="about-p animated fadeInUp">We offer immediate automotive satellite sales office 
              located in the heart of automotive industry Detroit, Michigan and Lohr am Main Germany.
              </p>
            </div>
            }
            {services &&
            <div className="thumbnail" data-simplebar>
              <h3 className="about-h animated fadeInUp">services</h3>
              <p className="about-p animated fadeInUp"><strong>Why hire a professional when you can hire our team of professionals for less?</strong></p>
              <p className="about-p animated fadeInUp">Grand Mentor services are a direct extension of client’s 
              efforts offering market knowledge and sales force accountability. An immediate solution that 
              offers a satellite office with experienced automotive sales personnel that become an extension 
              of your marketing efforts.
              </p>
              <p className="about-p animated fadeInUp">Grand Mentor specializes in sales and marketing solutions, 
              program management, strategic account planning, public relations and professional research that 
              provide sales solutions for high tech and industrial manufacturing companies.
              </p>
              <p className="about-p animated fadeInUp">Grand Mentor LLC areas of expertise is in the automotive 
              industry promoting companies that are serious about reducing cost, increasing revenue, improving 
              credibility with prospects, building industry relationships with automotive companies and suppliers 
              that drive sales and expand awareness in the market place.
              </p>
              <p className="about-p animated fadeInUp">Grand Mentor provides services with companies interested 
              in pioneering and expanding business with automotive manufacturers and automotive parts suppliers.
              </p>
              <p className="about-p animated fadeInUp"><strong>Our services Include :</strong> sales and marketing, 
              new business development program management, supplier approval process, new product launch, 
              liaison engineering support, market research, PPAP, APQP and trade shows support.
              </p>
            </div>
            }
            {products &&
            <div className="thumbnail product-thumb" data-simplebar>
              <h3 className="about-h animated fadeInUp">products</h3>
              <img src={Product} alt="products" className="about-img animated fadeInUp"/>
              <p className="about-p animated fadeInUp">Grand Mentor offers a successful track record of 
              accomplishments in automotive components sales and new business development to major Tier 1 and 2 
              companies. We possess extensive knowledge of Automotive design, engineering and purchasing,
               manufacturing and supplier quality procedures. We also bring history of relationship with clients 
               in various divisions of these companies.
              </p>
            </div>
            }
            {contact &&
            <div className="thumbnail contact-thumb" data-simplebar dat-auto-hide="true">
              <h3 className="about-h animated fadeInUp">contact us</h3>
              <p className="reach animated fadeInUp" style={{textAlign:'center',fontWeight:'normal'}}>Reach out to us for further queries.</p>
              <div className="form">
                    <form className="animated fadeInUp" action="https://getsimpleform.com/messages?form_api_token=198dab5af5acd739907dcf7466458871" method="post" enctype="multipart/form-data">
                        <input type='hidden' name='redirect_to' value="https://grand-mentor.com/" />
                        <input type='hidden' name='_spam' value='message' />
                        <div className="form-group">
                            <input className="form-control" type="text" name="name" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="phone" placeholder="phone"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" style={{paddingBottom:'5px'}} type="file" name="attachment" placeholder="Insert attachment here .."/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" type="text" name="message" placeholder="Send us your message" rows="5" style={{resize:'none'}}/>
                        </div>
                        <input type="submit" className="send" value="SEND"/>
                    </form>
              </div>
              <div className="below-form animated fadeInUp" style={{textAlign:'center'}}>
                <p className="about-p">Grand Mentor LLC</p>
                <p className="about-p">Northville Michigan - 48168</p>
                <p className="about-p">Email : <a href="mailto:sales@grand-mentor.com">sales@grand-mentor.com</a></p>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
