import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-20 md:h-[60%] w-full flex flex-col justify-between">
            <div className="w-full h-full mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
                {/* Left Section */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            Shree Shantadurga
                            <br />
                            Shankhwaleshwari Saunsthan
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Gauthan, Veling, Mardol - Goa 403401
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-1">Contact</h3>
                        <p className="text-gray-400">Phone: 832-2343473, 91-8308770489</p>
                        <p className="text-gray-400">
                            Email:{" "}
                            <a
                                href="mailto:shantadurgagothan@gmail.com"
                                className="text-blue-300 hover:underline"
                            >
                                shantadurgagothan@gmail.com
                            </a>
                        </p>
                    </div>

                </div>

                {/* Right Section - Map */}
                <div className=" md:w-[35%] md:h-[100%] flex justify-center items-start">
                    <iframe
                        title="Temple Location"
                        width="100%"
                        height="100%"
                        className="rounded-md border-2 border-gray-700 shadow-md w-[90%] h-[90%]"
                        frameBorder="0"
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps?q=CXJC+M37,+Gothan,+Veling,+Mardol,+Goa+403404,+India&output=embed"
                    ></iframe>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Shree Shantadurga Shankhwaleshwari Saunsthan. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
