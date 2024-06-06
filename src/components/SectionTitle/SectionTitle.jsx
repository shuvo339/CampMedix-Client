
const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
            <h2 className="text-xl text-gray-400 font-bold pb-8">{subTitle}</h2>
        </div>
    );
};

export default SectionTitle;