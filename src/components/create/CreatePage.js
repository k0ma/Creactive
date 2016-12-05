import React, { Component } from 'react';
import CreateForm from './CreateForm';
import {create} from '../../models/product';
//import observer from '../../models/observer';

export default class CreatePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            link: '',
            description: '',
            inputDisabled: true
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onCreateSuccess = this.onCreateSuccess.bind(this);
    }
    onChangeHandler(event){
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        if (event.target.name==='name'){
            if (event.target.value.length<3){
                newState.inputDisabled=true;
            }else {
                newState.inputDisabled=false;
            }
        }
        this.setState(newState);
    }
    onSubmitHandler(event){
        event.preventDefault();

        if(this.state.name<3){
            alert('Product name must be at least 3 characters long.')
        }
        create(this.state.name,
            this.state.link,
            this.state.description,
            this.onCreateSuccess);

    }
    onCreateSuccess(result){
        this.context.router.push("/catalog");
    }
    render(){
        return(
            <div>
                <h1>Create Product</h1>
                <CreateForm
                    name={this.state.name}
                    link={this.state.link}
                    description={this.state.description}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                />
            </div>
        )
    }
}
CreatePage.contextTypes = {
    router:React.PropTypes.object
};