import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DoctorCardProps } from '../../../types/index';

const DoctorCard: React.FC<DoctorCardProps> = ({
  img, name, title, sch, detailUrl,
}) => (
  <div className="flex lg:flex-none px-3">
    <Link href={detailUrl ?? ''}>
      <div className="flex flex-col justify-center my-2">
        <figure className="flex justify-center w-40 h-40">
          <Image src={img || ''} alt="doctor" width={180} height={180} className="rounded-full object-cover" />
        </figure>
        <div className="flex flex-col justify-center mt-4">
          <h3 className="font-medium text-center md:text-lg">{name || ''}</h3>
          <p className="text-center text-sm md:text-lg">{title || ''}</p>
          <div className="hidden lg:block">
            <p className="text-center text-sm md:text-base">{sch || ''}</p>
          </div>
          <div className="flex justify-center mt-2">
            <button className="p-1 w-fit text-white bg-medium-blue capitalize rounded-lg font-medium text-xs lg:text-sm hover:bg-soft-blue hover:text-medium-blue hover:border-2 border-medium-blue">read more</button>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default DoctorCard;
