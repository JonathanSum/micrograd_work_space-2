import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const Toolbox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: calc(100vw - 60px);
  margin-bottom: 10px;
  button {
    margin-left: 10px;
    width: 2em;
  }
`;
const Box = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => (props.backColor ? props.backColor : "blue")};
  margin: 5px;
`;
const Zoom = ({ children }) => {
    const onClick = () => {
        alert("onClick : open popup");
    };
    const onContextMenu = e => {
        e.preventDefault();
        alert("onContextMenu : show info");
    };

    const renderBoxes = () => {
        let i;
        let arr = [];
        for (i = 0; i < 30; i++) {
            arr.push(
                <Box key={"b" + i} onClick={onClick} onContextMenu={onContextMenu} />
            );
            arr.push(
                <Box
                    key={"r" + i}
                    onClick={onClick}
                    onContextMenu={onContextMenu}
                    backColor="red"
                />
            );
            arr.push(
                <Box
                    key={"y" + i}
                    onClick={onClick}
                    onContextMenu={onContextMenu}
                    backColor="yellow"
                />
            );
            arr.push(
                <Box
                    key={"g" + i}
                    onClick={onClick}
                    onContextMenu={onContextMenu}
                    backColor="gray"
                />
            );
        }
        return arr;
    };
    return (
        <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>

                    <Toolbox>
                        <button onClick={() => zoomIn()}>+</button>
                        <button onClick={() => zoomOut()}>-</button>
                        <button onClick={() => resetTransform()}>x</button>
                    </Toolbox>

                    <TransformComponent>

                        <Container>{children}</Container>
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    );
};
export default Zoom