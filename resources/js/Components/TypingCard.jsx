export default function TypingCard({ type, className }){
    return (
        <li className={`${className} uppercase rounded-sm px-2`}>{ type }</li>
    );
}