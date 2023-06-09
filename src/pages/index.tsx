import Header from "@/components/Header"
import AccountSection from "@/components/Sections/AccountSection"
import BenefitsSection from "@/components/Sections/BenefitsSection"
import FormSection from "@/components/Sections/FormSection"
import ListSection from "@/components/Sections/ListSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header/>
      <FormSection/>
      <ListSection/>
      <BenefitsSection/>
      <AccountSection/>
      <Footer/>
    </>
  )
}
