import styled from "styled-components";

const HeaderLogoLeft = styled.header`
    text-align: left;
    margin-top: 20px;
    margin-left: 40px;
    position: relative !important;
    display: flex;
    flex-direction: row;
    justifyContent: space-between;
    
    &::after {
        content: '' !important;
        position: relative !important;
        margin-top: -20px;
        margin-left: -400px;
        // margin-right: -1000px;
        width: 200%;
        box-shadow: 0px 0px 1px 0.6px rgba(0, 0, 0, 0.3) !important;
        z-index: -1 !important;
        display: block;
    }
`

export { HeaderLogoLeft }