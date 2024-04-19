import logo from '../assets/logo.svg';
import book from '../assets/book.svg';
import search from '../assets/search.svg';

export default function Header() {

	return <header className='w-full h-[60%] border-b-2'>
		<nav className='w-full h-[15%] flex justify-between select-none'>
			<img className='box-content px-10 w-12' src={logo} alt="logo" />
			<div className='px-10 box-content w-28 h-full flex justify-between'>
				<img src={search} alt="search" />
				<img src={book} alt="book" />
			</div>
		</nav>
		<section className='h-[85%] bg-[#F5F5F5] relative' id='khan-section'>

		</section>
  </header>
}