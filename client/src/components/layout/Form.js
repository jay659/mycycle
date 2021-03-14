import React,{useEffect} from "react";
import $ from 'react'
console.log( document.getElementById("appt"));
function Form() {
 
 
  return (
    
    <>
      <div className="row text-center">
        <div className="col-12 col-md-12 col-lg-6 ">
          <form action="/" method="Post">
            <div class="form-group ">
              <div className="d-flex justify-content-left">
              <label htmlFor="user_name">full Name:</label>
              </div>
              <input type="text" class="form-control" id="u_name" />
            </div>
            <div class="form-group">
              <label htmlFor="emiil">email:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <div class="form-group">
            <label for="appt">Select a time:</label>
             <input type="time" id="appt" name="appt" class="form-control" />
              </div>
            <div class="form-group">
              <label htmlFor="location">Pick Up Location:</label>
              <select class="form-control" id="location">
                <option value="Ghodasar">Ghodasar</option>
                <option value="Nikol">Nikol</option>
                <option value="maninagar">maninagar</option>
                <option value="sg highway">sg highway</option>
              </select>
            </div>
            <button
              type="submit"
              class="btn cycle-btn"
              style={{ width: "150px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
