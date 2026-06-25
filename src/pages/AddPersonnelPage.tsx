import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Camera, X } from 'lucide-react'
import Navbar from '@/components/Navbar'

type TagField = 'education' | 'skill' | 'expertise'

function TagInput({
  tags,
  onAdd,
  onRemove,
  placeholder = 'Typing here...',
  tall = false,
}: {
  tags: string[]
  onAdd: (value: string) => void
  onRemove: (tag: string) => void
  placeholder?: string
  tall?: boolean
}) {
  const [input, setInput] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault()
      onAdd(input.trim())
      setInput('')
    }
  }

  return (
    <div
      ref={containerRef}
      onClick={() => containerRef.current?.querySelector('input')?.focus()}
      className={`border border-[#BDBDBD] rounded-lg px-3 py-2 flex flex-wrap gap-2 items-start cursor-text ${
        tall ? 'min-h-[215px] content-start' : 'h-[53px] items-center overflow-hidden'
      }`}
    >
      {tags.map((tag) => (
        <span
          key={tag + Math.random()}
          className="flex items-center gap-1 border border-gray-400 rounded-full px-3 py-1 text-sm text-secondary shrink-0"
        >
          {tag}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onRemove(tag) }}
            className="text-gray-400 hover:text-error leading-none"
          >
            <X size={12} />
          </button>
        </span>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="outline-none flex-1 min-w-[120px] text-sm bg-transparent font-sans"
      />
    </div>
  )
}

export default function AddPersonnelPage() {
  const navigate = useNavigate()

  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [educationTags, setEducationTags] = useState<string[]>(['Label'])
  const [skillTags, setSkillTags] = useState<string[]>(['Label', 'Label', 'Label'])
  const [expertiseTags, setExpertiseTags] = useState<string[]>(['Label'])

  function addTag(field: TagField, value: string) {
    if (field === 'education') setEducationTags((prev) => [...prev, value])
    if (field === 'skill') setSkillTags((prev) => [...prev, value])
    if (field === 'expertise') setExpertiseTags((prev) => [...prev, value])
  }

  function removeTag(field: TagField, tag: string) {
    if (field === 'education') setEducationTags((prev) => prev.filter((t) => t !== tag))
    if (field === 'skill') setSkillTags((prev) => prev.filter((t) => t !== tag))
    if (field === 'expertise') setExpertiseTags((prev) => prev.filter((t) => t !== tag))
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setPhotoPreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  function handleSave() {
    const formData = { firstName, lastName, email, phone, educationTags, skillTags, expertiseTags }
    console.log('// TODO: POST /personnel', formData)
  }

  const inputClass =
    'w-full h-[53px] px-4 border border-[#BDBDBD] rounded-lg bg-white text-sm outline-none focus:border-primary font-sans'
  const labelClass = 'text-sm font-semibold text-secondary mb-1 block font-sans'

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="px-14 py-8">
        {/* Back link */}
        <button
          onClick={() => navigate('/personnel')}
          className="text-sm text-secondary hover:text-primary transition-colors mb-2 font-sans"
        >
          ← Back to Personnel Management
        </button>

        {/* Page title */}
        <h1 className="font-bold text-2xl text-secondary mb-8">Add Personnel</h1>

        {/* Body */}
        <div className="flex gap-8 items-start">
          {/* Left — Photo Upload */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-[150px] h-[150px] border-2 border-dashed border-[#BDBDBD] rounded-lg bg-white flex items-center justify-center cursor-pointer overflow-hidden hover:bg-surface transition-colors"
            >
              {photoPreview ? (
                <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <Camera size={40} className="text-gray-400" />
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
            <span className="text-sm text-gray-500 text-center font-sans">Profile Picture</span>
          </div>

          {/* Right — Form */}
          <div className="flex flex-col gap-5 flex-1">
            {/* Row 1: First Name + Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: Email + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <div className="flex border border-[#BDBDBD] rounded-lg h-[53px] overflow-hidden focus-within:border-primary transition-colors">
                  <span className="px-3 flex items-center border-r border-[#BDBDBD] text-sm text-gray-500 font-sans bg-white shrink-0">
                    66+
                  </span>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-3 outline-none text-sm font-sans bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <label className={labelClass}>Education</label>
              <TagInput
                tags={educationTags}
                onAdd={(v) => addTag('education', v)}
                onRemove={(t) => removeTag('education', t)}
                tall
              />
            </div>

            {/* Skill */}
            <div>
              <label className={labelClass}>Skill</label>
              <TagInput
                tags={skillTags}
                onAdd={(v) => addTag('skill', v)}
                onRemove={(t) => removeTag('skill', t)}
                tall={false}
              />
            </div>

            {/* Expertise */}
            <div>
              <label className={labelClass}>Expertise</label>
              <TagInput
                tags={expertiseTags}
                onAdd={(v) => addTag('expertise', v)}
                onRemove={(t) => removeTag('expertise', t)}
                tall
              />
            </div>

            {/* Action Bar */}
            <div className="flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={() => navigate('/personnel')}
                className="border border-[#BDBDBD] bg-white text-gray-700 rounded-lg px-8 py-4 text-sm font-sans hover:bg-surface transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="bg-primary text-white rounded-lg px-8 py-4 text-sm font-semibold font-sans hover:bg-primary-hover transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
