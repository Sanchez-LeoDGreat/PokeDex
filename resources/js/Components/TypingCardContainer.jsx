export default function TypingCardContainer({ children }){
    return (
        <ul className="flex flex-wrap gap-1 justify-center">
            { children }
        </ul>
    );
}
