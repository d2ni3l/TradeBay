import { useRouter } from "next/navigation";
import { User } from "../typesDefinition";

import { NotSignInModal } from "../hooks/NotSignInModal";
import axios from "axios";



export default function getCart(param : {listingId : string, currentUser: User}){
    const {listingId, currentUser} = param
    const router = useRouter()
    const openModal = NotSignInModal((state) => state.openModal)

   try{
      if(!currentUser?.email){
        return 
      }
      

      const itemInCart = () => {
        const list =  currentUser.favoriteIds || [] // getting favorite id from currentUser if null empty array
        const InCart = list.includes(listingId)

        return InCart
      }

      const toggleCart = async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      if(!currentUser?.email){
   return  openModal()
      }

      try{
        let request;

        if(itemInCart()){
            request = () => {axios.post(`/api/addtocart`)}

        }
      }
      }

   }

   catch(error){

   }

}