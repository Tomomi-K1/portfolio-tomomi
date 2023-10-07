
export default function MainButton({btnName}){
    return(
        <li>
            <a href={`#${btnName}`}>
                <button className="mb-5 py-2 px-3 uppercase border rounded-md text-sm border-white text-white transition duration-600 hover:border-none hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400" variant="outlined">{btnName}
                </button>
            </a>
        </li>
    )
}