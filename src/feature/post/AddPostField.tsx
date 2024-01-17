import { useState } from "react";

export default function AddPostField() {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    const handleInput = (event: any) => {
        event.target.rows = Math.min(3, event.target.value.split('\n').length);
    };

    return (
        <textarea
            rows={1}
            cols={30}
            style={{ resize: 'none', height: '20px', lineHeight: '20px', overflow: 'hidden', whiteSpace: 'nowrap' }}
            value={value}
            onChange={handleChange}
            onInput={handleInput}
        />
    );
}
