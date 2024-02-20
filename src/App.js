import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Types from "./components/items-type-card/items-type";
function App() {
  return (
    <div className="App">
      <Header/>
      <div>
     <div className="sidebar">
      <Types/>
     </div> 
    

<Content/>

    </div>  
      <Footer/>
    </div>
  );
}

export default App;
