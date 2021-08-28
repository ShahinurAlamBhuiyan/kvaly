import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
// import { useState, useEffect } from 'react';
// import { IProduct } from 'Models/types';
import ProductService from 'services/ProductService';
import useAsync from 'hooks/useAsync';

const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
  // useEffect(() => {
  //   ProductService.getProducts().then((res) => setProducts(res));
  // }, []);

  const { data, isLoading } = useAsync(ProductService.getProducts);

  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={data} />
    </div>
  );
};

export default Home;
