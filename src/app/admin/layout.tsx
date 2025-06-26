import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  FileText,
  LayoutGrid,
  Settings,
  Shield,
  Trophy,
  User,
  Briefcase,
  Code,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar side="left" collapsible="icon" variant="sidebar">
        <SidebarHeader className="items-center justify-center text-center">
          <Button variant="ghost" asChild className="w-full">
            <Link href="/">
              <Code />
              <span className="group-data-[collapsible=icon]:hidden font-headline">
                Aalok Tomer
              </span>
            </Link>
          </Button>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                <Link href="/admin">
                  <LayoutGrid />
                  <span className="group-data-[collapsible=icon]:hidden">
                    Dashboard
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarGroup>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive
                  tooltip={{
                    children: 'About Section',
                    className: 'w-max',
                  }}
                >
                  <Link href="/admin/about">
                    <User />
                    <span className="group-data-[collapsible=icon]:hidden">
                      About Section
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  disabled
                  tooltip={{
                    children: 'Skills Section (Coming Soon)',
                    className: 'w-max',
                  }}
                >
                  <Link href="#">
                    <Shield />
                    <span className="group-data-[collapsible=icon]:hidden">
                      Skills Section
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
               <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  disabled
                  tooltip={{
                    children: 'Projects Section (Coming Soon)',
                    className: 'w-max',
                  }}
                >
                  <Link href="#">
                    <FileText />
                    <span className="group-data-[collapsible=icon]:hidden">
                      Projects Section
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  disabled
                  tooltip={{
                    children: 'Experience Section (Coming Soon)',
                    className: 'w-max',
                  }}
                >
                  <Link href="#">
                    <Briefcase />
                    <span className="group-data-[collapsible=icon]:hidden">
                      Experience Section
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
               <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  disabled
                  tooltip={{
                    children: 'Achievements Section (Coming Soon)',
                    className: 'w-max',
                  }}
                >
                  <Link href="#">
                    <Trophy />
                    <span className="group-data-[collapsible=icon]:hidden">
                      Achievements
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="bg-background min-h-screen">
        <header className="flex h-12 items-center justify-between border-b px-2 md:justify-end">
          <SidebarTrigger className="md:hidden" />
          <Button variant="ghost" size="icon" disabled>
            <Settings />
          </Button>
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
