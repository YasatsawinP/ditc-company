// TODO: replace with API call to GET /requirements and GET /requirements/:id

export type RequirementStatus = 'Approved' | 'Pending' | 'Rejected' | 'In Progress' | 'Testing' | null

export interface RequirementItem {
  id: string
  name: string
  company: string
  subject: string
  email: string
  phone: string
  date: string
  status: RequirementStatus
  message: string
}

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

export const mockRequirements: RequirementItem[] = [
  { id: '1', name: 'Natthida Tanorthong', company: 'Acme Manufacturing Co.', subject: 'Industrial Safety Training Request', email: 'hr@acme-mfg.com', phone: '090-000-000', date: '12/03/2025', status: null, message: LOREM },
  { id: '2', name: 'Natthida Tanorthong', company: 'Acme Manufacturing Co.', subject: 'Industrial Safety Training Request', email: 'hr@acme-mfg.com', phone: '090-000-000', date: '12/03/2025', status: null, message: LOREM },
  { id: '3', name: 'Natthida Tanorthong', company: 'Acme Manufacturing Co.', subject: 'Industrial Safety Training Request', email: 'hr@acme-mfg.com', phone: '090-000-000', date: '12/03/2025', status: 'Approved', message: LOREM },
  { id: '4', name: 'Natthida Tanorthong', company: 'Acme Manufacturing Co.', subject: 'Industrial Safety Training Request', email: 'hr@acme-mfg.com', phone: '090-000-000', date: '12/03/2025', status: 'Pending', message: LOREM },
  { id: '5', name: 'Natthida Tanorthong', company: 'Acme Manufacturing Co.', subject: 'Industrial Safety Training Request', email: 'hr@acme-mfg.com', phone: '090-000-000', date: '12/03/2025', status: 'Rejected', message: LOREM },
  { id: '6', name: 'Natthida Tanorthong', company: 'Acme Manufacturing Co.', subject: 'Industrial Safety Training Request', email: 'hr@acme-mfg.com', phone: '090-000-000', date: '12/03/2025', status: 'Pending', message: LOREM },
]
