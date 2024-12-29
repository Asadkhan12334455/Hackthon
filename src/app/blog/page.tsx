import React from "react";
import Image from "next/image";
import Link from "next/link";
import Feature from "../components/Feature";

// Define the type for BlogPost props
interface BlogPostProps {
  imageSrc: string;
  author: string;
  date: string;
  category: string;
  title: string;
  description: string;
}

// BlogPost Component
const BlogPost: React.FC<BlogPostProps> = ({
  imageSrc,
  author,
  date,
  category,
  title,
  description,
}) => (
  <div className="mt-14">
    <Image src={imageSrc} alt={`${title}-img`} width={817} height={500} className="w-full" />
    <div className="flex items-center gap-4 mt-2">
      <Image src="/images/user.svg" alt="user-img" width={20} height={20} />
      <h3 className="text-[#9F9F9F] text-sm lg:text-base">{author}</h3>
      <Image src="/images/briefcase.svg" alt="briefcase-img" width={20} height={20} />
      <h3 className="text-[#9F9F9F] text-sm lg:text-base">{date}</h3>
      <Image src="/images/wood.svg" alt="wood-img" width={20} height={20} />
      <h3 className="text-[#9F9F9F] text-sm lg:text-base">{category}</h3>
    </div>
    <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">{title}</h1>
    <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">{description}</p>
    <span className="border-b border-black text-sm">Read More</span>
  </div>
);

// Define the BlogPage Component
const BlogPage: React.FC = () => {
  // Sample Data
  const blogPosts: BlogPostProps[] = [
    {
      imageSrc: "/images/laptop.png",
      author: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Going all-in with millennial design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      imageSrc: "/images/drawing.png",
      author: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Exploring new ways of decorating",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      imageSrc: "/images/book.png",
      author: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Handmade pieces that took time to make",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = [
    { src: "/images/pro1.png", title: "Going all-in with millennial design" },
    { src: "/images/pro2.png", title: "Exploring new ways of decorating" },
    { src: "/images/pro3.png", title: "Handmade pieces that took time to make" },
    { src: "/images/pro4.png", title: "Modern home in Milan" },
    { src: "/images/pro5.png", title: "Colorful office redesign" },
  ];

  return (
    <div>
      {/* Banner Section */}
      <header>
        <Image
          src="/images/blog.png"
          alt="blog-banner"
          width={1440}
          height={316}
          className="w-full h-auto mt-20"
        />
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row lg:justify-between px-4 lg:px-0 mt-10">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:ml-12">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        {/* Right Section */}
        <aside className="lg:w-1/2 lg:mr-20 lg:ml-20 mt-10 lg:mt-28">
          {/* Search Bar */}
          <div className="flex items-center justify-end w-full lg:w-[311px] h-[58px] border px-4 border-[#9F9F9F] rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow focus:outline-none"
            />
            <Link href="/">
              <Image
                src="/images/research.svg"
                alt="Search Icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Categories */}
          <h1 className="text-[20px] lg:text-[24px] font-semibold mt-10 mb-10">Categories</h1>
          <div className="space-y-4 lg:space-y-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex justify-between gap-[213px] text-sm lg:text-base"
              >
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <h1 className="text-[24px] font-semibold mb-10 mt-20">Recent Posts</h1>
          {recentPosts.map((post, index) => (
            <div key={index} className="flex items-center justify-between gap-14">
              <Image src={post.src} alt={`post${index + 1}`} width={80} height={80} />
              <div className="flex flex-col">
                <h1 className="font-semibold text-[14px] w-[119px]">{post.title}</h1>
                <span className="text-[#9F9F9F]">03 Aug 2022</span>
              </div>
            </div>
            
          ))}
        </aside>
      </main>
      <Feature />
    </div>
  );
};

export default BlogPage;
