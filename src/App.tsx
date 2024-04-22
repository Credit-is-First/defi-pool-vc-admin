import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'

import AdminLayout from './layouts'
import PoolCollectionPage from './pages/PoolCollection'
import UpcomingProjectPage from './pages/UpcomingProject'
import BlogPage from './pages/Blog'
import StatisticsPage from './pages/Statistics'
import PublishedProject from './pages/PublishedProject'
import Project from './pages/Project'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AdminLayout />}>
        <Route path='/' element={<Navigate to={'/pool-collection'} />} />
        <Route path='/pool-collection' element={<PoolCollectionPage />} />
        <Route path='/upcoming-projects' element={<UpcomingProjectPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/statistics' element={<StatisticsPage />} />
        <Route path='/published-projects' element={<PublishedProject />} />
        <Route path='/published-projects/project' element={<Project />} />
      </Route>
    </Routes>
  )
}

export default App
