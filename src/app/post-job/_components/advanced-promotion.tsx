import AdvancedPromotionCard from "./advanced-promotion-card";

export default function AdvancedPromotion() {
  return (
    <section className="flex flex-col gap-4 lg:gap-8">
      <h2 className="text-base text-gray-700 text-center font-bold mb-4">
        Accelerate your recruitment through advanced promotion
      </h2>
      <AdvancedPromotionCard
        title="Hot jobs is the foundation"
        imagUrl="/assets/post-jobs/post-1.png"
        points={[
          "Offers with Hot Jobs average 2-3 times more views compared to offers with the basic package",
          "Offers with HotJobs have access to a talent database, where you can actively reach out to relevent users who are open to new job opportunities. The price for HotJobs is 2,749 CZK for 14 days, or 4,999 CZK for 30 days, per offer.",
        ]}
      />
      <AdvancedPromotionCard
        title="Hot jobs is the foundation"
        imagUrl="/assets/post-jobs/post-1.png"
        points={[
          "Offers with Hot Jobs average 2-3 times more views compared to offers with the basic package",
          "Offers with HotJobs have access to a talent database, where you can actively reach out to relevent users who are open to new job opportunities. The price for HotJobs is 2,749 CZK for 14 days, or 4,999 CZK for 30 days, per offer.",
        ]}
      />
    </section>
  );
}
