import styled from "styled-components/macro";
import background from "../../images/bg-shapes.svg";
import { Heading2 } from "../Typography/Typography";
import { Link } from "../Link/Link";

const kHeaderHeight = "56px";

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: ${(props) => `${props.theme.palette.background.darker}`};
`;

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

export const HeaderTitle = styled(Heading2)`
    font-size: 1.5rem;
    margin: 0;
`;

export const StyledHeaderLink = styled(Link)`
    text-decoration: none;
    margin: auto;
`;

export const Main = styled.div`
    display: flex;
    min-height: calc(100vh - ${kHeaderHeight});
    margin-top: ${kHeaderHeight};
`;

export const IconButton = styled.div``;
export const Title = styled.h1``;
