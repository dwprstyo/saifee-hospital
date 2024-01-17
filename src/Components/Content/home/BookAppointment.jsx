import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import DoctorConsultation from "../../../assets/home/female-doctor-consultation.png";

const BookAppointment = () => {
  const [formDate, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formDate);
  };

  return (
    <div className="d-flex flex-row">
      <img
        src={DoctorConsultation}
        alt="doctor-consultation"
        style={{ width: "50.0694vw", height: "46.4583vw", objectFit:'cover' }}
      />
      <div
        className="bg-main-color d-flex flex-column"
        style={{
          width: "100%",
          height: "46.4583vw",
          paddingTop: "5vw",
          paddingBottom: "5vw",
          paddingLeft: "3.4028vw",
          paddingRight: "9.3056vw",
        }}
      >
        <span className="excelent-header2" style={{ color: "white" }}>
          Book <span className="excelent-header2">Appoinment</span>
        </span>
        <span
          className="excelent-content"
          style={{ color: "white", textAlign: "left", marginBottom: '1.4583vw' }}
        >
          To reach out to our Saifee Hospital Team, please fill in the below
          form. Our team members will revert back to you shortly.
        </span>
        <div>
          <Form>
            <Form.Group >
              <Form.Control  className="bg-main-color book py-2 px-0" name="name" value={formDate.name} onChange={handleChange} type="text" placeholder="Full Name" style={{height: '3vw' ,border: 'none', borderBottom: '#3A478D solid 0.0694vw', borderRadius: '0px', color: '#A1A7CB', outline: 'none', boxShadow: 'none', fontSize: '1.0417vw'}} />
            </Form.Group>
            <Form.Group >
              <Form.Control  className="bg-main-color book py-2 px-0" name="email" value={formDate.email} onChange={handleChange} type="email" placeholder="Email" style={{height: '3vw' ,border: 'none', borderBottom: '#3A478D solid 0.0694vw', borderRadius: '0px', color: '#A1A7CB', outline: 'none', boxShadow: 'none'}} />
            </Form.Group>
            <Form.Group >
              <Form.Control  className="bg-main-color book py-2 px-0" name="phoneNumber" value={formDate.phoneNumber} onChange={handleChange} type="number" placeholder="Phone Number" style={{height: '3vw' ,border: 'none', borderBottom: '#3A478D solid 0.0694vw', borderRadius: '0px', color: '#A1A7CB', outline: 'none', boxShadow: 'none'}} />
            </Form.Group>
            <Form.Group style={{marginBottom: '1.4583vw'}}>
              <Form.Control className="bg-main-color book px-0" name="message" value={formDate.message} onChange={handleChange} type="textarea" rows={3} placeholder="Your Message" style={{height:'7vw' ,border: 'none', borderBottom: '#3A478D solid 0.0694vw', borderRadius: '0px', color: '#A1A7CB', outline: 'none', boxShadow: 'none'}}/>
            </Form.Group>
            <div className="bg-alternate-5 d-flex align-items-center justify-content-center excelent-content" onClick={handleSubmit} style={{cursor: 'pointer', width:'9.4444vw', height: '3.4722vw', fontWeight: '700', textTransform: 'uppercase', color:'white'}}>
                BOOK NOW
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
