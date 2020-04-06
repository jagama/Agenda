import { Modal, Button } from "antd";
import React from "react";
import "antd/dist/antd.css";
import axios from "axios";

class Modale extends React.Component {
  constructor(props) {
    super(props);
 // initial state
    this.state = {
      visible: false
    };
  }

  // show || not modal component
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  //e = event,obvious -.-
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value // input interceptor
    });
  };

  //quick & dirty clear-input to clear all inputs
  clear = () => {
    let noo = document.getElementsByClassName("foo");
    for (let i = 0; i < noo.length; i++) {
      noo[i].value = "";
    }
  };


  // POST content
  handleClick = e => {
    e.preventDefault();
    let postUser = async () => {
      try {
        const createUser = await axios.post(
          "http://localhost:3000/placeholder",
          {
            escursioni: this.state.escursioni,
            taxi: this.state.taxi,
            lavanderia: this.state.lavanderia,
            id: ""
          }
        );
        this.props.updateState(); // recall updateState passed as props to re-render after POST
        console.log(createUser);
      } catch (err) {
        console.error(err);
      }

      // close modal and input clear
      this.setState({
        visible: false
      });
    };
    postUser();
    this.clear();
  };

  render() {
    return (
      <div className="my-3">
        <Button type="primary" onClick={this.showModal}>
          Richiedi Servizi
        </Button>
        <Modal
          title="Hotel"
          visible={this.state.visible}
          footer={[null]}>
          <div className="container center">
            <input
              className="foo"
              type="text"
              placeholder="Escursioni"
              name="escursioni"
              value={this.state.value}
              onChange={this.handleChange}/>
            <input
              className="foo"
              type="text"
              placeholder="Taxi alle ore"
              name="taxi"
              value={this.state.value}
              onChange={this.handleChange}/>
            <input
              className="foo"
              type="text"
              placeholder="Lavanderia "
              name="lavanderia"
              value={this.state.value}
              onChange={this.handleChange}/>
            <Button type="btn-success" shape="round" onClick={this.handleClick}>
              Fatto
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Modale;
