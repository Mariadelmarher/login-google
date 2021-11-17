import './App.css';

import SignIn from './components/signIn';
import Page from './components/page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/pages/PrivateRoute";

function App() {

  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/page" element={<PrivateRoute>
          <Page/>
        </PrivateRoute>}/>
        <Route path="/" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
 
</div>
}
export default App;
