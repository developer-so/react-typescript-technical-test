import search from './search_FILL0_wght400_GRAD0_opsz24.svg';
export default function Search() {
    return (
        <div className="flex bg-gray-100 rounded-full mt-[4px] mb-[12px]">
            <div className='flex ml-[12px]'>
                <img src={search} alt="Reply icon" />
            </div>
            <div className="p-[12px] text-[15px]">Search</div>
        </div>
    )
}
