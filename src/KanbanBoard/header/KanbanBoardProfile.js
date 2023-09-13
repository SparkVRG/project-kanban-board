import React, { useState } from 'react';
import './KanbanBoardProfile.css';
import userAvatar from './user-avatar.svg';

function KanbanBoardProfile() {
    let [profileIsActive, setProfileIsActive] = useState(false);

    return (
            <>
                <button className='header__profile' onClick={() => setProfileIsActive(!profileIsActive)}>
                    <img className='header__user-avatar' src={userAvatar} alt='User avatar' />
                    <div className={profileIsActive ? 'header__arrow header__arrow_active' : 'header__arrow'}></div>
                </button>
                <ul className={profileIsActive ? 'header__menu-list header__menu-list_active' : 'header__menu-list'}>
                    <li className='header__menu-item'>Profile</li>
                    <li className='header__menu-item'>Logout</li>
                </ul>
            </>
    );
}

export default KanbanBoardProfile;