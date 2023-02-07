import { useContext } from "react"
import TermsContext from "../contexts/terms"

export default function useTermsContext() {
    return useContext(TermsContext);
}