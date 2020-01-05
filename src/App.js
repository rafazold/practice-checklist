import React, {Component} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./AddTaskForm/Task/Task";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: []
      };
    }

    addTask(task) {
      this.setState({
        tasks: [task, ...this.state.tasks]
      });
    }

  removeTask(task) {
      this.setState({
        tasks: this.state.tasks.filter(t => t !== task)
      });
  }

  editTask(task, index) {
        const newTask = prompt('please write your new task here');
        this.setState(state => {
            const tasks = state.tasks.map((item, i) => {
                if (i !== index) {
                    return item
                } else {
                    return newTask
                }
            });
            return {tasks}
        })
      // alert(newTask)
  }

    render() {
        return (
            <div className="App">
                <AddTaskForm onAdd={this.addTask.bind(this)} />
                <ul>
                    {this.state.tasks.map((task, i) => {
                    return <Task key={i}
                                 index={i}
                                 text={task}
                                 onRemove={this.removeTask.bind(this)}
                                 onEdit={this.editTask.bind(this)}
                    />
                })}
                </ul>
            </div>
        );
    }
}

export default App;