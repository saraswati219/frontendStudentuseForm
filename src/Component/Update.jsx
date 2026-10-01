import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  let { register, handleSubmit, setValue } = useForm();
  let navigate = useNavigate();

  const { id } = useParams();
  const getSingleData = async () => {
    // let result = await axios.get("http://localhost:3000/students/" + id);
    let result = await axios.get("http://localhost:8080/single/" + id); //connect to backend
    console.log(result.data);

    for (let props in result.data) {
      console.log(props);
      setValue(props, result.data[props]);
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);

  const onUpdate = async (data) => {
    alert("Update success..!");
    //await axios.put("http://localhost:3000/students/" + data.id, data);
    await axios.put("http://localhost:8080/update", data); //connect with backend
    navigate("/viewstudents");
  };

  return (
    <div>
      <h2 style={{ color: "red" }}>Register Form</h2>
      <br></br>
      <div
        style={{
          border: "1px solid",

          backgroundColor: "lightyellow",
          padding: "10px",
          width: "300px",

          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit(onUpdate)}>
          Name :{" "}
          <input type="text" {...register("sname")} placeholder="Enter name " />{" "}
          <br></br>
          <br></br>
          E-mail :
          <input
            type="email"
            {...register("email")}
            placeholder="Enter email"
          />{" "}
          <br></br>
          <br></br>
          Passord :{" "}
          <input
            type="password"
            {...register("password")}
            placeholder="Enter Password"
          />
          <br></br>
          <br></br>
          DOB : <input type="date" {...register("dob")} />
          <br></br>
          <br></br>
          Contact :{" "}
          <input
            type="number"
            {...register("contact")}
            placeholder="Enter contact "
          />
          <br></br>
          <br></br>
          Batch{" "}
          <select {...register("batch")}>
            <option value="b210">B210</option>
            <option value="b211">B211</option>
            <option value="b212">B212</option>
            <option value="b213">B213</option>
          </select>
          <br></br>
          Fees : <input type="number" {...register("fees")} />
          <br></br>
          <p>Gender : </p> male :{" "}
          <input type="radio" value={"male"} {...register("gender")} />
          female :{" "}
          <input type="radio" value={"female"} {...register("gender")} />
          <br></br>
          <br></br>
          <br></br>
          <p>Course : </p> JAVA :{" "}
          <input type="checkbox" value={"java"} {...register("courses")} />
          PYTHON :{" "}
          <input type="checkbox" value={"python"} {...register("courses")} />
          REACT :{" "}
          <input type="checkbox" value={"react"} {...register("courses")} />
          SPRING :{" "}
          <input type="checkbox" value={"spring"} {...register("courses")} />
          <br></br>
          <br></br>
          Image :{" "}
          <input
            type="text"
            {...register("imageUrl")}
            placeholder="upload image"
          />
          <br></br>
          <br></br>
          Pincode :{" "}
          <input
            type="number"
            {...register("address.pincode")}
            placeholder="Enter pincode "
          />
          <br></br>
          <br></br>
          Area :{" "}
          <input
            type="text"
            {...register("address.area")}
            placeholder="Enter area "
          />
          <br></br>
          <br></br>
          <select
            {...register("address.city")}
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue="Select city">Select-city</option>
            <option value="pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangaloru">Bangaloru</option>
          </select>
          <br></br>
          <button className="btn btn-success">Update</button>
        </form>
      </div>

      <button className="btn btn-danger">Re-SET</button>
    </div>
  );
}

export default Update;
