import { Carousel } from "@mantine/carousel";
import { Button, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./CardsCarousel.module.css";
import img1 from "../../public/assets/skizzenbuch/1.png";
import img2 from "../../public/assets/skizzenbuch/2.png";
import img3 from "../../public/assets/skizzenbuch/3.png";
import img4 from "../../public/assets/skizzenbuch/4.png";
import img5 from "../../public/assets/skizzenbuch/5.png";
import img6 from "../../public/assets/skizzenbuch/6.png";
import img7 from "../../public/assets/skizzenbuch/7.png";
import img8 from "../../public/assets/skizzenbuch/8.png";
import img9 from "../../public/assets/skizzenbuch/9.png";
import img10 from "../../public/assets/skizzenbuch/10.png";
import img11 from "../../public/assets/skizzenbuch/11.png";
import img12 from "../../public/assets/skizzenbuch/12.png";
import img13 from "../../public/assets/skizzenbuch/13.png";
import img14 from "../../public/assets/skizzenbuch/14.png";
import img15 from "../../public/assets/skizzenbuch/15.png";
import img16 from "../../public/assets/skizzenbuch/16.png";
import img17 from "../../public/assets/skizzenbuch/17.png";
import img18 from "../../public/assets/skizzenbuch/18.png";
import img19 from "../../public/assets/skizzenbuch/19.png";
import img20 from "../../public/assets/skizzenbuch/20.png";
import img21 from "../../public/assets/skizzenbuch/21.png";
import img22 from "../../public/assets/skizzenbuch/22.png";
import img23 from "../../public/assets/skizzenbuch/23.png";
import img24 from "../../public/assets/skizzenbuch/24.png";
import img25 from "../../public/assets/skizzenbuch/25.png";
import img26 from "../../public/assets/skizzenbuch/26.png";
import type { StaticImageData } from 'next/image';
import Image from "next/image";



const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26,
];

const data = images.map((image, index) => ({
  image,
  id: index + 1,
}));

interface CardProps {
  image: StaticImageData;
  id: number;
}

function Card({ image }: CardProps) {
  return (
    <Paper
      shadow="none"
      p="xl"
      radius="md"
      style={{
        height: "80vh",
        width: "80vw",
        margin: "0 auto",
        position: "relative",
      }}
    >
<Image
  src={image}
  alt="Skizzenbuch Bild"
  fill
  style={{
    objectFit: "contain",
    borderRadius: "8px",
    
  }}
  sizes="(max-width: 768px) 80vw, 80vw"
/>
    </Paper>
  );
}

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      slideGap="md"
      align="center"
      slidesToScroll={1}
      withControls
      withIndicators
      loop
    >
      {slides}
    </Carousel>
  );
}
