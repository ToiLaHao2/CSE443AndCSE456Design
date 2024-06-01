const ArrivalCityList = () => {
    return (
        <div>
            <div className="py-1.5 px-2.5 flex-1 border-r-2">
                <p>Destination To</p>
                <div className="flex flex-row">
                    <select
                        className="outline-none px-2 py-2 w-full"
                        name="to"
                        required
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="" hidden>
                            Please Select
                        </option>
                        <option>New York</option>
                        <option>London</option>
                        <option>Paris</option>
                        <option>Rome</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ArrivalCityList;
