import { RiDeleteBin6Fill } from 'react-icons/ri';
import SectionTitle from '../../Compment/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Compment/Hooks/useAxiosSecure/useAxiosSecure';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItems = () => {
  const axiosSecure = useAxiosSecure();

  const { data, refetch } = useQuery({
    queryKey: ['itmes'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/products');
      return data;
    },
  });

  const handileClickDeletes = id => {
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
        axiosSecure?.delete(`/productss/${id}`).then(res => {
          console.log(res.data);
          if (res?.data?.deletedCount > 0) {
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
      <div>
        <SectionTitle
          heading={'MANAGE ALL ITEMS'}
          sebHeading={'---Hurry Up!---'}
        ></SectionTitle>
      </div>

      <div>
        <h2 className="text-3xl font-bold">Total items: {data?.length}</h2>
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
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              {data?.map((itm, index) => (
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
                      <td>
                        {itm?.role === 'admin' ? (
                          'Admin'
                        ) : (
                          <Link to={`/dashborad/updates/${itm?._id}`}>
                            <button className="p-3 rounded-full bg-[#D1A054] text-white btn-ghost">
                              <FaUsers className="text-2xl" />
                            </button>
                          </Link>
                        )}
                      </td>
                      <th>
                        <button
                          onClick={() => handileClickDeletes(itm?._id)}
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
    </div>
  );
};

export default ManageItems;
