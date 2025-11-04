import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RotatingImageStrip from "@/components/RotatingImageStrip";
// import HeroSection from "@/components/HeroSection";
// import WhatIsOkox from "@/components/WhatIsOkox";
import Footer from "@/components/Footer";
import WhatIsOkox from "@/components/WhatIsOkox";
import Tokenomics from "@/components/Tokenomics";
import HowToBridge from "@/components/HowToBridge";
import HowToBridgeDesktop from "@/components/HowToBridgeDesktop";
import CommunityTimeline from "@/components/CommunityTimeline";
import "../styles/HowToBridge.scss";
import "../styles/CommunityTimeline.scss";
import "./globals.scss";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatIsOkox />
      <Tokenomics />
      <div className="how-to-bridge-section">
        <HowToBridge /> 
        <HowToBridgeDesktop />
      </div>
      <CommunityTimeline />
      
      <Footer />
    </>
  );
}
