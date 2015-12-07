

ReactDOM.render(<ContactManager />, document.getElementById("component-container"));
// ReactDOM.render(<AddContact />, document.getElementById("modal-container"));

/*1. ReactDOM provides all the dom-specific methods. This renders the react element into the container and returns the reffereence to the component. This controls the content that
is displayed in the browser, by rendering the desired output into the reffered DOM.

2. The life-cycle of the functions used in this code is: 1st getInitialState is executed, then render function and then componentDidMount. setState function automatically calls
the render function after it gets executed.

3. sets the state of "secondsElapsed" from the 2nd to the nth iteration, which increments the state by 1 in each step and the after each increment it automatically calls the
 render function hence after each increment, the new state is displayed in the broswer. */