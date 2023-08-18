import { firstLevelMenu } from "@/helpers/constants";
import { MenuItem } from "@/interfaces/menu.interface";
import { PageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";
import { withLayout } from "@/layout/layout"
import axios from "axios";
import { GetServerSideProps } from "next";

const Index = ({products}: PageProps): JSX.Element => {
  return (
    <div>{products.length}</div>
  )
}

export default withLayout(Index); 

export const getServerSideProps: GetServerSideProps<PageProps> = async ({query}) => {
    const {slug, type} = query
    
    if(!slug){
        return { notFound: true }
    }

    if(!type){
      return { notFound: true }
    }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === type);

  if(!firstCategoryItem){
    return {notFound: true}
  }

    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, {firstCategory: firstCategoryItem.id})
    const {data: page} = await axios.get<PageModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`)
    const {data: products} = await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`, {category: slug})


    return {
        props: {
            menu, 
            page,
            products,
            firstCategory: firstCategoryItem.id,
        },
    }
}

interface PageProps extends Record<string, unknown> {
  menu: MenuItem[];
  page: PageModel[];
  products: ProductModel[];
  firstCategory: number;
}