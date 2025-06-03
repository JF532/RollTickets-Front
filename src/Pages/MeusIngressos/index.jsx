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
            <TableHead >
              <TableHeadCell className="border">Filme</TableHeadCell>
              <TableHeadCell className="border">Sessão</TableHeadCell>
              <TableHeadCell className="border">Data e Horário</TableHeadCell>
              <TableHeadCell className="border">Valor</TableHeadCell>
              <TableHeadCell className="border">
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y border" >
              <TableRow className="bg-white border dark:bg-gray-800">
                <TableCell className=" whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Lilo e Stitch
                </TableCell>
                <TableCell className="border">Sala 5</TableCell>
                <TableCell className="border">13-02-2025/14:30</TableCell>
                <TableCell className="border">$29</TableCell>
                <TableCell className="border">
                  <a
                    
                  >
                    PÓSSIVEL QRCODE
                  </a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white border dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Homem de Ferro
                </TableCell>
                <TableCell className="border">Sala 2</TableCell>
                <TableCell className="border">15-04-2025/14:40</TableCell>
                <TableCell className="border">$20</TableCell>
                <TableCell className="border">
                  <a
                
                  >
                    
                  </a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white border dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  O Rei Leão
                </TableCell>
                <TableCell className="border">Sala 3</TableCell>
                <TableCell className="border">10-08-2024/13:30</TableCell>
                <TableCell className="border">$29</TableCell>
                <TableCell>
                  <a
                  
                  >
                    
                  </a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white border dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Toy Story 4
                </TableCell>
                <TableCell className="border">sala 2</TableCell>
                <TableCell className="border">09-02-2023/12:40</TableCell>
                <TableCell className="border">$29</TableCell>
                <TableCell className="border">
                  <a
                  
                  >
                    
                  </a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  deadpool
                </TableCell>
                <TableCell className="border">Sala 5</TableCell>
                <TableCell className="border">05-05-2023/18:00</TableCell>
                <TableCell className="border">$20</TableCell>
                <TableCell className="border">
                  <a
                    
                  >
                    
                  </a>
                </TableCell>
              </TableRow>


              
            </TableBody>
          </Table>
        </div>
      </div>
      <Footer/>
    </>
  );
}
