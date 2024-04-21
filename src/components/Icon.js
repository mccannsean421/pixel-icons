import { useSelector } from "react-redux";
import styled from "styled-components";



export default function Icon({ name, svg }) {
    const iconColor = useSelector((state) => state.icon.iconColor);
    const iconSize= useSelector((state) => state.icon.size);

    function copySvg(e) {
        const svgData = e.currentTarget.innerHTML;

        const el = document.createElement("textarea");
        el.value = svgData;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    }

    return (
        <StyledIcon
            className="icon cursor-pointer"
            iconColor={iconColor}
            iconSize={iconSize}
        >
            {/* Apply inline style directly to the SVG element */}
            <div dangerouslySetInnerHTML={{ __html: svg }} onClick={(e) => copySvg(e)}></div>
        </StyledIcon>
    );
}

const StyledIcon = styled.div`
    svg {
        height: auto;
        width: ${props => props.iconSize ? props.iconSize : "100px"}px
    }
    path {
        fill: ${props => props.iconColor ? props.iconColor : "red"};
    }
`
