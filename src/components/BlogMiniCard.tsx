import { Link } from "react-router-dom";

export const BlogMiniCard = () => {
  return (
    <Link to="/articles/1" className="p-5 grid grid-cols-5 gap-3">
      <div className="md:col-span-2 col-span-5 md:h-28 h-64 overflow-hidden">
        <img
          className="md:h-28 h-64 w-full rounded-lg object-cover"
          src="https://assets-global.website-files.com/661e9add3880f66f129971db/661ea353f7165f2600ffb8ef_pexels-nick-collins-1292998-min-p-500.jpg"
          alt=""
        />
      </div>
      <div className="md:col-span-3 col-span-5">
        <div className="flex flex-col justify-between h-full">
          <div className="font-medium md:text-base text-2xl">
            Rapidly build modern websites without ever leaving your HTML
          </div>
          <div className="flex gap-2 md:mt-0 mt-3">
            <img
              className="h-6 w-6 rounded-full"
              src="https://assets-global.website-files.com/661e9add3880f66f129971db/661e9c66c3fe057b00025fec_avatar.png"
              alt=""
            />
            <div>John Doe</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
