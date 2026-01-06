import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function App() {
  return (
    <div className="min-h-screen p-6 grid gap-6 md:grid-cols-3">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  )
}

/* ---------------- 1. Feedback Form App ---------------- */
function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" })
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setSubmitted(form)
    setForm({ name: "", email: "", feedback: "" })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <Textarea name="feedback" placeholder="Your feedback" value={form.feedback} onChange={handleChange} />
        <Button onClick={handleSubmit}>Submit</Button>

        {submitted && (
          <div className="mt-4 text-sm">
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

/* ---------------- 2. Image Slideshow App ---------------- */
function ImageSlideshow() {
  const images = [
    "https://via.placeholder.com/300x180?text=Image+1",
    "https://via.placeholder.com/300x180?text=Image+2",
    "https://via.placeholder.com/300x180?text=Image+3",
  ]

  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % images.length)
  const prev = () => setIndex((index - 1 + images.length) % images.length)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-center">
        <img src={images[index]} alt="slide" className="mx-auto rounded-md" />

        <div className="flex justify-between">
          <Button variant="outline" onClick={prev}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </div>

        <Tabs value={String(index)} className="mt-2">
          <TabsList>
            {images.map((_, i) => (
              <TabsTrigger key={i} value={String(i)} onClick={() => setIndex(i)}>
                {i + 1}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  )
}

/* ---------------- 3. Todo List App ---------------- */
function TodoApp() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!todo.trim()) return
    setTodos([...todos, { text: todo, completed: false }])
    setTodo("")
  }

  const toggleTodo = (i) => {
    setTodos(
      todos.map((t, index) =>
        index === i ? { ...t, completed: !t.completed } : t
      )
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <Input placeholder="New todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <div className="space-y-2">
          {todos.map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <Checkbox checked={t.completed} onCheckedChange={() => toggleTodo(i)} />
              <span className={t.completed ? "line-through text-muted-foreground" : ""}>
                {t.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
