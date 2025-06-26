'use client';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  FileText,
  LayoutGrid,
  Shield,
  Trophy,
  User,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/admin', icon: <LayoutGrid />, label: 'Dashboard', tooltip: 'Dashboard' },
  {
    isGroup: true,
    items: [
      { href: '/admin/about', icon: <User />, label: 'About Section', tooltip: 'About Section' },
      { href: '/admin/skills', icon: <Shield />, label: 'Skills Section', tooltip: 'Skills Section' },
      { href: '/admin/projects', icon: <FileText />, label: 'Projects Section', tooltip: 'Projects Section' },
      { href: '/admin/experience', icon: <Briefcase />, label: 'Experience Section', tooltip: 'Experience Section' },
      { href: '/admin/achievements', icon: <Trophy />, label: 'Achievements', tooltip: 'Achievements Section' },
    ]
  }
];


export default function AdminSidebarMenu() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {menuItems.map((item, index) => {
        if (item.isGroup) {
          return (
            <SidebarGroup key={index}>
              {item.items.map(subItem => (
                <SidebarMenuItem key={subItem.href}>
                  <SidebarMenuButton asChild isActive={pathname === subItem.href} tooltip={{ children: subItem.tooltip, className: 'w-max' }}>
                    <Link href={subItem.href}>
                      {subItem.icon}
                      <span className="group-data-[collapsible=icon]:hidden">{subItem.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarGroup>
          );
        }
        return (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={{children: item.tooltip}}>
              <Link href={item.href}>
                {item.icon}
                <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
