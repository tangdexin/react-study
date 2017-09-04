import React from 'react';
import ReactDOM from 'react-dom';
import InputTodo from './components/inputToDo.jsx';
// import Doing from './components/doing.jsx';
// import Done from './components/done.jsx';
import List from './components/list.jsx';

// const listDetail = {
//     value:'',
//     bool:'false'
// }

class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state={bool:false,value:''};
        this.handleToDoListSubmit=this.handleToDoListSubmit.bind(this);
    }

    handleToDoListSubmit(value){
        this.setState({bool:false,value})
        //alert(value);
    }
    render(){
        return(
            <div>
                Todolist
                <InputTodo
                formSubmit={this.handleToDoListSubmit}
                />
                <List/>
            </div>
        );
    }
}


ReactDOM.render(
    <Todolist/>,document.getElementById('app')
);