const filterResponse = (data: any, type: string) => {
  const element = data.data.cards.filter((item: any) => {
    return item.card.card.id === type;
  });
  const item = element?.[0]?.card?.card?.gridElements?.infoWithStyle || [];
  return { item };
};

export const homePageLayoutData = async () => {
  const response = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6078909&lng=77.3054884&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const allLayoutData = await response.json();

  const responsejson = [];

  const layoutBanner = filterResponse(allLayoutData, "topical_banner");
  const layoutCuisiones = filterResponse(allLayoutData, "whats_on_your_mind");
  const layoutBestRestaurant = filterResponse(
    allLayoutData,
    "top_brands_for_you"
  );
  const layoutAllRestaurant = filterResponse(
    allLayoutData,
    "restaurant_grid_listing"
  );

  if (layoutBanner?.item?.info?.length > 0) {
    const bannerJson: any = [];
    layoutBanner.item.info.map((item: any) => {
      bannerJson.push({
        imageId: item?.imageId,
        id: item?.id,
      });
    });
    responsejson.push({ banner: bannerJson });
  }

  if (layoutCuisiones?.item?.info?.length > 0) {
    const cuisionesJson: any = [];
    layoutCuisiones.item.info.map((item: any) => {
      cuisionesJson.push({
        imageId: item?.imageId,
        id: item?.id,
      });
    });
    responsejson.push({ bannerCuisiones: cuisionesJson });
  }

  if (layoutBestRestaurant?.item?.restaurants?.length > 0) {
    const bestRestaurantJson: any = [];
    layoutBestRestaurant.item.restaurants.map((item: any) => {
      bestRestaurantJson.push({
        id: item?.info?.id,
        name: item?.info?.name,
        cloudinaryImageId: item?.info?.cloudinaryImageId,
        cuisines: item?.info?.cuisines,
        avgRating: item?.info?.avgRating,
      });
    });
    responsejson.push({ bestDesktopRestaurant: bestRestaurantJson });
  }

  if (layoutAllRestaurant?.item?.restaurants?.length > 0) {
    const allRestaurantJson: any = [];
    layoutAllRestaurant.item.restaurants.map((item: any) => {
      allRestaurantJson.push({
        id: item?.info?.id,
        name: item?.info?.name,
        cloudinaryImageId: item?.info?.cloudinaryImageId,
        cuisines: item?.info?.cuisines,
        avgRating: item?.info?.avgRating,
        costForTwo: item?.info?.costForTwo,
        discountTextHeader: item?.info?.aggregatedDiscountInfoV2?.header,
        discountCouponCode:
          item?.info?.aggregatedDiscountInfoV2?.shortDescriptionList?.[0]?.meta,
        deliveryTime: item?.info?.sla?.slaString,
      });
    });
    responsejson.push({ allRestaurant: allRestaurantJson });
  }

  return responsejson;
};
