import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { MuiRating } from './MuiRating'

const ProductItem = ({
	brandLogo,
	name,
	productId,
	description,
	image,
	price,
	numOfReview,
	rating,
	switched,
}) => {
	return (
		<>
			{switched && switched === true ? (
				<Link
					href={{
						pathname: `/detail/${productId}`,
					}}
					passHref
				>
					<div className="w-[250px] h-[366px] bg-[#FFFFFF] rounded-[8px] overflow-hidden cursor-pointer">
						<div className="w-full">
							<Image
								width={250}
								height={250}
								src={image}
								priority
								className="rounded-[8px]"
								alt={name}
							/>
						</div>
						<div className="flex h-[40px] gap-2 px-2 mt-4">
							<Image
								src={brandLogo}
								width="50px"
								height="40px"
								className="rounded-[10px]"
								priority
							/>
							<div className="w-full ">
								<p className="text-[14px] font-[600] leading-[18px] line-clamp-2">
									{name}
								</p>
							</div>
						</div>
						<div className="flex justify-center gap-2 pl-4">
							<div>
								<p className="text-[14px] text-[#939393] leading-[18px]">
									price
								</p>
								<p className="text-[14px] text-[#FF6F61] leading-[18px]">
									{price.toLocaleString(undefined, {
										minimumFractionDigits: 2,
									})}
								</p>
							</div>
							<div>
								<p className="text-[12px] text-[#939393] leading-[18px]">
									Review({numOfReview} review)
								</p>
								{rating && <MuiRating rating={rating} />}
							</div>
						</div>
					</div>
				</Link>
			) : (
				<Link
					href={{
						pathname: `/detail/${productId}`,
					}}
					passHref
				>
					<div className="mb-2 w-full h-full">
						<div className="flex w-full h-[109px] bg-[#FFFFFF] rounded-[8px] items-center cursor-pointer">
							<div className="flex items-center w-[150px] justify-center ">
								<Image
									width={80}
									height={80}
									src={image}
									priority
									className="rounded-[8px]"
								/>
							</div>

							<div className="w-full h-[80px] flex flex-col justify-center gap-2 text-[#484848] text-[20px] leading-[18px] ml-1">
								<div className="font-[600] text-sm sm:text-[20px] line-clamp-2">
									{name}
								</div>
								<div className="line-clamp-2 text-[#A4A4A4] text-[12px] leading-[18px] font-[400]">
									{description}
								</div>
							</div>
							<div className="flex h-[80px] gap-2 justify-center flex-col items-end pr-4 w-[220px]">
								<p className="text-sm sm:text-[20px] font-[500] text-[#FF6F61] leading-[18px]">
									{price}.00
								</p>
								<p className="text-[14px] text-[#939393] leading-[18px]">
									{rating && <MuiRating rating={rating} />}
								</p>
								<p className="text-[12px] text-[#939393] leading-[18px] font-[400]">
									Review ({numOfReview} review)
								</p>
							</div>
						</div>
					</div>
				</Link>
			)}
		</>
	)
}

export default ProductItem
