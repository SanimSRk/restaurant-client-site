const DessertCart = ({ des }) => {
  const { image, name, price, recipe } = des;
  return (
    <div className="flex gap-3 items-center p-4">
      <div>
        <img
          style={{ borderRadius: '0 200px 200px 200px' }}
          className="w-[130px]"
          src={image}
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-between">
          <p className="uppercase">{name} ----------------</p>
          <p className="text-[#BB8506] font-semibold">${price}</p>
        </div>
        <p className="mt-3">{recipe}</p>
      </div>
    </div>
  );
};

export default DessertCart;
