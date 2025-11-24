import HeaderFooter from '../../Layout/HeaderFooter';
import PersyaratanUmumSection from './bpms/PersyaratanUmumSection';
import PersyaratanKhususSection from './bpms/PersyaratanKhususSection';
import BannerCarousel from '../../Components/banner/BannerCarrousel';
import BpmsBannerSection from './bpms/BpmsBannerSection';

export default function BpmsPage() {
  return (
    <HeaderFooter>
      <BpmsBannerSection />
      <PersyaratanKhususSection />
      <PersyaratanUmumSection />
    </HeaderFooter>
  );
}
