"use client";
import React from "react";
import Image from "next/image";

const HighlightPrestasi = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30 relative">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full animate-bounce"></div>
        </div>

        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 relative z-10">
          <div className="mb-12.5 flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
              <h2 className="text-title-xl2 font-bold text-black dark:text-white animate-fade-in">
                Highlight Prestasi & Galeri Kegiatan
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
            {/* Coding Club Sekolah Pembangunan Jaya Sidoarjo */}
            <div className="w-full transform transition-all duration-500 hover:scale-105 animate-slide-up">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  className="w-full transition duration-500 group-hover:scale-110"
                  src="/images/features/features-light-01.png"
                  alt="Coding Club"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-2">Coding Club</h3>
                    <p className="text-sm">Sekolah Pembangunan Jaya Sidoarjo</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white dark:bg-blacksection rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Coding Club Sekolah Pembangunan Jaya Sidoarjo
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Program coding club yang berhasil mengembangkan minat dan bakat coding siswa di sekolah.
                </p>
              </div>
            </div>

            {/* Codeavour 5.0 International Finalist */}
            <div className="w-full transform transition-all duration-500 hover:scale-105 animate-slide-up-delay">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  className="w-full transition duration-500 group-hover:scale-110"
                  src="/images/features/features-light-01.png"
                  alt="Codeavour Finalist"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-2">Codeavour 5.0</h3>
                    <p className="text-sm">International Finalist</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white dark:bg-blacksection rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Codeavour 5.0 International Finalist
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Prestasi membanggakan sebagai finalis kompetisi coding internasional tingkat pelajar.
                </p>
              </div>
            </div>

            {/* Perayaan MARS 1 tahun */}
            <div className="w-full transform transition-all duration-500 hover:scale-105 animate-slide-up-delay-2">
              <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  className="w-full transition duration-500 group-hover:scale-110"
                  src="/images/features/features-light-01.png"
                  alt="MARS Anniversary"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-2">MARS 1 Tahun</h3>
                    <p className="text-sm">Perayaan Sukses</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white dark:bg-blacksection rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                  Perayaan MARS 1 Tahun
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  Merayakan satu tahun perjalanan sukses MARS Coding dalam mendidik programmer muda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-slide-up {
            animation: slide-up 1s ease-out 0.3s both;
          }
          .animate-slide-up-delay {
            animation: slide-up 1s ease-out 0.6s both;
          }
          .animate-slide-up-delay-2 {
            animation: slide-up 1s ease-out 0.9s both;
          }
        `}</style>
      </section>
    </>
  );
};

export default HighlightPrestasi;
