import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="blog-post">
      <section className="post-head">
        <div className="container">
          <Image src="/Youtube.jpg" layout="fill" objectFit="cover" priority></Image>
          <div className="cover-bg"></div>

          <div className="post-head-data">
            <p className="title">A YouTube Journey</p>
            <p className="date">12.12.2021</p>
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
              Around 2-3 years ago a bunch of friends of mine and I inquired our
              tech wizard friend to make a YouTube channel to showcase his
              talent to the public. Never had the intention to be a top-level
              YouTube channel. It was our fun project, a reason for us to get
              together <br />
              <br />
              Don&apos;t think I&apos;m overestimating when I say this but our friend was
              indeed a tech wizard. He knew how to install the world-famous game
              GTA Vice city on a small button feature phone and play from it. If
              you don&apos;t believe me, click here. So, most of our first content
              was rotating around this feature phone. The phone I&apos;m referring to
              is called “Micromax v407” the most powerful feature phone that has
              ever existed. Despite the phone being a feature phone the hardware
              in it was on another level. So, our experimental mind tried to do
              various things on it. We installed modern OSs in it, we installed
              android apps in it, we played heavy games in it. Just using the
              physical buttons, it offers *smiling emoji* <br />
              <br />
              After creating a few videos like that we expanded our horizons to
              do various other content If you refer to our channel you can see
              it contains Gaming walkthroughs, Tutorials, Hardware Comparisons,
              Game comparisons, Benchmark tests, Camera tests etc. We did
              whatever we want cause there were no boundaries for us. <br />
              <br />
              Even to this date, we relied on very few resources. Resources wise
              we didn&apos;t need much. Using our smartphone cameras, tripods and
              cracked software to do our simple biddings, we managed to do this
              with a very low financial cost. We used google text to speech AI
              to do our narrations as well. Just plain elbow grease was all we
              needed. Here&apos;s a photo of one of our recent camera setups. 
               <br />
               <img className="post-image" src="/camera_setup.jpeg"/>
              <br />
              So, our fun project had a massive turn in the recent past. Around
              5 months ago we did a video about how to install windows 11 on old
              hardware because windows itself didn&apos;t allow us to download
              windows 11 to CPUs under 8th generation. It was a timely subject
              and the views have skyrocketed. The video now has almost 100k
              views. After that event we decided to focus on the commercial side
              of this thing as well.
              <br />
              <br />
              To make an AdSense account A YOUTUBE CHANNEL NEEDS 4000 watch
              hours and 1000 subs minimum. Even though getting to that point was
              a bit of a challenge we somehow achieved it. Then we made an
              AdSense account and connected it to our YouTube channel and bank
              account. And after the account has a minimum saving of 100$ you
              can start withdrawing money from it. So, we did all that and now
              we can do earn money through our videos. It was a major
              accomplishment for us three.
              <br />
                <img src="/channel.jpeg" className="post-image" alt="" />
              <br />
              2 years ago, we didn&apos;t imagine this channel to be in this manner.
              But thanks to our friends&apos; skills, knowledge and the golden
              content he offers we have somewhat made it a profitable channel.
              We are so proud of our achievement and we will take this to
              another level in the future. <br />
              <br />
              Check here to see our channel
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
