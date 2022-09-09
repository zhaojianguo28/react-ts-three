import React  from 'react';
import { useRoutes} from 'react-router-dom'
import './App.css';
import Machine from './views/MachineRoom';
import Basics from './views/Basics';
import RenderStructure from './views/RenderStructure';
import ResponsiveDesign from './views/ResponsiveDesign';
import Illustration from './views/Illustration'
import Dpr from './views/Dpr';

const App:React.FC = ():JSX.Element=> {

  const routing = useRoutes([
     {
      path:'/',
      element: <Basics/>
     },
     {
      path:'/renderStructure',
      element: <RenderStructure/>
     },
     {
      path:'/machine',
      element: <Machine/>
     },
     {
      path:'/responsiveDesign',
      element: <ResponsiveDesign/>
     },
     {
      path:'/illustration',
      element: <Illustration/>
     },
     {
      path:'/Dpr',
      element: <Dpr/>
     },
  ])

  return <>{routing} </>
}


export default App;
