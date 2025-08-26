"use client";
import React from "react";
import Image from "next/image";

const HighlightPrestasi = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="mb-12.5 flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
              <h2 className="text-title-xl2 font-bold text-black dark:text-white">
                Highlight Prestasi & Galeri Kegiatan
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
            {/* Coding Club Sekolah Pembangunan Jaya Sidoarjo */}
            <div className="w-full">
              <div className="group relative overflow-hidden rounded-sm">
                <Image
                  className="w-full transition duration-300 group-hover:scale-110"
                  src="/images/features/features-light-01.png"
                  alt="Coding Club"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2">Coding Club</h3>
                    <p className="text-sm">Sekolah Pembangunan Jaya Sidoarjo</p>
                  </div>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Coding Club Sekolah Pembangunan Jaya Sidoarjo
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Program coding club yang berhasil mengembangkan minat dan bakat coding siswa di sekolah.
              </p>
            </div>

            {/* Codeavour 5.0 International Finalist */}
            <div className="w-full">
              <div className="group relative overflow-hidden rounded-sm">
                <Image
                  className="w-full transition duration-300 group-hover:scale-110"
                  src="/images/features/features-light-01.png"
                  alt="Codeavour Finalist"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2">Codeavour 5.0</h3>
                    <p className="text-sm">International Finalist</p>
                  </div>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Codeavour 5.0 International Finalist
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Prestasi membanggakan sebagai finalis kompetisi coding internasional tingkat pelajar.
              </p>
            </div>

            {/* Perayaan MARS 1 tahun */}
            <div className="w-full">
              <div className="group relative overflow-hidden rounded-sm">
                <Image
                  className="w-full transition duration-300 group-hover:scale-110"
                  src="/images/features/features-light-01.png"
                  alt="MARS Anniversary"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2">MARS 1 Tahun</h3>
                    <p className="text-sm">Perayaan Sukses</p>
                  </div>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Perayaan MARS 1 Tahun
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Merayakan satu tahun perjalanan sukses MARS Coding dalam mendidik programmer muda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighlightPrestasi;
