import React, { useEffect, useState } from "react";
import { createDepartment, getDepartmentId, updateDepartment } from "../services/DepartmentService";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentComponent = () => {

  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");

  const {id} = useParams();

  const navigator = useNavigate();

  useEffect(() => {
         getDepartmentId(id).then((response) => {
            setDepartmentName(response.data.departmentName);
            setDepartmentDescription(response.data.departmentDescription);
        }).catch(error =>{
            console.log(error);
        })
  }, [id])

  const saveOrUpdateDepartment = (e) => {
        e.preventDefault();

        const department = { departmentName, departmentDescription }

        console.log(department);

        if(id) {
            updateDepartment(id, department).then((response) => {
                console.log(response.data);
                navigator('/departments')
            }).catch(error => {
                console.error(error);
            })
        }else {
            createDepartment (department).then((response) => {
                console.log(response.data);
                navigator('/departments')
            }).catch(error => {
                console.error(error);
            })
        }  
  }

  function pageTitle() {
    if(id){
        return <h2 className="text-center">Update Department</h2>
    }else {
        return <h2 className="text-center">Add Department</h2>
    }
  }



  return (
    <div className="container">  <br/><br/>
      

        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {
                    pageTitle()
                }
            <div className="card-body">
                    <form>
                    <div className="form-group mb-2">
                <label className="form-label">Department Name</label>
                <input 
                    type="text"
                    placeholder='Enter Department Name'
                    name='departmentName'
                    value={departmentName}
                    className="form-control"
                    onChange={(e) => setDepartmentName(e.target.value)}
                >
                </input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Department Description</label>
                <input 
                    type="text"
                    placeholder='Enter Department Description'
                    name='departmentDescription'
                    value={departmentDescription}
                    className="form-control"
                    onChange={(e) => setDepartmentDescription(e.target.value)}
                >
                </input>
              </div>
                <button className="btn btn-outline-success" onClick={saveOrUpdateDepartment}>Submit</button>
                    </form>

                </div>

            </div>

        </div>

    </div>
  );

};

export default DepartmentComponent;
