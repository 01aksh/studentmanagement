import React, { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Tablee from "../components/Table/Tablee";
const columns = [
  {
    label: "Name",
  },
  { label: "Address" },
  { label: "Age" },
  { label: "Action" },
];

const Student2 = () => {
  const [studentObj, setStudentObj] = useState({
    name: "",
    age: "",
    address: "",
  });
  //   ///////////////////////////////////////
  const [studentList, setStudentList] = useState([]);
  // ///////////////////////
  const handleChange = (e) => {
    setStudentObj({ ...studentObj, [e.target.name]: e.target.value });
  };
  //   //////////////////////////////
  const cleardata = () => {
    studentObj.name = "";

    studentObj.address = "";
    studentObj.age = "";
  };
  //   //////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentTempList = [...studentList];
    const stdobj = {
      name: studentObj.name,
      address: studentObj.address,
      age: studentObj.age,
    };
    studentTempList.push(stdobj);
    setStudentList(studentTempList);
    cleardata();
  };
  //   /////////////
  const handleDelete = (index) => {
    console.log(index);
    const studentListTemp = [...studentList];
    studentListTemp.splice(index, 1);
    setStudentList(studentListTemp);
  };
  //   ///////////////

  const handleEdit = (index) => {
    console.log(index);
  };
  return (
    <div className="col-md-6 ">
      <Input
        name="name"
        placeholder="Name"
        value={studentObj.name}
        onChange={handleChange}
      />
      <Input
        name="address"
        placeholder="Address"
        value={studentObj.address}
        onChange={handleChange}
      />
      <Input
        name="age"
        placeholder="Age"
        value={studentObj.age}
        onChange={handleChange}
      />
      <Button name="Submit" onClick={handleSubmit} />
      <Tablee
        rows={studentList}
        columns={columns}
        handleDelete={(index) => handleDelete(index)}
        handleEdit={(index) => handleEdit(index)}
      />
    </div>
  );
};

export default Student2;
