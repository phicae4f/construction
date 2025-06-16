import { AboutUsSection } from "../components/AboutUsSection"
import { ContactUsSection } from "../components/ContactUsSection"
import { HeroSection } from "../components/HeroSection"
import { SwiperSecondSection } from "../components/SwiperSecondSection"
import { SwiperSection } from "../components/SwiperSection"
import { SwiperThirdSection } from "../components/SwiperThirdSection"

export const MainPage = () => {
    return (
        <>
        {<HeroSection />}
        {<AboutUsSection />}
        {<SwiperSection />}
        {<SwiperSecondSection />}
        {<SwiperThirdSection />}
        {<ContactUsSection />}
        </>
    )
}