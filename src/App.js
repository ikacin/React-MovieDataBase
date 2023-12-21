import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from "./layout/layout";
import Home from "./pages/home/home";
import MovieDetail from "./pages/details/details"
import PersonDetails from "./pages/details/personDetails";
import Result from "./pages/home/hesap"
import Credits from "./pages/home/credits";
import CreditsDetails from "./pages/home/creditsDetails";

function App() {
  return (
      <Router>
          <Layout>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movie-detail/:movieId" element={<MovieDetail />}/>
                  <Route path= "/person-detail/:person_Id" element = {<PersonDetails/>}/>
                  <Route path= "Register-detail/signup" element = {<Result/>}/>
                  <Route path={"/credit/:movieId"} element = {<Credits/>}/>
                  <Route path={"/credit-details/:credit_id"} element = {<CreditsDetails/>}/>
              </Routes>
          </Layout>
      </Router>
  );
}

export default App;
