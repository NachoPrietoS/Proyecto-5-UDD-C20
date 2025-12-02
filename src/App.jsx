import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Information from "./pages/Information/Information"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/informacion" element={<Information />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
