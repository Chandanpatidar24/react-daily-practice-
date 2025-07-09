// Day-02 - 05 - freecodecampreact-13



class MyComponent extends React.Component  {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <h1>My First React Component!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
