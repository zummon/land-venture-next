import {products} from '../page'
export default function({params }){
	const product = products.find((item) => item.key==params.key)
	
	return <>
		<img className="mx-auto" src={product.imgSrc} alt="" />
	</>
}