import "./App.css";
import { BrowserRouter, Outlet } from "react-router-dom"

// Routes 
import Routes_React from "../src/Routes/Routes_React"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes_React />
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
