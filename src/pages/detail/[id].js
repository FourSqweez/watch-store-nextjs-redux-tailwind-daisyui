import { BagHappy } from 'iconsax-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../app/slices/cartSlice'
import { MuiRating } from '../../components/MuiRating'
import { getAllProducts, getDetail } from '../api/productsApi'

export const getStaticProps = async ({ params }) => {
	const { data: productDetail } = await getDetail(params.id)
	return { props: { productDetail } }
}

export const getStaticPaths = async () => {
	const { data: products } = await getAllProducts()

	const paths = products.map((p) => {
		return {
			params: { id: p.id.toString() },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

const Detail = ({ productDetail }) => {
	const dispatch = useDispatch()
	const [itemQuantity, setItemQuantity] = useState(0)

	const addProductItemToCart = (product) => {
		product = { ...product, quantity: itemQuantity }
		dispatch(addToCart(product))
	}

	const incrementQuantity = () => {
		setItemQuantity(itemQuantity + 1)
	}

	const decrementQuantity = () => {
		setItemQuantity(itemQuantity - 1)
	}

	return (
		<div className="w-full h-screen items-center flex justify-center">
			{productDetail && (
				<div className=" lg:flex flex-col lg:flex-row h-full lg:h-[448px] w-[1061px] gap-4 bg-white rounded-[16px] p-[24px]">
					<div className="h-[400px] lg:min-w-[400px] lg:max-w-[400px] sm:flex w-full flex-col justify-center items-center">
						<Image
							src={productDetail.attributes.image_url}
							width="400px"
							height="400px"
							className="rounded-[15px]"
							priority
							alt={productDetail.attributes.name}
						/>
					</div>
					<div className="w-full h-full gap-2 flex flex-col">
						<div className="text-[28px] font-[500] leading-[36px] text-[#707070]">
							{productDetail.attributes.name}
						</div>
						<div className="flex gap-3 items-center">
							<div>
								<MuiRating
									rating={productDetail.attributes.review.rating}
								/>
							</div>
							<div className="text-[14px] text-[#A4A4A4] font-[400] leading-[18px]">
								({productDetail.attributes.review.number} reviews)
							</div>
						</div>
						<p className="text-[14px] text-[#939393]  font-[400] leading-[18px]">
							{productDetail.attributes.description}
						</p>

						<p className="md:mt-2 text-[14px] leading-[18px] font-[500] text-[#939393]">
							price
						</p>
						<div className="flex gap-16 items-center justify-center lg:justify-start">
							<p className="text-[#FF6F61] text-[28px] font-[500] leading-[36px]">
								{productDetail.attributes.price.toLocaleString(
									undefined,
									{ minimumFractionDigits: 2 }
								)}
							</p>
							<p className="line-through text-[14px] text-[#939393] font-[400] leading-[22px]">
								12,000.00
							</p>
						</div>
						<div className="flex gap-12 items-center justify-center lg:justify-start">
							<p className="text-[#484848] text-[14px] font-[400] leading-[18px]">
								Quantity:
							</p>
							<div className="flex h-[38px] text-center w-[128.81px] items-center border-[#484848] border-[1px] rounded-[10px] overflow-hidden">
								<button
									onClick={() => decrementQuantity()}
									className="h-full min-w-[37.52px] text-[20px] text-[#939393] font-[400] leading-[22px]"
									disabled={itemQuantity === 0 ? true : false}
								>
									-
								</button>
								<p className="h-full flex items-center justify-center w-full text-[14px] bg-[#F5F5F5] font-[400] leading-[22px]">
									{itemQuantity}
								</p>
								<button
									onClick={() => incrementQuantity()}
									className=" h-full min-w-[37.52px] text-[14px] text-[#939393] font-[400] leading-[22px]"
								>
									+
								</button>
							</div>
						</div>
						<div className="flex w-full justify-center lg:justify-start">
							<div
								onClick={() => addProductItemToCart(productDetail)}
								disabled={itemQuantity === 0 ? true : false}
								className="bg-[rgb(250,119,107)] btn flex items-center text-center justify-center gap-2 text-[#F9F9F9] text-[14px] font-[600] uppercase leading-[18px] tracking-widest w-[242px] h-[50px] rounded-[8px] my-6"
							>
								<BagHappy size="26" color="#F9F9F9" />
								Add to cart
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Detail
