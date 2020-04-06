import React, { Component } from "react";
import Modale from "./Modal";
import axios from "axios";
import { Carta } from "./Carta";

class App extends Component {
  constructor(props) {
    super(props);

    //my initial state
    this.state = {
      ordine: [
        {
          escursioni: "",
          taxi: "",
          lavanderia: "",
          id: ""
        }
      ]
    };
  }

  updateState = () => {
    axios.get("http://localhost:3000/placeholder")
        .then(res => {
          this.setState({
          ordine: res.data //set state
         });
    });
  };

  // this happens is componentWillMount before mounting my component.
  // i do so beacuse i need datas to load before my compoent will render
  // if not the component will be empty
  componentWillMount() {
    axios.get("http://localhost:3000/placeholder").then(res => {
      this.setState({
        ordine: res.data
      });
    });
  }


  render() {
    //if list exist i will map through, else not
    const { ordine } = this.state;
    const ordineList = ordine.length ? (
      ordine.map(user => {
        return (
          <Carta
            updateState={this.updateState}
            key={user.id}
            id={user.id}
            escursioni={user.escursioni}
            taxi={user.taxi}
            lavanderia={user.lavanderia}
          />
        );
      })
    ) : (
      <div className="center">no data</div>
    );
    return (
      <div className="container center py-3">
        <div className="center d-flex justify-content-center flex-wrap">
          {ordineList}
        </div>
        <Modale updateState={this.updateState} /> {/* function as props */}
      </div>
    );
  }
}

export default App;
