import { Flex, Heading } from "@chakra-ui/react";

import { browserName, CustomView } from "react-device-detect";

import { Counter } from "../components/Counter";


export const BrowserView = ({ title }: { title: string }) => (
  <>
    <CustomView condition={browserName === "Safari"}>
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Heading fontSize="6vw" color="purple">
          {title}
        </Heading>
      </Flex>
    </CustomView>
    <CustomView condition={browserName != "Safari"}>
      <>
        <Flex
          justifyContent="center"
          alignItems="center"
          direction='column'
          height="100vh"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          <Heading fontSize="6vw">{title}</Heading>
          <Counter />
        </Flex>
      </>
    </CustomView>
  </>
);

export const Hero = ({ title }: { title: string }) => (
  <BrowserView title={title} />
);

Hero.defaultProps = {
  title: "oito.work",
};
