/* eslint-disable react/prop-types */
const CoverPhoto = ({ coverImg, heading, subheading }) => {
  return (
    <div
      className="hero pt-10"
      style={{
        backgroundImage: `url(${coverImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 pt-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mt-5 text-5xl font-bold p-10">{heading}</h1>
          <p className="mb-5">{subheading}</p>
        </div>
      </div>
    </div>
  );
};

export default CoverPhoto;
