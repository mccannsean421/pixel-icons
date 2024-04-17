import Icon from "./Icon";


export default function Grid({icons, height}) {
    return (
        <div className="grid">
            {icons.map((icon, i) => <Icon key={icon.name} name={icon.name} svg={icon.svg} height={height}/>)}
        </div>
    )
}