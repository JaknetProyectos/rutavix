"use client";

import { CoverageSection } from "@/components/CoverageSection";
import { CTACard } from "@/components/CTACard";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PagarCotizacion } from "@/components/PagarCotizacion";
import { WhyUsSection } from "@/components/WhyUsSection";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

export default function Experiences() {
    return (
        <>
            <Header />
            <ExperiencesSection />
            <PagarCotizacion/>
            <WhyUsSection/>
            <Footer />
        </>
    );
}
