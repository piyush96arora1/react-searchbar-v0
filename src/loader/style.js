import styled from "styled-components";
export const LoaderStyle= styled.div`
.saving {
    font-size: 40px;
}

.saving span {
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    color:${({color})=>color?color:"black"}
}

.saving span:nth-child(2) {
    animation-delay: .2s;
}

.saving span:nth-child(3) {
    animation-delay: .4s;
}

@keyframes blink {
    0% {
        opacity: .2;
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: .2;
    }
}`