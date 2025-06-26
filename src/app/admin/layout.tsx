import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, Settings } from 'lucide-react';
import AdminSidebarMenu from './AdminSidebarMenu';

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
          <AdminSidebarMenu />
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
