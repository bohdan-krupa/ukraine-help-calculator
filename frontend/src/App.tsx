import { FC } from "react";
import ChoosePart from "./components/ChoosePart/ChoosePart";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Statistics from "./components/Statistics/Statistics";

const App: FC = () => {
  return (
    <>
      <ChoosePart />

      <Statistics type="ammunition" />
      <Intro title="ЗСУ - СУЧАСНІ ГЕРОЇ" bg="army_bg.jpg" />

      <Statistics type="humanitarian" />
      <Intro title="ВОЇНИ У ТИЛУ" bg="hum_bg.webp" />

      <Footer />
    </>
  );
};

export default App;
