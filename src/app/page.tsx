"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter(); // Hook untuk navigasi antar halaman

  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Hapus token dari cookie dan redirect ke halaman login
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    setIsLoggedIn(false);
    router.push("/login"); // Redirect ke halaman login
  };

  const [tasks, setTasks] = useState([
    { id: 1, name: "Bersihkan Kelas", date: "2024-12-01", status: "Selesai" },
    { id: 2, name: "Menyapu Halaman", date: "2024-12-02", status: "Belum Selesai" },
    { id: 3, name: "Membuang Sampah", date: "2024-12-03", status: "Selesai" },
  ]);

  return (

    
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
       {/* Tombol Login/Logout */}
       
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800">Sistem Manajemen Piket</h1>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center mt-10">
        <section className="w-full max-w-6xl px-6 py-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700 text-center">Daftar Tugas Piket</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-3 px-4 border-b text-left">ID</th>
                  <th className="py-3 px-4 border-b text-left">Nama Tugas</th>
                  <th className="py-3 px-4 border-b text-left">Tanggal</th>
                  <th className="py-3 px-4 border-b text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-100 transition duration-200">
                    <td className="py-3 px-4 border-b">{task.id}</td>
                    <td className="py-3 px-4 border-b">{task.name}</td>
                    <td className="py-3 px-4 border-b">{task.date}</td>
                    <td className="py-3 px-4 border-b">
                      <span
                        className={`font-semibold ${
                          task.status === "Selesai" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-10">
        <div className="flex justify-end mb-4">
        {isLoggedIn ? (
          <Button variant={"outline"} onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant={"outline"} onClick={() => router.push("/login")}>
            Login
          </Button>
        )}
      </div>
        </div>
      </main>

      <footer className="w-full bg-white shadow-inner mt-10">
        <div className="container mx-auto p-6 text-center text-gray-600">
          <p>&copy; 2024 Sistem Manajemen Piket. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}