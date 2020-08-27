import React from 'react';
import RemoveButton from './RemoveButton';
import '../styles/Task.css';

export default class Task extends React.Component{
	constructor(props){
		super(props);
		this.taskName = props.taskName;
		this.taskStatus = "active";
	}
	render = () => (
		<li>
			<span className="task">{this.taskName}</span>
			<RemoveButton />
		</li>
	);
}
