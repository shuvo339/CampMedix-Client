import { FaHandshake } from "react-icons/fa";
import { FaPeopleRobbery } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from "react";

const Highlights = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div  className='mt-6 flex justify-between items-center'>
            <div>
                    <div className="flex gap-2 items-center">
                    <FaHandshake className="text-teal-400 text-3xl" />
                        <VisibilitySensor
                        onChange={(isVisible) => setIsVisible(isVisible)}
                        partialVisibility={true}
                        >
                         <h2 className="text-teal-500 text-3xl font-bold">
                            <CountUp end={30} duration={2.5} redraw={true} startOnMount={false} endOnMount={false} start={isVisible} />
                            +</h2>
                        </VisibilitySensor>
                    </div>
                    <p className="text-xl font-bold">Outstanding <br />Engagement <br /> Camps</p>
            </div>

            <div>
                    <div className="flex gap-2 items-center">
                    <FaPeopleRobbery className="text-teal-400 text-3xl" />
                    <VisibilitySensor
                        onChange={(isVisible) => setIsVisible(isVisible)}
                        partialVisibility={true}
                        >
                         <h2 className="text-teal-500 text-3xl font-bold">
                            <CountUp end={200} duration={2.5} redraw={true} startOnMount={false} endOnMount={false} start={isVisible} />
                            +</h2>
                        </VisibilitySensor>
                    </div>
                    <p className="text-xl font-bold">Patients <br />Recover <br />& Thrive</p>
            </div>

            <div>
                    <div className="flex gap-2 items-center">
                    <GrAchievement className="text-teal-500 text-2xl" />
                    <VisibilitySensor
                        onChange={(isVisible) => setIsVisible(isVisible)}
                        partialVisibility={true}
                        >
                         <h2 className="text-teal-500 text-3xl font-bold">
                            <CountUp end={95} duration={2.5} redraw={true} startOnMount={false} endOnMount={false} start={isVisible} />
                            %</h2>
                        </VisibilitySensor>
                    </div>
                    <p className="text-xl font-bold">Satisfied <br />Patient <br />Rate</p>
            </div>
         

        </div>
    );
};

export default Highlights;