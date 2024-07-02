import img from "../../../assets/image/chair.png"

const Calender = () => {
    return (
        <div className="flex justify-evenly items-center gap-8 my-10">
            <div>Calender</div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Calender;