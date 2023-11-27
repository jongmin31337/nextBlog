import Banner from '@/components/Banner'
import FeaturedPosts from '@/components/FeaturedPosts'
import PopularPosts from '@/components/PopularPosts'

export default function HomePage() {
  return (
    <>
    {/* <Hero /> */}
      <Banner />
      <PopularPosts />
      <FeaturedPosts />
    </>
  )
}
