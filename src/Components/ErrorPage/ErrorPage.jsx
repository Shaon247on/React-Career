import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <button className="btn"><Link to="/">Go to Home</Link></button>
        </div>
    );
};

export default ErrorPage;