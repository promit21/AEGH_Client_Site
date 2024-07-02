import { IoLocationOutline } from "react-icons/io5";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { MdOutlineEventAvailable } from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";
import { Link } from "react-router-dom";
import doctorImg from "../../../assets/image/doctor/male1.jpg";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ExpertDoctor = () => {
  const axiosSecure = useAxiosSecure();
  const { data: doctors = [] } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const res = await axiosSecure.get("/doctors");
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading={"Our Expert Doctors"}
        subHeading={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="w-96 bg-base-100 shadow-xl p-3">
            <h2 className="text-2xl font-semibold text-center py-2">{doctor.specialty}</h2>
            <figure>
              <img src={doctorImg} alt="Shoes" className="rounded-xl mb-3" />
            </figure>
            <div className="pl-4">
              <h2 className="card-title">{doctor.doctor_name}</h2>

              <p className="text-base">Rating: {doctor.rating}</p>
              <div className="divider"></div>
              <p className="flex items-center gap-3 text-base">
                <IoLocationOutline />
                {doctor.address}
              </p>
              <p className="flex items-center gap-3 text-base">
                <MdOutlineEventAvailable />
                {doctor.workdays}
              </p>
              <p className="flex items-center gap-3 text-base">
                <TfiMoney />
                {doctor.fees}
              </p>
            </div>

            <Link to={`/doctorProfile/${doctor._id}`}>
              <button className="btn btn-primary w-full">View Profile</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertDoctor;
