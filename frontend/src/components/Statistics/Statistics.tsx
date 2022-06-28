import { FC } from "react";
import Capability from "../Capability/Capability";
// import Contribution from "../Contribution/Contribution";

interface IStatisticsProps {
  money: number;
  type: string;
  url: string;
}

const Statistics: FC<IStatisticsProps> = ({ money, type, url }) => {
  return (
    <div className={`statistics-${type}`}>
      <Capability money={money} type={type} url={url}/>
      {/* <Contribution /> */}
    </div>
  );
};

export default Statistics;
