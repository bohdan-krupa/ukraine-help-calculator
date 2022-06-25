import { FC } from "react";
import Capability from "../Capability/Capability";
import Contribution from "../Contribution/Contribution";

interface IStatisticsProps {
  type: string;
}

const Statistics: FC<IStatisticsProps> = ({ type }: IStatisticsProps) => {
  return (
    <div className={`statistics-${type}`}>
      <Capability />
      <Contribution />
    </div>
  );
};

export default Statistics;
