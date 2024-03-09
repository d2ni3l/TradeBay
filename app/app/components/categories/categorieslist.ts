import { IoDiamondOutline } from "react-icons/io5"
import { LuMonitorSmartphone} from 'react-icons/lu'
import { SiStylelint } from "react-icons/si"
import { FaGamepad } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import { MdOutlineSportsBasketball } from "react-icons/md";


export const  categoryList = [
    {
        label: 'Eletronics',
        icon: LuMonitorSmartphone,
    },

    {
        label: 'Fashion',
        icon: SiStylelint
    },

    {
        label: 'Gaming',
        icon: FaGamepad
    },
    {
        label: 'Home',
        icon: FaHome
    },
    {
        label: 'Jewelry',
        icon: IoDiamondOutline
    },
    {
        label: 'Travel',
        icon: MdCardTravel
    },
    {
        label: 'Sport',
        icon: MdOutlineSportsBasketball
    }
]