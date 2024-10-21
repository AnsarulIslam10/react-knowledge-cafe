import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>

    </>
  )
}

export default App
