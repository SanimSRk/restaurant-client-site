import { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../Compment/SectionTitle/SectionTitle';
import useAxiosSecure from '../../Compment/Hooks/useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const PaymentHostry = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [hostry, setHostry] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/payment-hostry?email=${user?.email}`).then(res => {
      console.log(res.data);
      setHostry(res?.data);
    });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={'PAYMENT HISTORY'}
        sebHeading={'---At a Glance!---'}
      ></SectionTitle>
      <h2 className="text-3xl font-bold">Total Payments : {hostry.length} </h2>

      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="font-semibold  uppercase bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>EMAIL</th>
                <th>transactionId</th>
                <th>TOTAL PRICE</th>
                <th>PAYENT DATE</th>
              </tr>
            </thead>
            {hostry.map((itm, index) => (
              <>
                <tbody key={itm._id}>
                  <tr>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>{itm?.email}</td>
                    <td>{itm?.transactionId}</td>
                    <td>${itm?.price}</td>
                    <th>{itm?.date}</th>
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

export default PaymentHostry;
