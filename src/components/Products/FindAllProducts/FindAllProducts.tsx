import { useGetAllProductsQuery } from "../../../store/slices"

 const FindAllProducts=()=>{
    const {data ,isSuccess}=useGetAllProductsQuery({})
    let productsData:any
    if(isSuccess){
        productsData=data
    }
    console.log(productsData)
    return (
        <>Products</>
    )

}
export default FindAllProducts