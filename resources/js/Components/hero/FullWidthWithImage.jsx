import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from "@/Components/headers/light";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`sm:text-sm sm:mx-6`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url("https://multimedia.beritajakarta.id/photo/potret_jakarta/378dc8224458e58d594436b6e6baac66.jpg");
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;

const DropdownItem = tw.a`
  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500
`;

export default ({
  heading = (
    <>
      Suku Dinas Pendidikan
      <wbr />
      <br />
      <span tw="text-primary-500">Wilayah I Jakarta Selatan</span>
    </>
  ),
  description = "Pelayanan pendidikan berkualitas untuk masyarakat Jakarta Selatan. Mulai pelayanan digital sekarang.",
  primaryActionUrl = "#",
  primaryActionText = "Sign Up",
  secondaryActionUrl = "#",
  secondaryActionText = "Log In",
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#layanan">Beranda</NavLink>
      <NavLink href="#galeri">Profil</NavLink>
      <NavLink href="#kontak">Statistik</NavLink>
      {/* Dropdown Pengaduan */}
      <div style={{ position: "relative", display: "inline-block" }}>
        <NavLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown("pengaduan");
          }}
        >
          Pengaduan ▾
        </NavLink>
        {openDropdown === "pengaduan" && (
          <div
            style={{
              position: "absolute",
              left: 0,
              marginTop: "0.5rem",
              backgroundColor: "white",
              borderRadius: "0.375rem",
              minWidth: "220px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 50,
            }}
          >
            <DropdownItem href="#sp4n">SP4N</DropdownItem>
            <DropdownItem href="#lapor">Lapor</DropdownItem>
            <DropdownItem href="#crm">CRM</DropdownItem>
            <DropdownItem href="#ppid">PPID</DropdownItem>
            <DropdownItem href="#kanal-sudin">Kanal Pengaduan Sudin</DropdownItem>
            <DropdownItem href="#form-sudin">Form Pengaduan Sudin</DropdownItem>
          </div>
        )}
      </div>

      {/* Dropdown Keuangan dan Aset */}
      <div style={{ position: "relative", display: "inline-block" }}>
        <NavLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown("keuangan");
          }}
        >
          Keuangan & Aset ▾
        </NavLink>
        {openDropdown === "keuangan" && (
          <div
            style={{
              position: "absolute",
              left: 0,
              marginTop: "0.5rem",
              backgroundColor: "white",
              borderRadius: "0.375rem",
              minWidth: "220px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 50,
            }}
          >
            <DropdownItem href="#rkas">RKAS</DropdownItem>
            <DropdownItem href="#siap-bos">SIAP BOS/BOP</DropdownItem>
            <DropdownItem href="#spj-bop">Pengumpulan SPJ BOP</DropdownItem>
            <DropdownItem href="#realisasi">Laporan Realisasi</DropdownItem>
            <DropdownItem href="#aset-bpad">Aset BPAD</DropdownItem>
          </div>
        )}
      </div>
    </NavLinks>,
  ];

  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
              <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn />
      </TwoColumn>
    </Container>
  );
};
