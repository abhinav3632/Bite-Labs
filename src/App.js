import './App.css';
import { Page1 } from './Page1';
import { AppProvider } from './context';
import { Routes, Route } from "react-router-dom";
import { Nav } from './components/Nav';
import Login from "./Firebase/components/Login";
import Signup from "./Firebase/components/Signup";
import { UserAuthContextProvider } from "./Firebase/context/UserAuthContext";



function App() {

  return (
    <>
      <UserAuthContextProvider>      
        <Nav />
        <Routes>
          <Route path="/"
            element=
            {
              <AppProvider>
                <Page1 />
              </AppProvider>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
