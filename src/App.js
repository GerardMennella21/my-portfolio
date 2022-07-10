import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <Header />
      <main className='bg-primary min-vh-100'>
        test
      </main>
      <Footer />
    </div>
  );
}

export default App;
