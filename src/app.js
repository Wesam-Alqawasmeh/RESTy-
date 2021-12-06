import React, { useState } from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

export default function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = async (requestParams) => {
    // mock output
    // const data = {
    //   count: 2,
    //   results: [
    //     { name: "fake thing 1", url: "http://fakethings.com/1" },
    //     { name: "fake thing 2", url: "http://fakethings.com/2" },
    //   ],
    // };
    await fetch(requestParams.url, {
      method: requestParams.method,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });

    setRequestParams(requestParams);
  };

  return (
    <>
      <Header />
      <Form handleApiCall={callApi} />
      <div className="requestInfo">
        <p>Request Method: {requestParams.method}</p>
        <p>URL: {requestParams.url}</p>
      </div>
      <Results data={data} />
      <Footer />
    </>
  );
}
