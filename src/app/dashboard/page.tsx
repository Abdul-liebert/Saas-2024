"use client";

import PageTitle from "@/components/pagetitle";
import { Card, CardProps, CardContent } from "@/components/ui/card";
import { Boxes, Check, CirclePlus, Edit2, Trash, School, Clock4 , Clock5 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

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
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    setIsLoggedIn(false);
    router.push("/login");
  };

  type TableDataType = {
    id: number;
    nama: string;
    area: string;
    status: string;
    tanggal: string;
  };

  const [tableData, setTableData] = useState<TableDataType[]>([]);
  const [form, setForm] = useState({
    id: null,
    nama: "",
    area: "",
    tanggal: "",
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = () => {
    if (!form.nama || !form.area || !form.tanggal) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (editMode) {
      setTableData((prev) =>
        prev.map((item) => (item.id === form.id ? form : item))
      );
      setEditMode(false);
    } else {
      setTableData((prev) => [
        ...prev,
        { ...form, id: prev.length + 1, status: "Belum Selesai" },
      ]);
    }
    setForm({ id: null, nama: "", area: "", tanggal: "" });
  };

  const handleDelete = (id: number) => {
    setTableData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (data: typeof form) => {
    setForm(data);
    setEditMode(true);
  };

  const cardData: CardProps[] = [
    {
      label: "Alat Kebersihan",
      icon: Boxes,
      amount: "20",
      description: "Dua Puluh",
    },
    {
      label: "Ruangan",
      icon: School,
      amount: "7",
      description: "Tujuh",
    },
    {
      label: "Waktu Mulai",
      icon: Clock4,
      amount: "16:00",
      description: "*waktu dapat berubah jika ada keperluan",
    },
    {
      label: "Waktu Selesai",
      icon: Clock5,
      amount: "17:00",
      description: "*waktu dapat berubah jika ada keperluan",
    },
  ];

  return (
    <div>
      <PageTitle title="Dashboard" />

      <section className="grid w-full h-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            label={d.label}
            icon={d.icon}
            amount={d.amount}
            description={d.description}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-2">
        <CardContent className=" max-h-[300px]">
          <h1 className="text-xl font-bold">Input Data</h1>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>Nama</Label>
              <Input
                type="text"
                id="nama"
                placeholder="Nama"
                value={form.nama}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Area</Label>
              <Input
                type="text"
                id="area"
                placeholder="Area"
                value={form.area}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Tanggal</Label>
              <Input
                type="date"
                id="tanggal"
                placeholder="Tanggal"
                value={form.tanggal}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button variant="outline" className="mt-4" onClick={handleSubmit}>
            Add
            <CirclePlus className="ml-2" />
          </Button>
        </CardContent>

        <CardContent>
          <h1 className="text-xl font-bold">Jadwal Piket</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Area</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((data, index) => (
                <TableRow key={data.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{data.nama}</TableCell>
                  <TableCell>{data.area}</TableCell>
                  <TableCell>{data.tanggal}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => handleEdit(data)}
                      >
                        <Edit2 />
                      </Button>
                      <Button
                        variant="default"
                        onClick={() => handleDelete(data.id)}
                      >
                        <Check />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </section>
    </div>
  );
}
