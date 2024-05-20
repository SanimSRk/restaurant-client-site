import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import useCarts from '../useCart/useCarts';

const MenuOrderCart = ({ order }) => {
  const { image, recipe, name, price, _id } = order;
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCarts();
  const handileAddToCart = () => {
    const userData = { image, recipe, name, email, menuId: _id, price };

    if (user && user.email) {
      axiosSecure.post('/userOrder', userData).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 2000,
          });

          refetch();
        }
      });
    } else {
      navigate(location.state, '/login');
    }
  };
  return (
    <div className="shadow-lg rounded-lg p-6 grid items-end">
      <img src={image} alt="" />
      <span className="-mt-52 w-16 text-center bg-black text-white">
        ${price}
      </span>
      <div>
        <h2 className="my-3 text-2xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <button
          onClick={handileAddToCart}
          className="btn uppercase mt-6 w-full bg-[#BB8506] text-white"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default MenuOrderCart;
