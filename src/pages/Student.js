import React, { useState } from "react";
import Button from "../components/Button/Button";
import DropDown from "../components/DropDown/DropDown";
// import DropDown from "../components/DropDown/DropDown";
import Input from "../components/Input/Input";
import Table from "../components/Table/Table";
import TextArea from "../components/TextArea/TextArea";
// import TextArea from "../components/TextArea/TextArea";

const GENDER = [
  { label: "men", value: "MALE" },
  { label: "female", value: "FEMALE" },
];

const columns = [
  { label: "FirstName" },
  { label: "Middle Name" },
  { label: "Last Name" },
  { label: "Sex" },
  { label: "Address" },
  { label: "Action" },
];

const Student = () => {
  const [studentObj, setStudentObj] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    gender: "",
  });
  const [studentList, setStudentList] = useState([]);

  /**
   * Function for handler change
   * @param {event} e
   */
  const handlerInputChange = (e) => {
    setStudentObj({
      ...studentObj,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Fucntion to clear the student object
   */
  const clearState = () => {
    studentObj.firstName = "";
    studentObj.middleName = "";
    studentObj.lastName = "";
    studentObj.gender = "";
    studentObj.address = "";
    setStudentObj(studentObj);
  };

  /**
   * Function to submit the student data
   * @param {event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentListTemp = [...studentList];
    const stdObj = {
      firstName: studentObj.firstName,
      middleName: studentObj.middleName,
      lastName: studentObj.lastName,
      address: studentObj.address,
      gender: studentObj.gender,
    };
    studentListTemp.push(stdObj);
    setStudentList(studentListTemp);
    clearState();
  };

  // Delete function for DeleteButton
  const handleDelete = (index) => {
    const studentListTemp = [...studentList];
    studentListTemp.splice(index, 1);
    setStudentList(studentListTemp);
  };

  return (
    <>
      <div className="ms-5 me-5">
        <div className="row">
          <div className="col">
            <Input
              placeholder="Enter First Name"
              name="firstName"
              value={studentObj.firstName}
              onChange={handlerInputChange}
            />
          </div>
          <div className="col">
            <Input
              placeholder="Enter Middle Name"
              name="middleName"
              value={studentObj.middleName}
              onChange={handlerInputChange}
            />
          </div>
          <div className="col">
            <Input
              placeholder="Enter Last Name"
              name="lastName"
              value={studentObj.lastName}
              onChange={handlerInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <TextArea
              name="address"
              value={studentObj.address}
              onChange={handlerInputChange}
              placeholder="Enter Student Address"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <DropDown
              options={GENDER}
              name="gender"
              value={studentObj.gender}
              onChange={handlerInputChange}
              className="mr-5"
            />
          </div>
        </div>
        <br />
        <Button name="Submit" onClick={handleSubmit} />
        <Table
          rows={studentList}
          columns={columns}
          handleDelete={(index) => handleDelete(index)}
        />
      </div>
    </>
  );
};

export default Student;
