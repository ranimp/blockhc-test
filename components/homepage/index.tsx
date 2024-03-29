import React, { Fragment, useContext, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../navbar/index';
import Footer from '../footer/index';
import Hero from './hero';
import Vision from './vision';
import Doctor from './doctor';
import Button from '../button/index';
import NavbarLogin from '../navbar/login';
import { AuthContext } from '../../lib/auth';

export default function Homepage() {
  // const { isLogged, loginStatus } = useContext(AuthContext);
  const authContext = useContext(AuthContext);
  const isLogged = authContext?.isLogged;
  const loginStatus = authContext?.loginStatus;

  useEffect(() => {
    if (loginStatus) {
      loginStatus();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Blockchain Health Care</title>
      </Head>
      <nav>
        {isLogged
          ? <NavbarLogin home />
          : <Navbar home />}
      </nav>
      <section>
        <Hero />
        <Vision />
        <Doctor />
        <div className="flex flex-col items-center mb-16 lg:mb-36">
          <p className="md:text-xl">Daftar dan pilih dokter anda disini.</p>
          <Link href="/konsultasi" className="mt-2">
            <Button type="btn-wide-sm" title="registrasi sekarang" />
          </Link>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
