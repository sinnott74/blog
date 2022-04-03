import { styled } from "@compiled/react";
import { Card } from "../Layout";

interface Animatable {
    animate: boolean;
}

// export const Container = styled(Card).attrs({ role: "alert" })<Animatable>`
export const Container = styled(Card)<Animatable>`
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.67);
    padding: 4px 4px 4px 12px;
    transition: transform 130ms ease-in;
    transform: ${(props) => (props.animate ? "translateY(0)" : "translateY(400%)")};
    will-change: transform;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    justify-content: space-between;
    flex-direction: row;
`;

export const Button = styled.button`
    color: white; /* change this */
`;
