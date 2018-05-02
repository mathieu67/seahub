import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import validUrl from 'valid-url';

class AddImageDialog extends React.Component {

  state = {
    url: '',
    error: null
  };

  handleUrlChange = (event) => {
    this.setState({url: event.target.value});
  }

  handleSubmit = (event) => {
    console.log("insert image " + this.state.url);
    if (validUrl.isUri(this.state.url)) {
      this.props.toggleImageDialog();
      this.props.onInsertImage(this.state.url);
    } else {
      this.setState({error: 'Invalid URL'});
    }
  }

  render() {
    return (
      <Modal isOpen={this.props.showAddImageDialog} toggle={this.props.toggleImageDialog} className={this.props.className}>
        <ModalHeader toggle={this.props.toggleImageDialog}>Insert image</ModalHeader>
        <ModalBody>
          <p>Enter the URL of the image:</p>
          <input type="url" value={this.state.value} onChange={this.handleUrlChange} />
          {this.state.error &&
          <p className="text-danger">{this.state.error}</p>
          }
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.props.toggleImageDialog}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }

}

export default AddImageDialog;
