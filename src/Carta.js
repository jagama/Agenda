import React, { Component } from "react";
import { Card, Button } from "antd";
import axios from "axios";

export class Carta extends Component {
  constructor(props) {
    super(props);
    // card state
    // set my init state and define count to 0
    this.state = {
      seconds: 0
    };
  }

  //delete card function
  deleteCard = e => {
    e.preventDefault();
    let deleteUser = async () => {
      try {
        await axios.delete(
          `http://localhost:3000/placeholder/${this.props.id}`// to delete my card, i've to delete the relative id in my DB
        );
        
        // after deletet, i've to reasset react to the new state
        // i've to re-render to update react (not so good, i know)
        // using function updateState passata as props
        this.props.updateState();
      } catch (err) {
        console.log(err);
      }
    };
    deleteUser();
  };

  tick() {
    // grab the prevState and modify it => 0 + 1
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  // function executed only after my component is mounted
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  // function executed when will unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Card
          className="mx-3"
          title="Ordine"
          extra={
            <Button
              type="default"
              style={{ background: "#e3ebfc" }}
              shape="round"
              onClick={this.deleteCard}>
              Richiesta Completata
            </Button>
          }
          style={{ width: 300, margin: 10 }}>
          <React.Fragment>
            <ul>
              <li><h5>Escursioni: {this.props.escursioni}</h5></li>
              <li><h5>Taxi: {this.props.taxi}</h5></li>
              <li><h5>Lavanderia: {this.props.lavanderia}</h5></li>
            </ul>
          </React.Fragment>
          <h6 className="text-muted">
            Tempo trascorso, minuti:  {Math.floor(this.state.seconds / 60)}
            {/* e {" "}
            {this.state.seconds % 60} secondi  */}
          </h6>
        </Card>
      </div>
    );
  }
}
export default Carta;
