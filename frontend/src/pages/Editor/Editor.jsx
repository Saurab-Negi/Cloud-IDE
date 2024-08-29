import Sidebar from '../../components/Sidebar/Sidebar'
import Codebar from '../../components/Codebar/Codebar'

const Editor = () => {
  return (
    <div className='flex gap-2 items-center bg-gray-900'>
      <Sidebar />
      <Codebar />
    </div>
  )
}

export default Editor
