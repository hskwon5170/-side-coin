import React from "react";
import { useTable } from "react-table";
import { useAtom } from "jotai";
import { updateDarkAtom } from "../JotaiStore/darkmode";

function Table({ columns, data, onRowClick }: any) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  // const dark = useDarkModeStore((state) => state.dark);
  const [dark] = useAtom(updateDarkAtom);

  const buttonClasses = `${
    dark ? "md:hover:bg-black" : "md:hover:bg-gray-200"
  } cursor-pointer md:hover:duration-100 md:hover:transition-all`;

  return (
    <table
      {...getTableProps()}
      className={`w-full mb-20  ${
        dark
          ? "bg-[#1e1e1e] shadow-gray-600 shadow-2xl"
          : "bg-gray-100 shadow-2xl"
      } rounded-lg  sm:rounded-lg sm:border-separate sm:pl-5 duration-200`}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="py-6 text-[#7f7f7f] text-sm text-center sm:py-3"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className={buttonClasses}
              onClick={() => onRowClick(row.original.id as any)}
            >
              {row.cells.map((cell: any) => (
                <td {...cell.getCellProps()} className="text-center">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
