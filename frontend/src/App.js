import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ListStudent from "./Pages/ListStudent";
import StudentRegister from "./Pages/StudentRegister";
import UpdateStudent from "./Pages/UpdateStudent";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StudentRegister />} />
        <Route path="/list" element={<ListStudent />} />
        <Route path="/update/:id" element={<UpdateStudent />} />
      </Routes>
    </>
  );
}

export default App;
