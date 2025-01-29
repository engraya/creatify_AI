import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"
import { SignUp } from '@clerk/nextjs'
import Image from "next/image";
import { logoIcon } from "@/public/_static";
export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
}

export default function SignUpPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/sign-in"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center mt-4 ">
          <Image src={logoIcon} height={40} width={40} alt="logo" className="mx-auto mt-6 flex items-center justify-center" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <SignUp />
        </div>
      </div>
    </div>
  )
}
