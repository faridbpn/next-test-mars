"use client";

import Image from "next/image";

const KenapaMemilihMARS = () => {
  return (
    <>
      <section id="about" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="animate_left md:w-1/2">
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
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
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

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
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

            <div className="animate_right md:w-1/2">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/about/about-light-01.png"
                  alt="About"
                  className="shadow-solid-l dark:hidden"
                  width={570}
                  height={691}
                />
                <Image
                  src="/images/about/about-dark-01.png"
                  alt="About"
                  className="hidden shadow-solid-l dark:block"
                  width={570}
                  height={691}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KenapaMemilihMARS;
