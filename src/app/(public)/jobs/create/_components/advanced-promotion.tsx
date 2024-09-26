import AdvancedPromotionCard from './advanced-promotion-card';

export default function AdvancedPromotion() {
  return (
    <section className="flex flex-col gap-4 lg:gap-8">
      <h2 className="text-center text-base font-bold text-dark-nameWhite lg:text-4xl">
        Accelerate your recruitment through advanced promotion
      </h2>
      <AdvancedPromotionCard
        title="Hot jobs is the foundation"
        imagUrl="/assets/post-jobs/post-1.png"
        points={[
          'Offers with Hot Jobs average 2-3 times more views compared to offers with the basic package',
          'Offers with HotJobs have access to a talent database, where you can actively reach out to relevent users who are open to new job opportunities. The price for HotJobs is 2,749 CZK for 14 days, or 4,999 CZK for 30 days, per offer.',
        ]}
      />
      <AdvancedPromotionCard
        title="Hot jobs is the foundation"
        imagUrl="/assets/post-jobs/post-2.png"
        reverse
        points={[
          'Offers with Hot Jobs average 2-3 times more views compared to offers with the basic package',
          'Offers with HotJobs have access to a talent database, where you can actively reach out to relevent users who are open to new job opportunities. The price for HotJobs is 2,749 CZK for 14 days, or 4,999 CZK for 30 days, per offer.',
        ]}
      />
      <AdvancedPromotionCard
        title="With TOP3, you'll always be on top."
        imagUrl="/assets/post-jobs/post-3.png"
        points={[
          `Thanks to your offer being on one of the first three positions on every page, it won't escape the attention of any applicant.`,
        ]}
      />
      <AdvancedPromotionCard
        title="Be visible. Build your brand with SJ Ads"
        imagUrl="/assets/post-jobs/post-4.png"
        reverse
        points={[
          'Our banners, native advertising, and PR articles will get you in front of eyes of hundreds of thousand of our visitors',
          'You can use them for promoting ads, employer branding, and gaining new business contacts.',
        ]}
      />
    </section>
  );
}
