import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GigsList from "./components/ShowListings/GigsList";
import ListingDetails from "./components/ShowListings/ListingDetails";
import PersonalDetails from "./components/StoreListings/PersonalDetails";
import CmpDetails from "./components/StoreListings/CmpDetails";
import PostingWrk from "./components/StoreListings/PostingWrk";
import EmpRegister from "./components/Employer/EmpRegister";
import EmpLogin from "./components/Employer/EmpLogin";
import EmpDashboard from "./components/Employer/EmpDashboard.js";
import Register from "./components/students/Register";
import Login from "./components/students/Login";
import Intern from "./components/StoreListings/Intern";
import Protected from "./components/Protected";
import Home from "./components/Home.js";
import JobList from "./components/ShowListings/JobList.js";
import JobDetails from "./components/ShowListings/JobDetails.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/post-job" element={<EmpRegister />} />
          <Route path="/employer/login" element={<EmpLogin />} />
          <Route path="/employer/profile" element={<PersonalDetails />} />
          <Route path="/employer/company" element={<CmpDetails />} />
          <Route path="/internship/form" element={<Protected Cmp={Intern} />} />
          <Route path="/jobs/form" element={<Protected Cmp={PostingWrk} />} />
          <Route
            path="/employer/dashboard"
            element={<Protected Cmp={EmpDashboard} />}
          />
          <Route path="/student/register" element={<Register />} />
          <Route path="/student/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/internships" element={<GigsList />} />
          <Route path="/internship/detail/:id" element={<ListingDetails />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/detail/:id" element={<JobDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
