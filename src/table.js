import React, { useEffect, useState } from "react";

function Table(props) {
const [data, setData] = useState([])
const [query, setQuery] = useState("");

  useEffect(() => {
    setData(props.data)
  },[props]);
 
  return (
    <div>
      <h1
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "50px", fontFamily:'Arial', color:'#850E35' }}
      >
        UBER REQUEST DATA
      </h1>
      <div style={{ display: "inline" }}>
        <input
          style={{
            border: "none",
            backgroundColor: "#FFC4C4",
            height: "30px",
            color: "white",
            borderRadius: "10px",
            padding:'10px'
          }}
          type="text"
          placeholder="Search here by status"
          onChange={(e) => setQuery(e.target.value)}
        ></input>        
      </div>

      <div
        style={{
          maxHeight: "450px",
          marginTop: "30px",
          overflow: "auto",       
          borderRadius:'30px',  
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" 
        }}
      >
        <table id="booking">
          <tr>
            <th>Request id</th>
            <th>Pickup point</th>
            <th>Driver id</th>
            <th>Status</th>
            <th>Request timestamp</th>
            {/* <th>Drop timestamp</th> */}
          </tr>
          <tbody>
            {data.filter((prod)=>prod.Status?.includes(query)).map((row) => (
                  <tr>
                    <td>{row["Request id"]}</td>
                    <td>{row["Pickup point"]}</td>
                    <td>{row["Driver id"]}</td>
                    <td>{row["Status"]}</td>
                    <td>{row["Request timestamp"]}</td>
                  </tr>
             
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
