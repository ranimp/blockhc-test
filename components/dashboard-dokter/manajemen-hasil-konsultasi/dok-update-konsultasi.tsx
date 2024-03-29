import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Button from '../../button/index';
import { AdminTambahEditKonsultasi } from '../../../types/index';
import { ContractContext } from '../../../lib/contractProvider';

const UpdateKonsultasiDokter: React.FC<AdminTambahEditKonsultasi> = ({
  name,
  doctor,
  date,
  keluhan,
  diagnosa,
  tekanan,
  gula,
  wallet,
}) => {
  const {
    setWalletAddress,
    setNama,
    setNamaDokter,
    setTanggal,
    setKeluhan,
    setDiagnosa,
    setTensi,
    setGula,
    handleUpdateConsultation,
    errors,
  } = useContext(ContractContext);
  const router = useRouter();
  return (
    <div className="w-full">
      <h3 className="font-bold text-sm md:text-xl my-2 md:my-4">Perbarui Hasil Konsultasi</h3>
      <table className="w-full text-black border-separate border-spacing-y-2">
        <tbody>
          <tr className="hidden odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Wallet Address</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input
                type="text"
                name="walletAddress"
                defaultValue={wallet}
                onChange={setWalletAddress(wallet)}
                placeholder="Nama Pasien"
                className="focus:outline-none bg-transparent w-full"
              />
              {errors.walletAddress && <p className="text-red-500 text-xs italic">{errors.walletAddress}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama Pasien</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" defaultValue={name} name="nama" onChange={(e) => setNama(e.target.value)} placeholder="Nama Pasien" className="focus:outline-none bg-transparent w-full" />
              {errors.nama && <p className="text-red-500 text-xs italic">{errors.nama}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Nama Dokter</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base capitalize">
              <input type="text" defaultValue={doctor} name="namaDokter" onChange={(e) => setNamaDokter(e.target.value)} placeholder="Nama Dokter" className="focus:outline-none bg-transparent w-full" />
              {errors.namaDokter && <p className="text-red-500 text-xs italic">{errors.namaDokter}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Tanggal</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" defaultValue={`${date}(u)`} name="tanggal" placeholder="01/01/2022" className="focus:outline-none bg-transparent w-full" onChange={(e) => setTanggal(e.target.value)} />
              {errors.tanggal && <p className="text-red-500 text-xs italic">{errors.tanggal}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Keluhan</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" defaultValue={keluhan} name="keluhan" onChange={(e) => setKeluhan(e.target.value)} placeholder="Keluhan" className="focus:outline-none bg-transparent w-full" />
              {errors.keluhan && <p className="text-red-500 text-xs italic">{errors.keluhan}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">Hasil Diagnosa</td>
            <td className="text-xs sm:text-sm lg:text-base">:</td>
            <td className="text-xs sm:text-sm lg:text-base">
              <input type="text" defaultValue={diagnosa} name="diagnosa" onChange={(e) => setDiagnosa(e.target.value)} placeholder="Diagnosa" className="focus:outline-none bg-transparent w-full" />
              {errors.diagnosa && <p className="text-red-500 text-xs italic">{errors.diagnosa}</p>}
            </td>
          </tr>
          <tr className="odd:bg-odd-blue even:bg-even-blue">
            <td className="py-3 pl-3 text-xs lg:text-base">
              <p>Lainnya</p>
              <p>Tekanan Darah</p>
              <p>Gula Darah Sewaktu</p>
            </td>
            <td className="text-xs sm:text-sm lg:text-base">
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </td>
            <td className="text-xs sm:text-sm lg:text-base">
              <p className="invisible">nothing</p>
              <p>
                <input type="text" defaultValue={tekanan} name="tensi" onChange={(e) => setTensi(e.target.value)} placeholder="Tekanan darah" className="focus:outline-none bg-transparent w-full" />
                {errors.tensi && <p className="text-red-500 text-xs italic">{errors.tensi}</p>}
              </p>
              <p>
                <input type="text" defaultValue={gula} name="gula" onChange={(e) => setGula(e.target.value)} placeholder="Gula darah" className="focus:outline-none bg-transparent w-full" />
                {errors.gula && <p className="text-red-500 text-xs italic">{errors.gula}</p>}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-2 gap-2">
        <div className="w-24 lg:w-48">
          <Button type="btn-outline" title="kembali" onClick={() => router.back()} />
        </div>
        <div className="w-24 lg:w-48">
          <Button type="btn-normal" title="simpan" onClick={handleUpdateConsultation} />
        </div>
      </div>
    </div>
  );
};

export default UpdateKonsultasiDokter;
