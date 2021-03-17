import React from "react";
// import $ from "jquery";

function Form2() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="input-group date date-time-picker">
              <input type="text" className="form-control" id="datetimepicker" />
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-calendar"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <div className="input-group date" id="datetimepicker3">
                <input type="text" className="form-control" />
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-time"></span>
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
