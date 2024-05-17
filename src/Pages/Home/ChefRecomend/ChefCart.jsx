const ChefCart = ({ chef }) => {
  const { image, name, recipe } = chef;
  return (
    <div className="shadow-lg rounded-lg p-6 grid items-end">
      <img src={image} alt="" />
      <h2 className="text-xl font-semibold my-2">{name}</h2>
      <p>{recipe}</p>
      <button className="uppercase bg-[#BB8506] text-white btn w-full mt-6">
        add to cart
      </button>
    </div>
  );
};

export default ChefCart;
