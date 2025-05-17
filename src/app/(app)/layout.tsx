import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/custom/AppSideBar"
import HeaderComponent from "@/components/custom/HeaderComponent"
import Breadcrumb from "@/components/custom/Breadcrumb"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full bg-background">
                <HeaderComponent />
                <Breadcrumb />
                {children}
            </main>
        </SidebarProvider>
    )
}