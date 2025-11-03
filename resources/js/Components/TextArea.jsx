import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextArea(
    { rows = 4, value = "", className = "", isFocused = false, ...props },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <textarea
            {...props}
            type="text"
            rows={rows}
            className={
                "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 " +
                className
            }
            ref={localRef}
            defaultValue={value}
        ></textarea>
    );
});
