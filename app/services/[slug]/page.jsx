import Error from "@/components/Error/Error";
import InnerBanner from "@/components/InnerBanner";
import InnerServiceDetail from "@/components/ServiceDetail/InnerServiceDetail";
import { services } from "@/data/servicesData";

export default function ServiceDetailPage({ params }) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) return <Error />;

    return (
        <>
            <InnerBanner title={service.title} />
            <InnerServiceDetail service={service} allServices={services} />
        </>
    );
}
