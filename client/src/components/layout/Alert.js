import React from "react";

export default function Alert() {
  function closeAlert(event) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
      element = element.parentNode;
    }
    element.parentNode.parentNode.removeChild(element.parentNode);
  }

  return (
    <div className="bg-success p-2 text-center mb-3" >
      <span className="text-xl inline-block align-middle">
        <i className="fas fa-bell"></i>
      </span>
      <p className="inline-block align-middle text-white text-center">
       This is a pink alert - check it out!
      </p>
      <button
        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        onClick={(event) => closeAlert(event)}
      >
        <span></span>
      </button>
    </div>
  );
}
