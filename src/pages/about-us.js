import HomeLayout from "@/Layouts/HomeLayouts";
import { Container, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

AboutUs.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | My Online Shop</title>
        <meta name="description" content="My Online Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="7xl">
        <Text textAlign="center" fontSize="5xl" fontWeight="semibold">
          Tentang Kami
        </Text>

        <Flex
          flexDirection="row"
          alignItems="center"
          gap={2}
          justifyContent="space-around"
          my={8}
        >
          <Text maxW="50ch" textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Curabitur
            pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
            turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
            felis sollicitudin mauris. Integer in mauris eu nibh euismod
            gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis
            risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
            eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas
            fermentum consequat mi. Donec fermentum. Pell
          </Text>

          <Image
            alt="our story"
            src="https://images.unsplash.com/photo-1593307315564-c96172dc89dc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            w="40ch"
            h="48ch"
            objectFit="cover"
          />
        </Flex>

        <Flex
          flexDirection="row"
          alignItems="center"
          gap={2}
          justifyContent="space-around"
          my={8}
        >
          <Image
            alt="our story"
            src="https://images.unsplash.com/photo-1611021061421-93741ec41ce1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            w="50ch"
            h="45ch"
            objectFit="cover"
          />
          <Text maxW="50ch" textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Curabitur
            pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
            turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
            felis sollicitudin mauris. Integer in mauris eu nibh euismod
            gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis
            risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue,
            eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas
            fermentum consequat mi. Donec fermentum. Pell
          </Text>
        </Flex>
      </Container>
    </>
  );
}
