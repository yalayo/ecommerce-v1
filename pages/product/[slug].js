import React from 'react';
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }  
    `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        //when parenthesis and curly braces we return instantly an object
        params: {
            slug: product.slug.current 
        }
    }));
    return {
        paths, 
        fallback: 'blocking' 
    }
}

const ProductDetails = ({ product, products }) => {
    
    const { image, name, details, price } = product;

    return (
        <div>
            <div  className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={urlFor(image && image[0])} />
                    </div>
                    {/*<div className="small-images-container">
                        {image?.map((item, i) => (
                            < img 
                              src={urlFor(item)}
                              className=""
                              onMouseEnter=""
                            />
                        ))

                        }
                    </div>*/}
                </div>
                <div className="product-details-desc">
                    <h1>{name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async ({ params: { slug } } ) => {
    const query = `*[_type == "product" && slug.current == '${slug}'] [0]`;
    const productQuery = '*[_type == "product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productQuery);
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails 