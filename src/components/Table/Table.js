import React from "react";
import Button from "../Button/Button";

const Table = (props) => {
  const { rows, columns, handleDelete, handleEdit } = props;

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            {columns.map((col, index) => {
              return (
                <th key={index} scope="col">
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {rows.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.middleName}</td>
                <td>{row.lastName}</td>
                <td>{row.gender}</td>
                <td>{row.address}</td>
                <td>
                  <Button name="Delete" onClick={() => handleDelete(index)} />
                </td>
                <td>
                  <Button name="Edit" onClick={() => handleEdit(index)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
