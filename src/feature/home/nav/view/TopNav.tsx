import React from 'react'
import Avatar from '../../../common/avatar/Avatar'
import { AvatarSize } from '../../../common/avatar/AvatarSize'
import Logo from '../../../common/logo/Logo'
import IconPlaceholder from '../../../common/icon/IconPlaceholder'

export default function TopNav() {
    return (
        <div className='h-[53px]'>
            <div className="flex items-center h-[53px] px-[16px] w-full bg-white fixed top-0 border-t-[1px]">
                <Avatar size={AvatarSize.small} />
                <div className="flex grow justify-center items-center">
                    <Logo />
                </div>
                <div className="flex justify-center items-center">
                    <IconPlaceholder />
                </div>
            </div>
        </div>
    )
}
