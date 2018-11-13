import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import AddPostForm from "./add_post_form";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import AddIcon from "@material-ui/icons/Add";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
    this.addBlog = this.addBlog.bind(this);
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
  addBlog(data) {
    console.log(data);
    let newCard = (
      <Card
        title={data.title}
        content={data.content}
        imageUrl={data.imageUrl}
      />
    );
    let cardsArray = [...this.state.cards];
    cardsArray.push(newCard);
    this.setState({ cards: cardsArray });
  }
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className="menu-button"
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className="grow">
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        {this.state.cards}
        <AddPostForm
          dataCallBack={data => {
            this.addBlog(data);
          }}
        />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
