import { FaHandshake } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPeopleRobbery } from "react-icons/fa6";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from "react";

const Highlights = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div style={{backgroundImage: `url("https://i.ibb.co/bLqVZyK/medical-highlights.jpg")`}} className='md:mt-24 mt-12 min-h-72 bg-cover bg-center w-full bg-no-repeat bg-opacity-60 bg-black bg-blend-overlay rounded-lg flex flex-col md:py-0 py-4 space-y-8 md:space-y-0 md:flex-row justify-around items-center'>
            <div>
                    <div className="flex gap-2 items-center">
                    <FaHandshake className="text-teal-400 text-4xl" />
                        <VisibilitySensor
                        onChange={(isVisible) => setIsVisible(isVisible)}
                        partialVisibility={true}
                        >
                         <h2 className="text-teal-400 text-5xl font-bold">
                            <CountUp end={50} duration={2.5} redraw={true} startOnMount={false} endOnMount={false} start={isVisible} />
                            +</h2>
                        </VisibilitySensor>
                    </div>
                    <p className="text-white text-3xl font-bold">Successfull <br />Camp <br /> Organized</p>
            </div>

            <div>
                    <div className="flex gap-2 items-center">
                    <FaPeopleRobbery className="text-teal-400 text-4xl" />
                    <VisibilitySensor
                        onChange={(isVisible) => setIsVisible(isVisible)}
                        partialVisibility={true}
                        >
                         <h2 className="text-teal-400 text-5xl font-bold">
                            <CountUp end={200} duration={2.5} redraw={true} startOnMount={false} endOnMount={false} start={isVisible} />
                            +</h2>
                        </VisibilitySensor>
                    </div>
                    <p className="text-white text-3xl font-bold">Patients <br />Recover <br />and Thrive</p>
            </div>

            <div>
                    <div className="flex gap-2 items-center">
                    <FaMapLocationDot className="text-teal-400 text-4xl" />
                    <VisibilitySensor
                        onChange={(isVisible) => setIsVisible(isVisible)}
                        partialVisibility={true}
                        >
                         <h2 className="text-teal-400 text-5xl font-bold">
                            <CountUp end={95} duration={2.5} redraw={true} startOnMount={false} endOnMount={false} start={isVisible} />
                            %</h2>
                        </VisibilitySensor>
                    </div>
                    <p className="text-white text-3xl font-bold">Patient <br />Satisfaction <br />Rate</p>
            </div>
         

        </div>
    );
};

export default Highlights;