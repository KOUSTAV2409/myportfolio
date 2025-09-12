'use client'
import { motion } from 'motion/react'
import { InteractiveCode } from '@/components/ui/interactive-code'
import { AlgorithmViz } from '@/components/ui/algorithm-viz'

interface BlogPostTemplateProps {
  title: string
  content: React.ReactNode
  codeExamples?: Array<{
    title: string
    language: string
    code: string
    output?: string
    demo?: React.ReactNode
  }>
  algorithmDemo?: {
    title: string
    description: string
    data: number[]
    algorithm: 'bubble' | 'binary-search' | 'tree-traversal'
  }
}

export function BlogPostTemplate({ 
  title, 
  content, 
  codeExamples = [], 
  algorithmDemo 
}: BlogPostTemplateProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          {title}
        </h1>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {content}
      </div>

      {/* Interactive Code Examples */}
      {codeExamples.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Code Examples
          </h2>
          {codeExamples.map((example, index) => (
            <InteractiveCode
              key={index}
              title={example.title}
              language={example.language}
              code={example.code}
              output={example.output}
              demo={example.demo}
            />
          ))}
        </section>
      )}

      {/* Algorithm Visualization */}
      {algorithmDemo && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Interactive Visualization
          </h2>
          <AlgorithmViz
            title={algorithmDemo.title}
            description={algorithmDemo.description}
            data={algorithmDemo.data}
            algorithm={algorithmDemo.algorithm}
          />
        </section>
      )}
    </motion.article>
  )
}
