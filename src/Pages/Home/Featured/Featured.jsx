import SectionTitle from '../../../Compment/SectionTitle/SectionTitle';

const Featured = () => {
  return (
    <div className="bg-fixed text-white bg-[linear-gradient(rgba(21,21,21,0.7),rgba(21,21,21,0.7)100%),url(/featured.jpg)]  md:py-[100px] py-[80px] lg:py-[130px]">
      {/* bg-[url(/featured.jpg)] */}
      <SectionTitle
        heading={'---Check it out---'}
        sebHeading={'FROM OUR MENU'}
      ></SectionTitle>
      <div className="lg:flex md:flex w-3/4 items-center mx-auto gap-6 mt-12">
        <div>
          <img className="" src="/featured.jpg" alt="" />
        </div>
        <div>
          <p>
            March 20, 2023 <br /> WHERE CAN I GET SOME?
          </p>
          <p className="mt-5 leading-normal">
            Discover exclusive recipes crafted by renowned chefs and culinary
            experts. Each dish is a masterpiece, showcasing unique ingredient
            pairings, avant-garde techniques, and stunning presentations. Our
            detailed step-by-step guides, complete with high-quality visuals and
            personal chef insights, ensure you can recreate these extraordinary
            dishes at home.
          </p>
          <button className="mt-6 btn text-xl border-[#BB8506] text-[#BB8506]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
