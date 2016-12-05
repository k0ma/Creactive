import React, { Component } from 'react';

export default class CreateForm extends Component{
    render(){
        return(

            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Product name:</label>
                        <input className="form-control"
                               type="text"
                               name="name"
                               value={this.props.name}
                               onChange={this.props.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Product photo:</label>
                        <input className="form-control"
                               type="text"
                               name="link"
                               value={this.props.link}
                               onChange={this.props.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Product description:</label>
                        <textarea className="form-control"
                               name="description"
                               rows="6"
                               value={this.props.description}
                               onChange={this.props.onChange}/>
                    </div>
                        <input type="submit"
                               value="Save"
                               className="btn btn-default"
                               disabled={this.props.inputDisabled}/>
                </form>
            </div>
        )
    }
}