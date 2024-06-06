const SmallFlightInformation = () => {
    return (
        <div className="flex flex-row p-4 bg-blue-300 rounded-full w-10/12 ml-auto mr-auto">
            <div className="basis-2/6 text-center">
                <div className="flex flex-row pl-5 pr-5">
                    <div className="basis-2/6 text-left">
                        <p>14:20</p>
                        <p>SGN</p>
                        <p>Nhà ga 1</p>
                    </div>
                    <div className="basis-2/6 text-center pt-3">
                        <div className="border-dotted border-b-2 border-inherit">
                            Bay thẳng
                        </div>
                    </div>
                    <div className="basis-2/6 text-right">
                        <p>16:45</p>
                        <p>HAN</p>
                        <p>Nhà ga 1</p>
                    </div>
                </div>
            </div>
            <div className="basis-2/6 text-left pl-5">
                <div>Thời gian bay 2 giờ 15 phút</div>
                <div>
                    VN 179 khai thác bởi TUF Airline <span></span>
                </div>
                <div>
                    <a href="#">Chi tiết hành trình</a>
                </div>
            </div>
            <div className="basis-2/6 text-center flex flex-row">
                <div className="basis-1/2">
                    <p>PHỔ THÔNG</p>
                    <p>từ</p>
                    <p>3.387.000</p>
                    <p>VNĐ</p>
                </div>
                <div className="basis-1/2">
                    <p>THƯƠNG GIA</p>
                    <p>từ</p>
                    <p>8.776.000</p>
                    <p>VNĐ</p>
                </div>
            </div>
        </div>
    );
};

export default SmallFlightInformation;
