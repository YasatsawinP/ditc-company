import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { CheckCircle2, CornerUpLeft, Plus, Send, X } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { mockRequirements } from '@/features/requirement/data'

interface FieldProps {
  label: string
  value: string
}

function ReadOnlyField({ label, value }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-secondary">{label}</label>
      <input
        readOnly
        value={value}
        className="w-full h-[53px] border border-[#BDBDBD] rounded-soft px-4 bg-white text-secondary text-sm font-sans outline-none"
      />
    </div>
  )
}

function SuccessToast({ onClose }: { onClose: () => void }) {
  return createPortal(
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-4 px-5 py-4 rounded-soft"
      style={{
        width: 320,
        height: 94,
        backgroundColor: '#0B980B',
        boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.12)',
      }}
    >
      <CheckCircle2 className="shrink-0 text-white" size={32} />

      <div className="flex flex-col flex-1 min-w-0">
        <span className="font-bold text-base text-white font-sans leading-tight">Message sent</span>
        <span className="font-normal text-xs text-white font-sans mt-0.5">
          Your message has been sent successfully.
        </span>
      </div>

      <button onClick={onClose} className="shrink-0 self-start">
        <X className="text-white" size={16} />
      </button>
    </div>,
    document.body
  )
}

export default function RequirementDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  // TODO: replace with API call to GET /requirements/:id
  const item = mockRequirements.find((r) => r.id === id)

  const [isReplying, setIsReplying] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (!showToast) return
    const timer = setTimeout(() => setShowToast(false), 4000)
    return () => clearTimeout(timer)
  }, [showToast])

  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="px-14 py-8">
          <p className="text-secondary text-sm">Requirement not found.</p>
        </div>
      </div>
    )
  }

  function handleSend() {
    // TODO: POST /requirements/:id/reply
    console.log('Send', replyText)
    setIsReplying(false)
    setReplyText('')
    setShowToast(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="px-14 py-8">
        {/* Back link + Title */}
        <button
          onClick={() => navigate('/requirement')}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-secondary transition-colors cursor-pointer"
        >
          ← Back to Requirement
        </button>
        <h1 className="font-bold text-2xl text-secondary mt-1">Requirement User</h1>

        {/* Form — 2-column grid */}
        <div className="grid grid-cols-2 gap-x-16 mt-8">
          {/* Left column — unchanged in both states */}
          <div className="flex flex-col gap-5">
            <ReadOnlyField label="Name" value={item.name} />
            <ReadOnlyField label="Email" value={item.email} />
            <ReadOnlyField label="Phone" value={item.phone} />
            <ReadOnlyField label="Subject" value={item.subject} />
          </div>

          {/* Right column */}
          {isReplying ? (
            <div className="flex flex-col gap-4">
              {/* Message — read-only, shorter */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-secondary mb-1">Message</label>
                <textarea
                  readOnly
                  value={item.message}
                  className="w-full min-h-[180px] border border-[#BDBDBD] rounded-soft p-4 bg-white text-secondary text-sm font-sans outline-none resize-y"
                />
              </div>

              {/* Reply box */}
              <div className="flex flex-col border border-[#BDBDBD] rounded-soft overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-1.5 px-4 py-2 border-b border-[#BDBDBD]">
                  <CornerUpLeft className="size-4 text-[#9D9672]" />
                  <span className="text-sm font-medium text-[#9D9672]">{item.email}</span>
                </div>

                {/* Editable textarea */}
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply here..."
                  className="w-full flex-1 min-h-[160px] p-4 text-sm text-secondary font-sans resize-none border-0 outline-none bg-white"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-secondary mb-1">Message</label>
              <textarea
                readOnly
                value={item.message}
                className="w-full min-h-[300px] border border-[#BDBDBD] rounded-soft p-4 bg-white text-secondary text-sm font-sans outline-none resize-y"
              />
            </div>
          )}
        </div>

        {/* Action bar */}
        <div className="flex items-center justify-between mt-6">
          {isReplying ? (
            <>
              {/* Left: Add Course + Add Survey */}
              <div className="flex gap-3">
                <button
                  onClick={() => console.log('Add Course')}
                  className="flex items-center gap-2 bg-primary text-white font-semibold text-sm rounded-soft px-8 py-4 hover:bg-primary-hover transition-colors"
                >
                  <Plus size={16} />
                  Add Course
                </button>
                <button
                  onClick={() => console.log('Add Survey')}
                  className="flex items-center gap-2 bg-primary text-white font-semibold text-sm rounded-soft px-8 py-4 hover:bg-primary-hover transition-colors"
                >
                  <Plus size={16} />
                  Add Survey
                </button>
              </div>

              {/* Right: Send */}
              <button
                onClick={handleSend}
                className="flex items-center gap-2 bg-primary text-white font-semibold text-sm rounded-soft px-8 py-4 hover:bg-primary-hover transition-colors"
              >
                Send
                <Send size={16} />
              </button>
            </>
          ) : (
            <>
              {/* Spacer so Reply sits on the right */}
              <div />
              <button
                onClick={() => setIsReplying(true)}
                className="flex items-center gap-2 bg-primary text-white font-semibold text-sm rounded-soft px-8 py-4 hover:bg-primary-hover transition-colors"
              >
                <CornerUpLeft size={18} />
                Reply
              </button>
            </>
          )}
        </div>
      </div>

      {showToast && <SuccessToast onClose={() => setShowToast(false)} />}
    </div>
  )
}
