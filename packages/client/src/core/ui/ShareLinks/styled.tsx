import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
`;

export const ShareLink = styled.a.attrs((props) => ({
    target: "blank",
    rel: "noopener noreferrer",
}))`
    margin: 5px;
`;
