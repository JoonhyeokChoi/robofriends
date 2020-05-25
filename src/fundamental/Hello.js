import React, {Component} from 'react';//destructuring. by doing so, we can use Component not React.Component
import './Hello.css';
import 'tachyons'

class Hello extends Component{
	render(){
		return(
			/*the reason we use className instead of class is we are using html syntax in js file. class is reserved syntax in js so we use className and jsx reads it and makes DOM.*/
			<div className="f1 tc">
				<h1>hello World</h1>
				<p>Welcome to React</p>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}

//when using function
const Hello2 = (props) => {
	return(
		<div className="f1 tc">
			<h1>hello! World</h1>
			<p>Welcome to React</p>
			<p>{props.greeting}</p>
		</div>
	);
}

export default Hello2;//in react component, we have to write export filename to let other source use this component.
