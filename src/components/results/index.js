import React from "react";
import JSONPretty from "react-json-pretty";
import JSONPrettyMon from "react-json-pretty/dist/monikai";

import "./results.scss";

export default function Results(props) {
  return (
    <>
      {/* {props.data && (
        <pre className="response" data-testid="results">
          {JSON.stringify(props.data, null, "\t")}
        </pre>
      )} */}
      {props.data && (
        <JSONPretty
          className="response"
          id="json-pretty"
          data={props.data}
          theme={JSONPrettyMon}
        ></JSONPretty>
      )}
    </>
  );
}
