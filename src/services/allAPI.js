import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

// upload employee details

export const  saveEmpDetails = async (empDetails) => {
    return await commonAPI("POST", `${SERVERURL}/empDetails`, empDetails)
}

// get all details of employee from api

export const getEmpDetailsAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/empDetails`,"")
}

// delete employee from api
export const deleteEmpAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVERURL}/empDetails/${id}`,{})
}
// get employee by id
export const getEmpByIdAPI = async (id) => {
    return await commonAPI("GET", `${SERVERURL}/empDetails/${id}`, "")
}
// edit employee details
export const updateEmpAPI = async (id, empDetails) => {
    return await commonAPI("PATCH", `${SERVERURL}/empDetails/${id}`,{
        "name":empDetails.name,
        "email":empDetails.email,
        "status":empDetails.status
    })
}