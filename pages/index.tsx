import { useRouter } from "next/router";
import Title from "../components/Title";
import { main } from "../locales/main";
import Flex from "../components/Flex";
import { IPageProps } from "../models/AppModel";

const Home: IPageProps = () => {
  const router = useRouter();
  const locale = router.locale || "ru";
  return (
    <Flex direction="column" justify="center" align="center">
      <Title>
        {main[locale].welcome} {main[locale].title}!
      </Title>
      <p>
        {main[locale].locale} {locale}
      </p>
    </Flex>
  );
};

export default Home;
