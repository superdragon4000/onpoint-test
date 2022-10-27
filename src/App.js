import Carousel from "./components/Carousel/Carousel"
import SlideFirst from "./components/Slide-first/Slide-first"
import SlideSecond from "./components/Slide-second/Slide-second"
import SlideThird from "./components/slide-third/Slide-third"

const App = () => {
    return (
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
            <Carousel>
                <SlideFirst/>
                <SlideSecond/>
                <SlideThird/>
            </Carousel>
        </div>
    )
}

export default App
