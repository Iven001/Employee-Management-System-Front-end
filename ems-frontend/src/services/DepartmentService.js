import axios from 'axios'

const DEPARTMENT_REST_API_BASE_URL = 'http://localhost:8083/api/department';

 export const listDepartment = () => axios.get(DEPARTMENT_REST_API_BASE_URL);

 export const createDepartment = (department) => axios.post(DEPARTMENT_REST_API_BASE_URL, department);

 export const getDepartmentId = (departmentId) => axios.get(DEPARTMENT_REST_API_BASE_URL+'/'+departmentId);

 export const updateDepartment = (departmentId, department) =>  axios.put(DEPARTMENT_REST_API_BASE_URL+'/'+departmentId, department);

 export const deleteDepartment = (departmentId) => axios.delete(DEPARTMENT_REST_API_BASE_URL+'/'+departmentId);