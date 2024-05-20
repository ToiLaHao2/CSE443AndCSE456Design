import logo from "../assets/img/logo.png";

const Footer = () => {
    return (
        <footer className="bg-black py-12">
            <div className="container mx-auto text-white flex justify-between pl-20 pr-20">
                {/*logo*/}
                <div>
                    <a href="/">
                        <img
                            src={logo}
                            alt=""
                            className="size-20 rounded-full"
                        />
                    </a>
                    <p>TUF Airline</p>
                </div>
                <div className="p-6">Copyright &copy; 2022. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
