'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
 
export default function () {
  const pathname = usePathname()
	if (pathname != '/') {

		return <header className="p-4 text-center">
		<p className="font-semibold">
			Go back to <Link className="text-green-500" href="/">Home</Link> page.
		</p>
	</header>
	}
	 else {
		return <></>
	 }
}
