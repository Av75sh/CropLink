
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function home(){
    return(
        <>
        <Routes>
            
            <Route
              path="/home"
              element={
                <>
                  <Hero />
                  <ProductDetails />
                  <ProductGrid />
                  <Features />
                  <FAQ />
                  <Stats />
                </>
              }
            />
            </Routes>
        </>
    )
};
export default home