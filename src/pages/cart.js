import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeAll } from '../app/slices/cartSlice'

const Cart = () => {
	const cart = useSelector((state) => state.cart)
	const quantity = useSelector((state) => state.cart.map((q) => q.quantity))
	const totalAmounts = quantity.reduce(
		(accumulator, amount) => accumulator + amount,
		0
	)

	const dispatch = useDispatch()
	const router = useRouter()
	const handleBack = () => {
		router.replace('/')
		setTimeout(() => {
			dispatch(removeAll())
		}, 1000)
	}

	console.log('cart : ', cart)

	const getTotalPrice = () => {
		return parseFloat(
			cart.reduce(
				(accumulator, item) =>
					accumulator + item.quantity * item.attributes.price,
				0
			)
		).toLocaleString(undefined, {
			minimumFractionDigits: 2,
		})
	}

	return (
		<div className="flex w-full justify-center">
			<div className="max-w-[1050px] mb-10 mt-20 mx-2">
				{cart.length === 0 ? (
					<div className="flex h-full flex-col items-center justify-center gap-4">
						<h2 className="flex text-center justify-center">
							Your Cart is Empty!
						</h2>

						<button
							onClick={() => router.replace('/')}
							className="btn p-4 font-bold"
						>
							Shop Now
						</button>
					</div>
				) : (
					<div>
						{/* mobile */}
						<div className="flex item-start">
							<div className="md:hidden min-w-[280px] sm:mx-10">
								<p className="text-3xl text-center mb-5">Cart</p>
								{/* loop */}
								{cart &&
									cart.map((item) => (
										<div key={item.id}>
											<div className="flex justify-between h-full items-start border-b-2 py-2 first:border-t-2">
												<div className="flex  h-full items-center ml-2">
													<div className="mr-2 h-20 w-20 min-w-[4rem]  relative overflow-hidden rounded-md">
														<Image
															layout="fill"
															objectFit="inherit"
															priority
															src={item.attributes.image_url}
															alt={item.attributes.name}
														/>
													</div>
													<div className="w-40">
														<h4
															className="w-40 sm:w-full line-clamp-1"
															title={item.attributes.name}
														>
															{item.attributes.name}
														</h4>
														<h4>{item.attributes.price}</h4>
													</div>
													<div className="w-20">
														<div className="w-full h-full text-xl font-bold text-center ">
															{item.quantity}
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								{/* end loop */}
							</div>
						</div>

						{/* desktop */}
						<div className="hidden md:flex flex-col mt-10">
							<div className="w-full">
								<p className="font-[500] leading-[18px] tracking-wide text-[28px] mb-5">
									Cart
								</p>
							</div>

							<table className="table-auto text-left tracking-wide">
								<thead>
									<tr>
										<th className="w-36 text-[18px] leading-[22px] uppercase">
											Product name
										</th>
										<th className="w-36 text-center text-[18px] leading-[22px] uppercase">
											Price
										</th>
										<th className="w-36 text-center text-[18px] leading-[22px] uppercase">
											Quantity
										</th>
										<th className="w-36 text-center text-[18px] leading-[22px] uppercase">
											Total
										</th>
									</tr>
								</thead>
								{cart &&
									cart.map((item) => (
										<tbody key={item.id}>
											<tr>
												<td className="flex py-5 items-center w-[20rem] lg:w-[35rem] xl:w-[45rem] 2xl:w-[50rem]">
													<div className="h-36 w-40 text-2xl relative overflow-hidden rounded-xl">
														<Image
															src={item.attributes.image_url}
															layout="fill"
															alt=""
															objectFit="inherit"
															priority
														/>
													</div>
													<h4
														className="w-full pl-2 items-center text-2xl text-[#484848]"
														title={item.attributes.name}
													>
														{item.attributes.name}
													</h4>
												</td>
												<td>
													<h4 className="text-xl text-center text-[#A0A0A0]">
														{item.attributes.price}
													</h4>
												</td>
												<td>
													<h4 className="text-xl text-center">
														{item.quantity}
													</h4>
												</td>
												<td className="">
													<h4 className="text-xl text-center text-[#A0A0A0]">
														{(
															item.quantity *
															item.attributes.price
														).toLocaleString(undefined, {
															minimumFractionDigits: 2,
														})}
													</h4>
												</td>
											</tr>
										</tbody>
									))}
							</table>
						</div>

						<div className="flex justify-end gap-2 mt-6 w-full">
							<h3 className="sm:text-2xl">
								Subtotal ({totalAmounts} Product) :
							</h3>
							<h3 className="sm:text-2xl text-[#FF6F61]">
								{getTotalPrice()}
							</h3>
						</div>

						<div className="flex justify-end mt-3  ">
							<button
								onClick={handleBack}
								className="btn border-none rounded-[8px] px-6 py-1.5 bg-[#FF6F61] leading-[18px] tracking-wider"
							>
								Proceed to checkout
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
