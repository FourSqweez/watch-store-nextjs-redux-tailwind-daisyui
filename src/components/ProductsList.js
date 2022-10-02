import React from 'react'
import ProductItem from './ProductItem'

const ProductsList = ({ products }) => {
	console.log('test : ', products)
	return (
		<div className="w-full max-w-[1050px] my-10">
			<div className="flex justify-between mb-5">
				<p>Product ({products.length})</p>
				<span className="flex gap-1">
					<div>logo</div>
					<div>logo</div>
				</span>
			</div>
			<div className="grid grid-cols-4 gap-4 w-full">
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
		</div>
	)
}

export default ProductsList
