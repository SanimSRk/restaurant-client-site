const SectionTitle = ({ heading, sebHeading }) => {
  return (
    <div className=" md:w-2/3 px-5 lg:px-0 md:px-0 lg:w-[40%] mx-auto text-center">
      <p className="text-[#D99904] text-xl">{sebHeading}</p>
      <div className="border-y py-4 mt-6">
        <h2 className=" lg:text-5xl md:text-4xl text-3xl font-semibold">
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
