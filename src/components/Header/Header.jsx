import "./Header.css";
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <div className="mainheader">
      
      <img src={logo} className="App-logo" alt="logo" />
      <nav className="mainnav">
        <a href="/">Home</a>
        <a href="/">Add New Students</a>
        <a href="/students_list">Students List</a>
        <a href="/">Add New Courses</a>
        <a href="/courses_list">Courses List</a>
        <a href="/">Add New Results</a>
        <a href="/results_list">Results List</a>
      </nav>
    </div>
  );
}