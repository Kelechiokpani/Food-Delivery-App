import React, { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
import {Header,CreateContainer,MainContainer, Menu,} from "./components"
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunction';
import { actionType } from './context/reducer';
// pages 
import About from './page/About';
import  Service from './page/Service';


function App() {
  const [{foodItems}, dispatch ] = useStateValue()

  const fetchData = async () => {
    await getAllFoodItems().then(data =>{
    //  console.log(data)
    dispatch({
      type: actionType.SET_FOOD_ITEMS,
      foodItems :data,
    })
    })
  };

  useEffect(() => {
    fetchData()
  },[]);


  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary" >
      <Header /> 
      <main className='mt-14 md:mt-20 px-2 md:px-16 py-4 w-full'> 
        <Routes>
            <Route path='/*' element={< MainContainer />} />
            <Route path='/createitem' element={< CreateContainer />}/>
            <Route path='/page/menu' element={< Menu />}/>
            <Route path='/page/about' element={< About />}/>
            <Route path='/page/service' element={< Service />}/>
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
