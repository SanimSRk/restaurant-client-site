import { Parallax } from 'react-parallax';

const CoverSection = ({ img, titles, descoption }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero min-h-screen w-full ">
        <div className="bg-[#15151599] lg:w-3/4 py-[90px] hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold uppercase">{titles}</h1>
            <p>{descoption}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default CoverSection;
