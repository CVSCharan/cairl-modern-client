import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import CTA from "../components/CTA";
import { useState, useEffect } from "react";
import NewsLetters from "../components/NewsLetters";

interface BlogData {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
  imageUrl: string;
  content: string;
  readTime: string;
}

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll simulate loading the blog data
    setTimeout(() => {
      // Mock data for the current blog
      const mockBlog: BlogData = {
        id: id || "blog1",
        title:
          "The Impact of Technology on the Workplace: How Technology is Changing",
        category: "Technology",
        date: "August 23, 2023",
        author: "James Peterson",
        authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
        imageUrl:
          "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750830314/blogs-main-img_irp2bd.png",
        readTime: "8 min read",
        content: `
          <p>As we approach an era where artificial intelligence governed by ethical AI principles will direct international commerce, the intertwining of human and artificial intelligence is imminent. We stand at a pivotal juncture of immense potential and peril. This document aspires to guide us toward harnessing AI's promise, while ensuring it remains bound within ethical parameters.</p>
          
          <h2>The Evolution of Workplace Technology</h2>
          
          <p>The workplace has undergone significant transformations over the past few decades, largely driven by technological advancements. From the introduction of personal computers in the 1980s to the widespread adoption of the internet in the 1990s, and now the integration of artificial intelligence and machine learning, technology has continuously reshaped how we work.</p>
          
          <p>Today's workplace is characterized by digital tools that facilitate communication, collaboration, and productivity. Cloud computing allows teams to access and share information from anywhere in the world, while project management software streamlines workflows and enhances efficiency.</p>
          
          <h2>Remote Work and Digital Nomadism</h2>
          
          <p>One of the most significant impacts of technology on the workplace has been the rise of remote work. The COVID-19 pandemic accelerated this trend, forcing companies to adopt remote work policies almost overnight. As a result, many organizations discovered that remote work can be just as productive, if not more so, than traditional office-based work.</p>
          
          <p>Digital nomadism, a lifestyle where individuals work remotely while traveling, has also gained popularity. This trend is enabled by technology that allows people to stay connected and productive from anywhere with an internet connection.</p>
          
          <h2>Automation and Job Displacement</h2>
          
          <p>While technology has created new opportunities and efficiencies, it has also raised concerns about job displacement due to automation. Routine and repetitive tasks are increasingly being automated, leading to job losses in certain sectors. However, history has shown that technological advancements also create new jobs and industries.</p>
          
          <p>The key challenge for workers today is to adapt and acquire the skills needed for the jobs of the future. This often means developing digital literacy, critical thinking, and creativity – skills that are less likely to be automated.</p>
          
          <h2>The Future of Work</h2>
          
          <p>Looking ahead, technology will continue to transform the workplace in profound ways. Artificial intelligence and machine learning will automate more complex tasks, while virtual and augmented reality will create new ways of collaborating and experiencing work.</p>
          
          <p>The gig economy, characterized by short-term contracts and freelance work, is likely to grow as technology makes it easier to connect workers with opportunities. This shift may require new approaches to worker protections and benefits.</p>
          
          <h2>Conclusion</h2>
          
          <p>The impact of technology on the workplace is multifaceted and ongoing. While it presents challenges, such as potential job displacement and the need for continuous skill development, it also offers opportunities for increased flexibility, productivity, and innovation.</p>
          
          <p>As we navigate this evolving landscape, it's essential for individuals, organizations, and policymakers to work together to ensure that technological advancements benefit workers and society as a whole. By embracing change and focusing on human-centered approaches to technology implementation, we can create a future of work that is both productive and fulfilling.</p>
        `,
      };

      // Mock data for related blogs
      const mockRelatedBlogs: BlogData[] = [
        {
          id: "blog2",
          title:
            "Artificial Intelligence in Healthcare: Transforming Patient Care",
          category: "AI",
          date: "July 15, 2023",
          author: "Sarah Wilson",
          authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
          imageUrl:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
          readTime: "6 min read",
          content: "",
        },
        {
          id: "blog3",
          title: "The Rise of Quantum Computing: What You Need to Know",
          category: "Technology",
          date: "June 28, 2023",
          author: "Michael Brown",
          authorImage: "https://randomuser.me/api/portraits/men/46.jpg",
          imageUrl:
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
          readTime: "10 min read",
          content: "",
        },
        {
          id: "blog4",
          title: "Ethical Considerations in AI Development",
          category: "AI",
          date: "May 12, 2023",
          author: "Emily Davis",
          authorImage: "https://randomuser.me/api/portraits/women/67.jpg",
          imageUrl:
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
          readTime: "7 min read",
          content: "",
        },
      ];

      setBlog(mockBlog);
      setRelatedBlogs(mockRelatedBlogs);
      setIsLoading(false);
    }, 1000); // Simulate network delay
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Blog not found
          </h2>
          <p className="text-muted-foreground">
            The blog you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <motion.span
            initial={{ opacity: 0.5, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-foreground text-sm font-base mb-8"
          >
            {blog.category}
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center max-w-4xl">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Blog Info Bar */}
      <div className="bg-card py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-foreground font-medium">{blog.author}</p>
                <p className="text-sm text-muted-foreground">{blog.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-muted-foreground">
                  {blog.readTime}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-accent transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-accent transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Blog Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                Technology
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                Workplace
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                Future of Work
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                Digital Transformation
              </span>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-card rounded-xl border border-border">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {blog.author}
                </h3>
                <p className="text-muted-foreground mb-4">
                  James is a technology writer and researcher with over 10 years
                  of experience covering emerging trends and their impact on
                  business and society.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <div key={relatedBlog.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <img
                    src={relatedBlog.imageUrl}
                    alt={relatedBlog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {relatedBlog.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {relatedBlog.title}
                </h3>
                <div className="flex items-center gap-3">
                  <img
                    src={relatedBlog.authorImage}
                    alt={relatedBlog.author}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-muted-foreground">
                    {relatedBlog.author}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {relatedBlog.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 pb-28">
        <CTA />
      </div>

      {/* Newsletter Section */}
      <NewsLetters />
    </main>
  );
};

export default BlogDetails;
