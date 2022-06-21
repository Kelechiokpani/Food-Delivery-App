import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"


// saving new item
export const saveitem = async (data) => {
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data,{
        merge: true,
    })

};

// get all items and pass into container 
export const getAllFoodItems = async (data) => {
    const items = await getDocs(  

        query(collection(firestore, "foodItems"), orderBy("id", "desc")) /**made changes on this line */
    );

    return items.docs.map((doc) => doc.data())
   

}
