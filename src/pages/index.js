import HomeLayout from "@/Layouts/HomeLayouts";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaCartArrowDown, FaCheck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

function TextWithIcon({ icon, children }) {
  return (
    <Grid templateColumns="3ch 1fr" alignItems="center">
      <Icon as={icon} color="green.500" />
      <Text color="green.700">{children}</Text>
    </Grid>
  );
}

function Benefits({ icon, title, description }) {
  return (
    <Flex flexDirection="column" gap={3} alignItems="center" color="green.700">
      <Flex
        rounded="full"
        background="green.700"
        alignItems="center"
        justifyContent="center"
        boxSize={20}
      >
        <Icon as={icon} color="white" boxSize={10} />
      </Flex>
      <Text fontWeight="bold" fontSize="xl">
        {title}
      </Text>
      <Text maxW="20ch" textAlign="center">
        {description}
      </Text>
    </Flex>
  );
}

function ProductShowcase({ imageSrc, title }) {
  return (
    <Box>
      <Box w="20ch" h="40ch" overflow="hidden">
        <Image
          alt={title}
          objectFit="cover"
          src={imageSrc}
          width="100%"
          height="100%"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Box>
      <Text
        color="green.700"
        fontSize="xl"
        fontWeight="semibold"
        textAlign="center"
        mt={3}
      >
        {title}
      </Text>
    </Box>
  );
}

const textWithIconData = [
  {
    icon: FaCheck,
    text: "Pilihan Barang Terbaik dari Supplier Pilihan",
  },
  {
    icon: FaCheck,
    text: "Gratis Ongkir ke Seluruh Indonesia",
  },
  {
    icon: FaCheck,
    text: "Barang 100% Original",
  },
  {
    icon: FaCheck,
    text: "Bergaransi Hingga 1 Tahun",
  },
];

const benefitsData = [
  {
    icon: TbTruckDelivery,
    title: "Layanan Pesan Antar",
    description:
      "Layanan Terintegrasi dengan kurir internal kami yang bisa menjangkau dimanapun anda berada",
  },
  {
    icon: FaCheck,
    title: "Kualitas Terjamin",
    description:
      "Kami hanya menjual barang-barang yang sudah teruji kualitasnya dan sudah terjamin keasliannya",
  },
  {
    icon: GiReceiveMoney,
    title: "Garansi Uang Kembali",
    description:
      "Jika barang yang anda terima tidak sesuai dengan pesanan, kami akan mengembalikan uang anda",
  },
];

const productData = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kursi",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Meja",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1616810559347-257669714c79?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lemari",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1545043565-b595adf80954?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Aksesoris",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>My Online Shop</title>
        <meta name="description" content="My Online Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box position="relative" height={{base: 'fit-content', lg:"100vh"}}>
        <Image
          alt="hero-bg"
          src="https://images.unsplash.com/photo-1716367837056-4cdc6a576510?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          position="absolute"
          zIndex={-1}
          opacity={0.8}
          width="100%"
          sx={{
            height: '100%'
          }}
        />
        <Container maxW="7xl" p={{base: 4, lg: 0}}>
          <Flex flexDirection="row" alignItems="center" height={{base: 'fit-content', md:"100vh"}}>
            <Box backgroundColor="white" p={4} rounded="md">
              <Flex flexDirection="column" gap={2}>
                <Text fontWeight="bold" fontSize="2xl" color="green.700">
                  Solusi Segala Kebutuhan Furniture Anda
                </Text>
                {textWithIconData.map((item, index) => (
                  <TextWithIcon key={index} icon={item.icon}>
                    {item.text}
                  </TextWithIcon>
                ))}

                <Button
                  size="sm"
                  colorScheme="green"
                  variant="ghost"
                  leftIcon={<FaCartArrowDown />}
                >
                  Pesan Sekarang
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box background="orange.50" py={12}>
        <Container maxW="7xl">
          <Flex flexDirection="column" gap={10} py={4}>
            <Text textAlign="center" fontSize="5xl" fontWeight="semibold">
              Apa yang membuat kami berbeda?
            </Text>

            <Flex
              flexDirection="row"
              gap={10}
              alignItems="flex-start"
              justifyContent="center"
              flexWrap="wrap"
            >
              {benefitsData.map((item, index) => (
                <Benefits
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxW="7xl" py={12} mb={12}>
        <Flex flexDirection="column" gap={10} alignItems="center">
          <Text
            textAlign="center"
            fontSize="5xl"
            fontWeight="semibold"
            color="green.700"
          >
            Pilihan Produk Terbaik Kami
          </Text>
          <Flex flexDirection="row" justifyContent="center" gap={6} flexWrap='wrap'>
            {productData.map((item, index) => (
              <ProductShowcase
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
              />
            ))}
          </Flex>
        </Flex>
      </Container>

      <Box background="orange.50" py={20}>
        <Container maxW="7xl">
          <Flex
            flexDirection="row"
            gap={2}
            justifyContent="space-around"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box>
              <Text
                fontSize="4xl"
                fontWeight="semibold"
                textAlign="center"
                mb={3}
              >
                Yuk, jadi yang pertama tahu promo terbaru!
              </Text>
              <Text fontSize="2xl" maxW="40ch" color="green.700">
                Daftarkan email kamu dan nikmati diskon, tips belanja, dan info
                produk terbaru langsung di inbox kamu.
              </Text>
            </Box>
            <Button colorScheme="yellow" bg="rgba(255, 193, 7, 1)">
              Langganan Sekarang
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
