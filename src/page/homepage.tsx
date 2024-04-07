import Facebook from "../components/fb";
import Twitter from "../components/twitter";
import Instagram from "../components/ig";
import ImageCard from "../components/image-card";
import Calendar from "react-calendar";

const HomePage = () => {
  return (
    <>
      <section className="bg-gray-300 ">
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-7 text-xs text-[#004790] ml-32">
            <span className="hover:text-red-800 hover:cursor-pointer">
              Apply
            </span>
            <span className="hover:text-red-800 hover:cursor-pointer">
              Online Registration
            </span>
            <span className="hover:text-red-800 hover:cursor-pointer">
              e-Library
            </span>
            <span className="hover:text-red-800 hover:cursor-pointer">
              Newsletter
            </span>
          </div>
          <div className="flex mr-60 gap-2">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div className="text-center text-xs text-gray-600 py-3">
          <i>
            Apply Now for June,2024 Intake Academic year 2023-2024 Call{" "}
            <b>+250 724796998</b>
          </i>
        </div>
      </section>

      <section className="flex justify-around items-center py-3">
        <div>
          <img src="AUCA.png" alt="auca" className="h-24" />
        </div>
        <div className="flex items-center gap-6 text-xs">
          <span className="hover:text-red-800 hover:cursor-pointer">
            29th Graduation
          </span>
          <span className="hover:text-red-800 hover:cursor-pointer">
            Online Application
          </span>
          <span className="hover:text-red-800 hover:cursor-pointer">
            Online Registration
          </span>
        </div>
      </section>

      <section>
        <div className="bg-[#DD9933] h-1" />
        <div className="flex gap-7 text-sm bg-[#00447B] text-white pl-32 py-4">
          <span className="hover:text-[#DD9933] hover:cursor-pointer">
            Home
          </span>
          <span className="hover:text-[#DD9933] hover:cursor-pointer">
            About
          </span>
          <span className="hover:text-[#DD9933] hover:cursor-pointer">
            Admission
          </span>
          <span className="hover:text-[#DD9933] hover:cursor-pointer">
            Academics
          </span>
          <span className="hover:text-[#DD9933] hover:cursor-pointer">
            Media Center
          </span>
          <span className="hover:text-[#DD9933] hover:cursor-pointer">
            Research
          </span>
          <span className="hover:text-[#DD9933] hover:cursor-pointer">
            Apply
          </span>
        </div>
        <div className="h-96 bg-black">
          <img
            src="Campuses.png"
            alt="Campuses"
            className="object-cover h-96 w-full"
          />
        </div>
      </section>

      <section className="px-32 py-8">
        <div className="flex justify-between items-center gap-8 mb-8">
          <ImageCard imageName="Business.jpg" content="apply online" />
          <ImageCard imageName="Group.jpg" content="undergraduate" />
          <ImageCard imageName="campus.jpg" content="graduate program" />
        </div>
        <div className="flex gap-4">
          <div className="w-1/4 flex flex-col gap-4">
            <article className="flex flex-col gap-5 shadow-sm shadow-gray-600 p-5">
              <p className="uppercase text-[#004790]">Follow Us</p>
              <hr />
              <p className="text-[10px]">
                Follow us on social media and be the first to find out about our
                news!
              </p>
              <div className="flex gap-2 items-center">
                <Facebook />
                <Twitter />
                <Instagram />
              </div>
            </article>
            <article className="flex flex-col bg-[#DEDEDE] gap-5 p-5 border-t-4 border-[#A1A1A1]">
              <p className="uppercase text-[#004790]">ANNOUNCEMENTS</p>
              <div className="h-[1px] bg-[#55555539]" />
              <p className="text-[10px] text-[#555555] flex flex-col gap-1">
                <a className="hover:cursor-pointer">
                  Summer 2023-2024 Semester Course Schedule Proposal
                </a>
                <span>March 15, 2024</span>
              </p>
              <p className="text-[10px] text-[#555555] flex flex-col gap-1">
                <a className="hover:cursor-pointer">
                  Admissions Open for June 2024 Intake
                </a>
                <span>March 15, 2024</span>
              </p>
              <p className="text-[10px] text-[#555555] flex flex-col gap-1">
                <a className="hover:cursor-pointer">
                  Announcement concerning Semester Two Registration (2021/2022)
                </a>
                <span>January 17, 2022</span>
              </p>
            </article>
          </div>

          <div className="w-2/4 flex flex-col gap-5">
            <article className="flex flex-col gap-5 shadow-sm shadow-gray-600 p-5">
              <p className="uppercase text-[#004790]">
                WELCOME TO THE ADVENTIST UNIVERSITY OF CENTRAL AFRICA
              </p>
              <hr />
              <div className="h-72 w-full mb-10">
                <img
                  src="auca-h.jpg"
                  alt="auca"
                  className="h-72 w-full object-cover"
                />
              </div>
            </article>
            <article className="flex flex-col min-h-96 bg-[#DEDEDE] gap-5 p-5 border-t-4 border-[#A1A1A1]">
              <p className="uppercase text-[#004790]">
                LATEST NEWS SCROLLING WIDGET
              </p>
              <div className="h-[1px] bg-[#55555539]" />
              <p className="text-[10px] text-[#555555] flex flex-col gap-1">
                <a className="hover:cursor-pointer">
                  Announcement concerning Semester Two Registration (2021/2022)
                </a>
              </p>
              <p className="text-[10px] text-[#555555] flex flex-col gap-1">
                <a className="hover:cursor-pointer">
                  Admissions Open for June 2024 Intake
                </a>
              </p>
              <p className="text-[10px] text-[#555555] flex flex-col gap-1">
                <a className="hover:cursor-pointer">
                  Summer 2023-2024 Semester Course Schedule Proposal
                </a>
              </p>
            </article>
          </div>

          <div className="w-1/4">
            <div className="flex flex-col gap-3 bg-[#1B3058] border-t-4 border-[#DD9933] p-3">
              <p className="uppercase text-white">calendar</p>
              <div className="h-[1px] bg-[#8482827b]" />
              <Calendar className={"text-[10px] text-[#A7C7E7] bg-[#1B3058]"} />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-[#DD9933] h-1" />
        <div className="bg-[#00447B] text-white py-4 flex gap-2 justify-evenly">
          <article className="flex flex-col gap-3">
            <p>SINCE 1984</p>
            <div className="flex flex-col text-[10px]">
              <span>ADVENTIST UNIVERSITY OF CENTRAL AFRICA</span>
              <span className="italic">Masoro Hill, City of Kigali</span>
              <span>PO Box 2461, Kigali Rwanda</span>
            </div>
            <div className="flex flex-col text-[10px]">
              <span>Admission Inquiries:</span>
              <span>admissions@auca.ac.rw or call</span>
              <span>+250 724796998</span>
            </div>
            <div className="flex flex-col text-[10px]">
              <span>Media Inquiries:</span>
              <span>marketing@auca.ac.rw</span>
            </div>
            <div className="flex flex-col text-[10px]">
              <span>General Inquiries: info@auca.ac.rw</span>
            </div>
          </article>

          <article className="flex flex-col gap-3">
            <p>FOLLOW US</p>
            <div className="flex flex-col text-[10px] gap-1">
              <div className="flex items-center gap-1">
                <Facebook />
                <span className="text-[#EF851A]">Facebook</span>
              </div>
              <div className="flex items-center gap-1">
                <Twitter />
                <span className="text-[#EF851A]">Twitter</span>
              </div>
              <div className="flex items-center gap-1">
                <Instagram />
                <span className="text-[#EF851A]">Instagram</span>
              </div>
            </div>
          </article>

          <article className="flex flex-col gap-3">
            <p>LOCATION</p>
            <div className="flex flex-col text-[10px] gap-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.10368210964!2d30.08273329523149!3d-1.9505673461032647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76ec77abb07%3A0x39b5394a977ee4a1!2sAdventist%20University%20of%20Central%20Africa!5e0!3m2!1sen!2srw!4v1712514652553!5m2!1sen!2srw"
                className="w-48"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </article>
        </div>
        <div className="bg-[#DDC573] pl-32 py-3 text-[10px] text-[#20620C]">
          Copyright © {new Date().getFullYear()} Adventist University of Central
          Africa. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default HomePage;
