import './App.sass';

import Toolbar from "./components/Toolbar/Toolbar";
import Footer from "./components/Footer/Footer";
import SearchResults from "./components/SearchResults/SearchResults";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {


    return (
            <Router>
                <Toolbar/>
                <Switch>
                    <Route exact path='/'>
                        <SearchResults homepage={true}/>
                    </Route>
                    <Route path='/search/:arguments'>
                        <SearchResults homepage={false}/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
    );
}

export default App;
