import { AvatarSize } from './AvatarSize'

export default function Avatar({ size = AvatarSize.medium }) {

    return (
        <div className={`flex justify-center items-center size-[44px]`} >
            <div className={`bg-gray-400 rounded-full`} style={{ width: `${size}`, height: `${size}` }} />
        </div >
    )
}
