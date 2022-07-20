import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegisterForm from 'components/RegisterForm';
import LoginPageLayout from 'pages/Login';
import { PasswordProvider } from 'common/Context/Password';
import { UserProvider } from '../common/Context/User';
import Home from 'pages/Home';
import LoginForm from 'components/LoginForm';
export default function AppRouter() {
    return(
        <main className='container'>
            <Router>
                <PasswordProvider>
                    <UserProvider>
                        <Routes>
                        <Route path='/' element={<LoginPageLayout/>}>
                        <Route index element={<LoginForm/>}/>
                        <Route path='register' element={<RegisterForm/>}/>
                        </Route>
                        <Route path='/home' element={<Home/>}/>
                        </Routes>
                    </UserProvider>
                </PasswordProvider>
            </Router>
        </main>
    );
}