import ArrivalCityList from "./ArrivalCity";
import DepartureCityList from "./DepartureCity";
import TypeDate from "./TypeDate";

const FindFlightForm = (type) => {
    return (
        <div>
            <form className="h-[200px] w-10/12 text-left lg:h-[70px] mt-10 pl-40 mb-5">
                <div className="flex flex-col w-full h-full lg:flex-row">
                    <div className="flex-1 ">
                        <DepartureCityList />
                    </div>
                    <div className="flex-1">
                        <ArrivalCityList />
                    </div>
                    <div className="flex-1">
                        <TypeDate data="Departure Date" />
                    </div>
                    <div className="flex-1">
                        <TypeDate data="Return Date"/>
                    </div>
                    <div className="flex-1 p-4">
                        <button
                            onClick={(e) => handleClick(e)}
                            type="submit"
                            className="bg-blue-500 p-2 rounded-full"
                        >
                            Check now
                        </button>
                    </div>
                </div>
            </form>
            <div className="h-full">
                
            </div>
        </div>
    );
};

export default FindFlightForm;
