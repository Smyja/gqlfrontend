
import { AuthenticationTitle } from "./components/Login.tsx";
import LandingPage from "./components/LandingPage";
import { ForgotPassword } from "./components/ForgotPassword.tsx";
import { Signup }  from "./components/Signup.tsx";
import {
  
  Routes,
  Route,

  
} from "react-router-dom";
function App() {
  return (
    
    <div className="App">
    
        <Routes>
        <Route index element={<LandingPage />} />
            {/* login route */}
           
          <Route exact path="login" element={<AuthenticationTitle />} />
          <Route exact path="signup" element={<Signup />} />
          <Route exact path="forgot-password" element={<ForgotPassword />} />
          </Routes>
     
        

      </div>
  
  );
}

export default App;