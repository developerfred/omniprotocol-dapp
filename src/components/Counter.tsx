import { useContext } from "react";

import { observer } from "mobx-react-lite";
import StoreContext from "../mobx/store";

import { Button, Flex } from "@chakra-ui/react";

export const Counter = observer(() => {
  const store = useContext(StoreContext);
  const { count, changeCounter } = store;

  return (
    <Flex width="100%" justify="center">
      <Button onClick={changeCounter} color="red">
        {count}
      </Button>
    </Flex>
  );
});
