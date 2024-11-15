import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deleteEmpAPI, getEmpDetailsAPI } from '../services/allAPI';
import Header from './Header';

const Home = () => {
  const [allEmp, setAllEmp] = useState([])
  useEffect(()=>{
    getAllEmp()
  }, [allEmp])
  const getAllEmp = async () => {
    try{
      const result = await getEmpDetailsAPI()
      console.log(result);
      if(result.status >= 200 && result.status < 300){
        setAllEmp(result.data);
      }
      
    }
    catch(err){
      console.log(err);
      
    }
  }
  // delete employee details
  const handleDelete = async (id) => {
    try{
      await deleteEmpAPI(id);
      
      
    }
    catch(err){
      console.log(err);
      
    }
    
  }
  return (
    <div>
      <Header />
        <div style={{width:'50vw'}} className='mx-auto mt-5'>
              <Table striped bordered hover>
                  <thead>
                      <tr>
                          <th>Employee ID</th>
                          <th> Name</th>
                          <th>Email</th>
                          <th>Status</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                        allEmp?.length>0?
                        allEmp?.map(emp=>(
                          <tr key={emp?.id}>
                            <td>{emp?.empId}</td>
                            <td>{emp?.name}</td>
                            <td>{emp?.email}</td>
                            <td>{emp?.status}</td>
                            <td className='d-flex justify-content-center'>
                              <Link to={`/edit/${emp.id}`}><button className='btn btn-primary'>Edit</button></Link>
                              <Link><button onClick={()=>handleDelete(emp?.id)} className='btn btn-danger ms-2'>Delete</button></Link>
                            </td>
                          </tr>
                        ))
                        :
                        <p className='text-danger'>No Employee Added</p>
                      }
                  </tbody>
              </Table>
        </div>
    </div>
  )
}

export default Home