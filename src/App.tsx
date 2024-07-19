import Background from './components/Background';
import Hero from './components/Hero';
import Instructor from './components/Instructor';
import Navigation from './components/Navigation';
import PopularCourses from './components/PopularCourses';
import SearchCourses from './components/SearchCourses';

function App() {
  return (
    <>
      <div>
        <Navigation />
        <Hero/>
        <SearchCourses/>
        <PopularCourses/>
        <Instructor/>
        <Background/>
      </div>
    </>
  );
}

export default App;
