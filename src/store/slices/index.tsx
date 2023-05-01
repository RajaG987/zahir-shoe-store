import { emptySplitApi } from "../Services";

export const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (builder: any) => ({
      getAllProducts: builder.query({
        query: ({page,limit,query}:any) => ({
          url: `/products`,
          method: "GET",
        }),
  
        providesTags: ["products"],
      }),
    
    }),
  });
  
  export const {
   useGetAllProductsQuery
  } = extendedApi;
  