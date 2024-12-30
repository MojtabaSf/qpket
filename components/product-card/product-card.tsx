import style from "./product-card.module.css";
import Image from "next/image";

type ProductCardType = {
  item: {
    id: number;
    title: string;
    src: string;
    location: string;
    price: string;
    situation: string;
    province: string;
    type: string;
    attribute: string;
  };
};

export default function ProductCard({ item }: ProductCardType) {
  return (
    <section className={style.container}>
      <Image src={item?.src} width={160} height={160} alt="" />
      <div className={style.details}>
        <div>
          <p>Type:</p>
          <span>{item?.type}</span>
        </div>
        <div>
          <p>Location:</p>
          <span>{item?.location}</span>
        </div>
        <div>
          <p>situation:</p>
          <span>{item?.situation}</span>
        </div>
        <div>
          <p>attribute:</p>
          <span>{item?.attribute}</span>
        </div>
        <div>
          <p>province:</p>
          <span>{item?.province}</span>
        </div>
        <div>
          <p>price:</p>
          <span>{item?.price}</span>
        </div>
      </div>
    </section>
  );
}
