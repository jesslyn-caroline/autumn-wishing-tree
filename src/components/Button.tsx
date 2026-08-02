function Button({ onClick } : { onClick: () => void }) {
    return (
    <button 
        onClick={onClick} 
        className={`outline-none w-[15cqi] aspect-400/100 bg-[url('./wood-button.svg')] bg-contain bg-center bg-no-repeat font-darumadrop-one text-[2cqi] pb-[1cqh] text-white`}>
        Wish
    </button>
)}

export default Button