import * as React from 'react';

import {
    TransformWrapper,
    TransformComponent
} from "react-zoom-pan-pinch";


export default function Zoom({ children }) {

    const [isMoveable, setIsMoveable] = React.useState(false);

    const onDrag = () => {
        setIsMoveable(true)
        //etc
    }
    const onStop = () => {
        setIsMoveable(false)
        //etc 

    }


    return (
        <>
            <TransformWrapper
                initialScale={1}
                disabled={isMoveable}
                minScale={2}
                maxScale={20}
                limitToBounds={false}
                pinch={{ step: 5 }}
            >

                <TransformComponent
                    contentClass='main'
                    wrapperStyle={{ height: '50vh', width: '100vw' }}>
                    {children}


                </TransformComponent>
            </TransformWrapper>

        </>
    );
}