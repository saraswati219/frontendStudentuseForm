import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const nav = useNavigate();
  function onFormSubmit(data) {
    alert("form submitted..!");
    console.log(data);
    nav("/viewstudents");
    //axios.post("http://localhost:3000/students", data);
    axios.post("http://localhost:8080/student", data); //connect with backnend
  }
  function onSetValue() {
    setValue("name", "Saraswati");
    setValue("email", "san@gmail.com");
  }

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
        <form onSubmit={handleSubmit(onFormSubmit)}>
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
          <button className="btn btn-primary" type="submit">
            REGISTER
          </button>
          <br></br>
        </form>
      </div>
      <button className="btn btn-success" onClick={() => reset()}>
        CLEAR
      </button>

      <button className="btn btn-danger" onClick={onSetValue}>
        SET VALUE
      </button>
    </div>
  );
}

export default Register;
