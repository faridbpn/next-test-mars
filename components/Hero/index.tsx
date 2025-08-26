"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-500/10 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-yellow-500/10 rounded-full animate-ping"></div>
        </div>

        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 relative z-10">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white animate-fade-in">
                🚀 Kursus Coding Anak No.1 Sidoarjo
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero animate-slide-up">
                Mencetak {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark animate-pulse">
                  Programmer Muda
                </span>
                {"   "} Berkualitas
              </h1>
              <p className="mb-8 text-lg text-body-color dark:text-body-color-dark animate-fade-in-delay">
                Kami membantu anak-anak mengembangkan keterampilan coding sejak dini dengan metode belajar yang menyenangkan dan tutor profesional dari industri IT.
              </p>

              <div className="mt-10 animate-slide-up-delay">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      type="text"
                      placeholder="Cari produk kursus..."
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary transition-all duration-300 hover:shadow-lg focus:shadow-xl"
                    />
                    <button
                      aria-label="search button"
                      className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho transform hover:scale-105 hover:shadow-xl transition-all"
                    >
                      Cari Produk
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white animate-fade-in-delay-2">
                  Mulai perjalanan coding anak Anda hari ini!
                </p>
              </div>
            </div>

            <div className={`animate_right hidden lg:block lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative 2xl:-mr-7.5">
                {/* Floating elements */}
                <div className="absolute -left-11.5 top-0 animate-float">
                  <Image
                    src="/images/shape/shape-01.png"
                    alt="shape"
                    width={46}
                    height={246}
                    className="animate-spin-slow"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-10 animate-bounce">
                  <Image
                    src="/images/shape/shape-02.svg"
                    alt="shape"
                    width={36.9}
                    height={36.7}
                  />
                </div>
                <div className="absolute -right-6.5 bottom-0 z-1 animate-pulse">
                  <Image
                    src="/images/shape/shape-03.svg"
                    alt="shape"
                    width={21.64}
                    height={21.66}
                  />
                </div>
                <div className="relative aspect-700/444 w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur-xl opacity-75 animate-pulse"></div>
                  <Image
                    className="shadow-solid-l dark:hidden relative z-10 hover:scale-105 transition-transform duration-300"
                    src="/images/hero/hero.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block relative z-10 hover:scale-105 transition-transform duration-300"
                    src="/images/hero/hero.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-slide-up {
            animation: slide-up 1s ease-out 0.3s both;
          }
          .animate-fade-in-delay {
            animation: fade-in 1s ease-out 0.6s both;
          }
          .animate-slide-up-delay {
            animation: slide-up 1s ease-out 0.9s both;
          }
          .animate-fade-in-delay-2 {
            animation: fade-in 1s ease-out 1.2s both;
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
