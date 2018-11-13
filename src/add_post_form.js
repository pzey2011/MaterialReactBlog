import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default class AddPostForm extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      title: "",
      imageUrl: ""
    };
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }
  handleContentChange = event => {
    this.setState({ content: event.currentTarget.value });
  };
  handleTitleChange = event => {
    this.setState({ title: event.currentTarget.value });
  };
  uploadImage = event => {
    this.setState({ imageUrl: event.target.value });
  };
  submitMessage = () => {
    let data = {
      title: this.state.title,
      content: this.state.content,
      imageUrl: this.state.imageUrl
    };
    this.props.dataCallBack(data);
  };
  render() {
    return (
      <div className="card">
        <div className="card-form">
          <h3>New Blog</h3>
          <div className="card-textarea-title-container">
            <TextField
              label="Title"
              className="card-textarea"
              value={this.state.title}
              onChange={this.handleTitleChange}
              variant="outlined"
            />
          </div>
          <div className="card-textarea-content-container">
            <TextField
              multiline
              label="Content"
              rows="4"
              className="card-textarea"
              variant="outlined"
              value={this.state.content}
              onChange={this.handleContentChange}
            />
          </div>
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={this.uploadImage}
            hidden
          />
          <label className="upload-container" htmlFor="contained-button-file">
            <div className="upload-button-container">
              <Button variant="contained" component="span">
                Upload
                <CloudUploadIcon className="upload-button" />
              </Button>
            </div>
            <div className="path-container">
              <TextField
                label="Upload your image"
                disabled
                value={this.state.imageUrl}
              />
            </div>
          </label>
          <div className="card-action-add-button">
            <Button
              variant="contained"
              size="large"
              color="primary"
              aria-label="Add"
              className="card-add-button"
              onClick={this.submitMessage}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
