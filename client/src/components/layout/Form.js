import React, { useState } from "react";

import { TextField } from "@material-ui/core";
function Form() {

  const onsubmits =(e)=>{
    e.preventDefault();
    // console.log(e.target)
   console.log( document.getElementById('Pickup').value)
   console.log(document.getElementById('location').value)
   
  }

  return (
    <>
      <div className="row text-center">
        <div className="col-12 col-md-12 col-lg-6 ">
          <form onSubmit={ onsubmits }>
            <div class="form-group ">
              <div className="d-flex justify-content-left">
                <label htmlFor="user_name">full Name:</label>
              </div>
              <input type="text" class="form-control" id="u_name" placeholder="enter your name"  />
            </div>

            <div class="form-group">
              <div className="d-flex justify-content-left">
                <label htmlFor="emiil">email:</label>
              </div>
              <input type="email" class="form-control" id="email" />
            </div>

            <div className="form-group d-flex justify-content-between" noValidate>
              <TextField
                id="Pickup"
                label="Pickup Date And Time"
                type="datetime-local"
                defaultValue="2021-06-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
              />
               
            </div>

            <div className="form-group">
              <div className="d-flex justify-content-left">
                <label htmlFor="location">Pick Up Location:</label>
              </div>

              <select className="form-control" id="location">
                <option value="Ghodasar">Ghodasar</option>
                <option value="Nikol">Nikol</option>
                <option value="maninagar">maninagar</option>
                <option value="sg highway">sg highway</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn cycle-btn"
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
