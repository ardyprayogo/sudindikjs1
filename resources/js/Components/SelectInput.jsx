import { forwardRef } from "react";

export default forwardRef(function SelectInput(
    { className = "", placeholder = "Pilih", ...props },
    ref
) {
    return (
        <select
            {...props}
            className={
                "select select-bordered rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 " +
                className
            }
            ref={ref}
        >
            <option hidden disabled>
                {placeholder}
            </option>
            {props.children}
        </select>
    );
});
