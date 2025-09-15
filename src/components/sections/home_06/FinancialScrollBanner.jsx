import Marquee from "./Marquee"
import { DollarSign, TrendingUp, Wallet, Coins, ChartNoAxesCombined } from "lucide-react"

export default function FinancialScrollBanner() {
  const financialTerms = [
    {
      icon1: <ChartNoAxesCombined className="w-6 h-6 md:w-8 md:h-8 inline-block mx-2" />,
      text: "Investment",
      icon2: <Wallet className="w-6 h-6 md:w-8 md:h-8 inline-block mx-2" />,
      text2: "Finance"
    },
    {
      icon1: <Wallet className="w-6 h-6 md:w-8 md:h-8 inline-block mx-2" />,
      text: "Finance",
      icon2: <ChartNoAxesCombined className="w-6 h-6 md:w-8 md:h-8 inline-block mx-2" />,
      text2: "Investment"
    }
  ]

  const renderContent = (term) => (
    <>
      {term.icon1}
      <span>{term.text}</span>
      {term.icon2}
      <span>{term.text2}</span>
    </>
  )

  return (
    <div className="overflow-hidden py-8 h-52 relative">
      {/* Dark green band */}
      <div className="bg-gradient-to-r from-[#086250] to-[#C6DD2C] absolute top-20 left-1/2 transform -translate-x-1/2 rotate-[3deg] w-full py-5">
        <Marquee
          texts={[renderContent(financialTerms[0])]}
          velocity={50}
          className="text-white text-2xl md:text-4xl font-bold flex items-center"
          numCopies={8}
          parallaxClassName="overflow-hidden"
          scrollerClassName="flex whitespace-nowrap items-center"
        />
      </div>

      {/* Bright yellow-green band */}
      <div className="bg-gradient-to-r from-[#93BD36] to-[#0D5C47] absolute top-20 left-1/2 transform -translate-x-1/2 rotate-[-3deg] w-full py-5">
        <Marquee
          texts={[renderContent(financialTerms[1])]}
          velocity={-50}
          className="text-white text-2xl md:text-4xl font-bold flex items-center"
          numCopies={8}
          parallaxClassName="overflow-hidden"
          scrollerClassName="flex whitespace-nowrap items-center"
        />
      </div>
    </div>
  )
}