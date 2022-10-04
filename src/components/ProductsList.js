import React, { useState } from 'react'
import ProductItem from './ProductItem'
import { TbLayoutList } from 'react-icons/tb'
import { IoGridOutline } from 'react-icons/io5'

const ProductsList = ({ products }) => {
	const [switched, setSwitched] = useState(true)

	return (
		<div className="w-full max-w-[1050px] my-10 mx-2">
			<div className="flex justify-between items-center mb-5 h-10">
				<p>Product ({products.length})</p>
				<div className="flex border-[#FFFFFF] border-2 rounded-[8px]">
					<div className="bg-[#FFFFFF]">
						<IoGridOutline
							className="w-[40px] h-full p-2 cursor-pointer"
							onClick={() => setSwitched(true)}
						/>
					</div>

					<div>
						<TbLayoutList
							className="w-[40px] h-full p-2 cursor-pointer"
							onClick={() => setSwitched(false)}
						/>
					</div>
				</div>
			</div>
			<div
				className={
					switched === true
						? 'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full'
						: 'flex flex-col'
				}
			>
				{products &&
					products.map((product) => {
						return (
							<div
								key={product.id || null}
								className=" flex w-full justify-center"
							>
								<ProductItem
									productId={product.id}
									switched={switched}
									brandName={
										product.attributes.brand.data.attributes.name ||
										null
									}
									brandLogo={
										product.attributes.brand.data.attributes
											.logo_url || null
									}
									name={product.attributes.name || null}
									description={product.attributes.description || null}
									image={product.attributes.image_url || null}
									price={product.attributes.price || null}
									numOfReview={product.attributes.review.number || 0}
									rating={product.attributes.review.rating || null}
								/>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default ProductsList
