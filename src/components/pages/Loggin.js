import { useNavigate, Navigate } from "react-router-dom";

function Login() {
    const isAuthenticated = true;

    const navigate = useNavigate();

    const showReports=()=>{
        if (isAuthenticated){
            console.log('Ok show reports');
            navigate('/react-homework-template/reports')
        } else 
        {
            console.log('Nope loggin first');
        }
    }
    if (!isAuthenticated){
        return (
            <Navigate to='/login-first' />
        )
    }

    return (<>
    <h2>Login page</h2>
    <button
    onClick={showReports}
    >Show reports </button>
    </>  );
}

export default Login;