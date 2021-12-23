import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="blog-post">
      <section className="post-head">
        <div className="container">
          <Image
            src="/next,js.jpeg"
            layout="fill"
            objectFit="cover"
            priority
          ></Image>
          <div className="cover-bg"></div>

          <div className="post-head-data">
            <p className="title">Next.js</p>
            <p className="date">14.12.2021</p>
            <p className="author">By Direndra Kavindu</p>
          </div>
        </div>
      </section>

      <section className="post-content">
        <div className="container">
          <Link href="/">
            <p className="go-back">
              <a>
                <i className="fas fa-arrow-left"></i> Go Back
              </a>{" "}
            </p>
          </Link>
          <div className="content">
            <p>
              What is Next.js? In simple terms, Next.js is a framework built on
              top of well-known Node.js both of them are based on React.
              Interesting fact, Next.js is a full-stack react framework. As a
              beginner I have fallen in love with Next.js maybe It's because
              it's very easy to learn and I haven't even had my share of
              experience with React yet. For example, my portfolio and these
              blogs are created with Next.js <br />
              <br />
              Why Next.js? A common question, right? So Next.js has become very
              popular because of some traits of it. Handling both front and
              backends, offering support for a variety of rendering methods, and
              the ability to load only the necessary JavaScript and CSS are some
              of them. Compared to React, Next.js is incredibly fast thanks to
              static sites and server-side rendering. Next.js makes coding very
              easy for most developers because It automatically does some things
              that a developer have to do manually. The speed of the website or app is a crucial
              thing for both developer and the client. In Next.js we create single
              page javascript applications and it has the ability to load apps
              and websites in a matter of milliseconds. It's a huge advantage in
              my view actually. <br />
              <br />
              So Vercel the producers of Next.js has done a tremendous job in my
              opinion. Based on “React” Next.js gives us lots of tools that also
              React offers. And some experts have mentioned that Next.js is
              something that React has been missing for a long time. But don't
              misunderstand me either ok, there could be circumstances
              when using React or another framework would be more appropriate
              than Next.js. And in creating simple sites like my portfolio, I
              would definitely pick Next.js. Btw there are rumours about
              Next.js getting an modificatioon and will have more functionalities in future. So, if you're
              not into Next.js at the moment I'm pretty sure you'll develop the
              taste for it in the near future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
