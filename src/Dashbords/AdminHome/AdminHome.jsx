import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../Compment/Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaDollarSign, FaUser } from 'react-icons/fa';
import { FaBookBookmark } from 'react-icons/fa6';

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useContext(AuthContext);
  const { data } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/admin-stats');
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl font-semibold">
        {' '}
        <span>Hi,welcome</span> {user.displayName ? user.displayName : ' back'}
      </h2>
      <div className="mt-12">
        <div className="stats shadow ">
          <div className="stat  gap-5">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="text-3xl"></FaDollarSign>
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value"> ${data.revenue} </div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUser className="text-3xl"></FaUser>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">{data.users}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaBookBookmark className="text-3xl"></FaBookBookmark>
            </div>
            <div className="stat-title">{data.menuItems}</div>
            <div className="stat-value">Product</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaBookBookmark className="text-3xl"></FaBookBookmark>
            </div>
            <div className="stat-title">{data.orders}</div>
            <div className="stat-value">Orders</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
