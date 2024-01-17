

export default function TrendPlaceholder() {
    const min = 100;
    const max = 170;
    const rand = (min + Math.random() * (max - min)).toFixed();
    const min2 = 100;
    const max2 = 170;
    const rand2 = (min2 + Math.random() * (max2 - min2)).toFixed();

    console.log(rand)
    console.log(rand2)
    return (
        <div className="px-[16px] py-[12px]">
            <div className={`h-[15px] bg-gray-200 w-[${rand}px] rounded-md`} />
            <div className={`h-[20px] bg-gray-300 w-[${rand2}px] mt-[4px] rounded-lg`} />
        </div>
    )
}
