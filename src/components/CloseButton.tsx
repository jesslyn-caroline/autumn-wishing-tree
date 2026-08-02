function CloseButton({ onClose } : { onClose: () => void }) {
    return (
    <button 
        onClick={onClose}
        className={`
            outline-none
            absolute bottom-[-3cqi] left-1/2 -translate-x-1/2 
            font-darumadrop-one text-[1.5cqi] text-white
        `}>
        Close
    </button>
)}

export default CloseButton