import Image from 'next/image'
import React from 'react'
import { BagHappy } from 'iconsax-react'

const Navbar = () => {
	return (
		<div className="flex justify-center w-full h-[76px] bg-[#FF6F61] ">
			<div className="flex w-full max-w-6xl h-full justify-between items-center">
				<div className="flex justify-center">
					<Image
						src="https://sagnerli.sirv.com/cc-quiz/cob-logo.png"
						width={100}
						height={50}
						priority
					/>
				</div>
				<ul className="flex w-full max-w-3xl justify-evenly">
					<li>Home</li>
					<li>New Product</li>
					<li>Women</li>
					<li>Men</li>
					<li>Kid</li>
					<li>Accessories</li>
				</ul>
				<div className="flex gap-2 items-center">
					<BagHappy size="32" color="#F9F9F9" />
					<p className="text-[#F9F9F9]">Cart</p>
				</div>
			</div>
		</div>
	)
}

export default Navbar
