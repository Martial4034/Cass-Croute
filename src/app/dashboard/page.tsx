"use client"

import DashboardSidebar from '@/components/DashboardSidebar';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Navbar from '@/components/Navbar';

const DashboardPage: React.FC = async () => {

    return (
        <MaxWidthWrapper>
            <div className="flex h-screen w-full bg-gray-100">
                <DashboardSidebar />
                {/* Le reste de votre page ici */}
                <h1>Dashboasasard</h1>
            </div>
        </MaxWidthWrapper>
    );
};

export default DashboardPage;
