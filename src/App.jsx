import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { FlipWords } from "./components/ui/flip-words";
function App() {
  const words = [
    "Frontend Developer",
    "Pedro Ardometrius Tan",
    "Backend Developer",
  ];
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1 ">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          {/* <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} className="w-10 rounded-md" alt="" />
            <q></q>
          </div> */}
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya <FlipWords words={words} className={"text-white"} />
          </h1>
          <p className="text-base/loose opacity-60 mb-6">
            Saya mempunyai ketertarikan dalam bidang Programming dan UI/UX
            Design, terutama pada pembuatan Website, ketertarikan pada bidang
            ini sudah berlangsung lebih dari 2 Tahun.
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={DataImage.cv}
              download="cv-pedro-ardometrius-tan.pdf"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 "
            >
              Download CV <i className="ri-lg ri-download-line"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt=""
          className="w-[500px] md:ml-auto rounded-xl animate__animated animate__fadeInRight animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* About */}
      <div className="mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={DataImage.HeroImage}
            className="w-12 rounded-md mb-10 sm:hidden"
            alt=""
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Pedro Ardometrius Tan, seorang Full Stack Web
            Developer dan Designer untuk UI/UX Design, Saya percaya bahwa desain
            dan fungsionalitas harus berjalan beriringan, sehingga setiap proyek
            yang saya kembangkan tidak hanya terlihat menarik tetapi juga
            memberikan pengalaman pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              className="w-12 rounded-md sm:block hidden"
              alt=""
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  10 <span className="text-violet-500">+</span>
                </h1>
                <p>Project Completed</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1 <span className="text-violet-500">+</span>
                </h1>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 ">
          <h1
            className="text-4xl/snug font-bold mb-4 "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Tools Used
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Here the list of tools that I use in my work to build either website
            or design
          </p>
          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-4 ">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 hover:bg-zinc-800 rounded-md group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold ">{tool.nama}</h4>
                  <p className="opacity-50 ">{tool.keterangan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project */}
      <div className="mt-32 py-10" id="project">
        <h1
          className="text-center font-bold text-4xl mb-2"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Here's list of project that i have developed
        </p>

        <div className="mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((p) => (
            <a
              href=""
              key={p.id}
              className="p-4 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-all group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={p.dad}
              data-aos-once="true"
            >
              <img src={p.gambar} alt="" className="" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4 ">{p.nama}</h1>
                <p className="text-base/loose mb-4">{p.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t, i) => (
                    <p
                      className="py-1 px-3 border border-zinc-600 roundedmd font-semibold bg-zinc-700 group-hover:bg-zinc-800 rounded-md"
                      key={i}
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact
        </h1>
        <form
          action="https://formsubmit.co/pedroardo10@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama..."
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Message..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
