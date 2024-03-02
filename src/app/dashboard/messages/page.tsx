import DashboardSidebar from '@/components/DashboardSidebar';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const Messages =  () => {

    return (
        <MaxWidthWrapper>
            <div className="flex h-screen w-full bg-gray-100">
                <DashboardSidebar />
                {/* Le reste de votre page ici */}
                <h1>Messages</h1>
            </div>
        </MaxWidthWrapper>
    );
};

export default Messages;
