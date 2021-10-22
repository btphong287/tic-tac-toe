import React from 'react';
import './index.css';

export function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

// class Square extends React.Component {
//   render() {
//     return (
//       <button 
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }
