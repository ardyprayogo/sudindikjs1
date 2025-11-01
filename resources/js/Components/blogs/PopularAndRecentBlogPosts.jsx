import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionHeading } from "@/Components/misc/Headings";
import { Container, ContentWithPaddingXl } from "@/Components/misc/Layouts";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``

export default () => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  //Recommended: Only 2 Items
const popularPosts = [
  {
    postImageSrc:
      "https://dapo.kemendikdasmen.go.id/files/thumbnail_2026.png",
    authorImageSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=512&h=512&q=80",
    title: "Instruksi Pemutakhiran Data Pokok Pendidikan (Dapodik) Semester Ganjil 2025",
    description:
      "Dinas Pendidikan Provinsi DKI Jakarta menerbitkan instruksi pemutakhiran Dapodik untuk semester ganjil 2025/2026—mewajibkan validasi data sekolah & tenaga kependidikan sebagai dasar perencanaan anggaran dan program.",
    authorName: "Dinas Pendidikan DKI Jakarta",
    authorProfile: "Instruksi Resmi / Pemutakhiran Data",
    url: "https://www.pojoksatu.id/edugov/1086424214/dinas-pendidikan-dki-jakarta-terbitkan-instruksi-pemutakhiran-dapodik-semester-ganjil"
  },
  {
    postImageSrc:
      "https://pusat.jakarta.go.id/v2/uploads/berita/20240813/peringatan-hari-anak-membaca-sudin-pusip-ajak-275-siswa-ikut-berbagai-lomba.jpg",
    authorImageSrc:
      "https://www.djkn.kemenkeu.go.id/files/images/2022/06/meme-kim-seon-ho_43.jpeg",
    title: "Ratusan Pelajar Meriahkan Hari Anak Jakarta di Sudin Wilayah I",
    description:
      "Kegiatan Hari Anak (Hanjaba) di Sudin Pendidikan Wilayah I diikuti ratusan pelajar, lomba baca & kegiatan edukasi untuk memperingati Hari Anak Jakarta 2025.",
    authorName: "Suku Dinas Pendidikan Wilayah I",
    authorProfile: "Liputan Kegiatan Sekolah",
    url: "https://www.instagram.com/p/DNPoQQZxxWr/" // sumber unggahan liputan kegiatan
  }
];

const recentPosts = [
  {
    postImageSrc:
      "https://journalreportase.com/wp-content/uploads/2025/03/Screenshot_18.jpg",
    title: "Lomba 'Ramadhan Ceria' yang Diadakan Sudin Wilayah I (Mar 2025)",
    authorName: "Harian Pelita",
    url: "https://harianpelita.id/news/metropolitan/sudin-pendidikan-wilayah-1-jaksel-gelar-lomba-ramadhan-ceria-2025/"
  },
  {
    postImageSrc:
      "https://selatan.jakarta.go.id/upload/thumbnail/202411011052_UNTUK_BERITA_-_2024-11-01T105055.519.jpg",
    title: "Senam Kebugaran & Pengarahan Kepala Sekolah oleh Sudin Wilayah I",
    authorName: "Pemkot Jakarta Selatan",
    url: "https://selatan.jakarta.go.id/berita-selatan/detail/Sudin-Pendidikan-Wilayah-I-Jaksel-Gelar-Senam-Kebugaran"
  },
  {
    postImageSrc:
      "https://www.radarbangsa.com/images/posts/1/2025/2025-08-05/6a95c7de8ec644300d1c0f46eb35ce82_1.jpeg",
    title: "Evaluasi Penyaluran BOP & BOS: 100 Kepala Sekolah Ikut Pemantauan",
    authorName: "Radar Bangsa",
    url: "https://www.radarbangsa.com/news/54826/100-kepala-sekolah-di-jaksel-ikuti-evaluasi-penyaluran-bos"
  },
  {
    postImageSrc:
      "https://yt3.googleusercontent.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s900-c-k-c0x00ffffff-no-rj",
    title: "Sosialisasi & Pelatihan Pemutakhiran Dapodik untuk Operator Sekolah",
    authorName: "Dinas Pendidikan / YouTube",
    url: "https://www.youtube.com/watch?v=KDY8ZOK0KL4"
  },
  {
    postImageSrc:
      "https://multimedia.beritajakarta.id/photo/2014_508c75c8507a2ae5223dfd2faeb98122/00f032c27724c407fc126ddd325c4355.jpg",
    title: "Sudin Dukcapil Jaksel Adakan Layanan di 13 Sekolah Selama Agustus",
    authorName: "berita jakarta",
    url: "https://www.beritajakarta.id/read/146434/sudin-dukcapil-jaksel-adakan-layanan-di-13-sekolah-selama-agustus"
  }
];

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <div id="berita"></div>
            <Heading>Popular Posts</Heading>
            <PostsContainer>
              {popularPosts.map((post, index) => (
                <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    $imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <AuthorInfo>
                    <AuthorImage src={post.authorImageSrc} />
                    <AuthorNameAndProfession>
                      <AuthorName>{post.authorName}</AuthorName>
                      <AuthorProfile>{post.authorProfile}</AuthorProfile>
                    </AuthorNameAndProfession>
                  </AuthorInfo>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
          <RecentPostsContainer>
            <Heading>Recent Posts</Heading>
            <PostsContainer>
              {recentPosts.map((post, index) => (
              <Post key={index} href={post.url} className="group">
                <PostTextContainer>
                  <Title>{post.title}</Title>
                  <AuthorName>{post.authorName}</AuthorName>
                </PostTextContainer>
                <Image $imageSrc={post.postImageSrc} />
              </Post>
              ))}
            </PostsContainer>
          </RecentPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
