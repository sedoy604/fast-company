import React, { useState } from "react";
import api from "../api";

const Usrs = () => {
  const getClasses = (personId) => {
    let bootClass = "m-1 badge bg-";
    if (personId.color === "primary") {
      bootClass += "primary";
    } else if (personId.color === "secondary") {
      bootClass += "secondary";
    } else if (personId.color === "info") {
      bootClass += "secondary";
    } else if (personId.color === "success") {
      bootClass += "success";
    } else if (personId.color === "danger") {
      bootClass += "danger";
    } else if (personId.color === "info") {
      bootClass += "info";
    } else if (personId.color === "dark") {
      bootClass += "dark";
    }
    return bootClass;
    // personId.color === "primary"
    //   ? (bootClass += "primary")
    //   : console.log(bootClass);
    // personId.color === "secondary"
    //   ? (bootClass += "secondary")
    //   : console.log(bootClass);
    // personId.color === "success"
    //   ? (bootClass += "success")
    //   : console.log(bootClass);
    // personId.color === "danger"
    //   ? (bootClass += "danger")
    //   : console.log(bootClass);
    // personId.color === "danger"
    //   ? (bootClass += "info")
    //   : console.log(bootClass);
    // personId.color === "danger"
    //   ? (bootClass += "dark")
    //   : console.log(bootClass);
  };

  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((el) => el._id !== userId));
  };
  const renderRow = (array) => {
    return array.map((item) => (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>
          {item.qualities.map((el) => (
            <span className={getClasses(el)}>{el.name}</span>
          ))}
        </td>
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
