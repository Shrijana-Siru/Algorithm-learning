import React from "react";
import { useState } from "react";
import Table from "./table";
import "./table.css";
const Convert = () => {
  const [data, setData] = useState([]);

  function handleChange(event) {
    var reader = new FileReader();
    var file = event.target.files[0];
    reader.readAsText(file);

    reader.onload = function (event) {
      var res = event.target.result;
      csvJSON(res);
    };
  }

  function csvJSON(val) {
    var lines = val.split("\n");
    var result = [];

    //Splitting the headers of the CSV file
    var headers = lines[0].split(",");

    //Iteration for all the other rows of the CSV file
    for (var i = 1; i < lines.length; i++) {
      var obj = {};

      var currentline = lines[i].split(",");

      //Iteration for allocating the value corresponding to thier headers
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    setData(result);
  }

  return (
    <>
      <div style={{height:'92vh', backgroundColor:'#FFF5E4', padding:'30px'}}>
        <input type="file" onChange={handleChange}/>
        <Table data={data} />
      </div>
    </>
  );
};

export default Convert;
