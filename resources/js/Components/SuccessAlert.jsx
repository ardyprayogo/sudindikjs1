export default function SuccessAlert({ message, className }) {
    return (
        <div
            role="alert"
            className={"bg-green-500 text-white p-4 rounded-xl " + className}
        >
            <span>{message}</span>
        </div>
    );
}
