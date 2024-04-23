import React, { useEffect, useMemo, useState } from 'react'
import AdminHeader from './Header'
import AdminSidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import AdminFooter from './Footer'
import { isMobile } from 'react-device-detect'
import useScreen from 'src/hooks/useScreen'

function AdminLayout() {
  const [open, setOpen] = useState(false)
  const moreThanSm = useScreen('sm')

  const showMenuTitle = useMemo(() => {
    if (moreThanSm) return true
    return open
  }, [moreThanSm, open])

  useEffect(() => {
    if (moreThanSm) {
      setOpen(false)
    }
  }, [moreThanSm])

  return (
    <>
      <AdminHeader className='sticky h-admin-header top-0 px-5 md:px-10 lg:px-20 xl:px-[100px] z-20' />
      <AdminSidebar
        showMenuTitle={showMenuTitle}
        onOpen={setOpen}
        className='fixed h-admin-content bottom-0 left-0 z-10'
      />
      <div className='flex min-h-admin-content pr-5 md:pr-10 lg:pr-20 xl:pr-[100px] overflow-hidden'>
        <AdminSidebar showMenuTitle={moreThanSm} className='h-admin-content invisible' />
        <div className='ml-5 md:ml-10 lg:ml-[60px] flex-auto w-1'>
          <Outlet />
          {isMobile && <AdminFooter />}
        </div>
      </div>
    </>
  )
}

export default AdminLayout
