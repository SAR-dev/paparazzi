import { Link } from "react-router-dom";

export const CoverCard = () => {
  return (
    <Link to="/articles/1" className="w-full p-5 rounded-xl border border-gray-300 bg-gray-100 hover:bg-white shadow-sm hover:-translate-y-1 duration-200 cursor-pointer">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex flex-col justify-between">
          <div>
            <div className="border border-black px-3 py-1 rounded-xl text-xs inline">
              UI DESIGN
            </div>
            <div className="mt-5 md:text-5xl text-3xl leading-[3.8rem]">
              5 Great Ways To Design A Website
            </div>
          </div>
          <div>
            <div className="flex gap-3">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://assets-global.website-files.com/661e9add3880f66f129971db/661e9c66c3fe057b00025fec_avatar.png"
                alt=""
              />
              <div className="flex flex-col">
                <div className="font-medium">John Doe</div>
                <div className="text-gray-600 text-sm">July 5, 2020</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="md:h-96 h-64 w-full object-cover rounded-xl"
            src="https://assets-global.website-files.com/661e9add3880f66f129971db/661ea34471eb67859736679f_pexels-jot-singh-2179483-min-p-500.jpg"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};
