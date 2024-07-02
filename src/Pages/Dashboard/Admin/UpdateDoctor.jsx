import Swal from "sweetalert2";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useDoctor from "../../../Hooks/useDoctor";
import { axiosPublic } from "../../../Hooks/useAxios";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_BB_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateDoctor = () => {
  const [doctors, refetch] = useDoctor();
  const navigate = useNavigate();

  const {
    _id,
    doctor_name,
    specialty,
    description,
    position,
    rating,
    address,
    degree,
    fees,
    email,
    phone,
    workplace,
    workdays,
  } = useLoaderData();

  const axiosSecure = useAxiosSecure();

  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;
    const doctor_name = form.doctor_name.value;
    const specialty = form.specialty.value;
    const position = form.position.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const address = form.address.value;
    const degree = form.degree.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const workplace = form.workplace.value;
    const fees = form.fees.value;
    const workdays = form.workdays.value;
    const photo = form.photo.files[0];

    const formData = new FormData();
    formData.append("image", photo);

    try {
      const imageResponse = await axiosPublic.post(
        image_hosting_api,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (imageResponse.data.success) {
        const photoUrl = imageResponse.data.data.url;

        const doctorInfo = {
          doctor_name,
          specialty,
          description,
          rating,
          address,
          degree,
          position,
          email,
          phone,
          workplace,
          fees,
          workdays,
          photo: photoUrl,
        };

        const response = await axiosSecure.patch(`/doctors/${_id}`, doctorInfo);
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Doctor Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Image Upload Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Image Upload Failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <SectionTitle heading={"Update Doctor Profile"} />
      <div>
        <h1>Total Doctor: {doctors.length} </h1>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleUpdate} className="card-body">
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Doctor Name <span className="text-red-500 text-xl">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="doctor_name"
                  defaultValue={doctor_name}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Position<span className="text-red-500 text-xl">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="position"
                  defaultValue={position}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Specialty</span>
                </label>
                <input
                  type="text"
                  name="specialty"
                  defaultValue={specialty}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  defaultValue={rating}
                  min={0.0}
                  max={5.0}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  defaultValue={address}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Degree</span>
                </label>
                <input
                  type="text"
                  name="degree"
                  defaultValue={degree}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  defaultValue={phone}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Doctor Description</span>
                </label>
                <textarea
                  defaultValue={description}
                  name="description"
                  className="textarea textarea-bordered textarea-lg w-full "
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Workplace (Hospital Name)</span>
                </label>
                <input
                  type="text"
                  name="workplace"
                  defaultValue={workplace}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Workdays</span>
                </label>
                <input
                  type="text"
                  name="workdays"
                  defaultValue={workdays}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Fees</span>
                </label>
                <input
                  type="text"
                  name="fees"
                  defaultValue={fees}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Photo</span>
                </label>
                <input
                  type="file"
                  name="photo"
                  className="file-input file-input-bordered file-input-md w-full max-w-xs"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Doctor</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateDoctor;
