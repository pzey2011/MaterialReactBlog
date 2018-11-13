import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import AddPostForm from "./add_post_form";

import AddIcon from "@material-ui/icons/Add";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }
  componentDidMount() {
    let cardsArray = [];
    cardsArray.push(
      <Card
        title="Kangaroo Valley Safari"
        content="Located two hours south of Sydney in the Southern Highlands of New
            South Wales, ..."
        imageUrl="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
    );
    cardsArray.push(
      <Card
        title="Kangaroo Valley Safari"
        content="Located two hours south of Sydney in the Southern Highlands of New
            South Wales, ..."
        imageUrl="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01a9a264e737622958245b0f55a6e943&w=1000&q=80"
      />
    );
    this.setState({ cards: cardsArray });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.cards}
        <AddPostForm />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
