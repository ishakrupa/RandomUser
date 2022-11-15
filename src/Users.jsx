import React, { useState, useEffect } from "react";
import axios from "axios";
import "./User.css";

function Users() {
  const [userlist, Setuserlist] = useState([]);

  useEffect(() => {
    getfetchedData();
  }, []);

  const getfetchedData = async () => {
    for (let i = 0; i < 10; i++) {
      const result = await axios
        .get("https://randomuser.me/api")
        .then((res) => {
          Setuserlist(res.data.results);
        });
      console.log(result);
    }
  };

  return (
    <>
      <h2> RANDOM USER DISPLAY </h2>
      <table>
        <thead>
          <tr>
            <th>Full Name:</th>
            <th>Email:</th>
          </tr>
        </thead>
        <tbody>
          {userlist.map((items, i) => (
            <tr key={i}>
              <td>
                {items.name.title} {items.name.first} {items.name.last}
              </td>
              <td>{items.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
