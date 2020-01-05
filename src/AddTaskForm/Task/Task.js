import React, {Component} from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.taskInput = React.createRef();
    }

    removeTask() {
        this.props.onRemove(this.props.text);

    }

    editTask() {
        this.props.onEdit(this.props.text, this.props.index);

    }

    render() {
        return (
            <li>
                {this.props.text}
                <button onClick={this.removeTask.bind(this)}>delete</button>
                <button onClick={this.editTask.bind(this)}>edit</button>
            </li>
        );
    }
}

export default Task;