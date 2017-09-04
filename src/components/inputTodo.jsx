import React from 'react';

class InputToDo extends React.Component{
    constructor(props){
        super(props);
        // this.props={bool:false,value:''};

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
      
    }

    handleSubmit(event){
        this.props.formSubmit(event.target.value);
        
        event.preventDefault();
    }
    render(){
        return(
           <form onSubmit={this.handleSubmit}>
               <input type="text" value={this.props.value} onChange={this.handleChange}/>
           </form>
        )
    }
}

export default InputToDo;