import { BagHappy } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'
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
	console.log('Product detail : ', productDetail)
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className=" lg:flex flex-col lg:flex-row h-full lg:h-[448px] w-[1061px] gap-2 bg-white rounded-[16px] p-[24px]">
				<div className="h-[400px] lg:min-w-[400px] lg:max-w-[400px] sm:flex w-full flex-col justify-center items-center">
					<Image
						src={productDetail.attributes.image_url}
						width="400px"
						height="400px"
						className="rounded-[15px]"
						priority
					/>
				</div>
				<div className="w-full h-full gap-2 flex flex-col">
					<div className="text-[28px] font-[500] leading-[36px] text-[#707070]">
						{productDetail.attributes.name}
					</div>
					<div className="flex gap-3 items-center">
						<div>{productDetail.attributes.review.rating}</div>
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
							{productDetail.attributes.price}.00
						</p>
						<p className="line-through text-[14px] text-[#939393] font-[400] leading-[22px]">
							12,000.00
						</p>
					</div>
					<div className="flex gap-12 items-center justify-center lg:justify-start">
						<p className="text-[#484848] text-[14px] font-[400] leading-[18px]">
							Quantity:
						</p>
						<button className="flex h-[38px] text-center w-[128.81px] items-center border-[#484848] border-[1px] rounded-[10px]">
							<button className="h-[36px] min-w-[37.52px] text-[20px] text-[#939393] font-[400] leading-[22px]">
								-
							</button>
							<p className="h-full flex items-center justify-center w-full text-[14px] bg-[#F5F5F5] font-[400] leading-[22px]">
								1
							</p>
							<button className=" h-[36px] min-w-[37.52px] text-[14px] text-[#939393] font-[400] leading-[22px]">
								+
							</button>
						</button>
					</div>
					<div className="flex w-full justify-center lg:justify-start">
						<button className="bg-[#FF6F61] btn flex items-center text-center justify-center gap-2 text-[#F9F9F9] text-[14px] font-[600] uppercase leading-[18px] tracking-widest w-[242px] h-[50px] rounded-[8px] my-6">
							<BagHappy size="26" color="#F9F9F9" />
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Detail
