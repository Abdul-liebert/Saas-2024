import PageTitle from "@/components/pagetitle";
import React from "react";



export default function About() {
  return (
    <div className="min-h-screen shadow-2xl rounded-xl py-10">
      <PageTitle title="About" className="m-6" />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Tentang Sistem Manajemen Piket
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/img/team.png"
              alt="Our Team"
              className="rounded-xl shadow-lg object-cover h-80 w-full max-w-md"
            />
          </div>
          {/* Text Section */}
          <div className="text-gray-600 space-y-4">
            <p className="text-lg">
              Selamat datang di Sistem Manajemen Piket, solusi cerdas untuk
              pengelolaan jadwal piket yang lebih terorganisir dan efisien.
              Website ini dirancang untuk memudahkan koordinasi piket harian,
              memastikan setiap anggota tim melakukan tanggung jawabnya, dan
              menciptakan lingkungan yang lebih tertib.
            </p>
            <p className="text-lg">
              Dengan UI yang ramah pengguna dan fitur-fitur yang mudah dipahami,
              Sistem Manajemen Piket menawarkan:
              <br />
              1. Penjadwalan yang efisien: Mengatur jadwal piket dengan mudah
              berdasarkan kriteria tertentu.
              <br />
              2. Laporan Aktivitas: Melacak kinerja dan kehadiran untuk evaluasi
              yang lebih baik.
              <br />
            </p>
            <p className="text-lg">
              Kami percaya bahwa pengelolaan tugas yang baik adalah kunci
              keberhasilan tim. Dengan Sistem Manajemen Piket, user dapat fokus
              pada hal-hal yang lebih penting tanpa perlu khawatir tentang
              pengaturan jadwal.
            </p>
          </div>
        </div>
        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team Member Card */}
            {["Ibrahim", "Aziz", "Syahban", "Hanif"].map((name, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={`/img/team-${index + 1}.png`}
                  alt={name}
                  className="w-32 h-32 rounded-full shadow-md object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
                <p className="text-gray-500">Position Frontend</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
