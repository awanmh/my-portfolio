import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/main/Navbar';

function App() {
  return (
    // Tambahkan class untuk warna background dan teks
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      {/* ... komponen lainnya */}
    </div>
  )
}

export default App;
