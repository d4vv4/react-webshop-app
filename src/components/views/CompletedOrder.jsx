import React, { useEffect, useContext, useState } from "react";
import { dbContext } from "../../contexts/DbContextProvider";

const CompletedOrder = () => {
  const { getOrder, saveOrder, resetCart } = useContext(dbContext);
  const [order, setOrder] = useState({});

  useEffect(() => {
    async function random() {
      await saveOrder();
      setOrder(await getOrder());
    }
    random();
    resetCart();
  }, []);
  if (!order.items) return null;
  console.log(order.items[0]);

  let list = order.items.map((item) => {
    return item;
  });
  return (
    <React.Fragment>
      <div className="text-center">
        <h1>Tack för din beställning</h1>
        <h4>Du beställde:</h4>
        {list.map((element) => {
          return <p>{element}</p>;
        })}
      </div>
    </React.Fragment>
  );
};
export default CompletedOrder;
