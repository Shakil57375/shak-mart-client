import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `SportyKidz - ${title}`;
    },[title])
}

export {useTitle}