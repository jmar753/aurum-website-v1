export default function SideBar(){
    return(
        <aside className="bg-neutral-900 text-gray-800 w-1/5 overflow-y-auto">
            <h1 className="flex px-8 items-center  text-3xl h-16">Aurum</h1>
            <div className="p-8">
                <div>
                    <p><a href="/">Home</a></p>
                    <p><a href="NoPage">-</a></p>
                </div>
            </div>
        </aside>
    )
}