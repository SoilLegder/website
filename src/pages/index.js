
import React from 'react';
import Layout from '@/components/Layouts/Layout';
import Link from 'next/link';
import Hero from '@/components/Landing/Hero';
import IntroAndRoadmap from '@/components/Landing/Intro';

const HomePage = () => {
    return (
        <Layout pageTitle="Soil Ledger - Web3 Powered Agriculture">
            <Hero />
           <IntroAndRoadmap />
        </Layout>
    );
};


export default HomePage;
