import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarCheck, FaTelegram, FaMap, FaPhoneAlt } from 'react-icons/fa'
// import { Icon32LogoVkColor } from '@vkontakte/icons'
import { IoLogoWhatsapp } from 'react-icons/io'

const Menu = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.1,
			},
		},
	}
	const item = {
		hidden: { opacity: 0, y: 100 },
		show: { opacity: 1, y: 0 },
	}
	return (
		<motion.ol variants={container} initial='hidden' animate='show'>
			<div className='mt-5 mb-8'>
				{/* <a
					className='links'
					href='https://vk.com/ava_maria_ufa'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>
						<Icon32LogoVkColor className='icon' />
						Группа Вконтакте
						<FaGifts className='icon ml-2 text-red-600 animate-bounce' />
					</button>
				</a> */}
				{/* <a
					className='links'
					href='https://vk.com/sony_xiaomi_irk'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>Instagram*</button>
				</a> */}
				<motion.li variants={item}>
					<a
						className='links'
						href='https://n870576.yclients.com/'
						rel='noreferrer'
						target='_blank'
					>
						<button className='buttons'>
							<FaCalendarCheck className='icon text-slate-700' />
							Записаться на прием
						</button>
					</a>
				</motion.li>
				<motion.li variants={item}>
					<a
						className='links'
						href='https://t.me/amo_maria_ufa'
						rel='noreferrer'
						target='_blank'
					>
						<button className='buttons'>
							<FaTelegram className='icon text-blue-500' />
							Написать в Telegram
						</button>
					</a>
				</motion.li>
				<motion.li variants={item}>
					<a
						className='links'
						href='https://wa.me/+79871356790'
						rel='noreferrer'
						target='_blank'
					>
						<button className='buttons'>
							<IoLogoWhatsapp className='icon text-green-400' />
							Написать в Whats'Up
						</button>
					</a>
				</motion.li>
				<motion.li variants={item}>
					<a
						className='links'
						href='https://yandex.ru/maps/-/CCUCU8aP1A'
						rel='noreferrer'
						target='_blank'
					>
						<button className='buttons'>
							<FaMap className='icon text-red-600' />
							Яндекс Карты
						</button>
					</a>
				</motion.li>
				<motion.li variants={item}>
					<a
						className='links'
						href='tel:+79871356790'
						rel='noreferrer'
						target='_blank'
					>
						<button className='buttons'>
							<FaPhoneAlt className='icon text-slate-800' />
							Позвонить
						</button>
					</a>
				</motion.li>
			</div>
			{/* <div className='mx-auto text-center px-5 font-light text-slate-500'>
				ООО «Вега» 664011, г.Иркутск, ул.Карла Маркса, д.39 ИНН 3808114364 ОГРН
				1043801065978
			</div> */}
			{/* <div className='mx-auto text-center'>
				* принадлежит компании Meta, признанной в России экстремистской
				организацией
			</div> */}
		</motion.ol>
	)
}

export default Menu