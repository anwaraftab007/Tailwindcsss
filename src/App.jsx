import { CustomerReviews, Hero, Footer, PopularProducts, SuperQuality, Services, Subscribe, SpecialOffer} from './sections/index';
import Nav from './components/nav';

const App = () => {
  return (
  <main className="relative">
      <Nav />
    <section className="xl:padding-l wide:padding-r oadding-b">
      <Hero />
    </section>  
    <section id='products' className="padding">
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
    <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
      <Subscribe />
    </section>  
    <section className="bg-black sm:px-16 px-8 sm:pt-24 pt-12 pb-8">
      <Footer />
    </section>
  </main>
  );
}

export default App;