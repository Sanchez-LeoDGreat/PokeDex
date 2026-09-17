export default function Header(){
    const iconUrl = "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/3840px-Pok%C3%A9_Ball_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail";

    return (
        <nav className="bg-black p-2 flex md:flex-row flex-col place-items-center justify-between sticky top-0 z-50 shadow-lg">
            <div className="flex place-items-center gap-1">
                <img src={iconUrl} alt="PokéDex" className="w-14"/>
                <h1 className="text-white">PokéDex</h1>
            </div>
            <div className="flex pr-1 w-full md:w-auto">
                <form action="" className="w-full flex md:w-auto">
                    <div className="h-10 flex w-full gap-0.5 md:w-auto  justify-end">
                        <input type="text" placeholder="Search a pokémon here..." className="h-full md:flex-none flex-1 md:w-auto w-full"/>
                        <button type="submit" className="bg-white h-full justify-center flex place-items-center w-10">
                            <i className="fi fi-br-search pt-1"></i>
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    );
}