import { FC, lazy, LazyExoticComponent, Suspense } from "react";

import { Navigate } from "react-router-dom";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
  (
    <Suspense
      fallback={
        <div
          className="d-flex justify-center align-center"
          style={{ height: "80vh" }}
        >
        
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

const ProductsPage = Loadable(
  lazy(() => import("./pages/Products"))
);




export const routes: any = [
  { path: "/", element: <Navigate to="products" /> },
  {
    path: "products",
    element: <ProductsPage />,
  },
  
     
];
