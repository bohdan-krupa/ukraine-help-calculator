import { FC } from "react";
import { Link } from "react-scroll";
import "./ChoosePart.scss";

interface IChoosePartProps {
  setMoney: Function;
}

const ChoosePart: FC<IChoosePartProps> = ({ setMoney }) => {
  return (
    <div className="choose-part">
      <div className="header">
        <h1>Save Ukraine</h1>
      </div>

      <div className="main-block">
        <h2>Україна об'єдналась!</h2>
        <h2>
          Кожна гривня допомоги українським захисникам наближає нас до перемоги.
        </h2>
        <h2>Зроби свій внесок у перемогу нашої країни!</h2>
        <h2>Вчасна допомога - врятоване життя</h2>
        <h2 className="enter-sum">Введіть суму (грн): </h2>
      </div>

      <div className="ukraine-map">
        <input type="number" onChange={(e) => setMoney(e.target.value)} />
      </div>

      <div className="choose-buttons">
        <Link to="statistics-humanitarian" smooth={true}>
          <div className="button-1">Humanitarian</div>
        </Link>

        <Link to="statistics-ammunition" smooth={true}>
          <div className="button-2">Ammunition</div>
        </Link>
      </div>
    </div>
  );
};

export default ChoosePart;
