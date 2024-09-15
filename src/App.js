import Navbar from './Navbar';
import Blogs from './Blogs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Home from './Home';
import Recipes from './Recipes';
import RecipeDetails from './RecipeDetails';
import About from './About';
import Contact from './Contact';
import Test from './Test';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/recipes">
              <Recipes />
            </Route>
            <Route path="/recipes/:id">
              <RecipeDetails />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;