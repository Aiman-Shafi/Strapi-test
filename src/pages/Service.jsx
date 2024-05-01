import PricingCard from "../components/PricingCard";
import useFetch from "../hooks/useFetch";

export default function Service() {
  const { data: services, loading } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/services?populate=*`
  );

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <header className="h-[300px] text-center flex items-center justify-center bg-indigo-100">
        <h2 className="text-indigo-500 text-6xl font-bold">Explore Services</h2>
      </header>

      <div className="max-w-[1170px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          {services.length ? (
            services.map((service) => (
              <PricingCard key={service.id} service={service} />
            ))
          ) : (
            <h2 className="text-4xl py-10 text-indigo-500 text-center">
              No Service Available!
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
