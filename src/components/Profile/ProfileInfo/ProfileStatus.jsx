import React from 'react';
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.statusUser,
    }
    activateEditMode = () =>{
        this.setState ({
            editMode: true,
        })
    }
    deactivateEditMode = () =>{
        this.setState ({
            editMode: false,
        
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) =>{
        this.setState ({
            status: e.currentTarget.value,
        })
    }
    componentDidUpdate(prevProps,prevState){
       if (prevProps.statusUser !== this.props.statusUser){
           this.setState({
               status: this.props.statusUser,
           })
       }
    }

    render(){
        
        return(
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick = {this.activateEditMode}>{
                    !this.props.statusUser?  "status" 
                    :this.props.statusUser}</span>
                </div>}
                { this.state.editMode &&
                <div>
                    <input autoFocus={true}  onBlur={this.deactivateEditMode}  value={this.state.status} 
                    onChange={this.onStatusChange} />
                </div>}
            </>
        );
    }
}

export default ProfileStatus;