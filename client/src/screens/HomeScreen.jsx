import Post from '../components/Post'
import { useState, useEffect } from 'react'
import { useGetTimelineQuery } from '../slices/postApiSlice'

const HomeScreen = () => {
  const { data: timeline, refetch } = useGetTimelineQuery({})
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (timeline) {
      setPosts(timeline)
    }
  }, [timeline])

  // refetch posts when the component loads
  useEffect(() => {
    refetch()
  }, [refetch])

  const handlePostDeleted = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId))
  }

  return (
    <div className='mx-auto flex w-[896px] justify-center space-x-6 px-6 py-12'>
      <div className='w-[500px]'>
        <h1 className='mb-6 text-3xl font-bold'>Dashboard</h1>

        {/* <div className='my-6'>
          <NewPostForm />
        </div> */}

        {posts && (
          <div className='space-y-4'>
            {posts.map((post, index) => (
              <Post key={index} {...post} onPostDeleted={handlePostDeleted} />
            ))}
          </div>
        )}
      </div>
      {/* <div>
        <HomeSidebar />
      </div> */}
    </div>
  )
}

export default HomeScreen
