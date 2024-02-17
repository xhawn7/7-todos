import { Box, ChakraProvider, Flex, Grid, GridItem, Heading, theme } from "@chakra-ui/react";
import CtxToDo from "./Components/biz/CtxToDo";
import MobxToDo from "./Components/biz/MobxToDo";
import PropsToDo from "./Components/biz/PropsToDo";
import ReduxThunkToDo from "./Components/biz/ReduxThunkToDo";
import ReduxToolkitToDo from "./Components/biz/ReduxToolkitToDo";
import ZustandToDo from "./Components/biz/ZustandToDo";
import ToDoTopBar from "./Components/ui/ToDoTopBar";
import HOCToDo from "./Components/biz/HOCToDo";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <ToDoTopBar />
          <Grid
            gap={4}
            mt={4}
          >
            <GridItem colSpan={{ base: 4, md: 1 }} >
              <PropsToDo />
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 2 }}  >
              <CtxToDo />
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 1 }}  >
              <HOCToDo />
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 2 }} >
              <ReduxThunkToDo />
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 2 }}  >
              <ReduxToolkitToDo />
            </GridItem>
            <GridItem colSpan={4}  >
              <MobxToDo />
            </GridItem>
            <GridItem colSpan={4}  >
              <ZustandToDo />
            </GridItem>
          </Grid>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
