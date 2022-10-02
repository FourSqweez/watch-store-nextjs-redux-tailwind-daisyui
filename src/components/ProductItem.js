import Image from 'next/image'
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
		<div className="w-[250px] h-[366px] bg-[#FFFFFF] rounded-[8px] overflow-hidden cursor-pointer">
			<div className="w-full">
				<Image width={250} height={250} src={image} />
			</div>
			<div className="flex h-[40px] gap-2 px-2">
				<Image
					src={brandLogo}
					width="50px"
					height="40px"
					className="rounded-[10px]"
				/>
				<div className="w-full ">
					<p className="text-[14px] leading-[18px] line-clamp-2">{name}</p>
				</div>
			</div>
			<div className="flex justify-center gap-2 pl-4">
				<div>
					<p className="text-[12px] text-[#939393] leading-[14px]">
						price
					</p>
					<p className="text-[14px] text-[#FF6F61]">{price}.00</p>
				</div>
				<div>
					<p className="text-[12px] text-[#939393] leading-[14px]">
						Review({numOfReview} review)
					</p>
					<p className="text-[14px] text-[#FF6F61]">{rating}</p>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
