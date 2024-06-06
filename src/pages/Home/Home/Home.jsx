import Banner from "../Banner/Banner";
import PopularCamps from "../PopularCamps/PopularCamps";
import ShowFeedback from "../ShowFeedback/ShowFeedback";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto px-2 min-h-[calc(100vh-318px)]">
                <PopularCamps></PopularCamps>
                <ShowFeedback></ShowFeedback>
            </div>
        </div>
    );
};

export default Home;