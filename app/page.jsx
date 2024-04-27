import Link from 'next/link'
import {generateMetadata} from './layout'

const data = await generateMetadata()

export default function(){
	return <><div className="sm:flex items-center">
	<div className="flex-1">
		<img className="w-full h-auto" src="./image/at-the-park.svg" alt="" />
	</div>
	<div className="flex-1 p-8 text-gray-600 hover:text-black transition duration-500 ease-in-out">
		<h1 className="text-4xl mb-6 font-bold text-green-500">
			{data.title}
		</h1>
		<p className="text-xl mb-4 font-semibold">
			{data.desc}
		</p>
		<a className="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-green-500 hover:text-green-500 ring-green-500" href="#service">
			Service
		</a>
		<a className="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-gray-600 hover:text-gray-600 ring-gray-600" href="#about">
			About
		</a>
	</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center lg:gap-6 px-4 xl:px-16" id="service">
	<div className="">
		<div className="p-4 border-2 rounded-xl bg-white transition duration-500 ease-in-out text-gray-600 hover:text-black hover:border-green-500">
			<h2 className="text-3xl mb-4 font-bold">
				Service
			</h2>
			<p className="text-xl mb-4 font-semibold">
				We prioritize speed and reliability. Choose from a variety of shipping options to ensure your gear arrives well before your departure date.
			</p>
		</div>
	</div>
	<div className="sm:order-last lg:order-none">
		<div className="p-4 border-2 rounded-xl bg-white transition duration-500 ease-in-out text-gray-600 hover:text-black hover:border-green-500">
			<img className="w-full h-auto block mb-6" src="./image/mobile-user.svg" alt="" />
			<p className="text-xl mb-4 font-semibold">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil repellendus quod ad. Odit optio possimus necessitatibus quae numquam blanditiis quis quia, quisquam explicabo deserunt.
			</p>
			<Link className="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-gray-600 hover:text-gray-600 ring-gray-600" href="/product">
				Products
			</Link>
		</div>
	</div>
	<div className="sm:row-span-2 lg:row-span-1">
		<div className="p-4 border-2 rounded-xl bg-white transition duration-500 ease-in-out text-gray-600 hover:text-black hover:border-green-500">
			<img className="w-full h-auto block mb-6" src="./image/drone-delivery.svg" alt="" />
			<p className="text-xl mb-4 font-semibold">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe praesentium, nam debitis eos, tempora id neque illum perspiciatis quisquam deserunt dolorum, possimus necessitatibus perferendis adipisci. Quam eos modi nobis culpa.
			</p>
			<Link className="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-green-500 hover:text-green-500 ring-green-500" href="/deliver">
				Deliver
			</Link>
		</div>
	</div>
</div>
<div className="sm:flex items-center" id="about">
	<div className="flex-1">
		<img className="w-full h-auto" src="./image/fall-is-coming.svg" alt="" />
	</div>
	<div className="flex-1 m-4">
		<div className="p-4 border-2 rounded-xl bg-white transition duration-500 ease-in-out text-gray-600 hover:text-black hover:border-green-500">
			<h2 className="text-3xl mb-4 font-bold">
				About
			</h2>
			<p className="text-xl mb-4 font-semibold">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis minus omnis nulla, in nam et, unde illo asperiores quibusdam quaerat commodi a quisquam dicta repellat nisi earum assumenda beatae? Praesentium!
			</p>
			<a className="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-green-500 hover:text-green-500 ring-green-500" href="https://www.google.com/" target="_blank">
				{/* <!-- fontawesome google-brands --> */}
				<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
					<path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
				</svg>
			</a>
			<a className="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-gray-600 hover:text-gray-600 ring-gray-600" href="https://www.facebook.com/zummonSpace/" target="_blank">
				{/* <!-- fontawesome facebook-f-brands --> */}
				<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
					<path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
				</svg>
			</a>
			<a className="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-gray-600 hover:text-gray-600 ring-gray-600" href="https://twitter.com/" target="_blank">
				{/* <!-- fontawesome twitter-brands --> */}
				<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
				</svg>
			</a>
			<a className="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-gray-600 hover:text-gray-600 ring-gray-600" href="https://www.pinterest.com/" target="_blank">
				{/* <!-- fontawesome pinterest-p-brands --> */}
				<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
					<path fill="currentColor" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
				</svg>
			</a>
		</div>
	</div>
</div>
<div className="sm:flex items-center">
	<div className="flex-1 p-8">
		<h1 className="text-4xl mb-6 font-bold">
			Frequently asked questions
		</h1>
		<p className="text-xl mb-4 font-semibold text-gray-600">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ullam earum atque molestias dolores voluptatem veritatis placeat quibusdam reiciendis laudantium, officia, non nam, eaque mollitia omnis vel magnam commodi sequi?
		</p>
		<Link className="inline-block px-6 py-2 m-4 text-lg font-semibold rounded-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-gray-600 hover:text-gray-600 ring-gray-600" href="/faq">
			See More
		</Link>
	</div>
	<div className="flex-1">
		<img className="w-full h-auto" src="./image/deliveries.svg" alt="" />
	</div>
</div>
</>
}