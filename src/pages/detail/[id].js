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
			<div className=" flex h-[448px] w-[1061px] bg-white rounded-[16px] p-[24px]">
				<div className="w-[400px] h-[400px]">
					<Image src={''} width={100} height={100} />
				</div>
				<div className="w-fit">{productDetail.attributes.name}</div>
			</div>
		</div>
	)
}

export default Detail
