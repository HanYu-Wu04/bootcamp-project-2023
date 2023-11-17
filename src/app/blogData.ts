export interface Blog {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "First Blog",
    date: "2023-10-10",
    description: "This is the first blog description.",
    slug: "first-blog",
  },
  {
    title: "Second Blog",
    date: "2023-10-15",
    description: "This is the second blog description.",
    slug: "second-blog",
  },
];

export default blogs;