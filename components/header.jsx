import { SignInButton,SignedOut, SignedIn,UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
<SignedOut>
    <SignInButton/>
</SignedOut>

   <SignedIn>
    <UserButton />
   </SignedIn>
    </div>
  )
}

export default Header;

