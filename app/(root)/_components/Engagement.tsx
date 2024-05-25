import Banner from '@/components/Banner';

const Engagement = () => {
  return (
    <>
      <section>
        <Banner
          imageMobile='/assets/images/categories/2024-Icons-HP-FWMH-SDR-Mobile.webp'
          imageDesktop='/assets/images/categories/2024-Icons-HP-FWMH-SDR-Desktop.webp'
          title='Love & Engagement'
          description="Tiffany & Co. engagement rings feature the world's finest
              diamonds and unparalleled craftsmanship—signatures of the House
              for almost two centuries."
          actionLabel='Explore Engagement Rings'
          actionLink='/'
          textSide='right'
          whiteText
        />
      </section>
      <section>
        <Banner
          imageMobile='/assets/images/categories/2021_Bloomgberg-HP_FWMH-Mobile.webp'
          imageDesktop='/assets/images/categories/2021_Bloomgberg-HP_FWMH-Desktop2.webp'
          title='From the Source'
          description="Handcrafting the world's best diamonds starts with knowing
          where they come from. We proudly trace 100% of our rough diamonds
          to known mines and sources."
          actionLabel="Follow Your Diamond's Journey"
          actionLink='/'
          textSide='left'
        />
      </section>
    </>
  );
};

export default Engagement;
