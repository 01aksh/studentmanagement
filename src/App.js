//  import Input from "./components/Input/Input";
import Student from "./pages/Student";
import "bootstrap/dist/css/bootstrap.min.css";
import BarChart from "./components/BarChart";
// import StudentList from "./components/StudentList/StudentList";
// import StateExample from "./components/StateExample";

function App() {
  return (
    <div className="App">
      <h1 className="text-center mb-4">Student Management</h1>
      {/* <BarChart /> */}
      {/* <StudentList /> */}
      {/* <StateExample placeholder="Enter text" heading="StateExample" /> */}
      <Student />
    </div>
  );
}

export default App;
