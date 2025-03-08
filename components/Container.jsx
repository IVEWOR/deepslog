export default function Container({ children }) {
    return (
        <div className="max-w-[1080px] mx-auto px-4">
            {children}
        </div>
    );
}