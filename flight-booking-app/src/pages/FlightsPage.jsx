import BookingForm from "../components/bookingComponents/BookForm";

const Flights = () => {
    return (
        <div className="text-center relative pt-10">
            <h1 className="font-bold text-2xl">FIND YOUR FLIGHT</h1>
            <div className="flex pl-40">
                <button className="mr-10 bg-blue-300 pl-3 pr-3 rounded-full shadow-lg shadow-blue-500/50">One-way Flight</button>
                <button className="pl-3 pr-3 p-2 rounded-full shadow-lg shadow-gray-500/50">Round trip Flight</button>
            </div>
            <BookingForm />
        </div>
    );
};

export default Flights;
