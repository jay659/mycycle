<<<<<<< HEAD
import React, { useEffect } from "react";
import $ from "jquery";
=======
import React from "react";
// import $ from "jquery";
>>>>>>> af2822405c9981dde7d949efe25e061279642130

function Form2() {
 
  return (
    <>
      <div class="col-xs-6">
        <label>End time</label>
        <div class="input-group bootstrap-timepicker">
          <input type="text" class="form-control input-small" />
          <span class="input-group-addon">
            <i class="glyphicon glyphicon-time"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default Form2;
