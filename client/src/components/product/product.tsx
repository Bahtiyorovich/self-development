import { ProductProps } from "./product.props";
import styles from "./product.module.css";
import cn from "classnames";
import { Card, Divider, Rating, Tag } from "..";
import Image from "next/image";
import { convertToUSD } from "@/helpers/helpers";

const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <div className={className} {...props}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={product.images}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {convertToUSD(product.price)}
          {product.oldPrice && (
            <Tag className={styles.oldPrice} color="green">
              {convertToUSD(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {convertToUSD(product.price)}/
          <span className={styles.month}>month</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.tags &&
            product.tags.map((t) => (
              <Tag className={styles.category} key={t}>
                {t}
              </Tag>
            ))}
        </div>
        <div className={styles.priceTitle}>Price</div>
        <div className={styles.creditTitle}>Credit</div>
        <div className={styles.rateTitle}>{product.reviewCount} review</div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>

        <div className={styles.features}>
          {product.characteristics.length &&
            product.characteristics.map((ch) => (
              <div className={styles.characteristic} key={ch.name}>
                <span className={styles.characteristicName}>{ch.name}</span>
                <span className={styles.characteristicDots}></span>
                <span className={styles.characteristicSkills}>{ch.value}</span>
              </div>
            ))}
        </div>

        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
                <div className={styles.advantageTitle}>Advantages</div>
                <div>{product.advantages}</div>
            </div>
            )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
                <div className={styles.disadvantageTitle}>Disadvantages</div>
                <div>{product.disadvantages}</div>
            </div>
            )}
        </div>
        <Divider className={styles.hr}/>
      </Card>
    </div>
  );
};

export default Product;
