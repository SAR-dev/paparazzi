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
    <div className="flex flex-col flex-shrink-0 w-64 gap-10">
      <div className="flex flex-col gap-4">
        <div className="px-2 text-gray-600">Categories</div>
        {categories.map((category, i) => (
          <Link className="btn text-xl text-gray-600" to={category} key={i}>
            {category}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="px-2 text-gray-600">Authors</div>
        {authors.map((author, i) => (
          <Link className="btn text-xl text-gray-600" to={author} key={i}>
            {author}
          </Link>
        ))}
      </div>
    </div>
  );
};
