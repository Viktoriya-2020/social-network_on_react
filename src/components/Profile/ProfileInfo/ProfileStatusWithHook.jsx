import React from 'react';
import s from './ProfileStatus.module.css'
import { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.statusUser);

    useEffect(() => {
        setStatus(props.statusUser)
    }, [props.statusUser])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)

        props.updateUserStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{
                        !props.statusUser ? "status"
                            : props.statusUser}</span>
                </div>}
            {editMode &&
                <div>
                    <input onBlur={deactivateEditMode} autoFocus={true} value={status}
                        onChange={onStatusChange} />
                </div>}
        </>
    );
}


export default ProfileStatusWithHooks;