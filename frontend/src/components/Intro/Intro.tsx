import { FC } from "react";
import "./Intro.scss";

interface IIntroProps {
  title: string;
  bg: string;
}

const Intro: FC<IIntroProps> = ({ title, bg }: IIntroProps) => {
  return (
    <>
      <div
        className="intro"
        style={{
          backgroundImage: `url(/img/${bg})`,
        }}
      >
        <div className="intro_title">{title}</div>
      </div>
    </>
  );
};

export default Intro;
