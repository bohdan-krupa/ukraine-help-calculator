import { FC } from "react";
import "./Capability.scss";

const Capability: FC = () => {
  return (
    <>
      <div className="capability">
        <div className="capability_title">Що можна придбати за ... грн?</div>
        <div className="capability_content">
          <div
            className="capability_button"
            style={{
              backgroundImage: "url(/img/arrow-left.png)",
            }}
          ></div>
          <div className="capability_list">
            <div className="capability_item">
              <div className="capability_item-top">
                <img src="./img/bron.jpg" width="100" height="100" alt="bron" />
                <span className="capability_item-amount">x5</span>
              </div>
              <div className="capability_item-body">
                <span className="capability_item-title">title </span>-
                <span className="capability_item-price"> 1000$</span>
              </div>
              <div className="capability_item-desc">
                Богдан роби базу даних Богдан роби базу даних Богдан роби базу
                даних
              </div>
            </div>
            <div className="capability_item">
              <div className="capability_item-top">
                <img src="./img/bron.jpg" width="100" height="100" alt="bron" />
                <span className="capability_item-amount">x5</span>
              </div>
              <div className="capability_item-body">
                <span className="capability_item-title">title </span>-
                <span className="capability_item-price"> 1000$</span>
              </div>
              <div className="capability_item-desc">
                Богдан роби базу даних Богдан роби базу даних Богдан роби базу
                даних
              </div>
            </div>
            <div className="capability_item">
              <div className="capability_item-top">
                <img src="./img/bron.jpg" width="100" height="100" alt="bron" />
                <span className="capability_item-amount">x5</span>
              </div>
              <div className="capability_item-body">
                <span className="capability_item-title">title </span>-
                <span className="capability_item-price"> 1000$</span>
              </div>
              <div className="capability_item-desc">
                Богдан роби базу даних Богдан роби базу даних Богдан роби базу
                даних
              </div>
            </div>
          </div>
          <div
            className="capability_button"
            style={{
              backgroundImage: "url(/img/arrow-right.png)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Capability;
