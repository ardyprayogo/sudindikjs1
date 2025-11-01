import React, { useMemo } from "react";
import AnimationRevealPage from "@/Helpers/AnimationRevealPage";
import Hero from "@/Components/hero/FullWidthWithImage";
import Features from "@/Components/features/ThreeColSimple";
import TrendingCard from "@/Components/cards/TwoTrendingPreviewCardsWithImage";
import Blog from "@/Components/blogs/PopularAndRecentBlogPosts";
import FAQ from "@/Components/faqs/SimpleWithSideImage";
import SubscribeNewsLetterForm from "@/Components/forms/SimpleSubscribeNewsletter";
import Footer from "@/Components/footers/MiniCenteredFooter";
import tw from "twin.macro";
import ContactUsForm from "@/Components/forms/TwoColContactUsWithIllustrationFullForm";
import Visimisi from "@/Components/hero/TwoColumnWithFeaturesAndTestimonial"

// feature image
import TabCardGrid from "@/Components/cards/TabCardGrid";
import GlobalStyles from "./GlobalStyles";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const faqs = useMemo(() => [
  {
    question: "Di mana alamat kantor Suku Dinas Pendidikan Wilayah I?",
    answer:
      "Kantor Suku Dinas Pendidikan Wilayah I beralamat di Jl. Prapanca Raya No. 9 (Petogogan), Kecamatan Kebayoran Baru, Jakarta Selatan 12170. Jam layanan: Senin–Jumat (pagi–sore). Untuk kepastian jam, silakan hubungi nomor kantor sebelum berkunjung."
  },
  {
    question: "Bagaimana cara menghubungi Suku Dinas (telepon / media sosial)?",
    answer:
      "Untuk informasi cepat, hubungi nomor kantor yang tertera di situs Pemkot/Jaksel. Untuk pengumuman dan liputan kegiatan, cek akun Instagram resmi Sudin Wilayah I (mis. @sudinpendidikanjs1) dan saluran resmi Pemkot Jakarta Selatan."
  },
  {
    question: "Bagaimana cara melaporkan masalah di sekolah (infrastruktur, keamanan, tenaga pendidik)?",
    answer:
      "Laporkan ke Suku Dinas melalui telepon/kunjungan atau lewat kanal pengaduan resmi Pemkot. Sertakan identitas sekolah, deskripsi masalah, lokasi, dan foto bukti untuk mempercepat verifikasi dan tindak lanjut."
  },
])
  
  return (
    <>
    <GlobalStyles />
    <AnimationRevealPage>
      <Hero />
      <Visimisi />
      <Features
        heading={<>Layanan <HighlightedText>Utama</HighlightedText></>}
        subheading=""
        description=""
        cards={[
    {
      imageSrc: "📘",
      title: "Alur Pengajuan Surat Keterangan Pengganti Ijazah (Sekolah Masih Beroperasi)",
      description: "Layanan penggantian ijazah untuk satuan pendidikan yang masih beroperasi.",
      url: "/layanan/pengganti-ijazah-beroperasi"
    },
    {
      imageSrc: "📙",
      title: "Alur Pengajuan Surat Keterangan Pengganti Ijazah (Sekolah Tidak Beroperasi)",
      description: "Layanan penggantian ijazah untuk satuan pendidikan yang sudah tutup/tidak beroperasi.",
      url: "/layanan/pengganti-ijazah-tidak-beroperasi"
    },
    {
      imageSrc: "📂",
      title: "Alur Pelayanan Legalisir Ijazah",
      description: "Layanan legalisir ijazah bagi lulusan satuan pendidikan.",
      url: "/layanan/legalisir-ijazah"
    },
    {
      imageSrc: "👨‍🎓",
      title: "Alur Pelayanan Mutasi Peserta Didik",
      description: "Layanan administrasi untuk mutasi/transfer peserta didik.",
      url: "/layanan/mutasi-peserta-didik"
    },
    {
      imageSrc: "🏫",
      title: "Alur Pengajuan Rekomendasi Pendirian/Penutupan Satuan Pendidikan",
      description: "Proses rekomendasi pendirian atau penutupan sekolah.",
      url: "/layanan/rekomendasi-pendirian-penutupan"
    },
    {
      imageSrc: "📝",
      title: "Alur Pemberian Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) Penerbitan KJP",
      description: "Layanan penerbitan KJP dengan SPTJM.",
      url: "/layanan/sptjm-kjp"
    },
    {
      imageSrc: "👥",
      title: "Alur dan Persyaratan Mutasi Pegawai",
      description: "Administrasi mutasi pegawai di lingkungan pendidikan.",
      url: "/layanan/mutasi-pegawai"
    },
    {
      imageSrc: "👤",
      title: "Alur dan Persyaratan Pensiun Pegawai",
      description: "Proses pengajuan pensiun untuk pegawai pendidikan.",
      url: "/layanan/pensiun-pegawai"
    },
    {
      imageSrc: "📈",
      title: "Alur dan Persyaratan Usulan Kenaikan Pangkat Pegawai Fungsional",
      description: "Usulan kenaikan pangkat untuk pegawai fungsional.",
      url: "/layanan/kenaikan-pangkat-fungsional"
    },
    {
      imageSrc: "📊",
      title: "Alur dan Persyaratan Usulan Kenaikan Pangkat Pegawai Struktural",
      description: "Usulan kenaikan pangkat untuk pegawai struktural.",
      url: "/layanan/kenaikan-pangkat-struktural"
    },
    {
      imageSrc: "🏗️",
      title: "Alur Pengusulan Rehab Sedang/Berat/Total Gedung Satuan Pendidikan",
      description: "Layanan usulan rehab gedung sekolah.",
      url: "/layanan/rehab-gedung"
    },
    {
      imageSrc: "🗑️",
      title: "Alur Penghapusan Aset Tetap Satuan Pendidikan",
      description: "Proses penghapusan aset tetap milik sekolah.",
      url: "/layanan/penghapusan-aset"
    }
  ]
  }
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <TrendingCard />
      <Blog />
      <TabCardGrid
        heading={
          <>
            <div id="galeri"></div>
            <HighlightedText>Galeri.</HighlightedText>
          </>
        }
      />
      <FAQ
        heading="FAQ — Suku Dinas Pendidikan Wilayah I"
        description="Pertanyaan umum terkait layanan, administrasi, dan program pendidikan di Wilayah I (Jakarta Selatan)."
        faqs={faqs}
      />
      <ContactUsForm />
      <SubscribeNewsLetterForm />
      <Footer />
    </AnimationRevealPage>
    </>
  )
};
