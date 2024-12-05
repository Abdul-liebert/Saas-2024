import PageTitle from "@/components/pagetitle";
import { Card, CardProps, CardContent } from "@/components/ui/card";

import { Boxes, Check, CirclePlus } from "lucide-react";
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

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const cardData: CardProps[] = [
    {
      label: "Alat Kebersihan",
      icon: Boxes,
      amount: "20",
      description: "Dua Puluh",
    },
    {
      label: "Ruangan",
      icon: Boxes,
      amount: "20",
      description: "Dua Puluh",
    },
    {
      label: "Siswa",
      icon: Boxes,
      amount: "20",
      description: "Dua Puluh",
    },
    {
      label: "Alat Kebersihan",
      icon: Boxes,
      amount: "20",
      description: "Dua Puluh",
    },
  ];

  const tableData = [
    {
      id: 1,
      nama: "Dalban",
      area: "Ruang Kelas 12 & Labkom 1",
      status: "Belum Selesai",
    },
    {
      id: 2,
      nama: "Ananda",
      area: "Labkom 2 & Ruang Guru",
      status: "Selesai",
    },
    {
      id: 3,
      nama: "Siti",
      area: "Perpustakaan",
      status: "Belum Selesai",
    },
    {
      id: 3,
      nama: "Siti",
      area: "Perpustakaan",
      status: "Belum Selesai",
    },
  ];

  return (
    <div>
      <PageTitle title="Dashboard" />
      {/* <hr className="my-5 border-b-2 border-gray-800 rounded"/> */}
      <section className=" grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="grid grid-cols-1 gap-4 transition-all mt-5 lg:grid-cols-2">
        <CardContent>
          <Table className="table-fixed">
            {/* <TableCaption>Jadwal Piket</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[5%]">No.</TableHead>
                <TableHead className="w-[20%]">Nama</TableHead>
                <TableHead className="w-[50%]">Area</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((data, index) => (
                <TableRow key={data.id} className="align-middle">
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{data.nama}</TableCell>
                  <TableCell>{data.area}</TableCell>
                  <TableCell className=" items-center gap-2">
                    <Checkbox />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <div className=" flex gap-2 ">
                <Button className="mt-2" variant={"outline"}>
                  Add
                  <CirclePlus />
                </Button>
                <Button className="mt-2">
                  Done
                  <Check />
                </Button>
              </div>
            </TableFooter>
          </Table>
        </CardContent>
        <CardContent className="w-1/2" >
        <h1 className="text-xl font-bold text-gray-900">Input Data</h1>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <div>

            <Label>Nama</Label>
            <Input type="string" id="nama" placeholder="nama" />
            </div>
            <div>

            <Label>Area</Label>
            <Input type="string" id="area" placeholder="area" />
            </div>
            <Button className="mt-2">Tambah</Button>
          </div>
        </CardContent>
      </section>
    </div>
  );
}
