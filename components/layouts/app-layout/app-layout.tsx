import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/sidebar';
import Spacer from '@/components/spacer/spacer';
import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full min-h-screen   bg-app bg-background bg-blend-lighten overflow-auto custom-scroller">
    <Sidebar.StudentSidebar />
    {/* sidebar width on desktop is 244px:15.25rem, the children wrapper div has a uniform pqdding of 24px:1.5rem */}
    <div className="lg:pl-[16.75rem] py-6 pr-6">
      <Header.StudentHeader />
      <Spacer size={24} />
      {children}
    </div>
  </section>
  )
}

export default AppLayout;