import styles from './divider.module.css'
import cn from 'classnames'
import { DividerProps } from './divider.props'

const Divider = ({className, ...props}: DividerProps): JSX.Element => {
  return (
    <hr className={cn(className, styles.divider)} {...props}></hr>
  )
}

export default Divider