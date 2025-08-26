"use client";

import Image from "next/image";

const KenapaMemilihMARS = () => {
  return (
    <>
      <section id="about" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="animate_left w-full lg:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Kenapa Memilih MARS Coding?
              </h4>
              <h2 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Keunggulan Kami dalam {" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Mendidik Programmer Muda
                </span>
              </h2>
              <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
                MARS Coding hadir dengan pendekatan unik yang menggabungkan pengalaman industri dengan metode pembelajaran yang menyenangkan untuk anak-anak.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                      Tutor Programmer Industri Profesional
                    </h3>
                    <p className="text-body-color dark:text-body-color-dark">
                      Tim pengajar kami terdiri dari programmer yang berpengalaman di industri IT, memberikan pengetahuan praktis dan terkini.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                      Metode Belajar Sambil Bermain
                    </h3>
                    <p className="text-body-color dark:text-body-color-dark">
                      Pendekatan pembelajaran yang menyenangkan dengan game dan proyek interaktif, membuat coding menjadi kegiatan yang menarik.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                      Extra Class di Luar Jam Belajar
                    </h3>
                    <p className="text-body-color dark:text-body-color-dark">
                      Memberikan kesempatan tambahan untuk praktik dan pengembangan skill melalui sesi extra class yang fleksibel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate_right w-full lg:w-1/2 mt-10 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur-xl opacity-75 animate-pulse"></div>
                <div className="relative bg-white dark:bg-blacksection rounded-lg p-4 shadow-2xl">
                  <Image
                    src="/images/about/about-light-01.png"
                    alt="About"
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

export default KenapaMemilihMARS;
