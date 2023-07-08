import styles from "./Approve.module.scss";

enum TypeCloth {
  SHIRT,
  DRESS,
  TROUSER,
}
interface IOrder {
  id: string;
  measure: IBodyMeasure;
  cost: number;
  type: keyof typeof TypeCloth;
}
interface IBodyMeasure {
  shoulder: number | null;
  bust: number | null;
  waist: number | null;
  hips: number | null;
}

const mockData: IOrder[] = [
  {
    id: "1",
    measure: { shoulder: 1, bust: 1, waist: 1, hips: 1 },
    cost: 12.0,
    type: "SHIRT",
  },
  {
    id: "2",
    measure: { shoulder: 1, bust: 1, waist: 1, hips: 1 },
    cost: 12.0,
    type: "DRESS",
  },
];
const Approve = ({ orders }: { orders: IOrder[] }) => {
  // const orderList: IOrder[] = [...orders];
  const orderList: IOrder[] = [...mockData];
  return (
    <>
      <div>
        {orderList.map((order, index) => (
          <div key={index} className={styles["order-item"]}>
            <span>{order.type}</span>
            <button>Approve</button>
          </div>
        ))}
      </div>
    </>
  );
};

Approve.defaultProps = {
  orders: [],
};

export default Approve;
