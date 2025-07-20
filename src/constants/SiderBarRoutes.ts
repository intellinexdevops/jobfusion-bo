import { Settings, User2, Building2, Briefcase } from 'lucide-react';

const sidebarroutes = [
  {
    title: 'Users',
    url: '/user',
    icon: User2,
  },
  {
    title: 'Pages',
    url: '/page',
    icon: Building2,
  },
  {
    title: 'Jobs',
    url: '/job',
    icon: Briefcase,
  },
  {
    title: 'Plans',
    url: '/settings',
    icon: Settings,
  },
];

export default sidebarroutes;
