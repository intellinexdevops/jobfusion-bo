"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import logo from "../../../public/assets/logo.svg";
import sidebarroutes from "@/constants/SiderBarRoutes";
import Link from "next/link";
import { ChevronsUpDown } from "lucide-react"
import { usePathname } from "next/navigation";

export function AppSidebar() {
    const pathname = usePathname()
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="p-2 flex items-center justify-between">
                    <Image src={logo} width={120} height={40} alt="Logo" />
                    <ChevronsUpDown size={14} />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Overview</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>

                            <SidebarMenuItem className={pathname === "/" ? "c_active" : ""}>
                                <SidebarMenuButton asChild>
                                    <Link href={"#"} >
                                        <Image
                                            src={pathname === "/" ? "/assets/_dashboard.svg" : "/assets/dashboard.svg"}
                                            width={22}
                                            height={22}
                                            alt="Dashboard"
                                            loading="lazy"
                                        />
                                        Dashboard
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarroutes.map((item, index: number) => (
                                <SidebarMenuItem key={index} className={pathname === item.url ? "c_active" : ""}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} >
                                            <item.icon />
                                            {item.title}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}