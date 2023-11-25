import Button from '../../../utilities/Button';
import Input from '../../../utilities/Input';

export default function Header() {
  return (
    <header className='bg-color-#003580 text-white px-8 py-10 flex flex-col gap-6 relative'>
      <h2 className='font-bold text-3xl'>
        A lifetime of discounts? It&apos;s Genius.
      </h2>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <Button className='bg-[#0171c2] hover:bg-white hover:text-color-#003580 w-fit mb-16'>
        Sign in / Register
      </Button>
      <div className='flex justify-center items-center gap-4 w-[calc(100%-64px)] absolute left-0 bottom-0 translate-x-[32px] translate-y-1/2 border-2 border-amber-400 rounded-md p-2 bg-white'>
        <form action='' className='flex justify-between items-center'>
          <Input placeholder='Where are you going?' icon='fa-bed' />
          <Input placeholder='11/11/2023 to 11/11/2023' icon='fa-calendar' />
          <Input
            placeholder='2 adult &#183; 0 children &#183; 1 room'
            icon='fa-female'
          />
        </form>
        <button
          className='py-2 px-4 transition bg-[#0171c2] hover:bg-color-#003580'
          onClick={() => window.location.replace('/search')}
        >
          Search
        </button>
      </div>
    </header>
  );
}
