import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from '../../Compment/Hooks/useAxiosPubice/useAxiosPublice';
import SectionTitle from '../../Compment/SectionTitle/SectionTitle';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUser = () => {
  const axiosPubice = useAxiosPublice();

  const { data, refetch } = useQuery({
    queryKey: ['userss'],
    queryFn: async () => {
      const res = await axiosPubice.get('/users');
      return res?.data;
    },
  });

  const handileClickDelete = id => {
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
        axiosPubice.delete(`/users/${id}`).then(res => {
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

  const handileMakeAdmin = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, provide admin role!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosPubice.patch(`/users/admin/${id}`).then(res => {
          console.log(res.data);
          if (res?.data?.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Success fully provide admin role.',
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
          heading={'MANAGE ALL USERS'}
          sebHeading={'---How many??---'}
        ></SectionTitle>
      </div>

      <div>
        <h2 className="text-3xl font-bold">Total users: {data?.length}</h2>
        <div className="mt-8">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="font-semibold  uppercase bg-[#D1A054] text-white">
                <tr>
                  <th></th>
                  <th>NAME</th>
                  <th>EMAIL</th>
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
                      <td>{itm?.name}</td>
                      <td>{itm?.email}</td>
                      <td>
                        {itm?.role === 'admin' ? (
                          'Admin'
                        ) : (
                          <button
                            onClick={() => handileMakeAdmin(itm?._id)}
                            className="p-3 rounded-full bg-[#D1A054] text-white btn-ghost"
                          >
                            <FaUsers className="text-2xl" />
                          </button>
                        )}
                      </td>
                      <th>
                        <button
                          onClick={() => handileClickDelete(itm?._id)}
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

export default AllUser;
