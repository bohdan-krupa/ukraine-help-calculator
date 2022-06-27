import { FC, useEffect, useState } from "react";
import { getItems } from "../../api";
import { IItem } from "../../interfaces";
import "./Capability.scss";

interface ICapabilityProps {
  money: number;
  type: string;
}

const Capability: FC<ICapabilityProps> = ({ money, type }) => {
  const [items, setItems] = useState<IItem[]>([]);

  const getItemsAsync = async (): Promise<void> => {
    const items = await getItems(type);
    setItems(items);
  };

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <>
      <div className="capability">
        <div className="capability_title">
          Що можна придбати за {money} грн? ({type})
        </div>
        <div className="capability_content">
          <div className="capability_list">
            {items.map((item) => {
              if (item.price > money) {
                return null;
              } else
                return (
                  <div className="capability_item" key={item.name}>
                    <div className="capability_item-top">
                      <img
                        src={item.imageUrl}
                        width="150"
                        height="160"
                        alt={item.name}
                      />
                      <span className="capability_item-amount">
                        x{Math.floor(money / item.price)}
                      </span>
                    </div>
                    <div className="capability_item-body">
                      <span className="capability_item-title">{item.name}</span>
                    </div>
                    <div className="capability_item-price">
                      {item.price} грн
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Capability;
