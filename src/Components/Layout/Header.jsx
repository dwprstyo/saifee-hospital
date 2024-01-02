import React from 'react'
import HeaderLogo from'../../assets/header/saifee-logo-web.png';
import Search from'../../assets/header/Search.png';
import Phone from'../../assets/header/phone.png';
import Calendar from'../../assets/header/calendar.png';

const Header = () => {
  return (
    <div className='header d-flex flex-row justify-content-between'>
        <div className='d-flex align-items-center'>
            <img src={HeaderLogo} alt="saifee logo" style={{width: '20.1042vw', cursor: 'pointer'}}/>
        </div>
        <div className='d-flex flex-row align-items-center gap-3'>
            <img src={Search} alt="search" style={{width: '2.9167vw', cursor: 'pointer'}}/>
            <div className='d-flex flex-row align-items-center gap-2'>
                <img src={Phone} alt="phone" style={{width: '1.25vw', cursor: 'pointer'}} />
                <span className='phone'>022-6757-0111</span>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center gap-2' style={{border: '0.1389vw solid #222F66', borderRadius: '2.0833vw', width: '15.3472vw', height: '2.9167vw', cursor: 'pointer'}}>
                <img src={Calendar} alt="calendar" style={{width: '1.1111vw'}} />
                <span className='bookapp'>Book an Appointment</span>
            </div>
        </div>
    </div>
  )
}

export default Header