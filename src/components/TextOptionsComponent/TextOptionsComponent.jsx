import React, {Component} from 'react';
import './TextOptionsComponent.scss';

const text1 = "Detta är en pålitlig säljare med säljarmärket Kompis. Varan säljs genom Sellpy Circle och skickas direkt från säljaren. Retur och reklamationsrätt gäller som vanligt.";
const text2 = "Varan har tecken på användning men varit väl omhändertagen. Defekter förekommer.";

class TextOptionsComponent extends Component {
  render() {
    return (
      <div className='hw2'>
        <div className='text1'>{text1}</div>
        <div className='text2'>{text2}</div>
      </div>

    );
  }
}

export default TextOptionsComponent;