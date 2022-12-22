import styled from "styled-components";

const p_color = 'var(--primary-color)';

export const PrimaryButton = styled.button`
    border: 1px solid ${p_color};
    padding: ${({varient}) => {return varient !== "fill" ? '.5em 1em' : '.7em 1.5em'}};
    border-radius: ${({varient}) => {return varient !== "fill" ? '20px' : '12px'}};
    color: ${({varient}) => {return varient !== "fill" ? p_color : '#fff'}};
    font-size: .9rem;
    background-color: ${({varient}) => {return varient !== "fill" ? 'transparent' : p_color}};

    &:hover {
        color: ${({varient}) => {return varient === "fill" ? p_color : '#fff'}};
        background-color: ${({varient}) => {return varient === "fill" ? 'transparent' : p_color}};
    }
`