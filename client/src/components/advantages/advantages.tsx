import { AdvantagesProps } from './advantages.props'
import styles from './advantages.module.css'
import CheckIcon from './check.svg'
import { Divider } from '..'

const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
  return (
    <>
        {advantages.map(adv => (
            <div key={adv.id} className={styles.advantage}>
                <CheckIcon/>
                <div className={styles.title}>{adv.title}</div>
                <Divider className={styles.vLine}/>
                <div className={styles.description}>{adv.description}</div>
            </div>
        ))}
    </>
  )
}

export default Advantages