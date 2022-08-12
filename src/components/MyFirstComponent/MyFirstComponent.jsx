import React, {Component} from 'react';
import './MyFirstComponent.scss';
import flowers from './flowers.jpg';

class MyFirstComponent extends Component {
  render() {
    return (
      <div className={'MyFirstComponent'}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque cupiditate dignissimos excepturi fugiat, itaque molestias nobis recusandae reiciendis tempore! Adipisci cupiditate illum repudiandae sed ut voluptates? Deleniti, illum impedit maiores nostrum optio quas quasi tenetur velit.
        </p>
        <img src={flowers} className={'flowers-img'} alt="flowers" />
      </div>
    );
  }
}

export default MyFirstComponent;