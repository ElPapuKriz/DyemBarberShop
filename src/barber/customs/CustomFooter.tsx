const CustomFooter = () => {
    const getYear= new Date

    return (
        <div className="bg-black text-center">
            <span className="text-white text-base md:text-lg">© {getYear.getFullYear()} Dyem BarberShop</span>
        </div>
    )
}

export default CustomFooter
