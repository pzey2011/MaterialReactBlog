import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function AddPostForm() {
  return (
    <div className="card">
      <div className="card-details">
        <div className="card-textarea-title-container">
          <TextField label="Title" className="card-textarea" />
        </div>
        <div className="card-textarea-content-container">
          <TextField
            multiline="true"
            label="Content"
            className="card-textarea"
          />
        </div>
        <div className="card-action-add-button">
          <Button
            variant="contained"
            size="large"
            color="primary"
            aria-label="Add"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
