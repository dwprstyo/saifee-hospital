import React from 'react'
import Twitter from'../../assets/top/twitter.png';
import Instagram from'../../assets/top/instagram.png';
import Facebook from'../../assets/top/facebook.png';
import Linkedin from'../../assets/top/linkedin.png';

const Top = () => {
  return (
    <div>
        <div className='top d-flex flex-row justify-content-between bg-alternate-1'>
            <div className='d-flex flex-row align-items-center gap-1'>
              <span style={{cursor: 'pointer'}}>About Us</span>
              <span>|</span>
              <span style={{cursor: 'pointer'}}>News & Media</span>
              <span>|</span>
              <span style={{cursor: 'pointer'}}>Academics</span>
              <span>|</span>
              <span style={{cursor: 'pointer'}}>Testimonials</span>
              <span>|</span>
              <span style={{cursor: 'pointer'}}>Careers</span>
              <span>|</span>
              <span style={{cursor: 'pointer'}}>Contact</span>
            </div>
            <div className='d-flex flex-row align-items-center gap-1'>
              <span>Follow us on:</span>
              <div className='d-flex justify-content-center align-items-center' style={{border: 'solid #053B8C 0.0694vw', width: '1.8056vw', height: '1.8056vw', borderRadius: '50%', cursor: 'pointer'}}>
                <img src={Facebook} alt="facebook" style={{width: '0.4861vw'}}/>
              </div>
              <div className='d-flex justify-content-center align-items-center' style={{border: 'solid #00C2FF 0.0694vw', width: '1.8056vw', height: '1.8056vw', borderRadius: '50%', cursor: 'pointer'}}>
                <img src={Twitter} alt="twitter" style={{width: '0.661vw'}}/>
              </div>
              <div className='d-flex justify-content-center align-items-center' style={{border: 'solid #CF00A2 0.0694vw', width: '1.8056vw', height: '1.8056vw', borderRadius: '50%', cursor: 'pointer'}}>
                <img src={Instagram} alt="intsagram" style={{width: '0.661vw'}}/>
              </div>
              <div className='d-flex justify-content-center align-items-center' style={{border: 'solid #1D88CA 0.0694vw', width: '1.8056vw', height: '1.8056vw', borderRadius: '50%', cursor: 'pointer'}}>
                <img src={Linkedin} alt="linkedin" style={{width: '0.661vw'}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Top