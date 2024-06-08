const SmallFlightInformation = (props) => {
    const flight = props.flight;

    return (
        <div className="flex flex-row p-2 shadow-lg shadow-slate-300 hover:shadow-slate-400 bg-blue-100 rounded-xl w-10/12 ml-auto mr-auto mb-4">
            <div className="basis-2/6 text-center place-content-center">
                <div className="flex flex-row pl-5 pr-5">
                    <div className="basis-2/6 text-left">
                        <div>{flight.departureTime}</div>
                        <div>{flight.departureAirportId}</div>
                    </div>
                    <div className="basis-2/6 text-center pt-3 plact-content-center">
                        <div className="border-dotted border-b-2 border-black">
                            <div className="px-20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="basis-2/6 text-right">
                        <div>{flight.arrivalTime}</div>
                        <div>{flight.arrivalAirportId}</div>
                    </div>
                </div>
            </div>
            <div className="basis-2/6 text-left pl-5 pt-auto pb-auto place-content-center">
                <div className="flex flex-row">
                    <span className="mr-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </span>
                    Flight duration : {flight.duration}
                </div>
                <div className="flex flex-row">
                    <span className="mr-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 24.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                        </svg>
                    </span>
                    {flight.aircraftType} exploited by TUF Airline
                </div>
                <div>
                    <a
                        href="#"
                        className="text-blue-900 underline-offset-4 underline"
                    >
                        See itinerary details
                    </a>
                </div>
            </div>
            <div className="basis-2/6 text-center flex flex-row place-content-center p-1">
                <div className="basis-1/2">
                    <div>{flight.seatClass}</div>
                    <div>from {flight.ticketPrice}</div>
                    <p>VNĐ</p>
                </div>
            </div>
        </div>
    );
};

export default SmallFlightInformation;
