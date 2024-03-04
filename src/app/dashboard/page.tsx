"use client"

import DashboardSidebar from '@/components/DashboardSidebar';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const DashboardPage: React.FC = async () => {

    return (
        <MaxWidthWrapper>
            <div>
                <DashboardSidebar />
                {/* Le reste de votre page ici */}
                <h1>Dashboasasard</h1>
            </div>
        </MaxWidthWrapper>
    );
};

export default DashboardPage;
