import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "../screens/login";
import SignUp from "../screens/signup";
import ProtectedRoute from "./protectedroute";
import Admin from "../screens/admin";
import StudentForm from "../screens/studentform";
import Institute from "../screens/institute";

function AppRouter() {
    return (

        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="login">Login</Link>
                <Link to="signup">SignUp</Link>
                <Link to="admin">Admin</Link>
                <Link to="studentform">Student from</Link>
            </nav>

            <Routes>

                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="studentform" element={<StudentForm />} />
                <Route path="institute" element={<Institute/>}/>
                <Route path="admin" element={<ProtectedRoute Component={Admin} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;