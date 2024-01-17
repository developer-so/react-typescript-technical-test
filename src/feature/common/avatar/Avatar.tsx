import { AvatarSize } from './AvatarSize'

export default function Avatar({ size = AvatarSize.medium }) {
    return (
        <a className={'flex justify-center items-center size-[44px] '} href="/">
            <div className={`size-[${size}px] bg-gray-400 rounded-full`} />
        </a>
    )
}
