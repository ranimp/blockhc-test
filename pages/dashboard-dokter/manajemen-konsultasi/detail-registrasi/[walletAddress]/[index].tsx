import {
  Fragment, useState, useContext, useEffect,
} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DetailRegistrasiAdmin from '../../../../../components/dashboard-admin/manajemen-hasil-konsultasi/adm-detail-registrasi';
import NavbarLogin from '../../../../../components/navbar/login';
import Profil from '../../../../../components/dashboard/profil';
import Sidebar from '../../../../../components/dashboard/sidebar';
import Footer from '../../../../../components/footer/index';
import withAuth from '../../../../../lib/withAuth';
import { ContractContext } from '../../../../../lib/contractProvider';
import DaftarPasienDokter from '../../../../../components/dashboard-dokter/daftar-pasien/dok-daftar-pasien';

interface DetailRegistrasi {
  nama: string;
  gender: string;
  namaDokter: string;
  telepon: string;
  sesi: string;
  tanggal: string;
  keluhan: string;
  wallet: string;
}

function DetailKonsultasiDokterPage() {
  const [active, setActive] = useState('hasil-konsultasi');
  const router = useRouter();
  const { walletAddress, index } = router.query;

  const {
    getAllRegistration,
    allRegistration,
    getAllDoctor,
    allDoctor,
  } = useContext(ContractContext);

  const [detailRegistrasi, setDetailRegistrasi] = useState<DetailRegistrasi[]>();
  const [address, setAddress] = useState('');

  useEffect(() => {
    getAllRegistration();
  }, [getAllRegistration]);

  useEffect(() => {
    setDetailRegistrasi(allRegistration);
  }, [allRegistration, walletAddress, index]);

  useEffect(() => {
    getAllDoctor();
    const loggedInUser = localStorage.getItem('address');
    const addressStorage = loggedInUser ? JSON.parse(loggedInUser) : '';
    setAddress(addressStorage);
  }, []);

  const doctorData = allDoctor?.filter((dokter: any) => dokter.wallet === address);
  const numberIndex = Number(index);

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        <NavbarLogin dashboard />
      </nav>
      <main className="px-4 lg:px-16 mt-28 flex flex-col min-h-screen justify-between">
        <div className="flex justify-start">
          <div className="w-1/9 md:w-1/3">
            <div className="hidden md:block">
              <Profil name={doctorData ? doctorData[0]?.nama : null} role="dokter" />
            </div>
            <Sidebar menu2={active === 'hasil-konsultasi' && true} onClickMenu1={() => router.push('/dashboard-dokter')} onClickMenu2={() => setActive('hasil-konsultasi')} menu1={active === 'daftar-pasien' && true} title2="manajemen hasil konsultasi" title1="daftar pasien" />
          </div>
          <div className="w-full pl-6 sm:pl-8 lg::pl-12 flex flex-col gap-4">
            <div className="flex gap-4 border-2 border-slate-300 w-full p-2 md:p-3 text-xs md:text-base rounded-md">
              <figure>
                <Image src="/icons/search.svg" alt="search" width={20} height={20} />
              </figure>
              <input type="text" placeholder="Pencarian" className="w-full focus:outline-none" />
            </div>
            <div>
              {active === 'daftar-pasien' && <DaftarPasienDokter />}
              {active === 'hasil-konsultasi' && (
              <DetailRegistrasiAdmin
                nama={detailRegistrasi ? detailRegistrasi[numberIndex]?.nama : undefined}
                gender={detailRegistrasi ? detailRegistrasi[numberIndex]?.gender : undefined}
                dokter={detailRegistrasi ? detailRegistrasi[numberIndex]?.namaDokter : undefined}
                telepon={detailRegistrasi ? detailRegistrasi[numberIndex]?.telepon : undefined}
                sesi={detailRegistrasi ? detailRegistrasi[numberIndex]?.sesi : undefined}
                tanggal={detailRegistrasi ? detailRegistrasi[numberIndex]?.tanggal : undefined}
                keluhan={detailRegistrasi ? detailRegistrasi[numberIndex]?.keluhan : undefined}
                wallet={detailRegistrasi ? detailRegistrasi[numberIndex]?.wallet : undefined}
                // status=""
              />
              )}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default withAuth(DetailKonsultasiDokterPage);
