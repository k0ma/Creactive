import React, { Component } from 'react';
import EditForm from '../create/CreateForm';
import {loadDetails, edit} from '../../models/product';
//import observer from '../../models/observer';

export default class EditPage extends Component{
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
        this.onEditSuccess = this.onEditSuccess.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }
    componentDidMount(){
        loadDetails(this.props.params.productId, this.onLoadSuccess);
    }
    onLoadSuccess(response){
        this.setState({
            name: response.name,
            link: response.link,
            description: response.description,
            inputDisabled:false
        });
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

        if(this.state.name.length<3){
            alert('Product name must be at least 3 characters long.');
        } else{
            edit(this.props.params.productId,
                this.state.name,
                this.state.link,
                this.state.description,
                this.onEditSuccess);
        }
        //create(this.state,name, this.state.description, this.onEditSuccess())
    }
    onEditSuccess(result){
        this.context.router.push("/catalog");
    }
    render(){
        return(
            <div>
                <h1>Edit Product</h1>
                <EditForm
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
EditPage.contextTypes = {
    router:React.PropTypes.object
};