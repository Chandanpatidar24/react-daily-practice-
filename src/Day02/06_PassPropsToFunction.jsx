// Day-02 - 06 - freecodecampreact-14


const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const currentDate = Date();
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};




// This is the functional version — much simpler
function CurrentDate(props) {
  // Access props directly as function parameters
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
}
