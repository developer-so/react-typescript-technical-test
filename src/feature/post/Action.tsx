import ActionItem from './ActionItem';
import reply from './icon/chat_bubble_FILL0_wght400_GRAD0_opsz20.svg';
import repost from './icon/cached_FILL0_wght400_GRAD0_opsz20.svg';
import like from './icon/favorite_FILL0_wght400_GRAD0_opsz20.svg';
import bookmark from './icon/bookmark_FILL0_wght400_GRAD0_opsz20.svg';
import share from './icon/ios_share_FILL0_wght400_GRAD0_opsz20.svg';

export default function Action() {
    return (
        <div className="flex items-end h-[32px]">
            <ActionItem icon={reply} label='0' />
            <ActionItem icon={repost} label='0' />
            <ActionItem icon={like} label='0' />
            <ActionItem icon={share} label='0' />
            <div className='size-[34.75px] mb-[-17px]'>
                <img src={bookmark} alt="Reply icon" width={18.75} height={18.75} />
            </div>
            <div className='size-[34.75px] mb-[-17px]'>
                <img src={share} alt="Reply icon" width={18.75} height={18.75} />
            </div>
        </div>
    )
}
