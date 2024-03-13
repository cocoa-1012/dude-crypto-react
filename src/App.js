import './App.css';
import Header from './page/layout/header';
import Home from './page/home';
import Footer from './page/layout/footer';

function App() {
    // let script = document.createElement("script");
    // script.src = 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=65de3f816d801d1e81b6c129';
    // script.async = true;
    // document.body.appendChild(script);
    
    // script = document.createElement("script");
    // script.src = 'https://assets-global.website-files.com/65de3f816d801d1e81b6c129/js/webflow.7f23c629e.js';
    // script.async = true;
    // document.body.appendChild(script);

    return (
      <div className="body">
        <div className="body-wrap">
          <Header/>
          <Home/>
          <Footer/>
        </div>
      </div>
    );
}

export default App;
