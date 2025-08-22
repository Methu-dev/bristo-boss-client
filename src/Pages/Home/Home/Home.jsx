
import Banner from '../Banner/Banner'
import BistroBoss from '../BistroBoss/BistroBoss'
import Cart from '../Cart/Cart'
import Category from '../Category/Category'
import Contact from '../Contact/Contact'
import Featured from '../Featured/Featured'
import PopularMenu from '../PopularMenu/PopularMenu'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Cart></Cart>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home
