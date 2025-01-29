import React from 'react'

export default function LinkButton({ link, label, color }) {

    return (
        <button
            className="link-button"
            style={{ backgroundColor: color }}
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        >
            {label}
        </button>
    )
}
