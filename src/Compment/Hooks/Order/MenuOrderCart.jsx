const MenuOrderCart = ({ order }) => {
  const { image, recipe, name } = order;
  return (
    <div className="shadow-lg rounded-lg p-6 grid items-end">
      <img src={image} alt="" />
      <h2 className="my-3 text-2xl font-semibold">{name}</h2>
      <p>{recipe}</p>
      <button className="btn uppercase mt-6 w-full bg-[#BB8506] text-white">
        add to cart
      </button>
    </div>
  );
};

export default MenuOrderCart;
