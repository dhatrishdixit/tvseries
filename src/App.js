import React from "react";
import Home from "./components/Home";
import Summary from "./components/Summary";
import './App.css'
import { BrowserRouter,Route,Routes,Link, useParams } from "react-router-dom";
import BookingForm from "./components/BookingForm";
import FormSubmit from "./components/FormSubmit";
const App = () =>{
    return(
        <BrowserRouter>
   <div>
    <Routes>
    <Route path ="/" exact element ={<Home />} />
    <Route path ="/:thetvdb" exact element ={<Summary />} />
    <Route path ="/:thetvdb/:thetvdb" exact element ={<FormSubmit />} />   
     </Routes>
    
    </div>
    
    </BrowserRouter>

    )
}

export default App;