import type { AnimationScope } from "motion"
import Button from "./Button"
import CloseButton from "./CloseButton"

function WishCard({ scope, onClose, addWish } : {scope: AnimationScope, onClose: () => void, addWish: () => void}) {
    return (
    <div id='wish-card' ref={scope} className={`w-36/100 aspect-4/3 relative bg-cream rounded-[2cqw] -translate-1/2`}>
        <img src='./yellow-flower-1.svg' className={`w-24/100 absolute z-10 left-1/2 -translate-1/2`}/>
        <img src='./card-branch-1.svg' className={`absolute w-90/100 top-76/100 -right-108/100 -translate-full`} />
        <img src='./card-branch-2.svg' className={`absolute w-45/100 top-48/100 left-35/100 -translate-full`} />
        <div className={`bg-cream w-full absolute bottom-0 h-3/4 rounded-b-[2cqw] rounded-tr-[3cqw]`}/>

        <div className={`mt-[1.5cqw] w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
            <div className={`w-full flex flex-col items-center justify-center gap-y-[3cqh] px-[3cqw]`}>
                <h1 className={`text-[2.3cqw] font-darumadrop-one text-center text-brown-1`}>
                    Write your wish~
                </h1>
                <textarea 
                    rows={3} 
                    className={`
                        w-full resize-none outline-none 
                        border-2 border-tan-1 bg-tan-2 p-[1cqw]
                        rounded-[1cqw] text-brown-2 font-averia-libre text-[1.5cqw]
                        scrollbar-thin scrollbar-thumb-brown-1 scrollbar-track-tan-1
                    `} 
                />
                <Button onClick={addWish}/>
            </div>
        </div>

        <CloseButton onClose={onClose} />
    </div>
)}

export default WishCard