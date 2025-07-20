'use client';
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
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import logo from '../../../public/assets/logo.svg';
import avatar from '../../../public/assets/avatar.png';
import Link from 'next/link';
import { ChevronsUpDown, ExternalLink } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-neutral-100">
        <div className="p-2 flex items-center justify-between">
          <Image src={logo} width={120} height={40} alt="Logo" />
          <ChevronsUpDown size={14} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-2 flex items-center gap-2.5">
            <Image
              src={avatar}
              width={40}
              height={40}
              alt="User"
              className="rounded-full"
              loading="lazy"
            />
            <div className="">
              <p className="text-sm font-medium text-neutral-900">Chenter PHAI</p>
              <Link href="/account" className="text-xs text-blue-500 flex items-center gap-1">
                <span>Open Profile</span>
                <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className={pathname === '/' ? 'c_active' : ''}>
                <SidebarMenuButton asChild>
                  <Link href={'/'}>
                    <Image
                      src={pathname === '/' ? '/assets/_dashboard.svg' : '/assets/dashboard.svg'}
                      width={16}
                      height={16}
                      alt="Dashboard"
                      loading="lazy"
                    />
                    Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className={pathname === '/transaction' ? 'c_active' : ''}>
                <SidebarMenuButton asChild>
                  <Link href={'/transaction'}>
                    <Image
                      src={
                        pathname === '/transaction'
                          ? '/assets/_transaction.svg'
                          : '/assets/transaction.svg'
                      }
                      width={16}
                      height={16}
                      alt="Dashboard"
                      loading="lazy"
                    />
                    Transaction
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
              <SidebarMenuItem className={pathname === '/user' ? 'c_active' : ''}>
                <SidebarMenuButton asChild>
                  <Link href={'/user'}>
                    <Image
                      src={pathname === '/user' ? '/assets/_user.svg' : '/assets/user.svg'}
                      alt="User"
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                    User
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className={pathname === '/page' ? 'c_active' : ''}>
                <SidebarMenuButton asChild>
                  <Link href={'/page'}>
                    <Image
                      src={pathname === '/page' ? '/assets/_page.svg' : '/assets/page.svg'}
                      alt="page"
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                    Page
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className={pathname === '/job' ? 'c_active' : ''}>
                <SidebarMenuButton asChild>
                  <Link href={'/job'}>
                    <Image
                      src={pathname === '/job' ? '/assets/_job.svg' : '/assets/job.svg'}
                      alt="job"
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                    Job
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className={pathname === '/plan' ? 'c_active' : ''}>
                <SidebarMenuButton asChild>
                  <Link href={'/plan'}>
                    <Image
                      src={pathname === '/plan' ? '/assets/_plan.svg' : '/assets/plan.svg'}
                      alt="plan"
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                    Plans
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Other</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <div className="cursor-pointer">
                        <Image
                          src={'/assets/setting.svg'}
                          alt="Configuration"
                          width={16}
                          height={16}
                          loading="lazy"
                        />
                        Configuration
                      </div>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem className={pathname === '/location' ? 'c_active' : ''}>
                        <SidebarMenuButton asChild>
                          <Link href={'/location'}>
                            <Image
                              src={
                                pathname === '/location'
                                  ? '/assets/_location.svg'
                                  : '/assets/location.svg'
                              }
                              alt="location"
                              width={16}
                              height={16}
                              loading="lazy"
                            />
                            Location
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem className={pathname === '/jobtype' ? 'c_active' : ''}>
                        <SidebarMenuButton asChild>
                          <Link href={'/jobtype'}>
                            <Image
                              src={
                                pathname === '/jobtype'
                                  ? '/assets/_vector.svg'
                                  : '/assets/vector.svg'
                              }
                              alt="Job type"
                              width={14}
                              height={14}
                              loading="lazy"
                            />
                            Job type
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem className={pathname === '/workspace' ? 'c_active' : ''}>
                        <SidebarMenuButton asChild>
                          <Link href={'/workspace'}>
                            <Image
                              src={
                                pathname === '/workspace'
                                  ? '/assets/_vector.svg'
                                  : '/assets/vector.svg'
                              }
                              alt="Job type"
                              width={14}
                              height={14}
                              loading="lazy"
                            />
                            Workspace
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem className={pathname === '/skill' ? 'c_active' : ''}>
                        <SidebarMenuButton asChild>
                          <Link href={'/skill'}>
                            <Image
                              src={
                                pathname === '/skill' ? '/assets/_vector.svg' : '/assets/vector.svg'
                              }
                              alt="Job type"
                              width={14}
                              height={14}
                              loading="lazy"
                            />
                            Skill
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>

                <SidebarMenuItem className={pathname === '/service' ? 'c_active' : ''}>
                  <SidebarMenuButton asChild>
                    <Link href={'/service'}>
                      <Image
                        src={
                          pathname === '/service' ? '/assets/_service.svg' : '/assets/service.svg'
                        }
                        alt="service"
                        width={16}
                        height={16}
                        loading="lazy"
                      />
                      Service
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className={pathname === '/documentation' ? 'c_active' : ''}>
                <SidebarMenuButton asChild>
                  <Link href={'/documentation'}>
                    <Image
                      src={
                        pathname === '/documentation'
                          ? '/assets/_documentation.svg'
                          : '/assets/documentation.svg'
                      }
                      alt="documentation"
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                    Documentation
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className={pathname === '/help' ? 'c_active' : ''}>
                <SidebarMenuButton asChild>
                  <Link href={'/help'}>
                    <Image
                      src={pathname === '/help' ? '/assets/_help.svg' : '/assets/help.svg'}
                      alt="help"
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                    Help Centre
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="bg-red-100 hover:bg-red-500 flex items-center justify-center text-red-500 font-medium hover:text-white">
                  Logout
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
