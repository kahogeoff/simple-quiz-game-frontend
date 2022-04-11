import React, { PureComponent } from "react";
import { useSpring, animated } from 'react-spring';

import Cloud_1 from "../../assets/textures/background/cloud1.png";
import Cloud_2 from "../../assets/textures/background/cloud2.png";
import Cloud_3 from "../../assets/textures/background/cloud3.png";
import Cloud_4 from "../../assets/textures/background/cloud4.png";
import Cloud_5 from "../../assets/textures/background/cloud5.png";
import Cloud_6 from "../../assets/textures/background/cloud6.png";
import Cloud_7 from "../../assets/textures/background/cloud7.png";
import Cloud_8 from "../../assets/textures/background/cloud8.png";
import Cloud_9 from "../../assets/textures/background/cloud9.png";

const clouds = [
  Cloud_1,
  Cloud_2,
  Cloud_3,
  Cloud_4,
  Cloud_5,
  Cloud_6,
  Cloud_7,
  Cloud_8,
  Cloud_9,
]

const SideScrollImage = (props) => {
    const cloud_height = props.cloud_height || 0.0; 
    const speed_factor = props.speed_factor || 1.0; 
    const cloud_id = props.cloud_id || 0;

    const styles = useSpring({
        loop: true,
        to: { x: -window.innerWidth * 0.1},
        from: { x: window.innerWidth},
        config: {
          duration: 30000 * speed_factor,
          
        }
    })
    return (
    <animated.div
        id={props.id || ""}
        style={{
          position: "absolute",
          top: cloud_height,
          ...styles
        }}
    >
      <img src={clouds[cloud_id]} ></img>
    </animated.div>
    );
}

class AnimatedBackground extends PureComponent {

  render() {
    
    const id = this.props.id || "";
    const size = this.props.size || {
        w: 100, h: 100
    };
    const scale = this.props.scale || 1.0;
    const anchor = this.props.anchor || {
        t: null, b: null, l: null, r: null
    };
    const obj_count = this.props.objectCount || 10;

    let render_list = [];

    for (let index = 0; index < obj_count; index++) {
      let speed_factor = (Math.random() * (1.8 - 0.5) + 0.5);
      let cloud_id = Math.floor(Math.random() * (8 - 0) + 0);
      //let height_factor = (Math.random() * (0.4 - 0.0) + 0.0);
      render_list.push( <SideScrollImage
        key={`cloud${index}`}
        id={`cloud_${index}`}
        speed_factor={speed_factor}
        cloud_id={cloud_id}
        cloud_height={window.innerHeight * (0.2 * (index%6))}
      />);
    }

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
          {render_list}
        </div>
    );
  }
}

export { AnimatedBackground };