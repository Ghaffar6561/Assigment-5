import Link from "next/link"

export default function Navbarcopy(){
    return(
      
        <footer style={{backgroundColor: "gray", color:"white"}}>
            
            <ul>
                <li><Link href="/contactus">Contact US</Link></li>
                <br />
                <li><Link href="/terms">Terms</Link></li>
            </ul>
            
        </footer>
    )
}