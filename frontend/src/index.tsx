import { FC } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Capability from './components/capability';
import Header from './components/header';
import Intro from './components/intro';
import Breaker from './components/breaker'
import Contribution from './components/contribution';



const Army: FC = () => {
    const army_title = "ЗСУ - СУЧАСНІ ГЕРОЇ"
    const army_bg = "army_bg.jpg"
    const hum_title = "ВОЇНИ У ТИЛУ"
    const hum_bg = "hum_bg.webp"

    return (
        <>
        <Header></Header>
        <Intro title={army_title} bg={army_bg}></Intro>
        <Capability></Capability>
        <Breaker></Breaker>
        <Contribution></Contribution>
        <Intro title={hum_title} bg={hum_bg}></Intro>
        <Capability></Capability>
        <Breaker></Breaker>
        <Contribution></Contribution>
        </>
    )
}
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
      <Army />
  );