import AppLayout from '@/components/layouts/app-layout/app-layout'
import React, { ReactElement } from 'react'

const AddStudentPage = () => {
  return (
    <section className=' w-full min-h-screen bg-white'>
      AddStudent
    </section>
  )
}

AddStudentPage.getLayout = (page:ReactElement) => {
  return <AppLayout pageName='Add New Student'>{page}</AppLayout>
}


export default AddStudentPage;