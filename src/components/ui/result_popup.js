import React, { PureComponent } from "react";
import { useSpring, animated } from 'react-spring'

import Image_Tick from "../../assets/textures/ui/green_checkmark.png";
import Image_Cross from "../../assets/textures/ui/red_cross.png";

class ResultPopup extends PureComponent {

  render() {
    
    const id = this.props.id || "";
    const size = this.props.size || {
        w: 100, h: 100
    };
    const scale = this.props.scale || 1.0;
    const anchor = this.props.anchor || {
        t: null, b: null, l: null, r: null
    };

    return (
        <div
          id={id}
          style={{ 
            position: "absolute",
            width: size.w * scale,
            height: size.h * scale,
            top: anchor.t,  
            left: anchor.l, 
            bottom: anchor.b,  
            right: anchor.r,
          }}
        >
          {/* <img src={Cloud}></img> */}
        </div>
    );
  }
}

export { ResultPopup };