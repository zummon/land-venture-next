import './globals.css';
import { Lexend } from 'next/font/google';
import Header from './Header'

const lexend = Lexend({ subsets: ['latin'] });

export async function generateMetadata() {
	let title='Land Venture'
	return {
		title:{ template: `%s | ${title}`,default: title},
		desc:'Explore our curated selection of travel and adventure gear. Find top-rated backpacks, tents, apparel, and everything you need to conquer any journey. Shop now and get ready to roam!',}
};

export default function ({
  children,
}) {
  return (
    <html lang="en">
      <body className="">
				<div className={lexend.className}>
					<Header></Header>
					{children}
					<footer className="p-8 text-center">
						<p className="font-semibold">
							Made by <a className="text-green-500" href="https://www.zummon.page/" target="_blank">zummon</a> (Teerapat Anantarattanachai)
						</p>
					</footer>
				</div>
			</body>
    </html>
  );
}
