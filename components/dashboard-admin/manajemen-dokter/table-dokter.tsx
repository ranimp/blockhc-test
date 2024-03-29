import Link from 'next/link';
import React from 'react';
import { AdminTableDokter } from '../../../types/index';

const TableDokterDashboardAdmin: React.FC<AdminTableDokter> = ({
  no, walletAddress, name, status, detailUrl, updateUrl,
}) => (
  <tr className="text-center odd:bg-odd-blue even:bg-even-blue">
    <td className="text-xs sm:text-sm lg:text-base">{no}</td>
    <td className="text-xs sm:text-sm lg:text-base">
      <div className="w-20 md:w-40 lg:w-96">
        <p className="truncate">
          {walletAddress}
        </p>
      </div>
    </td>
    <td className="text-xs sm:text-sm lg:text-base">{name}</td>
    <td className="text-xs sm:text-sm lg:text-base">
      {status
        ? (
          <button className="bg-teal-500 text-white px-6 py-2 rounded-lg capitalize hover:bg-rose-500">
            aktif
          </button>
        )
        : (
          <button className="bg-rose-500 text-white px-6 py-2 rounded-lg capitalize ">
            tidak aktif
          </button>
        )}
    </td>
    <td className="py-3 flex justify-center gap-3">
      <Link href={detailUrl ?? ''}>
        <button className="hover:text-medium-blue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
        </button>
      </Link>
      <Link href={updateUrl ?? ''}>
        <button className="hover:text-medium-blue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>
      </Link>
    </td>
  </tr>
);

export default TableDokterDashboardAdmin;
