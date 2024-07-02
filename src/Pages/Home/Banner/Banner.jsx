import bg_Img from "../../../assets/image/Greenbg.png";
import Img1 from "../../../assets/image/Group.png";

const Banner = () => {
  return (
    <>
      <div
        className="hero py-16"
        style={{
          backgroundImage: `url(${bg_Img})`,
        }}
      >
        <div className="hero-content text-center text-neutral-content px-20 mt-10">
          <div className="lg:flex justify-evenly gap-5 items-center">
          <div>
              <img src={Img1} alt="" />
            </div>
            <div className="text-left">
              <h1 className="mb-5 text-5xl font-bold">
                Your Best Medical Help Center
              </h1>
              <p className="mb-5">
                Lorem Ipsum is simply dummy text they are printing typesetting
                has been the industry’s stardard.
              </p>
              <button className="btn btn-primary">All Services</button>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
