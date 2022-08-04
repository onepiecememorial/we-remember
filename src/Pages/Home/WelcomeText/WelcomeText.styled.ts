import styled from "styled-components";

export const WelcomeSection = styled.section`
    width: 100%;
    height: 180vh;
    position: relative;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > *{
        color: inherit;
        background-color: transparent;
    }

    &>div.slider{
        width: 100%;
        height: 100vh;
        position: sticky;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &>div.marker{
        position: absolute;
        width: 100%;
        height: 0;
        top: 150vh;
        left: 0;
    }
`

export const Title = styled.h1`
    width: 100%;
    padding-top: 10vh;
    padding-bottom: 25vh;
    font-size: 2em;
    color: inherit;
`

export const TextContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    color: inherit;
`

export const Text = styled.p`
    position: relative;
    z-index: 99;
    width: 80%;
    color: inherit;
    font-size: 1.2em;
    line-height: 1.5;
    text-align: center;
    background-color: black;
    opacity: 1;
    transition: 1s opacity ease-out;
    &.hidden{
        opacity: 0;
        z-index: -9;   /* Cannot select text if this is not there*/
    }
`

export const HiddenText = styled.h3`
    position: absolute;
    z-index: 9;
    width: 70%;
    color: inherit;
    font-size: 1.2em;
    text-align: center;
    line-height: 1.5;
`