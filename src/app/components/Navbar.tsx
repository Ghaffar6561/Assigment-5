import Link from "next/link"

export default function Navbar(){
    return(
       <header style={{backgroundColor: "black", color:"white"}}>
            <nav> 
                <ul>
                    <li style={{color: "white"}}>
                        <Link href="/category/crypto">Crypto</Link>
                    </li>
                    
                    <li style={{color:"white" }}>
                        <Link href="/products/product1">Product</Link>
                    </li>
                </ul>
            </nav>
        </header>
        )
}