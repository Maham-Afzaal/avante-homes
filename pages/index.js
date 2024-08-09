import Head from "next/head";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Avante Homes</title>
        <meta name="description" content="Home - Avante Homes" />
        <meta property="og:title" content="Home - Avante Homes" />
        <meta property="og:description" content="Home - Avante Homes" />
        <meta property="og:image" content="https://example.com/image.jpg" />
      </Head>
      <HomePage />
    </>
  );
}
