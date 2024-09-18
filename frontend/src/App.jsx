// frontend/src/App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BubbleSort from './pages/BubbleSort';
import SelectionSort from './pages/SelectionSort';
import InsertionSort from './pages/InsertionSort';
import MergeSort from './pages/MergeSort';
import QuickSort from './pages/QuickSort';
import HeapSort from './pages/HeapSort';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 to-green-500">
      <Navigation /> 
      <main className="flex-grow w-full max-w-4xl px-4 py-6">
        <Routes>
          <Route path="/" element={<Navigate to="/bubble-sort" />} />
          <Route path="/bubble-sort" element={<BubbleSort />} />
          <Route path="/selection-sort" element={<SelectionSort />} />
          <Route path="/insertion-sort" element={<InsertionSort />} />
          <Route path="/merge-sort" element={<MergeSort />} />
          <Route path="/quick-sort" element={<QuickSort />} />
          <Route path="/heap-sort" element={<HeapSort />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  </Router>
);

export default App;
