'use client'
import { motion } from 'motion/react'
import { AlgorithmViz } from '@/components/ui/algorithm-viz'
import { InteractiveCode } from '@/components/ui/interactive-code'

const DEMO_ALGORITHMS = [
  {
    title: 'Bubble Sort Visualization',
    description: 'Watch how bubble sort compares and swaps elements step by step',
    data: [64, 34, 25, 12, 22, 11, 90],
    algorithm: 'bubble' as const
  }
]

const CODE_EXAMPLES = [
  {
    title: 'Binary Search Implementation',
    language: 'typescript',
    code: `function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1; // Not found
}`,
    output: `binarySearch([1, 3, 5, 7, 9, 11], 7) // Returns: 3
binarySearch([1, 3, 5, 7, 9, 11], 4) // Returns: -1`,
    demo: (
      <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Time Complexity: O(log n) | Space Complexity: O(1)
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
            Efficient for sorted arrays
          </span>
        </div>
      </div>
    )
  },
  {
    title: 'React Custom Hook Pattern',
    language: 'typescript',
    code: `function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}`,
    output: `const [name, setName] = useLocalStorage('name', 'John');
// Automatically syncs with localStorage`,
    demo: (
      <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Reusable hook for localStorage state management
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
            Type-safe
          </span>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">
            Error handling
          </span>
        </div>
      </div>
    )
  }
]

export function CSConceptsShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-black dark:text-white text-lg font-medium mb-2">
          Interactive CS Concepts
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Explore algorithms and data structures through interactive visualizations
        </p>
      </div>

      {/* Algorithm Visualizations */}
      <div className="space-y-6">
        {DEMO_ALGORITHMS.map((algo, index) => (
          <AlgorithmViz
            key={index}
            title={algo.title}
            description={algo.description}
            data={algo.data}
            algorithm={algo.algorithm}
          />
        ))}
      </div>

      {/* Interactive Code Examples */}
      <div className="space-y-6">
        <h4 className="text-black dark:text-white font-medium">
          Code Examples & Patterns
        </h4>
        <div className="grid gap-6">
          {CODE_EXAMPLES.map((example, index) => (
            <InteractiveCode
              key={index}
              title={example.title}
              language={example.language}
              code={example.code}
              output={example.output}
              demo={example.demo}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
