export default function Icon({name, svg, height}) {
    return (
        <div className="icon">
            <div dangerouslySetInnerHTML={{ __html: svg }} style={{height: `${height}px`}}/>
        </div>
    )
}