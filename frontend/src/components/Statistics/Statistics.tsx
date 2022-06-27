import { FC } from "react";
import Capability from "../Capability/Capability";
// import Contribution from "../Contribution/Contribution";

interface IStatisticsProps {
  money: number;
  type: string;
}

const Statistics: FC<IStatisticsProps> = ({ money, type }) => {
  return (
    <div className={`statistics-${type}`}>
      <Capability money={money} type={type} />
      {/* <Contribution /> */}
    </div>
  );
};

export default Statistics;
