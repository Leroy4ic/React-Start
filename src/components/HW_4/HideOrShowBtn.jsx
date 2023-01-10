import React, {Component} from 'react';
import './HideOrShowBtn.scss';
import HiddenOrVisibleObject from "./HiddenOrVisibleObject";

class HideOrShowBtn extends Component {
  state = {
    showPicture:true,
  }
  render() {


    return(
      <div>
        {this.state.showPicture && <HiddenOrVisibleObject isVisible={true}/>}
        <button onClick={()=>this.setState({showPicture:!this.state.showPicture})}>
        Hide/show picture
      </button>
      </div>
    );
  }
}

export default HideOrShowBtn;