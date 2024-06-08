import { Link } from "react-router-dom";

export const BlogSmallCard = () => {
  return (
    <Link to="/articles/1" className="flex flex-col gap-5 group cursor-pointer">
      <div className="h-64 w-full rounded-xl overflow-hidden">
        <img
          className="h-64 w-full object-cover group-hover:scale-110 duration-200"
          src="https://assets-global.website-files.com/661e9add3880f66f129971db/661ea387268c746022ea5905_pexels-zaksheuskaya-1616403-min-p-500.jpg"
          alt=""
        />
      </div>
      <div className="h-20 w-full border-b border-dashed">
        <div className="text-2xl line-clamp-2">
          Whereas disregard and contempt for human rights have resulted
        </div>
      </div>
      <div className="flex gap-3 text-sm text-gray-600 -mt-2">
        <div>SEO</div>
        <div>|</div>
        <div>John Doe</div>
        <div>|</div>
        <div>March 12, 2025</div>
      </div>
    </Link>
  );
};
