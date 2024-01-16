import { Banner } from '../../components/Banner';
import { About } from '../../components/About';
import { ProductsPreview } from '../../components/ProductsPreview';

const Home = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Banner />
      <ProductsPreview products={[
        {name: 'Dosa', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',imgUrl:'https://res.cloudinary.com/dkidx36fa/image/upload/v1704034934/Dosa_egmtlg.jpg'},       
        {name: 'Biryani', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', imgUrl: 'https://res.cloudinary.com/dkidx36fa/image/upload/v1704034931/Biryani_gscu5y.jpg'},
        {name: 'Cup-Cakes', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', imgUrl: 'https://res.cloudinary.com/dkidx36fa/image/upload/v1704180880/istockphoto-655156000-1024x1024_lkbqob.jpg'},
        {name: 'Paneer', description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design. The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', imgUrl: 'https://res.cloudinary.com/dkidx36fa/image/upload/v1704180881/istockphoto-1311491582-1024x1024_ddf9oa.jpg'},
        ]}/>
      <About />
    </div>
  );
};

export default Home;