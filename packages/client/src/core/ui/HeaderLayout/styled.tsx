import styled from "styled-components/macro";
import background from "../../images/bg-shapes.svg";

const kHeaderHeight = "56px";

export const Header = styled.div`
    background: url(${background}), linear-gradient(90deg, #2d74da, #12a3b4);
    height: ${kHeaderHeight};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12),
        0 4px 2px -2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    z-index: 1;
    padding: ${(props) => `0 ${props.theme.spacing}px`};
`;

export const RightSectionContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 20%;
`;

export const LeftSectionContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 20%;
`;

export const Main = styled.div`
    display: flex;
    min-height: calc(100% - ${kHeaderHeight});
    margin-top: ${kHeaderHeight};
`;
