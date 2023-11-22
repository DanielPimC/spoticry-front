import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from './../routes/Coordinator'
import { getTokenData } from "./../services/getTokenData"

export const useProtectedPage = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem('token')

        if(!token){
            goToLoginPage(navigate)
        }

        if(!getTokenData){
            goToLoginPage(navigate)
        }
    },[navigate])
}