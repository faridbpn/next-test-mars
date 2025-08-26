"use client";
import Image from "next/image";

const Testimoni = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Orang Tua Siswa",
      content: "MARS Coding telah mengubah cara pandang anak saya terhadap teknologi. Sekarang dia sangat antusias belajar coding dan sudah bisa membuat game sederhana sendiri!",
      image: "/images/user/user-01.png"
    },
    {
      name: "Ahmad Rahman",
      role: "Orang Tua Siswa",
      content: "Metode pembelajaran yang menyenangkan dan tutor yang sangat sabar. Anak saya sekarang lebih percaya diri dan kreatif dalam menyelesaikan masalah.",
      image: "/images/user/user-02.png"
    },
    {
      name: "Lisa Chen",
      role: "Orang Tua Siswa",
      content: "Sangat puas dengan perkembangan anak saya di MARS Coding. Tidak hanya skill coding yang meningkat, tapi juga logika berpikir dan kreativitasnya.",
      image: "/images/user/user-01.png"
    }
  ];

  const brands = [
    "Squarespace",
    "Netflix", 
    "TalySpa",
    "Google",
    "Microsoft",
    "Apple"
  ];

  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="mb-12.5 flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
              <h2 className="text-title-xl2 font-bold text-black dark:text-white">
                Apa kata mereka?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full">
                <div className="group relative overflow-hidden rounded-sm border border-stroke bg-white p-8 shadow-solid-3 transition-all duration-300 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-blackho">
                  <div className="mb-6 flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-body-color dark:text-body-color-dark">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-body-color dark:text-body-color-dark italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mt-6 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistik Kepuasan */}
          <div className="mt-15 text-center">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-primary mb-2">94%</h3>
              <p className="text-xl text-black dark:text-white">
                Orang tua puas dengan layanan MARS Coding
              </p>
            </div>
          </div>

          {/* Logo Klien/Brand */}
          <div className="mt-15">
            <h3 className="text-center text-xl font-semibold text-black dark:text-white mb-8">
              Partner & Klien Kami
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {brands.map((brand, index) => (
                <div key={index} className="text-2xl font-bold text-gray-400 hover:text-primary transition-colors duration-300">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimoni;
