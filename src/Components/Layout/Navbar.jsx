import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-main-color d-flex justify-content-center align-items-start' style={{paddingTop: '1.25vw', paddingBottom: '1.25vw'}}>
        <div className='navbar d-flex' style={{gap: '2vw'}}>
            <span style={{cursor: 'pointer'}}>HOME</span>
            <span style={{cursor: 'pointer'}}>SPECIALITIES</span>
            <span style={{cursor: 'pointer'}}>PATIENT SERVICE</span>
            <span style={{cursor: 'pointer'}}>HEALTHCARE EXPERTS</span>
            <span style={{cursor: 'pointer'}}>FACILITIES</span>
            <span style={{cursor: 'pointer'}}>INTERNATIONAL PATIENTS</span>
            <span style={{cursor: 'pointer'}}>BLOG</span>
        </div>
    </div>
  )
}

export default Navbar