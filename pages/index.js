import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => (
  <div className='flex flex-col min-h-screen'>
    <Navbar />
    <div className='flex-grow flex justify-center items-center'>
      <h1 className='bg-blue-400 font-extrabold text-red-400'>
        Welcome to New Generation High School
      </h1>
    </div>
    <Footer />
  </div>
);

export default Home;
