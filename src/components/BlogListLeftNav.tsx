import { Link } from 'react-router-dom';

const categories = [
  'Technology',
  'Health & Wellness',
  'Travel',
  'Food & Recipes',
  'Finance & Investing',
  'Lifestyle',
  'Education',
  'Fashion & Beauty',
  'Sports',
  'Entertainment',
];

const authors = [
  'Alice Johnson',
  'Michael Smith',
  'Emily Davis',
  'David Brown',
  'Sophia Martinez',
];

export const BlogListLeftNav = () => {
  return (
    <div className="flex flex-col flex-shrink-0 md:w-64 w-full gap-10">
      <div className="flex md:flex-col flex-row scrollbar-x overflow-x-auto md:pb-0 pb-2 gap-4">
        <div className="px-2 text-gray-600">Categories</div>
        {categories.map((category, i) => (
          <Link className="btn md:text-xl text-base text-gray-600 flex-shrink-0" to={category} key={i}>
            {category}
          </Link>
        ))}
      </div>

      <div className="flex md:flex-col flex-row scrollbar-x overflow-x-auto md:pb-0 pb-2 gap-4">
        <div className="px-2 text-gray-600">Authors</div>
        {authors.map((author, i) => (
          <Link className="btn md:text-xl text-base text-gray-600 flex-shrink-0" to={author} key={i}>
            {author}
          </Link>
        ))}
      </div>
    </div>
  );
};
