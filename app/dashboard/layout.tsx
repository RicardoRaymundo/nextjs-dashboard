import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      <p className="absolute bottom-0 right-0 p-4 text-xs text-gray-500">
        &copy; 2024 Acme Inc. All rights reserved.
      </p>
    </div>
  );
}