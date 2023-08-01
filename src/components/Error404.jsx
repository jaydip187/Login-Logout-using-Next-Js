import { NavLink } from 'react-router-dom';
import '../css/Error404.css';

const Error404 = () => {
  return (
    <div className="error-404">
      <h1 className="error-heading">404 Error: Page Not Found</h1>
      <p className="error-message">We`re sorry, but the page you`re looking for could not be found.</p>
      <p className="error-message"><NavLink to= "/">Goto Home</NavLink></p>
    </div>
  );
};

export default Error404;
