
import imagen1 from '../imagenes/imagen1.png'
import { AiFillFilePdf } from "react-icons/ai";
import { CgAirplane } from "react-icons/cg";


import { useState } from "react";
const SideBar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
    { title: "menu", src: "logo" },
    { title: "Inbox", src: imagen1 },
    { title: "cuenta", src: "logo", gap: true },
    { title: "cronograma ", src: "imagen1" },
    { title: "buscar", src: "logo" },
    { title: "analisis", src: "imagen1" },
    { title: "archivos ", src: "logo", gap: true },
    { title: "ajustes", src: "imagen1" },
    ];

    return (
        <div className="flex">
        <div
            className={` ${
            open ? "w-72" : "w-20 "
            } bg-cyan-700 h-screen p-5  pt-8 relative duration-300`}
        >
            <img
            src={imagen1}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
            <AiFillFilePdf
            className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
                }`}
            />
                
                
            
            <h1
                className={`text-gray950 origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
                }`}
            >
                WELCOME PDF MENU
            </h1>
            </div>
            <ul className="pt-6">
            {Menus.map((Menu, index) => (
                <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-slate-950 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                } `}
                >
                <img className='w-8' src={Menu.src} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                </span>
                </li>
            ))}
            </ul>
        </div>
    
        </div>
        
    );
};



export default SideBar;
