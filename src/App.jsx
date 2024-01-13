import { useState } from 'react'
import Home from './Home'
import Test from './Test'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path="/Test" element={<Test/>}></Route>
              <Route path="/Home" element={<Home/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
