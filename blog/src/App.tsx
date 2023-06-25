import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./sheets/HomePage";
import SingleBlog from "./sheets/SingleBlog";
import CreateForm from "./sheets/CreateForm";
import UpdateForm from "./sheets/UpdateForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<SingleBlog />} />
          <Route path="/createform" element={<CreateForm/>} />
          <Route path="/updateform" element={<UpdateForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
