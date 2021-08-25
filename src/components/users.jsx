import React, { useState } from "react";
import api from "../api";

const Usrs = () => {
  const getClasses = (personId) => {
    let bootClass = "m-1 badge bg-";
    if (personId.color === "primary") {
      bootClass += "primary";
    } else if (personId.color === "secondary") {
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
  const setPhrase = () => {
    let body = document.querySelector("body");
    let h3 = document.createElement("h3");
    if (users.length > 4) {
      h3.textContent = `C вами тусанет ${users.length} человек`;
    } else if (users.length > 1) {
      h3.textContent = `C вами тусанет ${users.length} человека`;
    } else if (users.length === 1) {
      h3.textContent = `C вами тусанет ${users.length} человек`;
    } else if (users.length === 0) {
      h3.textContent = `Никто с вами не тусанет`;
    }
    return h3.textContent;
  };
  const classForH2 = () => {
    let classOfH2 = "";
    if (users.length === 0) {
      classOfH2 = "badge bg-danger m-2 fs-4";
    } else if (users.length > 0) {
      classOfH2 = "badge bg-primary m-2 fs-4";
    }
    return classOfH2;
  };
  return (
    <>
      <h2 className={classForH2()}>{setPhrase()}</h2>
      {users.length > 0 && (
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
      )}
    </>
  );
};

export default Usrs;
