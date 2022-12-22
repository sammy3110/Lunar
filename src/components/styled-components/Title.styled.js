import styled from "styled-components";

export const Title = styled.div`
    // border: 1px solid red;

    p {
        margin-top: .75em;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 600;

        span {
            position: relative;
            &:before {
                content: '';
                position: absolute;
                height: 10px;
                width: 100%;
                background-color: var(--primary-color-light);
                bottom: .2em;
            }
        }    

        i {
            font-style: normal;
            color: var(--primary-color);
        }
    }
`