import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component.jsx";

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const TopicList = () => (
  <div>
    <h1>Topic List Page</h1>
  </div>
);

const TopicDetail = () => (
  <div>
    <h1>Topic Detail Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route path="/topics" component={TopicList} />
        <Route path="/topic/:topicId" component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
