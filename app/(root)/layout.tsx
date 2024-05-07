import Sidebar from "@/components/sidebar";
import MobileNav from "@/components/MobileNav";




export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const loggedIn = { firstName: 'Leanon', lastName: 'Brown' };

    return (
      <><main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
          
            <div>
              <MobileNav user={loggedIn} />
            </div>
          </div>
          {children}
        </div>
      </main></>
      
    );
  }