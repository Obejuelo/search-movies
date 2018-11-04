import React ,{Component} from 'react';

export class ButtonBack extends Component {
    
    _goBack(){
        window.history.back()
    }

    render(){
        return(
            <div>
                <button onClick={this._goBack}>go back</button>
            </div>
        )
    }
}