import { useEffect, useState } from 'react'
import { ScrollToTop } from './Components/common/ScrollToTop';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AppLayout from './Components/layout/AppLayout';
import Home from './pages/Home';

interface ProtectedRouteProps {
  allowedRoles: string[];
}

interface RootState {
  auth: {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    } | null;
    token: string | null;
  };
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  // const user = useSelector((state: RootState) => state.auth.user);
  const token = localStorage.getItem("token");

  // if (!user && !token) {
  //   return <Navigate to="/login" replace />;
  // }

  // if (user && !allowedRoles.includes(user?.role)) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return <Outlet />;
};
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) {
  //   return <Loader duration={10000} />;
  // }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Auth Routes */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}

          {/* Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={[]} />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Route>

          {/* Fallback */}
          {/* <Route path="*" element={<NotFound />} /> */}


          
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App