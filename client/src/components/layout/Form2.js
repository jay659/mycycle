import React from "react";
import $ from "jquery";



function Form2() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="input-group date date-time-picker">
              <input type="text" class="form-control" id="datetimepicker" />
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-calendar"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <div class="input-group date" id="datetimepicker3">
                <input type="text" class="form-control" />
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-time"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form2;
