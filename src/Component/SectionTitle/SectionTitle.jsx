/* eslint-disable react/prop-types */

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-3/4 mx-auto text-center mb-10 space-y-3">
      <h1 className="text-5xl font-bold">{heading}</h1>
      <hr />
      <p className="text-xl">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
