import { useLoaderData } from "react-router-dom";
import CoverPhoto from "../../../Component/CoverPhoto/CoverPhoto";
import bgImg from "../../../assets/image/bannar/banner4.jpg"

const DoctorProfile = () => {
  const {
    doctor_name,
    specialty,
    description,
    rating,
    address,
    degree,
    email,
    phone,
    workplace,
    workdays,
    photo,
  } = useLoaderData();
  return (
    <div>
      <h1>Doctor Profile</h1>
      <CoverPhoto
        coverImg={bgImg}
        heading={"Doctor Profile"}
        subheading={"This is a Doctor Profile Here Some Details about a doctor"}
      ></CoverPhoto>
      <div>
        <div className="card card-side bg-base-100 shadow-xl mt-20 px-6">
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">{doctor_name}</h1>
            <h2>{specialty}</h2>
            <h2>{rating}</h2>
          </div>
        </div>
        <div className="bg-base-100 shadow-lg my-10 px-8 space-y-6">
          <div>
            <h1 className="text-2xl font-bold">About me</h1>
            <p>{description}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 px-8 py-10">
            <div>
              <h1 className="text-xl font-bold">Education</h1>
              <p>{degree}</p>
              <h1 className="text-xl font-bold">Email</h1>
              <p>{email}</p>
              <h1 className="text-xl font-bold">Phone</h1>
              <p>{phone}</p>
            </div>
            <div>
              <h1 className="text-xl font-bold">Address</h1>
              <p>{address}</p>
              <h1 className="text-xl font-bold">Work Place</h1>
              <p>{workplace}</p>
              <h1 className="text-xl font-bold">Available Days</h1>
              <p>{workdays}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
