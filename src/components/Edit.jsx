import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getEmpByIdAPI, updateEmpAPI } from '../services/allAPI';
import { useState } from 'react';

const Edit = () => {
    const { id } = useParams()
    const navigate= useNavigate()
    // console.log(id);
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        status: '',
    });
    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await getEmpByIdAPI(id); // Store the response
                const fetchedEmployee = response.data; // Access the data property

                console.log(fetchedEmployee); // Check the structure



                // Ensure the fetched data is structured correctly
                if (fetchedEmployee) {
                    setEmployee({
                        name: fetchedEmployee.name ,
                        email: fetchedEmployee.email ,
                        status: fetchedEmployee.status ,
                    });
                } else {
                    setError('Employee not found');
                }
            } catch (err) {
                setError('Error fetching employee details');
                console.error('Error:', err);
            }
        };

        fetchEmployee();
    }, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const editEmp = async () => {
        try {
            await updateEmpAPI(id, employee);
            alert('Employee updated successfully!');
            navigate('/home');
            // console.log(employee);
            
        } catch (err) {
            console.log(err);
            
        }
    }
    return (
        <div style={{ width: '25vw', marginTop:'180px' }} className='bg-dark p-4 mx-auto  text-white rounded'>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <h2 className='text-primary'>Edit Employee Details</h2>
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control value={employee?.name} onChange={e => setEmployee({ ...employee, name: e.target.value })} type="text" placeholder="Normal text" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={employee?.email} onChange={e => setEmployee({ ...employee, email: e.target.value })}  type="email" placeholder="name@example.com" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Select value={employee?.status} onChange={e=>setEmployee({...employee, status:e.target.value})}  aria-label="Default select example">
                            <option >Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Form.Select>
                        <div className='mt-3 d-flex justify-content-around'>
                            <Link to='/'> <button onClick={editEmp} className='btn btn-primary'>Edit</button></Link>
                            <Link to='/'><button className='btn btn-danger'>Cancel</button></Link>
                        </div>
                    </Form.Group>

                </Form>
            </div>
        </div>
    )
}

export default Edit