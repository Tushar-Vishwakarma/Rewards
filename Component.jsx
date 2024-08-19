/**
 * By: Tushar Vishwakarma
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="bg-background shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CoinsIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Rewards</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              <CoinsIcon className="h-4 w-4 text-primary" />
              <span>1,234 Coins</span>
            </div>
            <Button variant="outline" size="icon">
              <BellIcon className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                    style={{ aspectRatio: "36/36", objectFit: "cover" }}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container mx-auto grid gap-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Your Coins</CardTitle>
                <CardDescription>Earn and redeem coins for premium features and content.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CoinsIcon className="h-8 w-8 text-primary" />
                  <span className="text-4xl font-bold">1,234</span>
                </div>
                <Button variant="outline">Earn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Referrals</CardTitle>
                <CardDescription>Invite friends and earn bonus coins.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <UsersIcon className="h-8 w-8 text-primary" />
                  <span className="text-4xl font-bold">12</span>
                </div>
                <Button variant="outline">Invite Friends</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Unlock special rewards for completing challenges.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-8 w-8 text-primary" />
                  <span className="text-4xl font-bold">8</span>
                </div>
                <Button variant="outline">View Achievements</Button>
              </CardContent>
            </Card>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Reward Shop</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <FilterIcon className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Button variant="outline" size="sm">
                  <ListOrderedIcon className="h-4 w-4" />
                  <span>Sort</span>
                </Button>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={200}
                    height={150}
                    alt="Exclusive Content"
                    className="rounded-t-lg"
                    style={{ aspectRatio: "200/150", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Exclusive Content</h3>
                      <p className="text-sm text-muted-foreground">Unlock premium content</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CoinsIcon className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold">500</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={200}
                    height={150}
                    alt="Custom Avatar"
                    className="rounded-t-lg"
                    style={{ aspectRatio: "200/150", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Custom Avatar</h3>
                      <p className="text-sm text-muted-foreground">Personalize your profile</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CoinsIcon className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold">200</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={200}
                    height={150}
                    alt="Premium Features"
                    className="rounded-t-lg"
                    style={{ aspectRatio: "200/150", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Premium Features</h3>
                      <p className="text-sm text-muted-foreground">Unlock special features</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CoinsIcon className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold">1,000</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={200}
                    height={150}
                    alt="Customization Pack"
                    className="rounded-t-lg"
                    style={{ aspectRatio: "200/150", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Customization Pack</h3>
                      <p className="text-sm text-muted-foreground">Customize your experience</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CoinsIcon className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold">300</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Redeem</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CoinsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  )
}


function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
