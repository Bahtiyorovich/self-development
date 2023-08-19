import { CoursePageComponentProps } from "./course-page-component.props"
import styles from './course-page-component.module.css'
import cn from 'classnames'
import { Heading, HhData, Tag } from "@/components"


const CoursePageComponent = ({firstCategory, page, products}: CoursePageComponentProps): JSX.Element => {
    return (
    <div className={cn(styles.wrapper)}>
        {/* TITLE */}
        <div className={styles.title}>
            {page.map((i, idx) => (
                <Heading tag="h1" key={idx}>{i.title}</Heading>
            ))}
            <div>Sort...</div>
        </div>
        {/* PRODUCT */}
        <div>
            PRODUCT ITEM
        </div>
        {/* VOCATION */}
        <div className={styles.hhTitle}>
            {page.map(i => (
                <Heading tag="h2">Vacation - {i.category}</Heading>
            ))}
            <Tag color="red" size="m">hh.ru</Tag>
        </div>

        {/* HHData */}
        {page.map(n => (
            n.hh &&  <HhData {...n.hh}/>    
        ))}
    </div>
  )
}

export default CoursePageComponent