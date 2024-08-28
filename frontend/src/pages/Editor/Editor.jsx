import Sidebar from '../../components/Sidebar/Sidebar'
import Codebar from '../../components/Codebar/Codebar'

const Editor = () => {
  return (
    <div className='flex gap-8 items-center'>
      <Sidebar />
      <Codebar />
    </div>
  )
}

export default Editor
