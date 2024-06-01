const TypeDate = (props) => {

    return (
        <div>
            <div className="py-1.5 px-2.5 flex-1 border-r-2">
                <p>{props.data}</p>
                <input
                    type="date"
                    className="outline-none px-2 py-2 w-full date"
                    name="date"
                    required
                    onChange={(e) => handleChange(e)}
                />
            </div>
        </div>
    );
};

export default TypeDate;
