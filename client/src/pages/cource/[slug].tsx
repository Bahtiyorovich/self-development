import { MenuItem } from "@/interfaces/menu.interface";
import { withLayout } from "@/layout/layout"
import axios from "axios";
import { GetServerSideProps } from "next";

const Index = ({menu, page, products}) => {
  return (
    <div>Index</div>
  )
}

export default withLayout(Index); 

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const {slug} = query
    const firstCategory = 0

    if(!slug){
        return { notFound: true }
    }

    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, {firstCategory})
    const {data: page} = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`)
    const {data: products} = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`, {category: slug})


    return {
        props: {
            menu, 
            page,
            products,
        },
    }
}