function Card() {
    return (
    <div className={`w-3/11 -translate-1/2 relative`}>
        <img src='./card-1.svg' className={`w-full`} />
        <img src='./lantern.svg' className={`w-1/3 absolute top-2/5 -right-1/5 origin-center rotate-4`}/>

        <div className={`w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-35/100`}>
            <div className={`flex flex-col items-center justify-center gap-y-[2cqi]`}>
                <h1 className={`font-darumadrop-one text-brown-1 text-[3cqi] text-center leading-[3cqi] px-[4cqi]`}>
                    Autumn Healing Tree
                </h1>
                <p className={`font-averia-libre text-[1.8cqi] text-center text-brown-2 leading-[2cqi] px-[3.2cqi]`}>
                    Hang your troubles on the tree, and let it guide you toward healing
                </p>
            </div>
            
        </div>
    </div>
)}

export default Card