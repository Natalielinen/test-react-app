import React, {useEffect} from 'react';
import {useState} from 'react';

const ProfileStatusWithHooks = (props) => {


    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);

    }

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    };


    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deActivateEditMode} type="text"
                       value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;