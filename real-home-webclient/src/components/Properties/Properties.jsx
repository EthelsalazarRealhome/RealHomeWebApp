import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Filter from './Filter/Filter'

const Properties = () => {

    const [selectedFilter, setSelectedFilter] = useState("");

    const handleFilterSelect = (value) => {
        setSelectedFilter(value);
    };

    return (
        <div>
            <div className="max-w-2xl mx-auto p-4">
                <h2 className="ml-[50px] text-3xl font-bold mb-6 mt-[50px]">
                    NUESTRAS PROPIEDADES DISPONIBLES
                </h2>
                <Filter onSelect={handleFilterSelect} className="mb-6" />
            </div>


            <div className="fixed bottom-0 w-full flex flex-col-reverse items-center justify-around h-48 text-white bg-gray-200 md:flex-row md:h-36" style={{ backgroundColor: "#042b5e", color: "white" }}>
                <div className="px-4 text-center text-white md:px-0 md:text-left"> Ethel Salazar-RealHome ©.</div>
                <div className="flex items-center space-x-10">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="https://sv.linkedin.com/in/ethel-salazar-818b33239" className="block text-white transition duration-300 ease-in-out hover:text-gray-500" rel="nofollow noreferrer noopener" target="_blank">
                                <svg className="w-5 h-5" width="20" height="20" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4701 0.000139831H1.53006C1.33964 -0.00250479 1.15056 0.0323873 0.973624 0.102824C0.796689 0.17326 0.635362 0.27786 0.498856 0.410652C0.36235 0.543443 0.25334 0.701824 0.178051 0.876749C0.102761 1.05167 0.062667 1.23972 0.0600586 1.43014V18.5701C0.062667 18.7606 0.102761 18.9486 0.178051 19.1235C0.25334 19.2985 0.36235 19.4568 0.498856 19.5896C0.635362 19.7224 0.796689 19.827 0.973624 19.8975C1.15056 19.9679 1.33964 20.0028 1.53006 20.0001H18.4701C18.6605 20.0028 18.8496 19.9679 19.0265 19.8975C19.2034 19.827 19.3648 19.7224 19.5013 19.5896C19.6378 19.4568 19.7468 19.2985 19.8221 19.1235C19.8974 18.9486 19.9375 18.7606 19.9401 18.5701V1.43014C19.9375 1.23972 19.8974 1.05167 19.8221 0.876749C19.7468 0.701824 19.6378 0.543443 19.5013 0.410652C19.3648 0.27786 19.2034 0.17326 19.0265 0.102824C18.8496 0.0323873 18.6605 -0.00250479 18.4701 0.000139831ZM6.09006 16.7401H3.09006V7.74014H6.09006V16.7401ZM4.59006 6.48014C4.17632 6.48014 3.77953 6.31578 3.48697 6.02323C3.19442 5.73067 3.03006 5.33388 3.03006 4.92014C3.03006 4.5064 3.19442 4.10961 3.48697 3.81705C3.77953 3.5245 4.17632 3.36014 4.59006 3.36014C4.80975 3.33522 5.03224 3.35699 5.24293 3.42402C5.45363 3.49105 5.6478 3.60183 5.81272 3.7491C5.97763 3.89637 6.10958 4.07682 6.19993 4.27862C6.29028 4.48043 6.33698 4.69904 6.33698 4.92014C6.33698 5.14124 6.29028 5.35985 6.19993 5.56166C6.10958 5.76346 5.97763 5.94391 5.81272 6.09118C5.6478 6.23845 5.45363 6.34923 5.24293 6.41626C5.03224 6.48329 4.80975 6.50505 4.59006 6.48014ZM16.9101 16.7401H13.9101V11.9101C13.9101 10.7001 13.4801 9.91014 12.3901 9.91014C12.0527 9.91261 11.7242 10.0184 11.4489 10.2133C11.1735 10.4082 10.9645 10.6828 10.8501 11.0001C10.7718 11.2352 10.7379 11.4827 10.7501 11.7301V16.7301H7.75006C7.75006 16.7301 7.75006 8.55014 7.75006 7.73014H10.7501V9.00014C11.0226 8.52725 11.419 8.13766 11.8965 7.87334C12.374 7.60902 12.9146 7.47999 13.4601 7.50014C15.4601 7.50014 16.9101 8.79014 16.9101 11.5601V16.7401Z" fill="currentColor">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/realhome.ethelsalazar/" className="block text-white transition duration-300 ease-in-out hover:text-gray-500" rel="nofollow noreferrer noopener" target="_blank"><svg className="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.315 0C12.745 0 13.099 0.0129999 14.123 0.0599999C15.187 0.109 15.914 0.278 16.55 0.525C17.2175 0.775874 17.8222 1.16936 18.322 1.678C18.8306 2.17777 19.2241 2.7825 19.475 3.45C19.722 4.086 19.891 4.813 19.94 5.877C19.988 6.944 20 7.284 20 10V10.08C20 12.723 19.988 13.067 19.94 14.123C19.891 15.187 19.722 15.914 19.475 16.55C19.2241 17.2175 18.8306 17.8222 18.322 18.322C17.8222 18.8306 17.2175 19.2241 16.55 19.475C15.914 19.722 15.187 19.891 14.123 19.94C13.056 19.988 12.716 20 10 20H9.92C7.277 20 6.933 19.988 5.877 19.94C4.813 19.891 4.086 19.722 3.45 19.475C2.7825 19.2241 2.17777 18.8306 1.678 18.322C1.16936 17.8222 0.775874 17.2175 0.525 16.55C0.278 15.914 0.109 15.187 0.0599999 14.123C0.0129999 13.099 0 12.744 0 10.315V9.685C0 7.255 0.0129999 6.901 0.0599999 5.877C0.109 4.813 0.278 4.086 0.525 3.45C0.775874 2.7825 1.16936 2.17777 1.678 1.678C2.17777 1.16936 2.7825 0.775874 3.45 0.525C4.086 0.278 4.813 0.109 5.877 0.0599999C6.901 0.0129999 7.256 0 9.685 0H10.315ZM10.234 1.802H9.766C7.31 1.802 6.982 1.813 5.959 1.86C4.984 1.905 4.455 2.067 4.102 2.204C3.635 2.386 3.302 2.602 2.952 2.952C2.602 3.302 2.386 3.635 2.204 4.102C2.067 4.455 1.904 4.984 1.86 5.959C1.813 6.982 1.802 7.31 1.802 9.766V10.234C1.802 12.69 1.813 13.018 1.86 14.041C1.905 15.016 2.067 15.545 2.204 15.898C2.386 16.364 2.603 16.698 2.952 17.048C3.302 17.398 3.635 17.614 4.102 17.796C4.455 17.933 4.984 18.096 5.959 18.14C7.013 18.188 7.329 18.198 10 18.198H10.08C12.677 18.198 12.997 18.188 14.04 18.14C15.016 18.095 15.545 17.933 15.898 17.796C16.364 17.614 16.698 17.398 17.048 17.048C17.398 16.698 17.614 16.365 17.796 15.898C17.933 15.545 18.096 15.016 18.14 14.041C18.188 12.986 18.198 12.671 18.198 10V9.92C18.198 7.323 18.188 7.003 18.14 5.96C18.095 4.984 17.933 4.455 17.796 4.102C17.6358 3.66757 17.3802 3.2746 17.048 2.952C16.7254 2.61986 16.3324 2.36426 15.898 2.204C15.545 2.067 15.016 1.904 14.041 1.86C13.018 1.813 12.69 1.802 10.234 1.802ZM10 4.865C10.6743 4.865 11.3421 4.99782 11.9651 5.25588C12.5881 5.51394 13.1542 5.89218 13.631 6.36901C14.1078 6.84584 14.4861 7.41191 14.7441 8.03492C15.0022 8.65793 15.135 9.32566 15.135 10C15.135 10.6743 15.0022 11.3421 14.7441 11.9651C14.4861 12.5881 14.1078 13.1542 13.631 13.631C13.1542 14.1078 12.5881 14.4861 11.9651 14.7441C11.3421 15.0022 10.6743 15.135 10 15.135C8.63811 15.135 7.33201 14.594 6.36901 13.631C5.40601 12.668 4.865 11.3619 4.865 10C4.865 8.63811 5.40601 7.33201 6.36901 6.36901C7.33201 5.40601 8.63811 4.865 10 4.865ZM10 6.667C9.11603 6.667 8.26827 7.01815 7.64321 7.64321C7.01815 8.26827 6.667 9.11603 6.667 10C6.667 10.884 7.01815 11.7317 7.64321 12.3568C8.26827 12.9818 9.11603 13.333 10 13.333C10.884 13.333 11.7317 12.9818 12.3568 12.3568C12.9818 11.7317 13.333 10.884 13.333 10C13.333 9.11603 12.9818 8.26827 12.3568 7.64321C11.7317 7.01815 10.884 6.667 10 6.667ZM15.338 3.462C15.6563 3.462 15.9615 3.58843 16.1865 3.81347C16.4116 4.03852 16.538 4.34374 16.538 4.662C16.538 4.98026 16.4116 5.28548 16.1865 5.51053C15.9615 5.73557 15.6563 5.862 15.338 5.862C15.0197 5.862 14.7145 5.73557 14.4895 5.51053C14.2644 5.28548 14.138 4.98026 14.138 4.662C14.138 4.34374 14.2644 4.03852 14.4895 3.81347C14.7145 3.58843 15.0197 3.462 15.338 3.462Z" fill="currentColor">
                                </path>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100076995453710" className="block text-white transition duration-300 ease-in-out hover:text-gray-500" rel="nofollow noreferrer noopener" target="_blank"><svg className="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.878V12.891H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.878C16.343 19.128 20 14.991 20 10Z" fill="currentColor"></path></svg></a></li></ul>
                </div>
            </div>
        </div>
    );
}

export default Properties;