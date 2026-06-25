// TODO: replace with API
export interface PersonnelDetail {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  profilePicture: string
  education: string[]
  skills: string[]
  expertise: string[]
}

export const mockPersonnelDetail: PersonnelDetail = {
  id: '1',
  firstName: 'Tama',
  lastName: 'Duangnamol',
  email: 'tama.d@cmu.ac.th',
  phone: '053 920 299',
  profilePicture: 'https://i.pravatar.cc/273?img=33',
  education: [
    'Bachelor of Science (B.Sc.) in Mathematics, Second Class Honours\nKhon Kaen University, 2005',
    'Degree of Master of Science in Applied Mathematics\nMahidol University, 2010',
    'Ph.D. in Knowledge Science\nJapan Advanced Institute of Science and Technology, 2018',
  ],
  skills: ['Training', 'Knowledge Management', 'AI'],
  expertise: [
    'Competency Based Learning',
    'Smart City Development',
    'Demand of Human Resource in Digital Economy',
    'Support for Metacognitive Skills Learning for Sustainable Learning',
    'Digital Transformation',
    'Discretion of Consuming Information in Online Media',
  ],
}

// TODO: replace with API
export interface PersonnelItem {
  id: string
  name: string
  faculty: string
  skills: string[]
  photo?: string
}

export const mockPersonnel: PersonnelItem[] = [
  { id: '1', name: 'Tama Duangnamol', faculty: 'Faculty: College of Arts, Media and Technology', skills: ['skill', 'skill', 'skill'] },
  { id: '2', name: 'Tama Duangnamol', faculty: 'Faculty: College of Arts, Media and Technology', skills: ['skill', 'skill', 'skill'] },
  { id: '3', name: 'Tama Duangnamol', faculty: 'Faculty: College of Arts, Media and Technology', skills: ['skill', 'skill', 'skill'] },
  { id: '4', name: 'Tama Duangnamol', faculty: 'Faculty: College of Arts, Media and Technology', skills: ['skill', 'skill', 'skill'] },
]
