import { useGetAllProductsQuery } from "../../../store/slices"
import { Card, Col, Row } from 'antd';
import FilterProducts from "../../FilterProducts/FilterProducts";
const { Meta } = Card;

 const FindAllProducts=()=>{
    const {data ,isSuccess}=useGetAllProductsQuery({})
    let productsData:any
    if(isSuccess){
        productsData=data
    }
   console.log(productsData)
    return (
        <>
       <Row >
        <Col md={6}>
        <FilterProducts/>
        </Col>
       { isSuccess &&
            productsData?.map((productsData:any)=>{
                return (
                   <Col md={6}>
                    <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={productsData?.thumbnail        } />}
                  >
                    <Meta title={productsData?.name} description={productsData?.description}  />
                    <p>{productsData?.price}</p>

                  </Card>
                   </Col>
                )
               
            })
        }
       </Row>
        
        </>
      
    )

}
export default FindAllProducts