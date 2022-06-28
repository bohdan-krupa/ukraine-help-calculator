import { FC, useState } from "react";
import ChoosePart from "./components/ChoosePart/ChoosePart";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Statistics from "./components/Statistics/Statistics";

const App: FC = () => {
  const [money, setMoney] = useState(0);

  return (
    <>
      <ChoosePart setMoney={setMoney} />

      {money > 0 && (
        <>
          <Statistics money={money} type="humanitarian" url="https://spivdiia.org.ua/financial-help"/>
          <Intro title="ВОЇНИ У ТИЛУ" bg="hum_bg.webp" />

          <Statistics money={money} type="ammunition" url="https://savelife.in.ua/donate/" />
          <Intro title="ЗСУ - СУЧАСНІ ГЕРОЇ" bg="army_bg.jpg" />

          <Footer />
        </>
      )}
    </>
  );
};

export default App;
