import { useForm } from 'react-hook-form';
import axios from 'axios';
import SectionTitle from '../../Compment/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../Compment/Hooks/useAxiosSecure/useAxiosSecure';
import useCarts from '../../Compment/Hooks/useCart/useCarts';

const UpdateItems = () => {
  const itmes = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCarts();
  console.log(itmes);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { category, name, recipe, price, photo } = data;

    const img = photo[0];
    console.log(img);
    const formImges = new FormData();
    formImges.append('image', img);

    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOSTING
        }`,
        formImges
      )
      .then(res => {
        const image = res?.data?.data?.display_url;

        const productInfo = {
          category,
          name,
          recipe,
          price,
          image,
        };
        axiosSecure.put(`/menuss/${itmes._id}`, productInfo).then(res => {
          console.log(res.data);
          refetch;
        });
      });
  };

  return (
    <div className="w-3/4 mx-auto my-[100px]">
      <SectionTitle heading={'UPDATE  ITEM'}></SectionTitle>
      <div className=" shadow-lg mt-12 py-[72px] px-[100px] bg-[#F3F3F3]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Recipe name</span>
              </label>
              <input
                type="text"
                placeholder="Recipe name*"
                className="input input-bordered"
                required
                defaultValue={itmes?.name}
                {...register('name', { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-4 my-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Category </span>
              </label>
              <select
                className="select select-bordered w-full"
                defaultValue={itmes?.category}
                {...register('category', { required: true })}
              >
                <option disabled selected>
                  Category
                </option>

                <option>salad</option>
                <option>pizza</option>
                <option>soups</option>
                <option>dessert</option>
                <option>soup</option>
                <option>popular</option>
              </select>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Enter Price"
                className="input input-bordered"
                required
                defaultValue={itmes?.price}
                {...register('price', { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <textarea
                name=""
                id=""
                className="min-h-28 input input-bordered"
                placeholder="Recipe Details*"
                defaultValue={itmes?.recipe}
                {...register('recipe', { required: true })}
              ></textarea>
            </div>
          </div>

          <div
            className="mt-4
          "
          >
            <input
              type="file"
              name=""
              id=""
              accept="image/*"
              required
              {...register('photo', { required: true })}
            />
          </div>
          <input
            className="text-white btn mt-6 bg-[#D1A054]"
            type="submit"
            value="Add Item"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
