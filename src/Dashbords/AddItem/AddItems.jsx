import { useForm } from 'react-hook-form';
import SectionTitle from '../../Compment/SectionTitle/SectionTitle';
import axios from 'axios';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../Compment/Hooks/useAxiosSecure/useAxiosSecure';

const AddItems = () => {
  // const [image, setImage] = useState(null);
  const axiosSecure = useAxiosSecure();
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
        const producrtInfo = {
          category,
          name,
          recipe,
          price: parseFloat(price),
          image,
        };
        axiosSecure.post('/products', producrtInfo).then(res => {
          console.log(res.data);

          if (res.data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'success fully add product',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      });
  };

  return (
    <div className="w-3/4 mx-auto my-[100px]">
      <SectionTitle
        heading={'ADD AN ITEM'}
        sebHeading={"---What's new?---"}
      ></SectionTitle>
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
                defaultValue={'dsafda'}
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

export default AddItems;
