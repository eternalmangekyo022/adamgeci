import logo from '../assets/logo.svg';
import book from '../assets/book.svg';
import search from '../assets/search.svg';

export default function Header() {

	return <header className='w-full h-[20%]'>
		<nav className='w-full h-[50%] flex justify-between select-none'>
			<img className='w-12 ml-10' src={logo} alt="logo" />
			<div className='w-40 mr-10 h-full flex justify-evenly'>
				<img src={search} alt="search" />
				<img src={book} alt="book" />
			</div>
		</nav>
		<section></section>
  </header>
}