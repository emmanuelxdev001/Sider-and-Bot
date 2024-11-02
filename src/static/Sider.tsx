import { FC } from "react";


// Interface iProps {
//     toggle: boolean;
//     setToggle: React.Dispatch<React.SetStateAction<boolean>>
// }

const Sider: FC<iProps> = ({toggle, setToggle}) => {
    const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="w-full h-full">
        <div className="flex justify-between">
            <p>Sider</p>
        <button className="px-4 py-2 bg-blue-950 text-white rounded-md font-semibold"
        onClick={() => setToggle(!toggle)}
        >{toggle ? "Open" : "close"}</button>
        </div>
    </div>
  )
}

export default Sider;
