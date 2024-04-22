import React from 'react'


import AlfaPage from "@/page/alfaPage";
import VoisePage from "@/page/voisePage";
import ModulePage from '@/page/modulePage';
import MainPage from "@/page/mianPage";


import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (

    <Routes>
      <Route path="/rectengle"  element={<MainPage />} />
      {/* <Route path="/rectengle/abc"  element={<ModulePage />} /> */}
      <Route path="/rectengle/module/:name" element={<VoisePage />}/>
      <Route path="/rectengle/module/:name/alfavit/:alfa" element={<AlfaPage />}/>
      
    </Routes>
   
  )
}
