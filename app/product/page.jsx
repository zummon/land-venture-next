
export const products = 
[
	{
		"key": "pack",
		"title":"Pack", "price": "699",
		"imgSrc": "https://i.imgur.com/EGGY56W.jpeg"
	},
	{
		"key": "tent",
		"title":"Tent", "price": "999",
		"imgSrc": "https://i.imgur.com/TQ7hJ6r.jpeg"
	},
	{
		"key": "tran",
		"title":"Transmitter", "price": "1,199",
		"imgSrc": "https://i.imgur.com/hS59Y6k.jpeg"
	},
	{
		"key": "marble",
		"title":"Marbled bottle", "price": "139",
		"imgSrc": "https://i.imgur.com/RSsjnWD.jpeg"
	},
	{
		"key": "back",
		"title":"Backpack", "price": "899",
		"imgSrc": "https://i.imgur.com/KQMv6m0.jpeg"
	},
	{
		"key": "bottle",
		"title":"Bottle", "price": "89",
		"imgSrc": "https://i.imgur.com/QW9rwVv.jpeg"
	}
];


export default function (){
	return <>
	<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-4 xl:px-16">
		{ products.forEach((item) => 
			<div className="">
				<div className="border-2 rounded-xl bg-white transition duration-500 ease-in-out text-gray-600 hover:text-black hover:border-green-500 overflow-clip">
					<img className="w-full h-auto block mb-4 aspect-square object-cover" src={item.imgSrc} alt=""/>
					<p className="text-xl px-4 mb-4 font-semibold">
						{item.title}
					</p>
					<a className="inline-block px-6 py-2 mr-4 text-lg font-semibold rounded-tr-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-green-500 hover:text-green-500 ring-green-500" href={`/deliver/${item.key}`}>
						{item.price}
					</a><a className="inline-block px-6 py-2 text-lg font-semibold rounded-t-xl transition duration-500 ease-in-out hover:bg-white text-white hover:ring-2 bg-gray-600 hover:text-gray-600 ring-gray-600" href={`/product/${item.key}`}>
						View
					</a>
				</div>
			</div>
		)}
	</div>
	</>
}
