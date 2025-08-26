import Image from "next/image";

const KeseruanKursus = () => {
  const projects = [
    {
      title: "UI/UX Design",
      description: "Hasil karya desain antarmuka yang dibuat oleh siswa MARS Coding",
      image: "/images/blog/blog-01.png",
      category: "Design"
    },
    {
      title: "Mockup Design",
      description: "Contoh mockup design FedEx yang dibuat dengan kreativitas tinggi",
      image: "/images/blog/blog-02.png",
      category: "Mockup"
    },
    {
      title: "Karakter Lucu",
      description: "Desain karakter lucu di sepeda yang menunjukkan kreativitas anak",
      image: "/images/blog/blog-03.png",
      category: "Character"
    }
  ];

  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="mb-12.5 flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
              <h2 className="text-title-xl2 font-bold text-black dark:text-white">
                Keseruan Kursus
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
            {projects.map((project, index) => (
              <div key={index} className="w-full">
                <div className="group relative overflow-hidden rounded-sm">
                  <Image
                    className="w-full transition duration-300 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-15 text-center">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
              Showcase Project Hasil Karya Anak
            </h3>
            <p className="mb-8 text-lg text-body-color dark:text-body-color-dark max-w-3xl mx-auto">
              Lihat bagaimana siswa-siswi MARS Coding mengembangkan kreativitas dan skill coding mereka melalui berbagai proyek menarik yang telah mereka buat.
            </p>
            <button className="rounded-full bg-primary px-7.5 py-3 text-white font-semibold duration-300 ease-in-out hover:bg-primaryho">
              Lihat Semua Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeseruanKursus;
