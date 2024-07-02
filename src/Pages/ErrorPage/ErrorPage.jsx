import { Link } from "react-router-dom";
import errorImg from "../../assets/image/error.png";
const ErrorPage = () => {
  return (
    <div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <img src={errorImg} alt="" />
          <Link to="/">
            <button className="btn bg-[#F7A582]">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
