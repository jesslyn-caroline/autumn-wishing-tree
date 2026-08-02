import Flower from "./Flower"

function Tree({ openWishCard }: { openWishCard: (flower: string) => void }) {
    return (
    <div className={`w-75/100 relative h-full`}>
        <div className={`w-full absolute bottom-0 translate-y-32/100`}>
            <div className={`absolute top-0 w-full h-68/100`} />

            <img src='./branch.svg' className={`w-60/100 absolute top-40/100 left-28/100`} />
            <img src='./tree.svg' className={`w-full drop-shadow-[20px_48px_12px_rgba(153,134,107,0.25)]`} />
            
            <div className={`w-16/100 absolute top-16/100 left-14/100`}><Flower id='flower-1' color='yellow' openWishCard={openWishCard}/></div>
            <div className={`w-9/100 absolute top-16/100 left-33/100`}><Flower id='flower-2' color='red' openWishCard={openWishCard} /></div>

            <div className={`w-17/100 absolute top-34/100 left-23/100`}><Flower id='flower-3' color='red' openWishCard={openWishCard} /></div>
            <div className={`w-14/100 absolute top-24/100 left-42/100`}><Flower id='flower-4' color='yellow' openWishCard={openWishCard} /></div>
            <div className={`w-12/100 absolute top-26/100 left-59/100`}><Flower id='flower-5' color='red' openWishCard={openWishCard} /></div>
            <div className={`w-10/100 absolute top-24/100 left-76/100`}><Flower id='flower-6' color='yellow' openWishCard={openWishCard} /></div>
            <div className={`w-9/100 absolute top-10/100 left-82/100`}><Flower id='flower-7' color='yellow' openWishCard={openWishCard} /></div>
            
            <div className={`w-13/100 absolute top-38/100 left-51/100`}><Flower id='flower-8' color='yellow' openWishCard={openWishCard} /></div>
            <div className={`w-10/100 absolute top-40/100 left-68/100`}><Flower id='flower-9' color='red' openWishCard={openWishCard} /></div> 
        </div>
    </div>
)}

export default Tree