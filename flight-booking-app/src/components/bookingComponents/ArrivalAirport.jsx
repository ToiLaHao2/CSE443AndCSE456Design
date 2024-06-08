import { useContext, useEffect, useState } from "react";
import { middleWareWithPOST } from "../../api/ApiService";
import { FlightContext } from "../../contexts/FlightContext";

const ArrivalAirport = (props) => {
    const [cities, setCities] = useState([]);
    const [active, setActive] = useState(props.active === true ? true : false);
    const { arrivalAirportId, setArrivalAirportId } = useContext(FlightContext);

    useEffect(() => {
        middleWareWithPOST
            .post("/airport/getAirport")
            .then((res) => {
                console.log(res);
                setCities(res.data.object);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [active]);

    return (
        <div>
            <div className="py-1.5 px-2.5 flex-1 border-r-2">
                <p>Destination To</p>
                <div className="flex flex-row">
                    <select
                        className="outline-none px-2 py-2 w-full"
                        name="to"
                        required
                        onChange={(e) => setArrivalAirportId(e.target.value)}
                    >
                        <option value="" hidden>
                            Please Select
                        </option>
                        {cities &&
                            cities.length > 0 &&
                            cities.map((city) => {
                                return (
                                    <option key={city.id} value={city.id}>
                                        {city.id},{city.airportName}
                                    </option>
                                );
                            })}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ArrivalAirport;
