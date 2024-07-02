import serImg from "../../../assets/image/Services.png";
import teethImg from "../../../assets/image/teeth.png";
const Services = () => {
  return (
    <div className="lg:flex justify-center gap-5 my-20">
      <div>
        <img src={serImg} alt="Album" />
      </div>
      <div className="w-8/12 space-y-4">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div className="lg:flex justify-evenly items-center space-y-4">
          <button className="btn w-56">Cavity Protection</button>
          <button className="btn w-56">Cosmetic Dentisty</button>
          <button className="btn w-56">Oral Surgery</button>
        </div>
        <div className="space-y-3">
          <img className="w-full" src={teethImg} alt="" />
          <h1 className="text-2xl font-bold">Electro Gastrology Therapy</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error{" "}
          </p>
          <p>
            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
          <button className="btn">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
