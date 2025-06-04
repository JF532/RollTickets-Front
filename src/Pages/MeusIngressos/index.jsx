import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function MeusIngressos() {
  return (
    <>
      <div className="w-auto min-h-screen bg-gray-900 ">
        <NavBar />
        <div className="overflow-x-auto mt-20 p-15">
          <Table hoverable>
            <TableHead>
              <TableHeadCell className="rounded-tl-lg border-r-1 border-gray-500">Filme</TableHeadCell>
              <TableHeadCell className="border-r-1 border-gray-500">Sessão</TableHeadCell>
              <TableHeadCell className="border-r-1 border-gray-500">Data e Horário</TableHeadCell>
              <TableHeadCell className="border-r-1 border-gray-500">Valor</TableHeadCell>
              <TableHeadCell className="rounded-tr-lg ">
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y ">
              <TableRow className="bg-white  dark:bg-gray-800">
                <TableCell className=" whitespace-nowrap font-medium text-gray-900 dark:text-white border-r-1 border-gray-500">
                  Lilo e Stitch
                </TableCell>
                <TableCell className="border-r-1 border-gray-500">Sala 5</TableCell>
                <TableCell className="border-r-1 border-gray-500">13-02-2025/14:30</TableCell>
                <TableCell className="border-r-1 border-gray-500">$29</TableCell>
                <TableCell className="">POSSÍVEL QRCODE</TableCell>
              </TableRow>
              <TableRow className="bg-white  dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-r-1 border-gray-500">
                  Homem de Ferro
                </TableCell>
                <TableCell className="border-r-1 border-gray-500">Sala 2</TableCell>
                <TableCell className="border-r-1 border-gray-500">15-04-2025/14:40</TableCell>
                <TableCell className="border-r-1 border-gray-500">$20</TableCell>
                <TableCell className="">
                  <a></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white  dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-r-1 border-gray-500">
                  O Rei Leão
                </TableCell>
                <TableCell className="border-r-1 border-gray-500">Sala 3</TableCell>
                <TableCell className="border-r-1 border-gray-500">10-08-2024/13:30</TableCell>
                <TableCell className="border-r-1 border-gray-500">$29</TableCell>
                <TableCell>
                  <a></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white  dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-r-1 border-gray-500">
                  Toy Story 4
                </TableCell>
                <TableCell className="border-r-1 border-gray-500">sala 2</TableCell>
                <TableCell className="border-r-1 border-gray-500">09-02-2023/12:40</TableCell>
                <TableCell className="border-r-1 border-gray-500">$29</TableCell>
                <TableCell className="">
                  <a></a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white  dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white rounded-bl-lg border-r-1 border-gray-500">
                  deadpool
                </TableCell>
                <TableCell className="border-r-1 border-gray-500">Sala 5</TableCell>
                <TableCell className="border-r-1 border-gray-500">05-05-2023/18:00</TableCell>
                <TableCell className="border-r-1 border-gray-500">$20</TableCell>
                <TableCell className="rounded-br-lg">
                  <a></a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <Footer />
    </>
  );
}
