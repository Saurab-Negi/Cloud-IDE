import Avatar from 'react-avatar'

const Client = ({username}) => {
  return (
    <div className='w-full flex justify-start items-center gap-4 mb-2'>
      <Avatar name={username.toString()} size={40} className='rounded-2xl' />
      <span>{username.toString()}</span>
    </div>
  )
}

export default Client
