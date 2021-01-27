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
      [event.target.name]:
        event.target.value === "" ? null : parseFloat(event.target.value),
    });
  };

  checkBoxOnChange = (event) => {
    console.log(event.target.value);
    if (!event.target.checked) {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }
  };

  calculate = (event) => {
    var res = null;

    const arr = [
      this.state.fcalcone,
      this.state.fcalctwo,
      this.state.fcalcthree,
    ];
    var validateArr = arr.filter((x) => x !== null).length;

    if (validateArr === 1) {
      window.alert("Input tidak boleh hanya satu");
      console.error("Input tidak boleh hanya satu");
    }

    switch (event.target.value) {
      case "+":
        res = this.sum();
        break;
      case "-":
        res = this.subtraction();
        break;
      case "*":
        res = this.multiplication();
        break;
      case "/":
        res = this.division();
        break;
    }

    this.setState({
      hasil: res,
    });
  };

  sum = () => {
    var result = 0;

    const firstValue =
      this.state.fcalcone == null || this.state.fcalcone === ""
        ? null
        : this.state.fcalcone;
    const secondValue =
      this.state.fcalctwo == null || this.state.fcalctwo === ""
        ? null
        : this.state.fcalctwo;
    const thirdValue =
      this.state.fcalcthree == null || this.state.fcalcthree === ""
        ? null
        : this.state.fcalcthree;

    console.log(this.state.fcalcone);
    console.log(this.state.fcalctwo);
    console.log(this.state.fcalcthree);

    result = firstValue + secondValue + thirdValue;

    console.log(result);
    return result;
  };

  subtraction = () => {
    var result = 0;

    const firstValue =
      this.state.fcalcone == null || this.state.fcalcone === ""
        ? null
        : this.state.fcalcone;
    const secondValue =
      this.state.fcalctwo == null || this.state.fcalctwo === ""
        ? null
        : this.state.fcalctwo;
    const thirdValue =
      this.state.fcalcthree == null || this.state.fcalcthree === ""
        ? null
        : this.state.fcalcthree;

    if (firstValue === null) {
      result = secondValue - thirdValue;
    } else {
      result = firstValue - secondValue - thirdValue;
    }

    console.log(this.state.fcalcone);
    console.log(this.state.fcalctwo);
    console.log(this.state.fcalcthree);

    console.log(result);
    return result;
  };

  multiplication = () => {
    var result = 0;

    const firstValue =
      this.state.fcalcone == null || this.state.fcalcone === ""
        ? 1
        : this.state.fcalcone;
    const secondValue =
      this.state.fcalctwo == null || this.state.fcalctwo === ""
        ? 1
        : this.state.fcalctwo;
    const thirdValue =
      this.state.fcalcthree == null || this.state.fcalcthree === ""
        ? 1
        : this.state.fcalcthree;

    console.log(this.state.fcalcone);
    console.log(this.state.fcalctwo);
    console.log(this.state.fcalcthree);

    result = firstValue * secondValue * thirdValue;

    console.log(result);
    return result;
  };

  division = () => {
    var result = 0;
    const firstValue =
      this.state.fcalcone == null || this.state.fcalcone === ""
        ? 1
        : this.state.fcalcone;
    const secondValue =
      this.state.fcalctwo == null || this.state.fcalctwo === ""
        ? 1
        : this.state.fcalctwo;
    const thirdValue =
      this.state.fcalcthree == null || this.state.fcalcthree === ""
        ? 1
        : this.state.fcalcthree;

    if (firstValue === 1) {
      result = secondValue / thirdValue;
    } else {
      result = firstValue / secondValue / thirdValue;
    }

    console.log(this.state.fcalcone);
    console.log(this.state.fcalctwo);
    console.log(this.state.fcalcthree);

    console.log(result);
    return result;
  };

  render() {
    return (
      <div className="App">
        <div className="Calculator">
          {" "}
          <h1>Calculator</h1> <br></br>
          <p>
            <input
              type="number"
              name="fcalcone"
              onChange={this.inputOnChange}
            />{" "}
            <input
              type="checkbox"
              id="fcalcone"
              onChange={(e) => this.checkBoxOnChange(e)}
              value={this.state.fcalcone}
            ></input>
          </p>{" "}
          <br></br>
          <p>
            <input
              type="number"
              name="fcalctwo"
              onChange={this.inputOnChange}
            />{" "}
            <input
              type="checkbox"
              id="fcalctwo"
              onChange={(e) => this.checkBoxOnChange(e)}
              value={this.state.fcalctwo}
            ></input>
          </p>{" "}
          <br></br>
          <p>
            <input
              type="number"
              name="fcalcthree"
              onChange={this.inputOnChange}
            />{" "}
            <input
              type="checkbox"
              id="fcalcthree"
              onChange={(e) => this.checkBoxOnChange(e)}
              value={this.state.fcalcthree}
            ></input>
          </p>{" "}
          <br></br>
          <input type="button" className="button" onClick={this.calculate} value="+"></input>
          <input type="button" className="button" onClick={this.calculate} value="-"></input>
          <input type="button" className="button" onClick={this.calculate} value="*"></input>
          <input type="button" className="button" onClick={this.calculate} value="/"></input>
          <h2>Hasil : {this.state.hasil}</h2>
        </div>
      </div>
    );
  }
}

export default Calculator;
