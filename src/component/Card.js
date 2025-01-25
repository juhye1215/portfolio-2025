import React, { useContext } from 'react';


export default function Card({ onClick, selected, title, itemId }) {

    return (
        <div
            onClick={() => onClick()} // 클릭 시 선택 상태 토글
            style={{
                width: '160px',
                margin: '10px',
                cursor: 'pointer',
                backgroundColor: selected ? 'lightgreen' : 'lightgray',
            }}
            tabIndex={0}
        >
            <div className="card" style={{ padding: '10px', border: '1px solid #ccc' }}>
                <div>{title}</div>

            </div>
        </div>
    );
}
