import { useEffect, useRef } from "react"
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { NavBar } from '../components/NavBar';
import { CoverCard } from '../components/CoverCard';
import { BlogSmallCard } from '../components/BlogSmallCard';
import { BlogMiniCard } from '../components/BlogMiniCard';
import { useScroll, useSize } from 'ahooks';
import classNames from 'classnames';

export const Home = () => {
  const sizeRef = useRef(null);
  const size = useSize(sizeRef);

  const scroll = useScroll(document);

  useEffect(() => {
    console.log(size?.height, scroll?.top)
  }, [size, scroll]);

  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-row relative justify-center overflow-hidden">
        <div className={classNames({
          "transition ease-in-out duration-300 w-3/4": true,
          "translate-x-[10%]": (scroll?.top || 0) > (size?.height || 0)
        })}>
          <div className="p-16 w-full mx-auto">
            <div className="grid grid-cols-1 gap-20">
              {/* Card */}
              <CoverCard />

              <div className="w-full flex justify-between">
                <div className="text-xl font-medium">Recent Posts</div>
                <button className="btn flex gap-2 items-center text-gray-600 hover:text-black">
                  View All
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-10 -mt-10">
                {[...Array(15)].map((_, i) => (
                  <BlogSmallCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={classNames({
          "transition ease-in-out duration-300 w-1/4 relative": true,
          "translate-x-[100%]": (scroll?.top || 0) > (size?.height || 0)
        })}>
          <div className="flex flex-col divide-y divide-gray-300 border-l border-b border-gray-300" ref={sizeRef}>
            <div className="p-5 text-xl font-medium">Featured Posts</div>
            {[...Array(6)].map((_, i) => (
              <BlogMiniCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
