import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AllAppointment = () => {
  const axiosSecure = useAxiosSecure();
  const { data: appointments = [], refetch } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/appointments");
      return res.data;
    },
  });

  const handleDelete = (appointment) => {
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
        axiosSecure.delete(`/appointments/${appointment._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Appointment has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <SectionTitle heading={"All Patients Appointment"} />
        <h1>Total Appointment{appointments.length}</h1>
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>SN:</th>
              <th>Patients Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Services Name</th>
              <th>Appointment Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {appointments.map((appointment, index) => (
              <tr key={appointment._id}>
                <td>{index + 1}</td>
                <td>{appointment.name}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.age}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.address}</td>
                <td>{appointment.services_name}</td>
                <td>{appointment.appointment_date}</td>
                <td>
                  <button onClick={() => handleDelete(appointment)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppointment;
