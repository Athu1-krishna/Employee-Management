import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { saveEmpDetails } from '../services/allAPI';

const Add = () => {
  const [empDetails, setEmpDetails] = useState({
    empId : "",
    name : "",
    email : "",
    status : "",

  })
  console.log(empDetails);
  // upload empDetails to api
  const handleUploadEmpDetails = async () =>{
    const{empId, name, email, status} = empDetails;
    if(empId && name && email && status){
      try{
        const result = await saveEmpDetails(empDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          console.log(result);
          alert("Employee added successfully!!!")
          window.location.replace('/')
        }
      }catch(err){
        console.log(err);
        
      }
    }
    else{
      alert("Please fill the form completely!!!")
    }
  }
  return (
      <div style={{ width: '25vw' , marginTop:'130px'}} className='bg-dark p-4 mx-auto text-white'>
        <div>
              <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    
                    <h2 className='text-success'>Add New Employee</h2>
                      <Form.Label>Employee ID</Form.Label>
                      <Form.Control onChange={e => setEmpDetails({...empDetails, empId:e.target.value})} type="text" placeholder="Normal text" />
                      <Form.Label>Employee Name</Form.Label>
                      <Form.Control  onChange={e => setEmpDetails({...empDetails, name:e.target.value})}  type="text" placeholder="Normal text" />
                      <Form.Label>Email address</Form.Label>
                      <Form.Control  onChange={e => setEmpDetails({...empDetails, email:e.target.value})}  type="email" placeholder="name@example.com" />
                      <Form.Label>Employee Status</Form.Label>
                      <Form.Select  onChange={e => setEmpDetails({...empDetails, status:e.target.value})}  aria-label="Default select example">
                          <option>Status</option>
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                      </Form.Select>
                      <div className='mt-3 d-flex justify-content-around'>
                        <button onClick={handleUploadEmpDetails}  className='btn btn-success'>Add</button>
                        <Link to='/'><button className='btn btn-danger'>Cancel</button></Link>
                      </div>
                  </Form.Group>
                 
              </Form>
        </div>
    </div>
  )
}

export default Add