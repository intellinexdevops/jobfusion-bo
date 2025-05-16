import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/custom/AppSideBar"
import HeaderComponent from "@/components/custom/HeaderComponent"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full bg-background">
                <HeaderComponent />
                {children}
            </main>
        </SidebarProvider>
    )
}