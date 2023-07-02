
import useAuth from "@/cHooks/useAuth";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import { makeUpState } from "@/states/searchState";
import { Prod } from "@/types";
import { productLinks } from "@/utils/ProductLinks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface props {
  makeUpProducts: string;
  booksProduct: string;
  products: Prod[] | undefined;
}

export default function Home({ makeUpProducts, booksProduct }: props) {
  const [products, setProducts] = useState<Prod[] | undefined>();
  const [search, setSearch] = useRecoilState(makeUpState);
  const [books, setBooks] = useState<Prod[] | undefined>();
  const { user, loading }= useAuth()
 
  // if(loading || !user) return null;

  // const getBooks = async () => {
  //   const url = fetch(productLinks.booksProduct);
  //   const promise = await url;
  //   const data = await promise.json();
  //   setBooks(data);
  // };



  

  const getProducts = async () => {
    
    const url = fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${search}`);
    const promise = await url;
    const data = await promise.json();
    setProducts(
      data.slice(0, 40).map((product: any) => {
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          image: product.image_link,
          price: product.price,
          link: product.website_link,
          brand: product.brand,
        };
      })
    );


  };

  useEffect(() => {

     getProducts();

  }, [search]);
  

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Slider />
        <div className=" absolute top-[450px] space-y-6 flex  flex-col items-center w-full">
          <input
            className="text-white bg-transparent outline-none border-none rounded-md"
            placeholder="Search beauty products"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Products products={products} />
          <Products products={products} />
          <Products products={products} />
          <Products products={products} />
          <Products products={products} />
        </div>
      </main>
    </>
  );
}
