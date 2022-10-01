import React from 'react'
import ProductItem from './ProductItem'

const ProductsCart = ({ products }) => {
	return (
		<div>
			{products &&
				products.map((product) => {
					return (
						<ProductItem
							key={product.id || null}
							brandName={
								product.attributes.brand.data.attributes.name || null
							}
							brandLogo={
								product.attributes.brand.data.attributes.logo_url ||
								null
							}
							name={product.attributes.name || null}
							image={product.attributes.image_url || null}
							price={product.attributes.price || null}
							numOfReview={product.attributes.review.number || null}
							rating={product.attributes.review.rating || null}
						/>
					)
				})}
		</div>
	)
}

export default ProductsCart
