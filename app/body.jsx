import './style.css';
import Image from "next/image";
function Body () {
    return <div className='twice'>
        <div style={{
            padding:'50px',
            border: '1px solid black',
            borderRadius: '20px',
            margin: '5px',
            marginTop: '10px',
            flex: 1,
            height:'300px',
            boxShadow: '5px 4px 6px rgba(0,0,0,0.3)',
            backgroundColor: '#818675'
        }}><Image src="/next.svg" alt="net" width={100} height={140}/>
            <p>HELLO</p>
        </div>
        <div style={{
            alignitems:'center',
            padding:'50px',
            border: '1px solid black',
            borderRadius: '20px',
            margin: '5px',
            marginTop: '10px',
            flex: '1',
            height:'300px',
            boxShadow: '5px 4px 6px rgba(0,0,0,0.3)',
            backgroundColor: '#818675'
        }}><Image src="/window.svg" alt="net" width={100} height={140}/>
            <p>NOTIFICATION</p>
        </div>
    </div>
}
export default Body