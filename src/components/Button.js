import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 5px solid #BAABBD;
    color: #BAABBD;
    margin: 1em;
    padding: 0.25em 1em;
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;

    &:hover {
        filter: brightness(75%);
    }
    &:focus, button:active {
        outline: none;
    }
    &:active {
        filter: brightness(50%);
    }
`

export default Button