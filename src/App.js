import { Route, Routes} from "react-router-dom";
import CrudInterface from './components/CrudInterface';
import Game from './components/Game';
import About from "./components/About"
import Navbar from "./components/Navbar"
import ErrorPage from "./components/ErrorPage";
import './App.css';

export default function App (){
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/about" element={<About />} />
      <Route path="/developer" element={<CrudInterface />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
   
  )
}



// function App() {
//   return (
//     <div className="App">
//       <CrudInterface />
//       <Game />
//     </div>
//   );
// }

// export default App;
