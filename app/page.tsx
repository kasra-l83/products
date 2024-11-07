export default function Home(){
    return (
        <div className="max-w-[1100px] mx-auto flex justify-between flex-wrap xl:flex-nowrap space-y-5 items-center mb-10">
            <div className="flex-col space-y-10">
                <h1 className="text-5xl font-bold text-[#5866D3]">Free Modern React Templates for every need.</h1>
                <p className="text-base font-medium text-[gray]">Easily customizable modern React UI Templates and Components built using TailwindCSS which are also lightweight and simple to setup. All components are modular and fully responsive for great mobile experience as well as big desktop screens. Brand Colors are also fully customizable. Free for personal as well as commercial use.</p>
                <div className="flex-col space-y-3">
                    <div className="flex space-x-10">
                        <li className="flex text-base text-[gray]">7 Landing Page Demos</li>
                        <li className="flex text-base text-[gray]">8 Inner Pages</li>
                    </div>
                    <div className="flex space-x-10">
                        <li className="flex text-base text-[gray]">52 Components</li>
                        <li className="flex text-base text-[gray]">Uses TailwindCSS</li>
                    </div>
                    <div className="flex space-x-10">
                        <li className="flex text-base text-[gray]">Fully Responsive</li>
                        <li className="flex text-base text-[gray]">Fully Customizable</li>
                    </div>
                </div>
                <div className="flex space-x-5">
                    <button className="text-base py-4 px-10 font-bold bg-[#5866D3] hover:bg-[#2e43e4] text-[white] rounded-md">Explore Demos</button>
                    <button className="text-base py-4 px-10 font-bold bg-[#c6c1c1] hover:bg-[gray] text-[black] rounded-md">View Components</button>
                </div>
            </div>
            <img src="laptap.png" className="w-[586px] h-60"/>
        </div>
    )
}