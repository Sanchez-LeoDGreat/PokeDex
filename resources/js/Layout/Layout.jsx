import Header from "../Components/Header";

export default function Layout({ children }){
    return (
        <div>
            <Header/>
            <div className="p-2">
                { children }
            </div>
        </div>
    );
}