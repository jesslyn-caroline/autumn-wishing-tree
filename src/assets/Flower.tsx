import Loading from "./Loading"

const flowerVariant = {
    'red' : {
        '1' : './red-flower-1.svg',
        '2' : './red-flower-2.svg'
    },
    'yellow' : {
        '1' : './yellow-flower-1.svg',
        '2' : './yellow-flower-2.svg'
    }
}

function Flower({ id, color, openWishCard }: { id: string; color: 'red' | 'yellow'; openWishCard: (flower: string) => void }) {
    return (
    <div id={id} className={`w-full relative`}>
        <img src={flowerVariant[color]['1']} className={`w-full`} onClick={() => openWishCard(id)}/>
        {/* <div className={`absolute top-1/2 left-1/2 -translate-1/2`}>
            <Loading />
        </div> */}
    </div>
)} 

export default Flower