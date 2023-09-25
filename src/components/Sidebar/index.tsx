import React from 'react';

import { NfteLogo } from '@/assets/logo';
import {
  AddUser,
  Bell,
  Dashboard,
  Logout,
  Message,
  Queries,
  Settings,
} from '@/icons';
import Link from 'next/link';
import NavItem from './NavItem';
import ActionItem from './ActionItem';

export default function Sidebar() {
  return (
    <div className="flex h-screen w-16 flex-shrink-0 flex-col items-center justify-between self-stretch bg-black py-4 text-white">
      <div className="flex flex-col items-center gap-8">
        <Link href="/">
          <NfteLogo />
        </Link>
        <div className="flex flex-col items-center gap-4">
          <NavItem href="/" inco={<Dashboard />} text="Dashboard" />
          <NavItem
            href="/queries"
            inco={<Queries />}
            text="Queries"
            indicator={5}
          />
          <NavItem
            href="/message"
            inco={<Message />}
            text="Message"
            indicator={2}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <ActionItem inco={<Bell />} indicator={5} />
        <ActionItem inco={<AddUser />} />
        <ActionItem inco={<Settings />} />
        <ActionItem inco={<Logout />} />
        <div className="flex h-6 w-6 flex-col items-center justify-center gap-2 rounded-full bg-orange">
          <p className="text-[10px] text-black">OK</p>
        </div>
      </div>
    </div>
  );
}
