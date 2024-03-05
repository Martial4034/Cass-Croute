import DashboardSidebar from '@/components/DashboardSidebar';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const Messages =  () => {

    return (
        <MaxWidthWrapper>
                <DashboardSidebar />
                {/* Le reste de votre page ici */}
                <h1>Mes avis</h1>
        </MaxWidthWrapper>
    );
};

export default Messages;
