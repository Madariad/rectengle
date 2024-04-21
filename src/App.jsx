import React from 'react'


import AlfaPage from "@/page/alfaPage";
import MainPage from "@/page/mainPage";


import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (

    <Routes>
      <Route path="/rectengle"  element={<MainPage />} />
        <Route path="/rectengle/alfavit/:alfa" element={<AlfaPage />}/>
    </Routes>
   
  )
}
