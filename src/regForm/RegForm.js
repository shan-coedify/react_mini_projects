import React from "react";
import "./regForm.css";
import { Constants } from "./Constants";
import { useForm } from "react-hook-form";

const RegForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* <div className="quest">
        <div>
          <h3>Design a Form in React as shown below with functionalities :</h3>
          <div className="des"> 1. Has 3 feild Name, Email, password </div>
          <div className="des"> 2. Apply Validation on Email . </div>
          <div className="des">
            {" "}
            3. Apply Validation on Password(Atleast 8 char) .{" "}
          </div>
          <div className="des">
            {" "}
            3. Has a Login button Onclick show User data in console and a
            message on screen "Your are Logged in".{" "}
          </div>
        </div>
      </div> */}

      <div className="modal">
        <div className="modalHeader">
          <h5 className="heading">Registration Form</h5>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formContainer">
            <div className="formLabelArea">
              {" "}
              <label>{Constants.firstName}</label>
            </div>
            <div className="formInputArea">
              {" "}
              <input
                className="inputText"
                required
                name="FirstName"
                {...register("firstName", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Name must contain aleast 3 characters ",
                  },
                })}
                type="text"
              ></input>
              {errors.firstName?.type === "required" &&
                "First name is required"}
            </div>
          </div>

          <div className="formContainer">
            <div className="formLabelArea">
              <label>{Constants.lastName}</label>{" "}
            </div>
            <div className="formInputArea">
              {" "}
              <input
                className="inputText"
                name="LastName"
                {...register("lastName", {
                  required: true,
                  maxLength: 20,
                  minLength: 2,
                })}
                type="text"
              ></input>
              {errors.lastName?.type === "required" && "Last name is required"}{" "}
            </div>
          </div>

          <div className="formContainer">
            <div className="formLabelArea">
              <label>{Constants.student}</label>{" "}
            </div>
            <div className="formInputArea">
              {" "}
              <div className="gender" required>
                <input
                  className="input-radio-btn"
                  type="radio"
                  value="Yes"
                  name="Student"
                  {...register("student")}
                />{" "}
                yes
                <input
                  className="input-radio-btn"
                  type="radio"
                  value="No"
                  name="Student"
                  {...register("student")}
                />{" "}
                No
              </div>{" "}
            </div>
          </div>

          <div className="formContainer">
            <div className="formLabelArea">
              {" "}
              <label>{Constants.gender}</label>{" "}
            </div>
            <div className="formInputArea">
              {" "}
              <div>
                {" "}
                <select
                  id="framework"
                  {...register("gender", { required: true })}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Others</option>{" "}
                </select>
              </div>{" "}
            </div>
          </div>
          <div className="formContainer">
            <div className="formLabelArea">
              <label>{Constants.interests} </label>{" "}
            </div>
            <div className="formInputArea">
              {" "}
              <div>
                <input
                  type="checkbox"
                  id="intrest1"
                  name="intrest1"
                  value="Biking"
                  {...register("intrest")}
                />
                <label for="intrest1"> I like biking</label> <br></br>
                <input
                  type="checkbox"
                  id="intrest2"
                  name="intrest2"
                  value="reading"
                  {...register("intrest")}
                />
                <label for="intrest2"> I like reading</label>
                <br></br>
                <input
                  type="checkbox"
                  id="intrest3"
                  name="intrest3"
                  value="gaming"
                  {...register("intrest")}
                />
                <label for="intrest3"> I like gaming</label>
              </div>{" "}
            </div>
          </div>

          <div className="formContainer">
            <div className="formLabelArea">
              <label>{Constants.dob}</label>
            </div>
            <div className="formInputArea">
              <div>
                <input
                  type="date"
                  {...register("DOB", { required: true })}
                ></input>
              </div>
            </div>
          </div>

          <div className="formContainer">
            <div className="formLabelArea">
              <label>{Constants.password} </label>
              <br></br>{" "}
            </div>
            <div className="formInputArea">
              {" "}
              <input
                className="inputText"
                type="password"
                {...register("password", {
                  required: true,
                  maxLength: {
                    value: 20,
                    message: "Password must not conatin more than 20 character",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must conatin atleast 8 character",
                  },
                })}
              ></input>
              <div>{errors.password && errors.password.message}</div>{" "}
            </div>
          </div>
          <div className="formContainer">
            <div className="formLabelArea">
              <label>{Constants.Address} </label>{" "}
            </div>
            <div className="formInputArea">
              {" "}
              <div>
                <textarea
                  className="inputText"
                  placeholder="Write Your Address"
                  {...register("address", { required: true })}
                >
                  {" "}
                </textarea>
              </div>{" "}
            </div>
          </div>

          <div className="btndiv">
            <div className="formContainer">
              <div className="formLabelArea">
                <button className="cancelBtn" type="reset">
                  {" "}
                  Cancel
                </button>{" "}
              </div>
              <div className="formInputArea">
                {" "}
                <button className="saveBtn" type="submit">
                  {Constants.submit}
                </button>{" "}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegForm;
