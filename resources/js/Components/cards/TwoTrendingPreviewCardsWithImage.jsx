import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "@/Components/misc/Headings";
import { PrimaryLink as PrimaryLinkBase } from "@/Components/misc/Links";
import { PrimaryButton as PrimaryButtonBase } from "@/Components/misc/Buttons";
import LocationIcon from "feather-icons/dist/icons/map-pin.svg";
import TrendingIcon from "feather-icons/dist/icons/trending-up.svg";
import ArrowRightIcon from "@/Images/arrow-right-icon.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const HeadingColumn = tw(Column)`w-full xl:w-1/3`;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-1/3 mt-16 xl:mt-0`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-primary-500 font-bold text-lg`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-8`;

export default () => {
  const cards = [
  {
    imageSrc:
      "https://selatan.jakarta.go.id/upload/thumbnail/202507252012_UNTUK_BERITA.jpg",
    type: "Event",
    pricePerDay: "Aug 2025",
    title: "Ruang Seni Siswa — Peringatan Hari Anak Nasional",
    trendingText: "Trending",
    durationText: "Baru • Aug 2025",
    locationText: "Wilayah I — Jaksel"
  },
  {
    imageSrc:
      "https://www.unas.ac.id/wp-content/uploads/2025/06/DSC04809.jpg",
    type: "Kolaborasi",
    pricePerDay: "Jun–Jul 2025",
    title: "Kolaborasi UNAS & Sudin I: Transformasi Digit ...",
    trendingText: "Update",
    durationText: "Monitoring & Pelatihan",
    locationText: "Wilayah I — Jaksel"
  }
];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn>
            <HeadingInfoContainer>
              <div id="trending"></div>
              <HeadingTitle>Trending News</HeadingTitle>
              <HeadingDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua enim ad minim veniam.
              </HeadingDescription>
              <PrimaryLink>
                Lebih Banyak <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardType>{card.type}</CardType>
                    <CardPrice>
                      <CardPriceAmount>{card.pricePerDay}</CardPriceAmount>
                    </CardPrice>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <TrendingIcon /> {card.trendingText}
                    </CardMetaFeature>
                    {/* <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature> */}
                    <CardMetaFeature>
                      <LocationIcon /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction>Detail</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
