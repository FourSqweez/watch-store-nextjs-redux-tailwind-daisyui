import Image from 'next/image'
import React from 'react'
import { BagHappy } from 'iconsax-react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Navbar = () => {
	const quantity = useSelector((state) =>
		state.cart.product.map((q) => q.quantity)
	)
	const totalAmounts = quantity.reduce(
		(accumulator, amount) => accumulator + amount,
		0
	)
	console.log('Nav bar quantity : ', quantity)
	console.log('Nav bar total quantity : ', totalAmounts)

	return (
		<div className="flex justify-center w-full h-[76px] bg-[#FF6F61] ">
			<div className="flex w-full max-w-[1050px] h-full justify-between items-center">
				<div className="flex justify-center">
					<Image
						src="https://sagnerli.sirv.com/cc-quiz/cob-logo.png"
						width={100}
						height={50}
						priority
					/>
				</div>
				<ul className="flex w-full max-w-3xl justify-evenly">
					<Link href="/">
						<li>Home</li>
					</Link>
					<Link href="#">
						<li>New Product</li>
					</Link>
					<Link href="#">
						<li>Women</li>
					</Link>
					<Link href="#">
						<li>Men</li>
					</Link>
					<Link href="#">
						<li>Accessories</li>
					</Link>
					<Link href="#">
						<li>Kid</li>
					</Link>
				</ul>
				<Link href="/cart">
					<div className="flex gap-2 items-center cursor-pointer">
						<div className="relative pr-1">
							<div className="absolute w-5 h-5 text-center flex items-center justify-center rounded-full top-0 right-0 bg-[#1A586A] text-white text-[10px] leading-[14px]">
								{totalAmounts || 0}
							</div>
							<BagHappy size="32" color="#F9F9F9" />
						</div>
						<p className="text-[#F9F9F9]">Cart</p>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
