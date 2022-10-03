import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
	const cart = useSelector((state) => state.cart)
	const quantity = useSelector((state) => state.cart.map((q) => q.quantity))
	const totalAmounts = quantity.reduce(
		(accumulator, amount) => accumulator + amount,
		0
	)

	console.log('cart : ', cart)

	const getTotalPrice = () => {
		return parseFloat(
			cart.reduce(
				(accumulator, item) =>
					accumulator + item.quantity * item.attributes.price,
				0
			)
		).toFixed(2)
	}

	return (
		<div className="max-w-[1050px] mx-auto px-2">
			{cart.length === 0 ? (
				<div className="flex flex-col mt-60 items-center justify-center gap-4">
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
				<div className="">
					{/* mobile */}
					<div className="md:hidden min-w-[280px] sm:mx-10">
						<p className="font-[500] leading-[18px] tracking-widest text-[28px] text-center mb-5 mt-5">
							Cart
						</p>
						{/* loop */}
						{cart &&
							cart.map((item) => (
								<div key={item.id}>
									<div className="flex justify-between h-20 items-center last:mb-5">
										<div className="flex w-full sm:w-full h-full items-center ml-2">
											<div className="mr-2 h-full w-20 min-w-[4rem] sm:h-full relative overflow-hidden rounded-md">
												<Image
													layout="fill"
													alt=""
													objectFit="inherit"
													priority
													src={item.attributes.image_url}
												/>
											</div>
											<div className="xs:w-[24rem] w-[24rem]">
												<h4
													className=" w-40 xs:w-80 sm:w-full"
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
													className="w-full pl-2 items-center title text-2xl text-[#484848]"
													title={item.attributes.name}
												>
													{item.attributes.name}
												</h4>
											</td>
											<td>
												<h4 className="text-xl text-center">
													{item.attributes.price}
												</h4>
											</td>
											<td>
												<h4 className="text-xl text-center">
													{item.quantity}
												</h4>
											</td>
											<td className="">
												<h4 className="text-xl text-center">
													{item.quantity * item.attributes.price}
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

					<div className="flex justify-end mt-3 ">
						<button
							onClick={() => handleBackDrop()}
							className="btn border-none rounded-[8px] px-6 py-1.5 bg-[#FF6F61] leading-[18px] tracking-wider"
						>
							Proceed to checkout
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Cart
