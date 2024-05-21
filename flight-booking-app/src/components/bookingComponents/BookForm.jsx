import ArrivalCityList from "./ArrivalCity";
import DepartureCityList from "./DepartureCity";

const BookingForm = () => {
    return (
        <div>
            <form className="h-[200px] w-full lg:h-[70px] mt-10">
                <div className="flex flex-col w-full h-full lg:flex-row">
                    <div className="flex-1 border-r">
                        <DepartureCityList />
                    </div>
                    <div className="flex-1 border-r">
                        <ArrivalCityList />
                    </div>
                    <div className="flex-1 border-r">
                        
                    </div>
                    <div className="flex-1 border-r">
                        {/* <KidsDropdown /> */} hello 4
                    </div>
                    {/* btn */}
                    <button
                        onClick={(e) => handleClick(e)}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Check now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
