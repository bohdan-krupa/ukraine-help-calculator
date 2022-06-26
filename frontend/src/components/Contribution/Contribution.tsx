import { FC } from "react";
import "./Contribution.scss";

const Contribution: FC = () => {
  return (
    <>
      <div className="contribution">
        <div className="contribution_title">
          Цінність ... грн у великій справі
        </div>
        <div className="contribution_list">
          <div className="contribution_item">
            <div className="contribution_item-box">
              <img
                className="contribution_item-img"
                src="https://www.lrt.lt/img/2022/05/26/1269988-36979-1287x836.jpg"
                alt=""
              />
              <span className="contribution_item-title">Bayraktar</span>
            </div>
            <div className="contribution_item-bar"></div>
          </div>
          <div className="contribution_item">
            <div className="contribution_item-box">
              <img
                className="contribution_item-img"
                src="https://www.lrt.lt/img/2022/05/26/1269988-36979-1287x836.jpg"
                alt=""
              />
              <span className="contribution_item-title">Bayraktar</span>
            </div>
            <div className="contribution_item-bar"></div>
          </div>

          <div className="contribution_item">
            <div className="contribution_item-box">
              <img
                className="contribution_item-img"
                src="https://www.lrt.lt/img/2022/05/26/1269988-36979-1287x836.jpg"
                alt=""
              />
              <span className="contribution_item-title">Bayraktar</span>
            </div>
            <div className="contribution_item-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contribution;
