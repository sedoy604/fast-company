import React, { useState } from "react";
import api from "../api";

const Usrs = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((x) => x._id !== userId));
  };
  const renderRow = (array) => {
    return array.map((item) => (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.qualities.map((el) => el.name)}</td>
        <td>{item.profession.name}</td>
        <td>{item.completedMeetings}</td>
        <td>{item.rate}</td>
        <td>
          <button
            onClick={() => {
              handleDelete(item._id);
            }}
            className="badge bg-danger p-2"
          >
            delete
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderRow(users)}</tbody>
      </table>
    </>
  );
};

export default Usrs;
