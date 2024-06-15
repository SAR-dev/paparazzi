import { NavBar } from '../components/NavBar';
import { BlogListLeftNav } from '../components/BlogListLeftNav';
import { BlogSmallCard } from '../components/BlogSmallCard';

export const Articles = () => {
  return (
    <div>
      <NavBar />
      <div className="md:p-16 p-5 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:gap-5 gap-3">
          <div className="md:text-5xl text-3xl font-medium text-center">All articles</div>
          <div className="text-center">20 Articles</div>
        </div>

        <div className="flex md:flex-row flex-col mt-16">
          <BlogListLeftNav />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:mt-0 mt-10">
            {[...Array(10)].map((_, i) => (
              <BlogSmallCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
