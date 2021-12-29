import React from 'react'
import './Header.css'
import Avatar from '@material-ui/core/Avatar';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <Avatar
                  className='header_avatar'
                  alt=''
                  src=''
                />
                <QueryBuilderIcon/>
            </div>

            <div className='header_search'>
                <SearchIcon/>
                <input placeholder='jun' className='header_input'/>
            </div>
            <div className='header_right'>
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
