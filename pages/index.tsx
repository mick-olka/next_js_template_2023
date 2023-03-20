import { HomePage } from '@/components/HomePage/HomePage'
import { MainLayout } from '@/containers/Layouts/MainLayout/MainLayout'
import { I_Person } from '@/utils/types'

interface I_Props {
  people: I_Person[]
}
const fetchPeopleList = async (): Promise<I_Person[]> => {
  const res = await fetch('http://localhost:3000/api/people')
  return await res.json()
}

export async function getServerSideProps(): Promise<{ props: I_Props }> {
  const data = await fetchPeopleList()
  return {
    props: { people: data },
  }
}

export default function Home({ people }: I_Props) {
  return (
    <MainLayout title='Home' description='Home page'>
      <HomePage list={people} />
    </MainLayout>
  )
}
