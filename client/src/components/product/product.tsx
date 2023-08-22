import { ProductProps } from "./product.props"
import styles from './product.module.css'
import cn from 'classnames'
import { Card } from ".."
import Image from "next/image"


const Product = ({product, className, ...props}: ProductProps):JSX.Element => {
  return (
    <div className={className} {...props}>
        <Card className={styles.product}>
            <div className={styles.logo}>
                <Image src={product.images} alt={product.title} width={70} height={70} />
            </div>
        </Card>
    </div>
  )
}

export default Product