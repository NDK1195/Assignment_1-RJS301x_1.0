import Button from "../../../utilities/Button";
import Input from "../../../utilities/Input";

export default function Header() {
  return (
    <header className="relative flex flex-col gap-6 bg-color-#003580 px-8 py-10 text-white">
      <h2 className="text-3xl font-bold">
        A lifetime of discounts? It&apos;s Genius.
      </h2>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <Button className="mb-16 w-fit bg-[#0171c2] hover:bg-white hover:text-color-#003580">
        Sign in / Register
      </Button>
      <div className="absolute bottom-0 left-0 flex w-[calc(100%-64px)] translate-x-[32px] translate-y-1/2 flex-col gap-4 rounded-md border-2 border-amber-400 bg-white p-2 md:flex-row md:items-center md:justify-center">
        <form action="" className="flex flex-col items-center md:flex-row">
          <Input placeholder="Where are you going?" icon="fa-bed" />
          <Input placeholder="11/11/2023 to 11/11/2023" icon="fa-calendar" />
          <Input
            placeholder="2 adult &#183; 0 children &#183; 1 room"
            icon="fa-female"
          />
        </form>
        <button
          className="bg-[#0171c2] px-4 py-2 transition hover:bg-color-#003580"
          onClick={() => window.location.replace("/search")}
        >
          Search
        </button>
      </div>
    </header>
  );
}
