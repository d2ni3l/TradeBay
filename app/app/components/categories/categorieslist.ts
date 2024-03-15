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
        value: 'eletronics'
    },

    {
        label: 'Fashion',
        icon: SiStylelint,
        value: 'fashion'


    },

    {
        label: 'Gaming',
        icon: FaGamepad,
        value: 'gaming'
    },
    {
        label: 'Home',
        icon: FaHome,
        value: 'home'

    },
    {
        label: 'Jewelry',
        icon: IoDiamondOutline,
        value: 'jewelry'
    },
    {
        label: 'Travel',
        icon: MdCardTravel,
        value: 'travel'
    },
    {
        label: 'Sport',
        icon: MdOutlineSportsBasketball,
        value: 'sport'
    }
]



export const selectCategory = categoryList.map(({icon, ...rest}) => {
    return rest
});
