import settings from '../icon/settings_FILL0_wght400_GRAD0_opsz24.svg';
export default function Tab() {
    return (
        <div className="border-b border-gray-200 ">
            <nav className="flex min-h-[53px]" aria-label="Tabs" role="tablist">

                <a className="flex flex-1 justify-center hover:bg-gray-200" href="/">
                    <div className="flex flex-col text-[15px] font-semibold active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                        <span className="mt-auto">For you</span>
                        <div className="mt-auto border-b-4 rounded-full border-transparent hs-tab-active:border-sky-500"></div>
                    </div>
                </a>
                <a className="flex flex-1 justify-center hover:bg-gray-200 duration-200" href="/">
                    <div className="flex flex-col text-[15px] font-medium text-[#526471]" id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                        <span className="mt-auto">Following</span>
                        <div className="mt-auto  border-b-4 rounded-full border-transparent hs-tab-active:border-sky-500"></div>
                    </div>
                </a>
                <div className='flex justify-center size-[38px] px-[8px] mx-[8px] my-auto '>
                    <img src={settings} alt="Settings icon" />
                </div>
            </nav>
        </div >
    )
}