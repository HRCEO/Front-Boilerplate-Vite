import React from 'react';

interface DashBoardLayOutType {
    Count: number,
    Component: any
}

const DashBoardLayOut:React.FC<DashBoardLayOutType> = ({Count,Component}) => (
    <>
        <div>
            {Count}
        </div>
        <div>
            {Component}
        </div>
    </>
);

export default DashBoardLayOut;
