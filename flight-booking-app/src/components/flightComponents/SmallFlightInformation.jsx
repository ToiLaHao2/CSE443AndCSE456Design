const SmallFlightInformation = () => {
    return (
        <div className="flex flex-row shadow-lg shadow-slate-300 hover:shadow-slate-400 bg-blue-100 rounded-xl w-10/12 ml-auto mr-auto">
            <div className="basis-2/6 text-center place-content-center">
                <div className="flex flex-row pl-5 pr-5">
                    <div className="basis-2/6 text-left">
                        <p>14:20</p>
                        <p>SGN</p>
                        <p>Nhà ga 1</p>
                    </div>
                    <div className="basis-2/6 text-center pt-3 plact-content-center">
                        <div className="border-dotted border-b-2 border-black">
                            Bay thẳng
                        </div>
                        <div className="px-11 pt-1">
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
                    <div className="basis-2/6 text-right">
                        <p>16:45</p>
                        <p>HAN</p>
                        <p>Nhà ga 1</p>
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
                    Thời gian bay 2 giờ 15 phút
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
                    VN 179 khai thác bởi TUF Airline
                </div>
                <div>
                    <a href="#" className="text-blue-900 underline-offset-4 underline">
                        Chi tiết hành trình
                    </a>
                </div>
            </div>
            <div className="basis-2/6 text-center flex flex-row place-content-center p-1">
                <div className="basis-1/2">
                    <p>PHỔ THÔNG</p>
                    <p className="text-sm">từ</p>
                    <p>3.387.000</p>
                    <p>VNĐ</p>
                </div>
                <div className="basis-1/2">
                    <p>THƯƠNG GIA</p>
                    <p className="text-sm">từ</p>
                    <p>8.776.000</p>
                    <p>VNĐ</p>
                </div>
            </div>
        </div>
    );
};

export default SmallFlightInformation;
