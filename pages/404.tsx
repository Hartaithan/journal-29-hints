import { NextPage } from "next";
import { useRouter } from "next/router";
import Title from "../components/Title";
import { main } from "../locales/main";
import Flex from "../components/Flex";

const ErrorPage: NextPage = () => {
  const router = useRouter();
  const locale = router.locale || "ru";
  return (
    <Flex direction="column" justify="center" align="center">
      <Title>{main[locale].pageNotFound}</Title>
    </Flex>
  );
};

export default ErrorPage;
