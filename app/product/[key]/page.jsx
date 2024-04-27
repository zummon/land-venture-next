import {products} from '../page'
export default function({params }){
	let product = products.find((item) => item.key==params.key)
	
	return <>
		<img className="mx-auto" src={product.imgSrc} alt="" />
	</>
}