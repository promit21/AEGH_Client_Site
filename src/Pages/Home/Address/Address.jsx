import { FaLocationArrow } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { SlCallOut } from "react-icons/sl";

const Address = () => {
  return (
    <div className="lg:flex justify-evenly gap-4 space-y-4 shadow">
      <div className="flex justify-evenly gap-4 w-full p-10 bg-green-950 rounded-lg">
        <div className="text-6xl text-white">
          <IoTimerOutline />
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold">Opening Hours</h1>
          <p>Open 9.00 am to 5.00pm Everyday</p>
          <p>Jan 1st - Feb 1st</p>
        </div>
      </div>
      <div className="flex justify-evenly gap-4 w-full p-10 bg-red-400 rounded-lg">
        <div className="text-6xl text-white">
          <FaLocationArrow />
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold">Our Locations</h1>
          <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
          <p>Jan 1st - Feb 1st</p>
        </div>
      </div>
      <div className="flex justify-evenly gap-4 w-full p-10 bg-green-950 rounded-lg">
        <div className="text-6xl text-white">
          <SlCallOut />
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p>+88 01750 00 00 00</p>
          <p>+88 01750 00 00 00</p>
          <p>Jan 1st - Feb 1st</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
