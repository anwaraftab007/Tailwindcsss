import { CustomerReviews, Hero, Footer, PopularProducts, SuperQuality, Services, Subscribe, SpecialOffer} from './sections/index';
import Nav from './components/nav';

const App = () => {
  return (
  <main className="relative">
      <Nav />
    <section className="xl:padding-1 wide:padding-r oadding-b">
      <Hero />
    </section>  
    <section className="padding">
      <PopularProducts />
    </section>  
    <section className="padding">
      <SuperQuality />
    </section>  
    <section className="padding-x py-10">
      <Services />
    </section>  
    <section className="padding">
      <SpecialOffer />
    </section>  
    <section className="bg-blue-500/10 padding">
      <CustomerReviews />
    </section>  
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>  
    <section className="bg-black padding-x pading-t pb-8">
      <Footer />
    </section>
  </main>
  );
}

export default App;