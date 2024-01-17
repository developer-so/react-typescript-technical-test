interface Prop {
    icon: string,
    label: string,
}

export default function ActionItem(prop: Prop) {
    return (
        <div className="flex grow">
            <img src={prop.icon} alt="Reply icon" width={18} height={18} />
            <span className="text-[13px] px-[4px]">{prop.label}</span>
        </div>
    )
}
