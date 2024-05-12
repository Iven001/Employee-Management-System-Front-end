//  import React, {useEffect, useState} from 'react'
//  import { listEmployees } from '../services/EmployeeService'
 
//  const List = () => {

//    const [emps, setEmps] = useState([])

//    useEffect(()=> {
//         listEmployees().then((response) => {
//             setEmps(response.data);
//         }).catch(error => {
//             console.error(error);
//         })

//    } , [] )




//    return (
//      <div className='container'>
//         <h2 className='text-center'>List Of Emp</h2>
//         <table className='table table-striped table-bordered'>
//             <thead>
//                 <tr>
//                     <th>Employee Id</th>
//                     <th>Employee First Name</th>
//                     <th>Employee Last Name</th>
//                     <th>Employee Email Name</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     emps.map(emp =>
//                         <tr  key={emp.id}>
//                             <td>{emp.id}</td>
//                             <td>{emp.firstName}</td>
//                             <td>{emp.lastName}</td>
//                             <td>{emp.mail}</td>
//                        </tr>
//                         )
//                 }
                
//             </tbody>
//         </table>
//      </div>
//    )
//  }
 
//  export default List