import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="w-full border-b h-16 flex items-center px-5 sticky top-0 bg-white z-[1]">
      <img
        className="h-8"
        src="https://assets-global.website-files.com/661e8afa867528c62f550c0f/661eb4a90f7f057c663077b0_logo.svg"
        alt=""
      />
      <div className="ml-auto flex gap-5">
        <Link to="/" className="btn">
          About
        </Link>
        <Link to="/articles" className="btn">
          Articles
        </Link>
        <button className="btn">Contact</button>
      </div>
    </div>
  );
};
