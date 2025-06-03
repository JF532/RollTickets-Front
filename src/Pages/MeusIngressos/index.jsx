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
                  Apple MacBook Pro 17"
                </TableCell>
                <TableCell className="border">Sliver</TableCell>
                <TableCell className="border">Laptop</TableCell>
                <TableCell className="border">$2999</TableCell>
                <TableCell className="border">
                  <a
                    
                  >
                    POSSÍVEL QRCODE
                  </a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white border dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Microsoft Surface Pro
                </TableCell>
                <TableCell className="border">White</TableCell>
                <TableCell className="border">Laptop PC</TableCell>
                <TableCell className="border">$1999</TableCell>
                <TableCell className="border">
                  <a
               
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white border dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Magic Mouse 2
                </TableCell>
                <TableCell className="border">Black</TableCell>
                <TableCell className="border">Accessories</TableCell>
                <TableCell className="border">$99</TableCell>
                <TableCell>
                  <a
                  
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white border dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Google Pixel Phone
                </TableCell>
                <TableCell className="border">Gray</TableCell>
                <TableCell className="border">Phone</TableCell>
                <TableCell className="border">$799</TableCell>
                <TableCell className="border">
                  <a
                   
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Apple Watch 5
                </TableCell>
                <TableCell className="border">Red</TableCell>
                <TableCell className="border">Wearables</TableCell>
                <TableCell className="border">$999</TableCell>
                <TableCell className="border">
                  <a
                    
                  >
                    Edit
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
