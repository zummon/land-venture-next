import './globals.css';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });

export async function generateMetadata() {
	return {
		title:'Land Venture',
		desc:'Explore our curated selection of travel and adventure gear. Find top-rated backpacks, tents, apparel, and everything you need to conquer any journey. Shop now and get ready to roam!',}
};

export default function ({
  children,
}) {
  return (
    <html lang="en">
      <body className="">
				<div className={lexend.className}>
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
