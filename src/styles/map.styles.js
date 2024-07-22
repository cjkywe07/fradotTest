import styled from "@emotion/styled";
import { device } from "./global.styles";

export const Container = styled.div``;

export const MapWrap = styled.div``;

export const HeaderPartWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 150;
`;

export const Bar = styled.div`
    position: absolute;
    width: 70px;
    height: 7px;
    border-radius: 10px;
    background-color: #004c80;
`;

export const SideWrap = styled.div`
    position: absolute;
`;

export const MenuBtn = styled.div`
    position: absolute;
    margin: 10px 10px;
    visibility: hidden;
    top: 55px;
    left: 10px;
    cursor: pointer;
    z-index: 100;
`;

export const SideBar = styled.div`
    position: relative;
    margin: 30px;
    margin-top: 65px;
    padding: 20px;
    width: 300px;
    height: calc(100vh - 100px);
    background-color: #f0f8ff;
    border-radius: 15px;
    box-shadow: 9px 10px 10px 7px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: scroll;
    transition: 1000ms;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 40px;
    z-index: 100;

    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (${device.mobileML}) {
        padding: 16px;
        padding-top: 12px;
    }

    @media screen and (max-width: 500px) {
        width: calc(100% - 30px);
        height: calc(50vh);
        margin: 0 auto;
        position: fixed;
        bottom: 15px;
        left: 15px;
    }
`;

export const CategoryBoxWrap = styled.div`
    @media screen and (${device.mobileML}) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export const CloseBtn = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
`;

export const Category = styled.div`
    padding: 10px;

    @media screen and (${device.mobileML}) {
        width: 50%;
        padding: 10px 5px;
    }
`;

export const CateTitle = styled.h2`
    margin-bottom: 5px;

    @media screen and (${device.mobileML}) {
        font-size: 16px;
    }
`;

export const InfraBtnWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 5px;

    @media screen and (${device.mobileML}) {
        justify-content: start;
        margin: 0;
    }
`;

export const Infra = styled.button`
    width: 100px;
    margin: 5px 0;
    padding: 7px 10px;
    font-size: 16px;
    border: 1px solid #d2d2d2;
    border-radius: 50px;
    background-color: white;
    box-shadow: 2px 2px 1px rgb(137 137 137 / 19%);
    cursor: pointer;

    @media screen and (${device.mobileML}) {
        width: 68px;
        margin: 5px;
        margin-left: 0;
        padding: 6px 0;
        font-size: 12px;
    }
`;

export const Search = styled.button`
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    background-color: #756bff;
    width: calc(100% - 10px);
    padding: 10px;
    margin: 0 auto;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #6257ff;
    }

    @media screen and (${device.mobileML}) {
        font-size: 16px;
    }
`;

export const DivArea = styled.div`
    position: absolute;
    background: #fff;
    border: 1px solid #888;
    border-radius: 3px;
    font-size: 14px;
    top: -5px;
    left: 15px;
    padding: 2px 5px;
`;

export const NameArea = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 0px 4px #888;

    &::after {
        content: "";
        position: absolute;
        margin-left: -12px;
        left: 50%;
        bottom: -12px;
        width: 22px;
        height: 12px;
        background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
    }
`;

export const WaitBox = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 100;

    & > div {
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
    }
`;
