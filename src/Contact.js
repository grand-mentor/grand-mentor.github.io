import React from 'react'
import './App.css'

const Contact = () => {
    return(
        <div className="container contact-router">
            <div className="thumbnail" data-simplebar dat-auto-hide="true">
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
        </div> 
        
    )
}

export default Contact