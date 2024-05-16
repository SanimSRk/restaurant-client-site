const HomeBanner = () => {
  return (
    <div className=" bg-[url(chef-service.jpg)] bg-cover bg-center lg:h-[570px] md:h-[450px] h-full  grid justify-center items-center">
      <div className="lg:w-2/3 w-2/3 my-6 lg:py-[119px] p-5 lg:px-[112px] text-center mx-auto bg-white">
        <h2 className=" lg:text-5xl md:text-4xl text-3xl mb-6 text-center">
          TasteMingle
        </h2>
        <p>
          Discover new recipes, local dishes, and exotic cuisines from around
          the world. Whether youre interested in trying out a new Thai dish,
          perfecting your Italian pasta, or exploring the depths of Ethiopian
          cuisine, TasteMingle has you covered.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
