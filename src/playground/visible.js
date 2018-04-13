
class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
    <div>
      <h1>Visible</h1>
      <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {this.state.visibility && (
        <div>
          <p>These are some details that you can now see!</p>
        </div>
      )}
    </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
// console.log('app is running');
// let visibility = false;
// // babel src/playground/visible.js --out-file public/scripts/app.js --presets=env,react --watch

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// }

// const render = () => {
//   const template = (
//     <div className = 'container'>
//       <h1>Visible</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide Details' : 'Show Details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>These are some details that you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));
// };

// render();