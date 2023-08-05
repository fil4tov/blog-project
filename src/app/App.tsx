import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => (
    <>
      <Navbar/>
      <main>
        <Sidebar/>
        <AppRouter/>
      </main>
    </>
)

export default App
