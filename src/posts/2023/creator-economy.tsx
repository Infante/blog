import {stripIndents} from 'common-tags';
import {Post} from '../Post';

export class CreatorEconomy extends Post {
	public name = 'The creator economy';
	public date = new Date('October 9 2023');
	public slug = 'creator-economy';
	public keywords = ['Creator economy', 'Communities', 'Creators', 'Economy'];
	public hidden = true;
	public excerpt = stripIndents`	
        Creator economy
    `;

	render() {
		return (
			<>
				<h1>creator economy</h1>

				<p>...</p>
			</>
		);
	}
}
