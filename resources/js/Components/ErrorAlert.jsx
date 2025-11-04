export default function ErrorAlert({ message, className }) {
    return (
        <div
            role="alert"
            className={"bg-red-500 text-white p-4 rounded-xl " + className}
        >
            <span>{message}</span>
        </div>
    );
}
