import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormGroup from "@material-ui/core/FormGroup";
import Share from "@material-ui/icons/Share";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.imageUrl} class="card-media" />
        <div className="card-details">
          <h2 className="card-head">{this.props.title}</h2>
          <p>{this.props.content}</p>

          <IconButton color="primary" component="span">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              value="checkedH"
            />
          </IconButton>
          <IconButton color="primary" component="span">
            <Share />
          </IconButton>
        </div>
      </div>
    );
  }
}
