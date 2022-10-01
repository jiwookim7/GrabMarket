import './index.css';
import axios from 'axios'
import React from 'react';
function MainPage()
{
    const [products, setProducts] = React.useState([]);
    React.useEffect(function ()
    {
        axios.get('https://20d7d3b4-173c-4b2d-a82e-5152ae743bac.mock.pstmn.io/products').then(function(result){

    const products = result.data.products;
    setProducts(products);
    console.log("Network connected", result);


    }).catch(function(error)
    {
        console.error("Error is occured", error);

    });


    }, []);
    
    return (
        <div>
            <div id = "header">
                <div id = "header-area">
                    <img src="images/icons/logo.png"/>
                </div>
            </div>
            <div id = "body">
      

            <div id = "banner">
                <img src="images/banners//banner1.png"/>
            </div>
            <h1>Sellling Items</h1>
        
  
            {/* {
                    products.map(function(product, index)
                    {
                        return 
                        (
                         <div className="product-card">
                            <div>
                                <img className= "product-img" 
                                src = {product.imageUrl}/>
                            </div>
                            <div className="product-contents">
                                <span className="product-name">
                                    {product.name}
                                </span>
                                <span className="product-price">
                                    {product.price}
                                </span>
                                <div className= "product-seller">
                                    Amazon
                                    <img className= "product-avatar" src='images/icons/avatar.png'></img>
                                </div>
                            </div>
                        </div>
                        );
                    }
        
                } */}
            

      
      
               
            <div id ="product-list">
            {
            
                    products.map(function(product, index)
                    {
                        return (<div className="product-card">
                                <div>
                                <img className= "product-img" 
                                src = {product.imageUrl} />
                            </div>
                            <div className="product-contents">
                                <span className="product-name">
                                    {product.name}
                                </span>
                                <span className="product-price">
                                    {product.price}
                                </span>
                                <div className= "product-seller">
                                    {product.seller}
                                    <img className= "product-avatar" src='images/icons/avatar.png'></img>
                                </div>
                            </div>
                        </div>
                        );
                        
                    })}
            
                    
            
                    </div>
            </div>
            

                <div id = "footer">

     
            <img class = "sponsor-img" src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDJfMjU2%2FMDAxNjM4NDUxMjQwNDU0.Gj_qTy3ss33cLp6rzcVVVrokWnx6WhsriwYh8nZ8Hw4g.OVPImUvOxqRd4QBG5mP4ua3pTUy3WfDdKTA6e9bxujwg.PNG.ciaogiorno%2Funnamed.png&type=sc960_832"/>
            <img class = "sponsor-img2" src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDJfMTQ1%2FMDAxNjMwNTgxMzQ1OTAx._xUYVbIoIrPW9Ua90oqp_UUQurOD1ZBF7o-NBv_TSpgg.nA4SLqbn3Kh-16W57qm4M59UYYMD1ik6Z3m6qOykD58g.JPEG.seyuloh%2FGenesis_Logo.jpg&type=sc960_832"/>

       
            </div>
        </div>

 );

}

export default MainPage;