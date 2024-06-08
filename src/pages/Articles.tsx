import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { BlogListLeftNav } from '../components/BlogListLeftNav';
import { BlogSmallCard } from '../components/BlogSmallCard';

export const Articles = () => {
  return (
    <div>
      <NavBar />
      <div className="p-16 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-5">
          <div className="text-5xl font-medium text-center">All articles</div>
          <div className="text-center">20 Articles</div>
        </div>

        <div className="flex mt-16">
          <BlogListLeftNav />
          <div className="grid grid-cols-3 gap-10">
            {[...Array(10)].map((_, i) => (
              <BlogSmallCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
