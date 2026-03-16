import { useEffect, useState } from 'react'
import Dashboard from '@/pages/Dashboard'
import Group from '@/pages/Group'
import Login from '@/pages/Login'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const navigate = (nextPath) => {
    if (nextPath === window.location.pathname) {
      return
    }

    window.history.pushState({}, '', nextPath)
    setPathname(nextPath)
  }

  if (pathname === '/dashboard' || pathname === '/dashboard/') {
    return <Dashboard pathname="/dashboard" onNavigate={navigate} />
  }

  if (pathname === '/dashboard/group' || pathname === '/dashboard/group/') {
    return <Group pathname="/dashboard/group" onNavigate={navigate} />
  }

  return <Login onSignIn={() => navigate('/dashboard')} />
}

export default App
