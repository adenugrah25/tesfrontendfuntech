import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fcalcone: null,
      fcalctwo: null,
      fcalcthree: null, 
      hasil: 0,
    };
  }

  inputOnChange = (event) => {
     this.setState({
        [event.target.name]: event.target.value,
     });
  };

  checkBoxOnChange = (event) => {
    if (event.target.checked) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }  
  };

  calculate = (event) => {
    var res = null;
    const firstValue = this.state.fcalcone != null ? parseFloat(this.state.fcalcone) : null;
    const secondValue = this.state.fcalctwo != null ? parseFloat(this.state.fcalctwo) : null;
    const thirdValue = this.state.fcalcthree != null ? parseFloat(this.state.fcalcthree) : null;
     

    switch (event.target.value) {
      case "+":
        res = firstValue + secondValue + thirdValue;
        break;
      case "-":
        res = firstValue - secondValue - thirdValue;
        break;
      case "*":
        res = firstValue * secondValue * thirdValue;
        break;
      case "/":
        res = firstValue / secondValue / thirdValue;
        break;
    }

    this.setState({
      hasil: res
    });

  };

  render() {
    return (
      <div className="App">
        <div className="Calculator">
          {" "}
          <h1>Calculator</h1> <br></br>
          <p>
            <input type="number" name="fcalcone" onChange={this.inputOnChange} />{" "}
            <input type="checkbox" id="fcalcone" onChange={(e) => this.checkBoxOnChange(e)} value={this.state.fcalcone} ></input>
          </p>{" "}
          <br></br>
          <p>
            <input type="number" name="fcalctwo" onChange={this.inputOnChange} />{" "}
            <input type="checkbox" id="fcalctwo" onChange={(e) => this.checkBoxOnChange(e)} value={this.state.fcalctwo} ></input>
          </p>{" "}
          <br></br>
          <p>
            <input type="number" name="fcalcthree" onChange={this.inputOnChange} />{" "}
            <input type="checkbox" id="fcalcthree" onChange={(e) => this.checkBoxOnChange(e)} value={this.state.fcalcthree} ></input>
          </p>{" "}
          <br></br>
          <input type="button" onClick={this.calculate} value="+"></input>
          <input type="button" onClick={this.calculate} value="-"></input>
          <input type="button" onClick={this.calculate} value="*"></input>
          <input type="button" onClick={this.calculate} value="/"></input>
          <h2>Hasil : {this.state.hasil}</h2>
        </div>
      </div>
    );
  }
}

export default Calculator;
