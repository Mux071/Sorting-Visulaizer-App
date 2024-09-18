// frontend/src/components/Navigation.jsx
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="bg-yellow-500 p-4 text-black w-full font-semibold">
    <ul className="flex space-x-4 justify-center">
      <li><Link to="/bubble-sort" className="hover:underline">Bubble Sort</Link></li>
      <li><Link to="/selection-sort" className="hover:underline">Selection Sort</Link></li>
      <li><Link to="/insertion-sort" className="hover:underline">Insertion Sort</Link></li>
      <li><Link to="/merge-sort" className="hover:underline">Merge Sort</Link></li>
      <li><Link to="/quick-sort" className="hover:underline">Quick Sort</Link></li>
      <li><Link to="/heap-sort" className="hover:underline">Heap Sort</Link></li>
    </ul>
  </nav>
);

export default Navigation;
