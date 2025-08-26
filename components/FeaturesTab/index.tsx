"use client";
import Image from "next/image";

const VisiMisi = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="animate_left w-full lg:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Visi & Misi
              </h4>
              <h2 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Kami mencetak {" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  profesional
                </span>
                {" "} untuk kebutuhan industri IT di Indonesia hingga dunia
              </h2>
              <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
                MARS Coding berkomitmen untuk mencetak talenta digital berkualitas tinggi yang siap menghadapi tantangan pasar global. Melalui kurikulum yang dirancang khusus dan metode pembelajaran yang inovatif, kami mempersiapkan generasi muda untuk menjadi programmer handal yang mampu bersaing di level internasional.
              </p>

              <div className="mt-10">
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7.5 py-3 text-white duration-300 ease-in-out hover:bg-blackho hover:scale-105 transform transition-all dark:bg-btndark dark:hover:bg-blackho shadow-lg hover:shadow-xl"
                >
                  Tentang Kami
                  <svg
                    className="fill-current transform transition-transform group-hover:translate-x-1"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                      fill=""
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="animate_right w-full lg:w-1/2 mt-10 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-75 animate-pulse"></div>
                <div className="relative bg-white dark:bg-blacksection rounded-lg p-4 shadow-2xl">
                  <Image
                    src="/images/hero/hero2.svg"
                    alt="Visi Misi"
                    className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    width={570}
                    height={691}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisiMisi;
