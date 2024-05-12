import React, { useEffect, useState } from "react";
import {
    deleteDepartment,
  listDepartment,
  updateDepartment,
} from "../services/DepartmentService";
import { Link, useNavigate } from "react-router-dom";

const ListDepartmentComponent = () => {
  const [deparments, setDepartments] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
     listofDepartments();
  }, []);

  function listofDepartments () {

    listDepartment()
      .then((response) => {
        console.log(response.data);
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  function updateDepartment(id) {
    navigator(`/edit-department/${id}`);
  }

  function removeDepartment(id) {
     console.log(id);

     deleteDepartment(id).then((response) => {
        console.log(response.data);
        listofDepartments();
     }).catch((error) => {
        console.error(error);
     })
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Department</h2>

      <Link className="btn btn-primary mb-2" to="/add-department">
        Add Department
      </Link>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {deparments.map((deparment) => (
            <tr key={deparment.id}>
              <td> {deparment.id} </td>
              <td> {deparment.departmentName} </td>
              <td> {deparment.departmentDescription} </td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateDepartment(deparment.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeDepartment(deparment.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponent;
