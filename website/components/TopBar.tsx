import { CliLoader } from "./CliLoader";

export const TopBar = () => {
    const keyframes = ['V',
        'V2',
        'V2 N',
        'V2 No',
        'V2 Now',
        'V2 Now ',
        'V2 Now A',
        'V2 Now Av',
        'V2 Now Ava',
        'V2 Now Avai',
        'V2 Now Avail',
        'V2 Now Availa',
        'V2 Now Availab',
        'V2 Now Availabl',
        'V2 Now Available',
        'V2 Now Available!',
        'V2 Now Available! ☺️',
        'V2 Now Available! ☺️',
        'V2 Now Available! ☺️',
        'V2 Now Available! ☺️',
        'V2 Now Available! 😊',
        'V2 Now Available! 😊',
        'V2 Now Available! 😊',
        'V2 Now Available! 😊',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🎉',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 🥳',
        'V2 Now Available! 😊',
        'V2 Now Available! 😊',
        'V2 Now Available! 😊',
        'V2 Now Available! 😊',
        'V2 Now Available! ☺️',
        'V2 Now Available! ☺️',
        'V2 Now Available! ☺️',
        'V2 Now Available! ☺️',
        'V2 Now Available!',
        'V2 Now Available',
        'V2 Now Availabl',
        'V2 Now Availab',
        'V2 Now Availa',
        'V2 Now Avail',
        'V2 Now Avai',
        'V2 Now Ava',
        'V2 Now Av',
        'V2 Now A',
        'V2 Now ',
        'V2 Now',
        'V2 No',
        'V2 N',
        'V2',
        'V',
    ];
    return (
    <div className="flex flex-row justify-center items-center bg-black border border-b-neutral-800 border-x-0 border-t-0 text-neutral-200 text-sm text-center py-2 px-6">
        <span><CliLoader className="inline-flex text-sm" speed={100} keyframes={keyframes}/></span>
    </div>
    );
};