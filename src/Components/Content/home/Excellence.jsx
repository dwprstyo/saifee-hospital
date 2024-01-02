import React from 'react'
import Doctor2 from "../../../assets/home/doctor-talking-with-patients2.png";
import Doctor1 from "../../../assets/home/doctor-talking-with-patients1.png";
import Doctor3 from "../../../assets/home/doctor-talking-with-patients3.png";

const Excellence = () => {
  return (
    <div className='d-flex align-items-center flex-column' style={{paddingLeft: '9.5833vw', paddingRight: '9.5833vw', paddingTop: '3.3333vw', paddingBottom: '6.6666vw'}}>
        <span className='excelent-header'>OUR CENTRES OF <span className='excelent-header2'>EXCELLENCE</span></span>
        <div className='d-flex justify-content-center' style={{width: '52.9167vw', height: '6.1111vw'}}>
            <span className='excelent-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper ultrices sed adipiscing malesuada aliquam nisl fusce sit. Scelerisque suspendisse feugiat lectus nulla ullamcorper porttitor purus enim. Volutpat mattis amet semper volutpat odio. Risus faucibus interdum volutpat nibh venenatis.</span>
        </div>
        {/* MENU IMAGE */}
        <div className='d-flex flex-row gap-3'>
            <div className='d-flex justify-content-center' style={{width: '26.3889vw', height: '22.0833vw', position: 'relative'}}>
                <img src={Doctor2} alt="doctor" style={{width: '26.1vw', height: '20.1389vw', borderRadius: '1.3889vw'}} />
                <div className='bg-alternate-4 d-flex justify-content-center align-items-center shadow' style={{width: '20.8333vw', height: '3.75vw', position: 'absolute', bottom: '0vw', borderRadius: '0.5556vw'}}>
                    <span className='menu-excelent'>Cardiology Center of Excellence</span>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '26.3889vw', height: '22.0833vw', position: 'relative'}}>
                <img src={Doctor1} alt="doctor" style={{width: '26.1vw', height: '20.1389vw', borderRadius: '1.3889vw'}} />
                <div className='bg-alternate-4 d-flex justify-content-center align-items-center shadow' style={{width: '20.8333vw', height: '3.75vw', position: 'absolute', bottom: '0vw', borderRadius: '0.5556vw'}}>
                    <span className='menu-excelent'>General Surgery Center of Excellence</span>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '26.3889vw', height: '22.0833vw', position: 'relative'}}>
                <img src={Doctor3} alt="doctor" style={{width: '26.1vw', height: '20.1389vw', borderRadius: '1.3889vw'}} />
                <div className='bg-alternate-4 d-flex justify-content-center align-items-center shadow' style={{width: '20.8333vw', height: '3.75vw', position: 'absolute', bottom: '0vw', borderRadius: '0.5556vw'}}>
                    <span className='menu-excelent'>Paediatric Center of Excellence</span>
                </div>
            </div>
        </div>
        {/* END OF MENU IMAGE */}
    </div>
  )
}

export default Excellence