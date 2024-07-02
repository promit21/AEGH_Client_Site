import CoverPhoto from "../../../Component/CoverPhoto/CoverPhoto";
import coverImg from "../../../assets/image/bannar/banner2.jpeg";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import Calender from "../Calender/Calender";

const Appointment = () => {
  return (
    <div>
      <CoverPhoto
        coverImg={coverImg}
        heading={"Appointment Here"}
        subheading={
          "Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard"
        }
      ></CoverPhoto>
      <Calender />

      <AppointmentForm />
    </div>
  );
};

export default Appointment;
