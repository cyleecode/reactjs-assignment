import { useEffect, useState } from "react";
import { ContextManager } from "../../contexts/all-context";
import styles from "./Order.module.scss";
enum TypeCloth {
  SHIRT,
  DRESS,
  TROUSER,
}
type TypeClothKey = keyof typeof TypeCloth;
interface IOrder {
  measure: IBodyMeasure;
  cost: number;
  type: TypeClothKey;
}
interface IBodyMeasure {
  shoulder: number | null;
  bust: number | null;
  waist: number | null;
  hips: number | null;
}
const Order = () => {
  const _c = ContextManager();
  const [shoulder, setShoulder] = useState<number | null>();
  const [bust, setBust] = useState<number | null>();
  const [waist, setWaist] = useState<number | null>();
  const [hips, setHips] = useState<number | null>();
  const [cost, setCost] = useState<number>(0.0);
  const [cloth, setCloth] = useState<TypeClothKey | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const options = [...Object.keys(TypeCloth).filter((a) => isNaN(parseInt(a)))];

  function calculateCost({}) {
    let tempCost = 0;
    /** 
     * Cost formula
    // if(shoulder>100)tempCost+=20
    // if(waist>100)tempCost+=20
    // setCost(tempCost);
    * */
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    //use hook submit
    if (cloth) {
      const order: IOrder = {
        measure: {
          shoulder: shoulder ?? null,
          bust: bust ?? null,
          waist: waist ?? null,
          hips: hips ?? null,
        },
        cost,
        type: cloth,
      };
      _c.setOrders(order);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setCost(25 + Math.floor(Math.random() * 10));
  }, [shoulder, hips, waist, bust, cloth]);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles["formLabelInput-Option"]}>
        <div>
          <label>Order Type:</label>
          <select
            onChange={(e) => {
              console.log(e.target.value);
              console.log(e.target.value as TypeClothKey);
              setCloth(e.target.value as TypeClothKey);
            }}
          >
            {options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span></span>
          <br></br>
        </div>
        <div>
          <label>Shoulder: </label>
          <input
            type="number"
            step={0.1}
            value={shoulder ?? 0}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              setShoulder(isNaN(value) ? null : value);
            }}
          />
          <span></span>
          <br></br>
        </div>
        <div>
          <label>Bust: </label>
          <input
            type="number"
            step={0.1}
            value={bust ?? 0}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              setBust(isNaN(value) ? null : value);
            }}
          />
          <span></span>
          <br></br>
        </div>
        <div>
          <label>Waist: </label>
          <input
            type="number"
            step={0.1}
            value={waist ?? 0}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              setWaist(isNaN(value) ? null : value);
            }}
          />
          <span></span>
          <br></br>
        </div>
        <div>
          <label>Hips: </label>
          <input
            type="number"
            step={0.1}
            value={hips ?? 0}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              setHips(isNaN(value) ? null : value);
            }}
          />
          <span></span>
          <br></br>
        </div>
        <div>Estimated Cost: {cost}</div>
        <input type="submit" value="Confirm" disabled={isLoading} />
        <br></br>
      </form>
    </>
  );
};
export default Order;
