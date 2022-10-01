import React from 'react'

const ProductItem = ({
	brandName,
	brandLogo,
	name,
	image,
	price,
	numOfReview,
	rating,
}) => {
	return (
		<div>
			{brandName}
			{name}
			{price} <br />
			{numOfReview} <br />
			{rating} <br />
		</div>
	)
}

export default ProductItem
