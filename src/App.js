import './App.css'; 
import { useState, useEffect, useRef } from 'react'
import { HashRouter as Router, Routes, Route, Link} from "react-router-dom"
import SinglePage from './Pages/SinglePage';
import AddOrEditMed from './Components/AddOrEditMed';
import { useGlobalContext } from './context';
import page_data from "./pageData.json"

function App() {
  
  const { showDial, setShowDial,
    dialContent, setDialContent,
    dialPosition, setDialPosition,
    showAddOrEditMed, setShowAddOrEditMed,
    addOrEdit, setAddOrEdit,
    setPage_head, setPage_load,
    // showOutStock, setShowOutStock,
    // showExpired, setShowExpired,
    // showStock, setShowStock,
    // showAddStock, setShowAddStock,
    dial} = useGlobalContext();

    const routing_function = (route) => {
      setPage_head(page_data[route].page);
      setPage_load(page_data[route])
    }
  
  const element = useRef(null);

  useEffect(()=> {
    const elt = element.current;
    if (elt) {
      if (dialPosition === 'med') elt.style.left = `${530}px`
      else elt.style.left = `${720}px`
      return
    }
  }, [dialPosition])

  return (
    <div className="container">
      <header>
        <nav>
          <div className="nav nav-top"></div>
            <div className="nav nav-bottom">
              <ul>
                <li className="nav--li dashboard" onClick={() => routing_function("/")}><Link to="/">Dashboard</Link></li>
                <li className="nav--li categories" onClick={() => routing_function("/category")}><Link to="/category">Categories</Link></li>
                <li className="nav--li medicine" onClick={() => routing_function("/medicine")} onMouseLeave={() => setShowDial(false)} onMouseEnter={() => { setDialPosition('med'); setShowDial(true); setDialContent(dial.med)}}><Link to="/medicine">Medicines</Link></li>
                <li className="nav--li stock" onClick={() => routing_function("/stock")} onMouseLeave={() => setShowDial(false)} onMouseEnter={() => {setDialPosition('stock'); setShowDial(true); setDialContent(dial.stock)}}><Link to="/stock">Stock</Link></li>
                <li className="nav--li sales" onClick={() => routing_function("/sales")}><Link to="/sales">Sales</Link></li>
              </ul>
            </div>
        </nav>
      </header>
      <main>
        <div className="main--container">
          
            <Routes>
              <Route path= "/" element = { <SinglePage/>} />
              <Route path= "/category" element = { <SinglePage/>} />
              <Route path= "/medicine" element = { <SinglePage/>} />
              <Route path= "/stock" element = { <SinglePage/>} />
              <Route path= "/sales" element = { <SinglePage/>} />
              <Route path= "/*" element = { <SinglePage/> } />
            </Routes>

        </div>
        { showDial &&
        <div ref={element} className="main--overlay" onClick={() => setAddOrEdit('Add')} onMouseEnter={() => setShowDial(true)} onMouseLeave={() => setShowDial(false)}>
          {
          dialContent.map((item) =>
            <div onClick={() => {(item[1] && item[1](true)) || console.log()}}> * {item[0]}</div>
          )
        }
        </div>
        }
        { showAddOrEditMed && 
          <AddOrEditMed/>
        }
        {
          showAddOrEditMed &&
          <AddOrEditMed/>
        }

      </main>
    </div>
  )
}

export default App;
