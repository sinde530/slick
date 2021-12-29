import React from 'react'
import './SidebarOption.css'

function SidebarOption({ Icon, title, addChannelOption }) {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOption_icon' />}
            {Icon ? (
                <h3>{title}</h3> // Icon이 있으면 title랜더링
            ) : (
                <h3 className='sidebarOption_channel'>
                    <span className='sidebarOption_hash'>#</span>{title}
                     {/* Icon 없으면 # title 랜더링 */}
                </h3>
            )}
        </div>

    )
}

export default SidebarOption
