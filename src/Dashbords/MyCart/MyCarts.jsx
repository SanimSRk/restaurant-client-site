import { RiDeleteBin6Fill } from 'react-icons/ri';
import useCarts from '../../Compment/Hooks/useCart/useCarts';
import SectionTitle from '../../Compment/SectionTitle/SectionTitle';
import useAxiosSecure from '../../Compment/Hooks/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCarts = () => {
  const [cart, refetch] = useCarts();
  const tottlePrice = cart.reduce((tottl, item) => tottl + item.price, 0);
  const finlePrice = tottlePrice.toFixed(2);
  console.log(tottlePrice);
  const axiosSecure = useAxiosSecure();

  const handileClikDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then(res => {
          console.log(res.data);
          if (res?.data?.deletedCount) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading={'MANAGE ALL ITEMS'}
        sebHeading={'---Hurry Up!---'}
      ></SectionTitle>
      <div className="flex justify-between mt-12">
        <h2 className="text-3xl font-bold  uppercase">
          Total orders : {cart.length}
        </h2>
        <h2 className="text-3xl font-bold  uppercase">
          {' '}
          total price: ${finlePrice}
        </h2>
        {cart.length ? (
          <Link to={'/dashborad/payment'}>
            <button className="text-white bg-blue-500 btn">pay</button>
          </Link>
        ) : (
          <button disabled className="text-white bg-blue-500 btn">
            pay
          </button>
        )}
      </div>

      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="font-semibold  uppercase bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            {cart.map((itm, index) => (
              <>
                <tbody key={itm._id}>
                  <tr>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16">
                            <img src={itm?.image} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{itm?.name}</td>
                    <td>${itm?.price}</td>
                    <th>
                      <button
                        onClick={() => handileClikDelete(itm?._id)}
                        className="btn p-3 grid items-center justify-center rounded-full bg-[#B91C1C] text-white"
                      >
                        <RiDeleteBin6Fill className="text-2xl" />{' '}
                      </button>
                    </th>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCarts;
