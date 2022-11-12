import React from 'react';
import { aboutUs } from '../../data/aboutUs';
import AboutUsCard from '../AboutUsCard';
import s from './index.module.css';

export default function AboutUs() {
	return (
		<section className={['wrapper', s.about_us_aection].join(' ')}>
			<div>
				<p className='subheader'>О нас</p>
				<h2>
					Компания <span className={s.accent}>ИвановПром</span>
				</h2>
				<p className={s.about_us_info}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eum,
					mollitia consequatur distinctio provident recusandae quaerat corporis
					doloremque omnis eius, in nemo. Soluta sed quibusdam, hic suscipit
					eveniet molestiae officiis.
				</p>
			</div>
			<div className={s.about_us_cards}>
				{aboutUs.map((el) => (
					<AboutUsCard key={el.id} {...el} />
				))}
			</div>
		</section>
	);
}
