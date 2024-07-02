import Swal from "sweetalert2";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useDoctor from "../../../Hooks/useDoctor";
import { Link } from "react-router-dom";

const ManageDoctor = () => {
  const [doctors, refetch] = useDoctor();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (doctor) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/doctors/${doctor._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"Manage All Doctor"} />
      <h1 className="text-xl font-semibold mb-3">
        Total Doctor: {doctors.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Doctors Address</th>
              <th>Doctors E-mail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {doctors.map((doctor) => (
              <tr key={doctor._id}>
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={doctor.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{doctor.doctor_name}</div>
                      <div className="text-sm opacity-50">
                        {doctor.specialty}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{doctor.address}</td>
                <td>{doctor.email}</td>
                <th className="flex justify-center items-center gap-4">
                  <Link to={`/dashboard/updateDoctor/${doctor._id}`}>
                    <button>Update</button>
                  </Link>
                  <button onClick={() => handleDelete(doctor)}>Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
