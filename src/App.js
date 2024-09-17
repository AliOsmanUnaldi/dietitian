import Navbar from './Navbar';
import Blogs from './Blogs';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Home from './Home';
import Recipes from './Recipes';
import RecipeDetails from './RecipeDetails';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/dietitian/">
              <Home />
            </Route>
            <Route exact path="/dietitian/blogs">
              <Blogs />
            </Route>
            <Route path="/dietitian/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/dietitian/recipes">
              <Recipes />
            </Route>
            <Route path="/dietitian/recipes/:id">
              <RecipeDetails />
            </Route>
            <Route path="/dietitian/about">
              <About />
            </Route>
            <Route path="/dietitian/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;