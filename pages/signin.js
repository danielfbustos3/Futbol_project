import Head from "next/head";
import Signins from "components/Signins";

const SigninPage = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gemunu+Libre&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Signins />
    </>
  );
};

export default SigninPage;
