import React, { useState } from "react";

import "./form.scss";

export default function Form(props) {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState(null);

  const methodHandle = (e) => {
    setMethod(e.target.id.toUpperCase());
    console.log("in methodHAndle function");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(method);
    console.log("in handle submit function");
    const formData = {
      method: method,
      url: url,
      data: body ? body : null,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="url-label">
          <input
            name="url"
            type="text"
            placeholder="ENTER URL"
            data-testid="url"
            // defaultValue="https://pokeapi.co/api/v2/pokemon"
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <textarea
          placeholder="Enter The Body Here"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <div className="methods">
          <span id="get" onClick={methodHandle}>
            GET
          </span>
          <span id="post" onClick={methodHandle}>
            POST
          </span>
          <span id="put" onClick={methodHandle}>
            PUT
          </span>
          <span id="delete" onClick={methodHandle}>
            DELETE
          </span>
          <button type="submit" data-testid="submit">
            GO!
          </button>
        </div>
      </form>
    </>
  );
}
