import './styles/App.css';
import Main from './components/Main';
import Body from './components/Body';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Banner3 from './components/Banner3';
import Banner4 from './components/Banner4';

 const bannerMaterialOne= {
  title: "Blue Sweater",
  content:"Guess??" ,
    bgColor:"cyan",
    fontColor:"brown"
 };

    const bannerMaterialTwo = {
      title: "tied shirt",
      content: "roam the unknown",
      bgColor: "grey",
      fontColor: "orange"
    }

 

function App() {
  return (
    <>
    <Main />
    <Body/>
    <Banner 
    title="Blue Sweater" 
    content="I wear white shoes" 
    bgColor= "pink"
    fontColor= "purple"/>
    <Banner
     title="Grey Sweater" 
     content="I wear pink socks"
      bgColor="blue"
      fontColor= "red"/>
      <Banner2 info= {bannerMaterialOne}/>
      
      <Banner3 data={bannerMaterialTwo}/>

      <Banner4
      howMany={3}
      shirt="puma"
      data={bannerMaterialOne}/>
    
    <Footer/>
    </>
  );
}

export default App;
