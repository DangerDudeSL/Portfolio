import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <section className="intro" id="intro">
        <div className="container">
          <div className="content">
            <div className="avatar">
              <Image src="/me1.jpg" height="300" width="300" />
            </div>

            <p className="text-sm">Hello! I'm</p>
            <p className="text-lg">Direndra Kavindu</p>
            <p className="text-md">Major Tech Noob </p>
            <div className="social-icons">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/direndra-kavindu-4064461a8/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/DangerDudeSL" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100004082513841" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.reddit.com/user/DangerDudeSL" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-reddit-alien"></i>
                  </a>
                </li>
                <li>
                  <a href="https://stackoverflow.com/users/story/17733824?newreg=1d6bd5af59e7403aa1de5383dc99fdd2&_=1" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-stack-overflow"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="down-arrow">
              <a href="#about">
                <i className="fa fa-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="content-title">
            <div className="title-icon">
              <i className="fa fa-user"></i>
            </div>
            <p>About Me</p>
          </div>
          <div className="content">
            <div className="about-image">
              <Image
                src="/undraw_developer_activity_re_39tg.svg"
                height="300"
                width="300"
              />
            </div>
            <p className="bio">
              A dedicated and hard-working student who’s currently reading for a
              BSc in Computer Science degree at IIT. Always dreams to become a
              well reputed and skillful Software Engineer who creates and
              develops extraordinary programs.
              <br />A quick learner, always up to challenges and have a special
              interest at heart for programming. Currently searching for an
              internship to expand my horizons and to achieve my goals.
            </p>
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="container">
          <div className="content-title">
            <div className="title-icon">
              <i className="fa fa-briefcase"></i>
            </div>

            <p>Skills</p>
          </div>
          <div className="content">
            <p>
              These are the skills I'm most passionate about and I think I'm
              good at. Learning and developing these skills in a speedy manner.
            </p>
            <div>
              <ul>
                <li>
                  <Image
                    src="/html5-svgrepo-com.svg"
                    height="38px"
                    width="38px"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/css3-svgrepo-com.svg"
                    height="38px"
                    width="38px"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/js-official-svgrepo-com.svg"
                    height="38px"
                    width="38px"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/mongodb-svgrepo-com.svg"
                    height="38px"
                    width="38px"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/mysql-logo-svgrepo-com.svg"
                    height="38px"
                    width="38px"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/next-dot-js-svgrepo-com.svg"
                    height="38px"
                    width="38px"
                  ></Image>
                </li>
                <li>
                  <Image
                    src="/python-svgrepo-com.svg"
                    height="38px"
                    width="38px"
                  ></Image>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="hobbies" id="hobbies">
        <div className="container">
          <div className="content-title">
            <div className="title-icon">
              <i className="fa fa-gamepad"></i>
            </div>
            <p>Hobbies</p>
          </div>
          <div className="content">
            <div className="hobbie-item">
              <div>
                <p className="title">A Massive gamer</p>
                <p>
                  Even from a little age always were passionate about
                  games.Multiplayer, single player, RPG, FPS you name it I like
                  it. Nowadays more focused on competing on Esports platforms
                  and improving my competitive multiplayer game skills{" "}
                </p>
              </div>
            </div>
            <div className="hobbie-item">
              <div>
                <p className="title">TechGeek</p>
                <p>
                  In love with coding specially with python and java. Still a
                  beginner and learning the fundamentals. Pretty excited about
                  developing these skills to a further level{" "}
                </p>
              </div>
            </div>

            <div className="hobbie-item">
              <div>
                <p className="title">Music Enthusiast</p>
                <p>
                  Started learning about music form a little age. Plays violin,
                  guitar and have decent vocals too. Accomplished some awards
                  and first places in the past (all island level as well).
                  Former rhythm guitarist in a band and would like to study more
                  about music and do something creative with it one day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="container">
          <div className="content-title">
            <div className="title-icon">
              <i className="fa fa-file"></i>
            </div>
            <p>Blog</p>
          </div>
          <div className="content">
            <div className="cards">   
              <Link href="/blog/a-youtube-journey">       
              <div className="card">
                <p className="card-title">A YouTube Journey.</p>
                <p className="card-date">14/12/2021</p>
                <p className="card-excerpt">
                A journey of an unexpected destination of a fun project which few friends did just for fun .
                </p>
              </div>
              </Link>
              <Link href="/blog/next-js">      
              <div className="card">
                <p className="card-title">Next.js</p>
                <p className="card-date">12/12/2021</p>
                <p className="card-excerpt">
                  A small description about the Next.js <br />
                  The framework itself which is used to make this website.
                </p>
              </div>
              </Link>  
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Index;
