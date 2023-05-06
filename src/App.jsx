import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import ContentBox from './components/ContentBox';
import ContentBox2 from './components/ContentBox2';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-gray-600/80 min-h-screen max-w-5xl">
      <ImageOne />
      <ContentBox />
      <ImageTwo />
      <ContentBox2 />
      <ImageThree />
      <Footer />
    </div>
  );
}

export default App;