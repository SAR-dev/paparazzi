import { useRef } from "react"
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { NavBar } from '../components/NavBar';
import { CoverCard } from '../components/CoverCard';
import { BlogSmallCard } from '../components/BlogSmallCard';
import { BlogMiniCard } from '../components/BlogMiniCard';
import { useInViewport } from 'ahooks';
import classNames from 'classnames';

export const Home = () => {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-row relative justify-center">
        <div
          className={classNames({
            'p-16 w-full max-w-screen-xl mx-auto': true,
            'p-16 w-full max-w-screen-xl mx-auto absolute': !inViewport,
          })}>
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
        <div className="ml-auto w-[30rem] flex-shrink-0">
          <div className="flex flex-col divide-y divide-gray-300 border-l border-b border-gray-300" ref={ref}>
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
