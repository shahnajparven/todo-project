import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
    const { isLogin, isUserLoading } = useSelector((state) => state.auth);

    const location = useLocation();
    // const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    const accessToken = JSON.parse(localStorage.getItem('token'));

    if (isUserLoading) return <p> Loading... </p>;
    if (!accessToken && !isLogin) return <Navigate to="/" state={{ from: location }} replace />;

    // if (!user && !isLogin) return <Navigate to="/" state={{ from: location }} replace />;

    return children;
}