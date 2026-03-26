import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"
import { useSearchParams } from "react-router"

interface Props {
    totalPages: number;
}

const CustomPagination = ({ totalPages }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams()

    const page = Number(searchParams.get('page')) || 1;
    const limit  = Number(searchParams.get('limit')) || 6;
    
    const goToPage = (newPage: number) => {
        setSearchParams(prev =>{
            prev.set('page',newPage.toString())
            prev.set('limit',limit.toString())
            return prev
        }

        )
    }

    const NextPage = ()=>{
        if (page<totalPages)goToPage(page + 1)
    }

    const PreviousPage = () => {
        if (page>1)goToPage(page - 1)
    }

    return (
        <div className="py-8">
            <Pagination>
                <PaginationContent className="text-white">

                    <PaginationItem
                    aria-disabled
                    onClick={PreviousPage}>
                        <PaginationPrevious
                            text="Anterior"
                            className={`
                                ${page<=1?'opacity-50 pointer-events-none':'text-white border-white hover:bg-white hover:text-black'}`}
                            
                        />
                    </PaginationItem>

                    {
                        Array.from({ length: totalPages }).map((_, i) => {
                            return (
                            
                                <PaginationItem key={i}>
                                    <PaginationLink 
                                        onClick={()=>goToPage(i+1)}
                                        className={`${page === i+1?"bg-white text-black font-black border-[#978957]":"text-white border-white hover:bg-white hover:text-black"}`}
                                    >
                                        {i+1}
                                    </PaginationLink>
                                </PaginationItem>
                            

                            )

                        })
                    }

                <PaginationItem
                onClick={NextPage}
                >
                    <PaginationNext
                        text="Siguiente"
                        className={`${page>=totalPages?"opacity-50 pointer-events-none":"text-white border-white hover:bg-white hover:text-black"}`}
                    />
                </PaginationItem>

            </PaginationContent>
        </Pagination>
        </div >
    )
}

export default CustomPagination
