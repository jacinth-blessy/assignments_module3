import React, { useState } from "react";

export default function ConditionalStyling() {
    const [isRed, setIsRed] = useState(true);

    return (
        <div>
        <button onClick={() => setIsRed(r => !r)}>Toggle</button>
        <div className={isRed ? 'red' : 'blue'}>The text that changes color</div>
        </div>
    );
}
