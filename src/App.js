//  import Input from "./components/Input/Input";
import Student from "./pages/Student";
import "bootstrap/dist/css/bootstrap.min.css";
// import BarChart from "./components/BarChart";
import StudentList from "./components/StudentList/StudentList";
import Student2 from "./pages/Student2";
// import StateExample from "./components/StateExample";

function App() {
  return (
    <div className="App">
      <h1 className="text-center mb-4">Student Management</h1>
      {/* <StudentList /> */}
      {/* <Student /> */}
      <Student2 />
    </div>
  );
}

export default App;
