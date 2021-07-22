import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    height: 100%;
    min-height: 100%;
    justify-content: space-around;
    flex-direction: column;
    overflow-y: auto;
`;

export const Header = styled.div`
    flex-shrink: 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    height: 150px;
    margin: 16px;
`;

export const Body = styled.div`
    width: 100%;
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
`;

export const Links = styled.div`
    flex-grow: 1;
`;

export const Footer = styled.div``;

export const Version = styled.div`
    float: right;
    padding: 16px;
    font-size: 14px;
    opacity: 0.54;
`;
