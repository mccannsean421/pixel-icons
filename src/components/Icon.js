import { useSelector } from "react-redux";

export default function Icon({ name, svg }) {
    const size = useSelector((state) => state.icon.size);

    function copySvg(e) {
        const svgData = e.currentTarget.innerHTML;
        console.log("Copy svg");

        const el = document.createElement("textarea");
        el.value = svgData;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    }

    return (
        <div className="icon cursor-pointer">
            {/* Apply inline style directly to the SVG element */}
            <div dangerouslySetInnerHTML={{ __html: svg }} onClick={(e) => copySvg(e)}></div>
        </div>
    );
}
