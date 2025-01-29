import React from 'react'

export default function LinkButton({ link, label}) {

    return (
        <button
            className="link-button"
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        >
            {label}
        </button>
    )
}
