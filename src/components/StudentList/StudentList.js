import React, { useState } from "react";
const columns = [
  { label: "FirstName" },
  { label: "Middle Name" },
  { label: "Last Name" },
  { label: "Sex" },
  { label: "age" },
  { label: "Address" },
];

let student_array = [
  {
    firstName: "Akshay",
    middleName: "Laxman",
    lastName: "Lokapur",
    sex: "male",
    age: 25,
    address: "Bagalkot",
  },
  {
    firstName: "Niyaz",
    middleName: "Akshay",
    lastName: "Lokapur",
    sex: "male",
    age: 19,
    address: "Bangalore",
  },
  {
    firstName: "Akshay",
    middleName: "Ramesh",
    lastName: "peka",
    sex: "male",
    age: 54,
    address: "Kormangala",
  },
  {
    firstName: "Santosh",
    middleName: "Gundu",
    lastName: "Bise",
    sex: "male",
    age: 73,
    address: "Laggeri",
  },
  {
    firstName: "Anant",
    middleName: "Donno",
    lastName: "Deshpo",
    sex: "male",
    age: 37,
    address: "Ballary",
  },

  {
    firstName: "daya",
    middleName: "geta",
    lastName: "gada",
    sex: "female",
    age: 66,
    address: "Gujarat",
  },
  {
    firstName: "teddy",
    middleName: "Akshay",
    lastName: "Lokapur",
    sex: "female",
    age: 25,
    address: "Davangere",
  },
  {
    firstName: "Ashwini",
    middleName: "Akshay",
    lastName: "navale",
    sex: "female",
    age: 98,
    address: "Gadag",
  },
];

const StudentList = () => {
  const [student, setStudent] = useState([...student_array]);

  // Pop method
  const handlePop = () => {
    student.pop();
    console.log(student);
    setStudent([...student]);
  };
  // Push method
  const handlePush = () => {
    const newStudent = {
      firstName: "Jeta",
      middleName: "champak",
      lastName: "gada",
      sex: "male",
      age: 48,
      address: "Gadag",
    };
    student.push(newStudent);
    setStudent([...student]);
  };

  //   changing the Element in object// used (findIndex) method
  const filterMale = () => {
    const fill = student.findIndex((std) => std.firstName === "Ashwini");

    student[fill].sex = "male";
    setStudent([...student]);
  };

  //   filter Method

  const filterFemale = () => {
    let fill = student.filter((std) => std.sex === "female");
    console.log(fill);
    setStudent([...fill]);
  };

  //   deleting particular row in the object
  const deleteRow = () => {
    student.splice(6, 1);
    // console.log(student_array);
    setStudent([...student]);
  };

  // Uppercase method
  const upperCase = () => {
    const fill = student.findIndex((std) => std.firstName === "Ashwini");
    let up = student[fill].firstName.toUpperCase();
    student[fill].firstName = up;
    setStudent([...student]);
  };

  const lowerCase = () => {
    const fill = student.findIndex((std) => std.firstName === "Ashwini");
    let up = student[fill].firstName.toLowerCase();
    student[fill].firstName = up;
    setStudent([...student]);
    console.log(fill);
  };
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
          {student.map((row, index) => {
            return (
              <tr key={index}>
                {/* <td>{row.index}</td> */}
                <td>{row.firstName}</td>
                <td>{row.middleName}</td>
                <td>{row.lastName}</td>
                <td>{row.sex}</td>
                <td>{row.age}</td>
                <td>{row.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="btn btn-danger me-3" onClick={handlePop}>
        pop
      </button>
      <button className="btn btn-success me-3" onClick={handlePush}>
        push
      </button>
      <button className="btn btn-primary me-3" onClick={filterMale}>
        edit
      </button>
      <button className="btn btn-warning me-3" onClick={filterFemale}>
        filter
      </button>
      <button className="btn btn-info me-3" onClick={deleteRow}>
        delete
      </button>

      <button className="btn btn-danger me-3" onClick={upperCase}>
        uppercase
      </button>
      <button className="btn btn-danger me-3" onClick={lowerCase}>
        lowerCase
      </button>
    </>
  );
};

export default StudentList;
