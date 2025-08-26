"use client";
import Image from "next/image";

const JenisKursus = () => {
  const courses = [
    {
      title: "Unguplad Coding",
      description: "Belajar dasar-dasar coding dengan metode yang menyenangkan",
      icon: "💻",
      features: ["Dasar HTML & CSS", "Logika Pemrograman", "Proyek Sederhana"]
    },
    {
      title: "Coding Fundamental",
      description: "Pemahaman mendalam tentang konsep pemrograman",
      icon: "🔧",
      features: ["JavaScript Dasar", "Algoritma & Struktur Data", "Debugging"]
    },
    {
      title: "Game Development",
      description: "Membuat game interaktif dengan coding",
      icon: "🎮",
      features: ["Game Logic", "Sprite Animation", "User Interaction"]
    },
    {
      title: "Software Development",
      description: "Pengembangan aplikasi software lengkap",
      icon: "📱",
      features: ["Full Stack Development", "Database Design", "API Integration"]
    },
    {
      title: "D.I.Y Robotics",
      description: "Kombinasi coding dengan robotika",
      icon: "🤖",
      features: ["Arduino Programming", "Sensor Integration", "Robot Control"]
    }
  ];

  return (
    <>
      <section id="courses" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="mb-12.5 flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
              <h2 className="text-title-xl2 font-bold text-black dark:text-white">
                Jenis Kursus yang Ditawarkan
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
            {courses.map((course, index) => (
              <div key={index} className="w-full">
                <div className="group relative overflow-hidden rounded-sm border border-stroke bg-white p-8 shadow-solid-3 transition-all duration-300 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-blackho">
                  <div className="mb-8 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl">
                      {course.icon}
                    </div>
                  </div>
                  
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    {course.title}
                  </h3>
                  
                  <p className="mb-6 text-body-color dark:text-body-color-dark">
                    {course.description}
                  </p>
                  
                  <ul className="mb-8 space-y-3">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-body-color dark:text-body-color-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full rounded-full bg-primary px-7.5 py-3 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Box merah: Pantau progres belajar dengan MARS LMS */}
          <div className="mt-15 rounded-lg bg-red-500 p-8 text-center text-white">
            <h3 className="mb-4 text-2xl font-bold">
              Pantau Progres Belajar dengan MARS LMS
            </h3>
            <p className="mb-6 text-lg">
              Sistem Learning Management yang memungkinkan orang tua dan siswa memantau perkembangan belajar secara real-time
            </p>
            <button className="rounded-full bg-white px-7.5 py-3 text-red-500 font-semibold duration-300 ease-in-out hover:bg-gray-100">
              Coba MARS LMS
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JenisKursus;
