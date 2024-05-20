import { useRouter } from "next/navigation";
import { NotSignInModal } from "../hooks/NotSignInModal";
import axios from "axios";
import toast from "react-hot-toast";
import { User } from "../typesDefinition";




// fucntion that takes in articleId user data then returns if item is in cart and a toogle function


interface CartType {
  articleId: string,
  currentUser: User
}

export default function useCart({articleId, currentUser}: any){
  console.log(currentUser)
  
    const router = useRouter()
    const openModal = NotSignInModal((state) => state.openModal)

   
      if(!currentUser?.email){
        return 
      }
      
      const itemInCart = () => {
        const list =  currentUser.favoriteIds || [] // getting favorite id from currentUser if null empty array
        const InCart = list.includes(articleId)

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
            request = () => {axios.delete(`/api/addtocart/${articleId}`)}

        }else{
            request = () => {axios.post(`/api/addtocart/${articleId}`)}
        }

         request?.()
         router.refresh()
         toast.success('Added to Cart')
      }catch(error){
      }

      }



   

   
    toast.error('Something Went Wrong')

   

   return {
    toggleCart,
    itemInCart
   }

}

