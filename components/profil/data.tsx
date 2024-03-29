import React from 'react';
import { ProfilDataProps } from '../../types/index';

const Data: React.FC<ProfilDataProps> = ({
  name, gender, ttl, email, phone,
}) => (
  <div className="mt-2 lg:mt-4">
    <table className="w-full text-black border-separate border-spacing-y-2">
      <tbody>
        <tr className="odd:bg-odd-blue even:bg-even-blue">
          <td className="py-3 pl-3 text-xs lg:text-base">Nama</td>
          <td className="text-xs sm:text-sm lg:text-base">:</td>
          <td className="text-xs sm:text-sm lg:text-base">{name || ''}</td>
        </tr>
        <tr className="odd:bg-odd-blue even:bg-even-blue">
          <td className="py-3 pl-3 text-xs lg:text-base">Jenis Kelamin</td>
          <td className="text-xs sm:text-sm lg:text-base">:</td>
          <td className="text-xs sm:text-sm lg:text-base capitalize">{gender || ''}</td>
        </tr>
        <tr className="odd:bg-odd-blue even:bg-even-blue">
          <td className="py-3 pl-3 text-xs lg:text-base">Tanggal Lahir</td>
          <td className="text-xs sm:text-sm lg:text-base">:</td>
          <td className="text-xs sm:text-sm lg:text-base">{ttl || ''}</td>
        </tr>
        <tr className="odd:bg-odd-blue even:bg-even-blue">
          <td className="py-3 pl-3 text-xs lg:text-base">Email</td>
          <td className="text-xs sm:text-sm lg:text-base">:</td>
          <td className="text-xs sm:text-sm lg:text-base">{email || ''}</td>
        </tr>
        <tr className="odd:bg-odd-blue even:bg-even-blue">
          <td className="py-3 pl-3 text-xs lg:text-base">No. Telepon</td>
          <td className="text-xs sm:text-sm lg:text-base">:</td>
          <td className="text-xs sm:text-sm lg:text-base">{phone || ''}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Data;
