import PageTitle from "@/components/pagetitle";
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CardContent } from "@/components/ui/card";

export default function Data() {
    const tableData = [
        {
            id: 1,
            nama: "John",
            kelas: "XI - SIJA",
            no_telp: "0812345678",
        },
        {
            id: 2,
            nama: "Doe",
            kelas: "XII - RPL",
            no_telp: "0898765432",
        },
        {
            id: 3,
            nama: "Alice",
            kelas: "X - TKJ",
            no_telp: "0811223344",
        },
        {
            id: 4,
            nama: "Bob",
            kelas: "XI - MM",
            no_telp: "0822334455",
        },
        {
            id: 5,
            nama: "doel",
            kelas: "XI - MM",
            no_telp: "0822334455",
        },
    ];
    const toolsData = [
        {
            id: 1,
            nama: "sapu",
            lantai: "Lantai 1",
            ruangan: "Ruang Guru",
        },
        {
            id: 2,
            nama: "Pel",
            lantai: "Lantai 2",
            ruangan: "Laboratorium Komputer",
        },
        {
            id: 3,
            nama: "Pengki",
            lantai: "Lantai 3",
            ruangan: "Perpustakaan",
        },
        {
            id: 4,
            nama: "Serokan",
            lantai: "Lantai 4",
            ruangan: "Ruang Kepala Sekolah",
        },
        {
            id: 5,
            nama: "Kain Lap",
            lantai: "Lantai 5",
            ruangan: "Aula",
        },
    ];

    return (
        <div>
            <PageTitle title="Data" />
            <section className="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-2">
                <CardContent className="max-h-[500px]">
                    <h1 className="text-xl font-bold mb-4">Siswa</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No.</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Kelas</TableHead>
                                <TableHead>No. Telp</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableData.map((data, index) => (
                                <TableRow key={data.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{data.nama}</TableCell>
                                    <TableCell>{data.kelas}</TableCell>
                                    <TableCell>{data.no_telp}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardContent className="max-h-[500px]">
                    <h1 className="text-xl font-bold mb-4">Alat</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No.</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Lantai</TableHead>
                                <TableHead>Ruangan</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {toolsData.map((data, index) => (
                                <TableRow key={data.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{data.nama}</TableCell>
                                    <TableCell>{data.lantai}</TableCell>
                                    <TableCell>{data.ruangan}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </section>
        </div>
    );
}
