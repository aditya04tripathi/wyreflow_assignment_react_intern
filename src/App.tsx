
import Hero from './components/features/Hero';
import Glance from './components/features/Glance';
import Vision from './components/features/Vision';
import Banner from './components/features/Banner';
import FAQ from './components/features/FAQ';
import Layout from './components/ui/Layout';

function App() {
  return (
    <Layout>
      <Hero />
      <Glance />
      <Vision />
      <Banner />
      <FAQ />
    </Layout>
  );
}

export default App;