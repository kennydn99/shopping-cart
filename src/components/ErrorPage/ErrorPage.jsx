import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Oops! The page you&apos;re looking for doesn&apos;t exist</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;
