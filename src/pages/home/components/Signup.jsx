import Button from "../../../utilities/Button";
import Input from "../../../utilities/Input";
export default function SignUp() {
  return (
    <div className="flex flex-col items-center gap-6 px-2 py-16 text-white lg:px-0">
      <h2 className="text-4xl font-bold">Save time, save money!</h2>
      <p>Sign up and we&apos;ll send the best deals to you</p>
      <form action="" className="flex w-[420px] flex-col gap-2 md:flex-row">
        <Input
          type="email"
          placeholder="Your Email"
          className="rounded-md px-4 py-4 lg:w-full"
        />
        <Button
          type="submit"
          className="w-full rounded-md bg-[#0171c2] hover:bg-white hover:text-color-#003580 md:w-fit"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}
