import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import LoginPage from '@/pages/LoginPage'
import DashboardPage from '@/pages/DashboardPage'
import RequirementPage from '@/pages/RequirementPage'
import RequirementDetailPage from '@/pages/RequirementDetailPage'
import PersonnelPage from '@/pages/PersonnelPage'
import AddPersonnelPage from '@/pages/AddPersonnelPage'
import PersonnelEditPage from '@/pages/PersonnelEditPage'
import Navbar from '@/components/Navbar'

// TODO: replace with Firebase Auth when backend is ready
function ProtectedRoute() {
  const authed = localStorage.getItem('mock_authed') === 'true'
  if (!authed) return <Navigate to="/" replace />
  return <Outlet />
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      <div className="p-8">
        <h1 className="text-[28px] font-semibold text-secondary">{title}</h1>
        <p className="text-secondary/60 mt-2 text-sm">Page coming soon</p>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/requirement', element: <RequirementPage /> },
      { path: '/requirement/:id', element: <RequirementDetailPage /> },
      { path: '/personnel', element: <PersonnelPage /> },
      { path: '/personnel/add', element: <AddPersonnelPage /> },
      { path: '/personnel/:id', element: <PersonnelEditPage /> },
      { path: '/course', element: <PlaceholderPage title="Course Management" /> },
      { path: '/wil', element: <PlaceholderPage title="WIL" /> },
    ],
  },
])

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
