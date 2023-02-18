/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { UserRoles } from '../typechain-types/roles.sol/UserRoles';

describe('UserRoles', () => {
  let userRoles: UserRoles;
  let admin: SignerWithAddress;
  let nonAdmin: SignerWithAddress;

  beforeEach(async () => {
    [admin, nonAdmin] = await ethers.getSigners();

    const UserRolesFactory = await ethers.getContractFactory('UserRoles', admin);
    userRoles = (await UserRolesFactory.deploy());
    await userRoles.deployed();
  });

  describe('setRole & getRole', () => {
    it('admin should set and get dokter role', async () => {
      await expect(userRoles.connect(nonAdmin).setRole(nonAdmin.getAddress(), 'dokter'))
        .to.be.revertedWith('Hanya admin yang diizinkan untuk mengkases.');

      await userRoles.connect(admin).setRole(nonAdmin.getAddress(), 'dokter');

      expect(await userRoles.isDokter(nonAdmin.getAddress())).to.be.true;
      expect(await userRoles.isPasien(nonAdmin.getAddress())).to.be.false;
    });
    it('admin should set and get pasien role', async () => {
      await expect(userRoles.connect(nonAdmin).setRole(nonAdmin.getAddress(), 'pasien'))
        .to.be.revertedWith('Hanya admin yang diizinkan untuk mengkases.');

      await userRoles.connect(admin).setRole(nonAdmin.getAddress(), 'pasien');

      expect(await userRoles.isDokter(nonAdmin.getAddress())).to.be.false;
      expect(await userRoles.isPasien(nonAdmin.getAddress())).to.be.true;
    });
  });

  describe('removeRole & getRole', () => {
    it('admin should remove dokter role', async () => {
      await expect(userRoles.connect(nonAdmin).setRole(nonAdmin.getAddress(), 'dokter'))
        .to.be.revertedWith('Hanya admin yang diizinkan untuk mengkases.');

      await userRoles.connect(admin).setRole(nonAdmin.getAddress(), 'dokter');
      await userRoles.connect(admin).removeRole(nonAdmin.getAddress(), 'dokter');

      expect(await userRoles.isDokter(nonAdmin.getAddress())).to.be.false;
    });
    it('admin should remove pasien role', async () => {
      await expect(userRoles.connect(nonAdmin).setRole(nonAdmin.getAddress(), 'pasien'))
        .to.be.revertedWith('Hanya admin yang diizinkan untuk mengkases.');

      await userRoles.connect(admin).setRole(nonAdmin.getAddress(), 'pasien');
      await userRoles.connect(admin).removeRole(nonAdmin.getAddress(), 'pasien');

      expect(await userRoles.isPasien(nonAdmin.getAddress())).to.be.false;
    });
  });

  describe('setDefaultRole', () => {
    it('should set default pasien role', async () => {
      await userRoles.setDefaultRole();

      expect(await userRoles.isPasien(admin.getAddress())).to.be.true;
    });
  });

  describe('modifier onlyAdmin', () => {
    it('should only allow admin to set roles', async () => {
      await expect(userRoles.connect(nonAdmin).setRole(nonAdmin.getAddress(), 'dokter')).to.be.revertedWith(
        'Hanya admin yang diizinkan untuk mengkases.',
      );
    });
  });
});
