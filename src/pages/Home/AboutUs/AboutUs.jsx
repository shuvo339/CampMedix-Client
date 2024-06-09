import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Highlights from "../Highlights/Highlights";

const AboutUs = () => {
    return (
        <div className="md:mt-24 mt-12">
            <SectionTitle title={'About Us'} subTitle={'Know about Our Story and Mission'}></SectionTitle>
        <div className="flex gap-6 flex-col md:flex-row">
            {/* description  */}
            <div className="md:w-1/2 w-full px-4">
                <h2 className="text-xl md:text-3xl font-bold mb-3">Our Story: Connecting Care with Convenience</h2>
                <p className="text-justify mb-2">Welcome to CampMedix, the premier platform connecting patients with top-quality medical camps. At CampMedix, we believe in making healthcare accessible and convenient by bridging the gap between healthcare providers and patients through our innovative app. Our platform allows service providers to share their medical services, while patients can effortlessly register and participate in various medical camps by paying the camp fee.</p>
                <p className="text-justify">Our mission is to simplify the process of finding and attending medical camps, ensuring a seamless and smooth experience for both providers and patients. We believe in building lasting relationships with our patients, founded on trust, respect, and empathy. Whether you are a healthcare professional looking to reach more patients or an individual seeking specialized medical services, CampMedix is here to support you every step of the way. Join us in our journey to revolutionize healthcare accessibility and make quality medical care available to everyone.</p>
            </div>
            {/* image  */}
            <div className="md:w-1/2 w-full px-4">
                <div className="rounded-xl overflow-hidden">
                    <img src="https://i.ibb.co/HpT1Qnt/about-medical.jpg" alt="" />
                </div>
                {/* highlights  */}
                <div>
                    <Highlights></Highlights>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;