import type {PageConfig} from 'next';
import Link from 'next/link';
import type {ReactNode} from 'react';
import {posts, sortPosts} from '../posts';
import {flatMap} from '../util/flat-map';

// Sweet zero js 🤑
export const config: PageConfig = {
	unstable_runtimeJS: false,
};

export default function Home() {
	return (
		<main className="space-y-8">
			<h2>
				<span>blog.robertoinfante.com</span>{' '}
				<a
					target="_blank"
					href="https://github.com/Infante"
					className="text-neutral-500 hover:text-blue-500"
					rel="noreferrer"
				>
					– github
				</a>{' '}
				<a
					target="_blank"
					href="https://twitter.com/liluzi"
					className="text-neutral-500 hover:text-blue-500"
					rel="noreferrer"
				>
					– twitter
				</a>
			</h2>

			<ul className="space-y-1 list-disc list-inside">
				{flatMap(sortPosts(posts), post => {
					if (post.hidden) {
						return [];
					}

					return [
						<BlogLink key={post.slug} href={`/${post.slug}`}>
							{post.name}
						</BlogLink>,
					];
				})}
			</ul>
		</main>
	);
}

function BlogLink(props: {href: string; children: ReactNode}) {
	return (
		<li className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-600">
			<Link href={props.href}>{props.children}</Link>
		</li>
	);
}
