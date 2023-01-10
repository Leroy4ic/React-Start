import React, {Component} from 'react';
import "./HiddenOrVisibleObject.scss";
import catPicture from "./cat.jpg"

class HiddenOrVisibleObject extends Component {

  componentDidMount() {
    // alert("Компонент открылся");
    console.log("Компонент открылся")
  }
  componentWillUnmount() {
    // alert("Компонент закрылся")
    console.log("Компонент закрылся")
  }

  render() {
    const {isVisible} = this.props;

    return  isVisible&&(
      <div>
        <img src={catPicture} alt="cat-picture"/>
      </div>
    );
  }
}

export default HiddenOrVisibleObject;