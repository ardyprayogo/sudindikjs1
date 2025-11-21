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
        <BannerCarousel />
        <NewsSection />
        <ServiceSection />
        <StatisticSection />
        <BansosSection />
      </HeaderFooter>
    </>
  );
}
