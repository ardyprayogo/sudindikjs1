import StatisticSection from '@/Components/home/StatisticSection';
import BansosSection from '@/Components/home/BansosSection';
import ServiceSection from '@/Components/home/ServiceSection';
import BannerCarousel from '@/Components/banner/BannerCarrousel';
import NewsSection from '../../Components/home/NewsSection';
import HeaderFooter from '../../Layout/HeaderFooter';

export default function Page2() {
  return (
    <>
      <HeaderFooter>
        <BannerCarousel
          img={
            'https://cdn.rri.co.id/berita-foto/Jakarta/o/1729388678907-IMG_1934/gojwieiabhcqod8.jpeg'
          }
          title={'Sudin Pendidikan'}
          desc={'Kota Jakarta Selatan Wilayah 1'}
        />
        <NewsSection />
        <ServiceSection />
        <StatisticSection />
        <BansosSection />
      </HeaderFooter>
    </>
  );
}
