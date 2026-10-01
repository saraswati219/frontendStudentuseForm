import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewStudents = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //get all data
  const getAllData = async () => {
    //let result = await axios.get("http://localhost:3000/students"); //Json url
    let result = await axios.get("http://localhost:8080/get");
    setData(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  //delete data
  const onDelete = async (id) => {
    if (confirm("do you want to delete record?:" + id)) {
      await axios.delete("http://localhost:8080/delete/" + id);
      getAllData();
    }
  };

  //updating
  const onEdit = (id) => {
    if (confirm("do you want to edit data?:" + id)) {
      navigate("/update/" + id);
    }
  };
  return (
    <div>
      <h1 className="text-center text-danger bg-dark p-2">View Student</h1>
      <br></br>
      <table className="table table-stripped table hover w-75 mx-auto my-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Password</th>
            <th>DOB</th>
            <th>Contact</th>
            <th>Batch</th>
            <th>Fees</th>
            <th>Gender</th>

            <th>Course</th>
            <th>Image</th>
            <th>Pincode</th>
            <th>Area</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.sname}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <td>{val.dob}</td>

                <td>{val.contact}</td>
                <td>{val.batch}</td>
                <td>{val.fees}</td>
                <td>{val.gender}</td>

                <td>{val.courses.toString()}</td>
                <td>
                  <img src={val.imageUrl} style={{ height: "100px" }}></img>
                </td>
                <td>{val.address.pincode}</td>
                <td>{val.address.area}</td>
                <td>{val.address.city}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(val.id)}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => onEdit(val.id)}
                  >
                    update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;
